import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { MenuComponent } from './header/menu/menu.component';
import { TodayComponent } from './today/today.component';
import { CardCurrentConditionComponent } from './card/card-current-condition/card-current-condition.component';
import { CardWeatherComponent } from './card/card-weather/card-weather.component';
import { CardDetailsComponent } from './card/card-details/card-details.component';
import { CardHourlyComponent } from './card/card-hourly/card-hourly.component';
import { CardDailyComponent } from './card/card-daily/card-daily.component';
import { CardRadarComponent } from './card/card-radar/card-radar.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { WeekendComponent } from './weekend/weekend.component';
import { RadarComponent } from './radar/radar.component';
import { MonthlyComponent } from './monthly/monthly.component';
import { LastTenDayComponent } from './last-ten-day/last-ten-day.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    MenuComponent,
    TodayComponent,
    CardCurrentConditionComponent,
    CardWeatherComponent,
    CardDetailsComponent,
    CardHourlyComponent,
    CardDailyComponent,
    CardRadarComponent,
    ScheduleComponent,
    WeekendComponent,
    RadarComponent,
    MonthlyComponent,
    LastTenDayComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
