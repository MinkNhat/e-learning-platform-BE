import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { Permission, PermissionDocument } from 'src/modules/permissions/schemas/permission.schema';
import { Role, RoleDocument } from 'src/modules/roles/schemas/role.schema';
import { User, UserDocument } from 'src/modules/users/schemas/user.schema';
import { UsersService } from 'src/modules/users/users.service';
import { INIT_PERMISSIONS } from './sample';
import { RoleName } from 'src/core/enums/roles.enum';

@Injectable()
export class DatabasesService implements OnModuleInit {
    private readonly logger = new Logger(DatabasesService.name);

    constructor(
        @InjectModel(User.name) private userModel: SoftDeleteModel<UserDocument>,
        @InjectModel(Role.name) private roleModel: SoftDeleteModel<RoleDocument>,
        @InjectModel(Permission.name) private permissionModel: SoftDeleteModel<PermissionDocument>,
        private configService: ConfigService,
        private usersService: UsersService,
    ) {}

    async onModuleInit() {
        const isInit = this.configService.get<string>("SHOULD_INIT");
        if (Boolean(isInit)) {

            const countUser = await this.userModel.count({});
            const countPermission = await this.permissionModel.count({});
            const countRole = await this.roleModel.count({});

            //create permissions
            if (countPermission === 0) {
                await this.permissionModel.insertMany(INIT_PERMISSIONS);
            }

            // create roles
            if (countRole === 0) {
                const permissions = await this.permissionModel.find({}).select("_id");
                await this.roleModel.insertMany([
                    {
                        name: RoleName.ADMIN,
                        description: "Admin with full permissions",
                        isActive: true,
                        permissions: permissions
                    },
                    {
                        name: RoleName.USER,
                        description: "Normal user",
                        isActive: true,
                        permissions: []
                    }
                ]);
            }

            // create users
            if (countUser === 0) {
                const adminRole = await this.roleModel.findOne({ name: RoleName.ADMIN });
                const userRole = await this.roleModel.findOne({ name: RoleName.USER })
                await this.userModel.insertMany([
                    {
                        name: "Super Admin",
                        email: "admin@gmail.com",
                        password: this.usersService.getHashPassword(this.configService.get<string>("INIT_PASSWORD")),
                        role: adminRole?._id
                    },
                    {
                        name: "User Guest",
                        email: "user@gmail.com",
                        password: this.usersService.getHashPassword(this.configService.get<string>("INIT_PASSWORD")),
                        role: userRole?._id
                    },
                ])
            }

            if (countUser > 0 && countRole > 0 && countPermission > 0) {
                this.logger.log('>>> ALREADY INIT SAMPLE DATA...');
            }
        }
    }
}
