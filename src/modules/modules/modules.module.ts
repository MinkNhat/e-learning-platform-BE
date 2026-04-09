import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ModulesService } from './modules.service';
import { ModulesController } from './modules.controller';
import { Module as ModuleSchema, ModuleSchema as ModuleSchemaFactory } from './schemas/module.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: ModuleSchema.name, schema: ModuleSchemaFactory }])],
  controllers: [ModulesController],
  providers: [ModulesService],
  exports: [ModulesService]
})
export class ModulesModule {}
