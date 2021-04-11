import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipeDetailComponent } from './pages/recipe-detail/recipe-detail.component';
import { RecipeCardComponent } from './shared/components/recipe-card/recipe-card.component';
import { InspirationComponent } from './pages/inspiration/inspiration.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { ProfileSettingsComponent } from './pages/profile-settings/profile-settings.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { GroceryRecipeComponent } from './pages/grocery-recipe/grocery-recipe.component';
import { GroceryIngredientComponent } from './pages/grocery-ingredient/grocery-ingredient.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './pages/terms-of-service/terms-of-service.component';
import { AboutComponent } from './pages/about/about.component';
import { InfoSlideshowComponent } from './shared/components/info-slideshow/info-slideshow.component';
import { GrocerySwitchComponent } from './shared/components/grocery-switch/grocery-switch.component';
import { CookingTimerComponent } from './shared/components/cooking-timer/cooking-timer.component';
import { TasteProfileComponent } from './shared/components/taste-profile/taste-profile.component';
import { CookmodeComponent } from './pages/cookmode/cookmode.component';
import { LogInComponent } from './pages/log-in/log-in.component';

const routes: Routes = [
  {path: '', component: InspirationComponent},
  {path: 'test', component: TasteProfileComponent},
  {path: 'recipe', component: RecipeDetailComponent},
  {path: 'recipe/:recipetitle/:id', component: RecipeDetailComponent},
  {path: 'recipe/:recipetitle/:id/cookmode', component: CookmodeComponent},
  {path: 'card', component: RecipeCardComponent},
  {path: 'inspiration', redirectTo: '', component: InspirationComponent},
  {path: 'login', component: LogInComponent},
  {path: 'search', component: SearchPageComponent},
  {path: 'favourites', component: FavoritesComponent},
  {path: 'me', component: ProfileSettingsComponent},
  {path: 'myprofile', component: MyProfileComponent},
  {path: 'privacy', component: PrivacyPolicyComponent},
  {path: 'tos', component: TermsOfServiceComponent},
  {path: 'about', component: AboutComponent},
  {path: 'selected-recipes', component: GroceryRecipeComponent},
  {path: 'my-ingredient-list', component: GroceryIngredientComponent},
  {path: 'cook/:cookname', component: CategoryPageComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: 'slides-info', component: InfoSlideshowComponent},
  {path: ':category', component: CategoryPageComponent},
  {path: ':category/:sub-category', component: CategoryPageComponent}
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollOffset: [0, 0], scrollPositionRestoration: 'top', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
