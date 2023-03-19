import { Routes } from '@angular/router';
import { AuthGuard } from 'src/app/components/guard/auth.guard';
import { AllMessagesComponent } from '../components/all-messages/all-messages.component';
import { CreateMessagesComponent } from '../components/create-messages/create-messages.component';
import { MyMessagesComponent } from '../components/my-messages/my-messages.component';

export const AdminLayoutRoutes: Routes = [
  { path: 'create-messages', component: CreateMessagesComponent,canActivate: [AuthGuard], },
  { path: 'all-messages', component: AllMessagesComponent,canActivate: [AuthGuard], },
  { path: 'my-messages', component: MyMessagesComponent,canActivate: [AuthGuard], },
];
