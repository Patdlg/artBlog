import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { SharedModule } from '../shared/shared.module'

import { PostDashboardComponent } from './post-dashboard/post-dashboard.component'
import { PostDetailComponent } from './post-detail/post-detail.component'
import { PostListComponent } from './post-list/post-list.component'
import { PostService } from './post.service'
import { PostJobsComponent } from './post-jobs/post-jobs.component'
import { ProfileComponent } from './profile/profile.component'

const routes: Routes = [
  { path: 'blog', component: PostListComponent },
  { path: 'blog/:id', component: PostDetailComponent },
  { path: 'dashboard', component: PostDashboardComponent },
  { path: 'jobs', component: PostJobsComponent },
  { path: 'profile', component: ProfileComponent },

]

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [
    PostDashboardComponent,
    PostDetailComponent,
    PostListComponent,
    PostJobsComponent,
    ProfileComponent
  ],
  providers: [PostService]
})
export class PostsModule { }