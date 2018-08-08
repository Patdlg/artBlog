import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { PostsModule } from './posts/post.module'
import { PostDashboardComponent } from './posts/post-dashboard/post-dashboard.component'
import { PostDetailComponent } from './posts/post-detail/post-detail.component'
import { PostListComponent } from './posts/post-list/post-list.component'
import { PostJobsComponent} from './posts/post-jobs/post-jobs.component'

const routes: Routes = [
  { path: '', redirectTo: '/blog', pathMatch: 'full' },
  { path: 'blog', component: PostListComponent },
  { path: 'blog/:id', component: PostDetailComponent },
  { path: 'dashboard', component: PostDashboardComponent },
  { path: 'post-jobs', component: PostJobsComponent },
  { path: 'post-jobs', redirectTo: 'profile', pathMatch: 'full' },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }