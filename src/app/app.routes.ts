import { Routes } from '@angular/router';
import { FrmChangeDetectionComponent } from './dashboard/pages/frm-change-detection/frm-change-detection.component';
import { FrmDeferViewsComponent } from './dashboard/pages/frm-defer-views/frm-defer-views.component';
import { FrmUserComponent } from './dashboard/pages/frm-user/frm-user.component';

export const routes: Routes = [
   {
      path: 'dashboard',
      loadComponent: () => import('./dashboard/dashboard.component').then(c => c.DashboardComponent),
      children: [
         {
            path: 'change-detection',
            title: 'Change Detection',
            loadComponent: () => import('./dashboard/pages/frm-change-detection/frm-change-detection.component').then( c => c.FrmChangeDetectionComponent),
         },
         {
            path: 'control-flow',
            title: 'Control Flow',
            loadComponent: () => import('./dashboard/pages/frm-control-flow/frm-control-flow.component').then( c => c.FrmControlFlowComponent),
         },
         {
            path: 'defer-options',
            title: 'Defer Options',
            loadComponent: () => import('./dashboard/pages/frm-defer-options/frm-defer-options.component').then( c => c.FrmDeferOptionsComponent),
         },
         {
            path: 'defer-views',
            title: 'Defer Views',
            loadComponent: () => import('./dashboard/pages/frm-defer-views/frm-defer-views.component').then( c => c.FrmDeferViewsComponent),
         },
         {
            path: 'user/:id',
            title: 'User',
            loadComponent: () => import('./dashboard/pages/frm-user/frm-user.component').then( c => c.FrmUserComponent),
         },
         {
            path: 'users-list',
            title: 'Users List',
            loadComponent: () => import('./dashboard/pages/frm-users/frm-users.component').then( c => c.FrmUsersComponent),
         },
         {
            path: 'view-transition',
            title: 'View Transition 1',
            loadComponent: () => import('./dashboard/pages/frm-view-transition/frm-view-transition.component').then( c => c.FrmViewTransitionComponent),
         },
         {
            path: 'view-transition2',
            title: 'View Transition 2',
            loadComponent: () => import('./dashboard/pages/frm-view-transition2/frm-view-transition2.component').then( c => c.FrmViewTransition2Component),
         },
         {
            path: 'input-output',
            title: 'Inputs/Outputs',
            loadComponent: () => import('./dashboard/pages/frm-input-output/frm-input-output.component').then( c => c.FrmInputOutputComponent),
         },
         {
            path: 'material',
            title: 'Material 3',
            loadComponent: () => import('./dashboard/pages/frm-material/frm-material.component').then( c => c.FrmMaterialComponent),
         },
         {
            path: '',
            redirectTo: 'control-flow',
            pathMatch: 'full',
         }
      ]
   },
   {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full',
   }

];
