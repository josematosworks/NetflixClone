import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { authGuard } from '@core/guards/auth.guard';
import { MainLayoutComponent } from '@layouts/main-layout/main-layout.component';
import { homeResolver } from '@pages/home/home.resolver';
import { newAndPopularResolver } from '@pages/new-and-popular/new-and-popular.resolver';
import { trendingResolver } from '@pages/trending/trending.resolver';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'landing'
      },
      {
        path: 'landing',
        loadComponent: () => import('@pages/landing/landing.component').then(m => m.LandingComponent)
      },
      {
        path: 'home',
        loadComponent: () => import('@pages/home/home.component').then(m => m.HomeComponent),
        resolve: { movieData: homeResolver },
        canActivate: [authGuard]
      },
      {
        path: 'trending',
        loadComponent: () => import('@pages/trending/trending.component').then(m => m.TrendingComponent),
        resolve: { trendingData: trendingResolver },
        canActivate: [authGuard]
      },
      {
        path: 'new-and-popular',
        loadComponent: () =>
          import('@pages/new-and-popular/new-and-popular.component').then(m => m.NewAndPopularComponent),
        resolve: { newAndPopularData: newAndPopularResolver },
        canActivate: [authGuard]
      },
      {
        path: 'my-list',
        loadComponent: () => import('@pages/my-list/my-list.component').then(m => m.MyListComponent),
        canActivate: [authGuard]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
