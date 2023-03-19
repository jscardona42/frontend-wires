import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateMessagesComponent } from '../components/create-messages/create-messages.component';
import { RouterModule } from '@angular/router';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from 'src/app/components/components.module';
import { AllMessagesComponent } from '../components/all-messages/all-messages.component';
import { MyMessagesComponent } from '../components/my-messages/my-messages.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    ReactiveFormsModule,
  ],
  declarations: [CreateMessagesComponent, AllMessagesComponent, MyMessagesComponent],
})
export class AdminLayoutModule {}
