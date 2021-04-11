import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeDetailComponent } from './pages/recipe-detail/recipe-detail.component';
import { NavComponent } from './shared/components/nav/nav.component';
import { UserFollowComponent } from './shared/components/user-follow/user-follow.component';
import { MyCarouselComponent } from './shared/components/my-carousel/my-carousel.component';
import { RatingComponent } from './shared/components/rating/rating.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BreadcrumbComponent } from './shared/components/breadcrumb/breadcrumb.component';
import { TasteProfileComponent } from './shared/components/taste-profile/taste-profile.component';
import { RecipeCardComponent } from './shared/components/recipe-card/recipe-card.component';
import { InspirationComponent } from './pages/inspiration/inspiration.component';
import { CheckboxComponent } from './shared/components/checkbox/checkbox.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { ProfileSettingsComponent } from './pages/profile-settings/profile-settings.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { RecipeGridComponent } from './shared/components/recipe-grid/recipe-grid.component';
import { LOCALE_ID } from '@angular/core';
import { GroceryRecipeComponent } from './pages/grocery-recipe/grocery-recipe.component';
import { GroceryIngredientComponent } from './pages/grocery-ingredient/grocery-ingredient.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { AuthorizationInterceptor } from './shared/interceptors/authorization-interceptor';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { AboutComponent } from './pages/about/about.component';
import { TermsOfServiceComponent } from './pages/terms-of-service/terms-of-service.component';
import { InfoSlideshowComponent } from './shared/components/info-slideshow/info-slideshow.component';
import { GrocerySwitchComponent } from './shared/components/grocery-switch/grocery-switch.component';
import { CookingTimerComponent } from './shared/components/cooking-timer/cooking-timer.component';
import { TooltipComponent } from './shared/components/tooltip/tooltip.component';
import { CookmodeComponent } from './pages/cookmode/cookmode.component';
import { AuthModule } from '@auth0/auth0-angular';
import { environment as env } from '../environments/environment';
import { LogInComponent } from './pages/log-in/log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeDetailComponent,
    NavComponent,
    UserFollowComponent,
    MyCarouselComponent,
    RatingComponent,
    BreadcrumbComponent,
    TasteProfileComponent,
    RecipeCardComponent,
    InspirationComponent,
    CheckboxComponent,
    SearchPageComponent,
    SearchBarComponent,
    FavoritesComponent,
    ProfileSettingsComponent,
    MyProfileComponent,
    CategoryPageComponent,
    RecipeGridComponent,
    GroceryRecipeComponent,
    GroceryIngredientComponent,
    NotificationsComponent,
    PrivacyPolicyComponent,
    AboutComponent,
    TermsOfServiceComponent,
    InfoSlideshowComponent,
    GrocerySwitchComponent,
    CookingTimerComponent,
    TooltipComponent,
    CookmodeComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserAnimationsModule,
    AuthModule.forRoot({
      ...env.auth,
      scope: "read:user",
      httpInterceptor: {
        ...env.httpInterceptor,
      },
    }),
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'nl' }, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthorizationInterceptor,
    multi: true
  },
  {
    provide: Window,
    useValue: window,
  },
],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
