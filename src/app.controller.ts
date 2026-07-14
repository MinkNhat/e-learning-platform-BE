import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './core/decorators/customize';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('dashboard/stats')
  getDashboardStats() {
    return this.appService.getDashboardStats();
  }

  @Get('health')
  @Public()
  checkHealth() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }
}
