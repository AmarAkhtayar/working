import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { ApiService } from '../../api.service';
import ColorThief from 'colorthief';
import { ColorHandlingService } from '../../shared/services/color-handling.service';
import { SEOService } from 'src/app/shared/services/seo.service';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
} from '@angular/router';
import { timeInterval } from 'rxjs/operators';
import { Meta, Title } from '@angular/platform-browser';
import { RatingComponent } from 'src/app/shared/components/rating/rating.component';
import { ImgSnippet } from 'src/app/shared/models/imgSnippet.model';
import { Breadcrumb } from 'src/app/shared/models/breadcrumb.model';
import { RecipeCardComponent } from 'src/app/shared/components/recipe-card/recipe-card.component';
import { RecipeCard } from 'src/app/shared/models/backend-models/recipe-card.model';
import { Recipe } from 'src/app/shared/models/backend-models/recipe.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.less'],
})
export class RecipeDetailComponent implements OnInit {
  date: Date = new Date('2019-01-16');
  isFavorite: boolean = true;
  userRecipeRating: number = 0;
  // userRecipeRatingFillColor: string = "#EAA859";
  userRecipeRatingSubmitted: boolean = false;

  breadCrumbs: Breadcrumb[] = [];

  imgUploadState: string = 'not-started'; //not-started, choose-image, approve-image upload-success, upload-error
  selectedFile: ImgSnippet;

  colorthief = new ColorThief();
  rgbImgBackground: string = '';
  link: string = 'domainname.com';
  sub;

  showTasteProfile: boolean = false;
  showCookware: boolean = false;
  showTimes: boolean = false;
  showDisclaimer: boolean = false;
  shareDropDown: boolean = false;
  showReviews: boolean = true;

  showReviewPopup: boolean = false;
  inCookmode: boolean = false;

  recipes: any[] = [];
  recomRecipes: RecipeCard[] = [];
  recipe: Recipe;
  cookwares: any[] = [];
  instructions: any[] = [];

  isDarkBg: boolean = false;
  cookTimeStroke: number = 76;

  imgArray: any[] = ['assets/exfood8.png', 'assets/exfood9.png'];
  selectedImg = 'assets/exfood9.png';
  imgIndic = 0;

  setImg() {
    this.imgIndic++;
    if (this.imgIndic % 2 == 0) {
      this.selectedImg = this.imgArray[0];
    } else {
      this.selectedImg = this.imgArray[1];
    }
  }

  // creating reactive comment form
  commentFormGroup: FormGroup;
  isFormSubmitted = false;

  comments = [{ username: 'test user', rating: 5, text: 'very nice!' }];

  constructor(
    private router: Router,
    private apiService: ApiService,
    private colorHandler: ColorHandlingService,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta,
    private seoService: SEOService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    //Set meta tags
    this.metaService.addTags([
      // {name: 'keywords', content: 'Recipe, Universal, Example'},
      // {name: 'description', content: 'Angular Universal Example'},
      // {name: 'robots', content: 'index, follow'}
    ]);

    let id: string;
    this.sub = this.activatedRoute.paramMap.subscribe((params) => {
      id = params.get('id');
      console.log('id, ', id);
    });
    console.log('id', id);
    this.apiService.getRecipeByID(id).subscribe((d) => {
      this.recipe = d;
      this.recipe.image = 'assets/exfood8.png';
      this.recipe.title = 'Missing title here';
      this.setBreadCrumbs();
      this.calculateCircleFill();
      this.seoService.addFacebookTwitterData(
        'title',
        window.location.href,
        'dit is de omschrijving',
        'imgurl'
      );
      // this.titleService.setTitle(this.recipe.title);
      this.seoService.addTitle(this.recipe.title + ' | SwapMeals');
      console.log('test cookware', this.recipe.equipments);
    });
    console.log('recipe');

    this.apiService.getRecommendedRecipes().subscribe((d) => {
      console.log('dsafljlekf', d.result);
      this.recomRecipes = d.result;
      this.recomRecipes.forEach((r) => {
        r.image = 'assets/exfood7.png';
      });
    });

    this.link += this.router.url;
    // console.log(this.link);
    if (localStorage.getItem('uploadPhoto') == 'true') {
      this.imgUploadState = 'choose-image';
      localStorage.removeItem('uploadPhoto');
    }
    // call this function to initialise form
    this.setupCommentForm();
  }

  setupCommentForm() {
    this.commentFormGroup = this.formBuilder.group({
      rating: [null, { validators: [Validators.required] }],
      comment: [null, { validators: [Validators.required] }],
    });
  }

  submitCommentForm() {
    console.log(this.commentFormGroup.value);
    this.isFormSubmitted = true;

    if (this.commentFormGroup.invalid) {
      console.log('form invalid');
      // display error message
      return;
    }
    console.log('form valid');
    //send api request

    this.comments.push({
      username: 'Test',
      text: this.commentFormGroup.get('comment').value,
      rating: this.commentFormGroup.value.rating,
      // rating2: this.commentFormGroup.controls.rating.value,
    });

    console.log(this.comments);

    this.commentFormGroup.reset();
    this.isFormSubmitted = false;
    this.userRecipeRating = 0;
  }

  submitRating() {
    //TODO: submit rating
    // this.userRecipeRatingFillColor = "#5DAB24";
    this.userRecipeRatingSubmitted = true;
  }
  setRating(e) {
    this.userRecipeRating = e;
    this.commentFormGroup.get('rating').setValue(this.userRecipeRating);
  }

  resetCommentText() {
    this.commentFormGroup.get('comment').reset();
  }

  private setBreadCrumbs() {
    //set breadcrumbs
    this.breadCrumbs = [];
    let homeBc = new Breadcrumb('Home', '/inspiration');
    let recipenameBc = new Breadcrumb(
      this.recipe.title,
      'recipe/' +
        this.recipe.title.replace(/ /g, '-').replace(/,/g, '') +
        '/' +
        this.recipe.id
    );
    this.breadCrumbs.push(homeBc);
    this.breadCrumbs.push(recipenameBc);
  }

  popupActive(): boolean {
    return this.showReviewPopup || this.inCookmode;
  }

  toggleCookmode() {
    if (this.inCookmode == false) {
      console.log('testt');
      let cookmBc = new Breadcrumb('Cookmode', '/error');
      this.breadCrumbs.push(cookmBc);
    } else {
      this.breadCrumbs.pop();
    }
    this.inCookmode = !this.inCookmode;
  }

  toggleTaste(e) {
    this.showTasteProfile = !this.showTasteProfile;
    if (this.showTasteProfile) {
      e.target.style.transform = 'rotate(180deg)';
    } else {
      e.target.style.transform = 'rotate(0deg)';
    }
  }

  toggleCookware(e) {
    this.showCookware = !this.showCookware;
    if (this.showCookware) {
      e.target.style.transform = 'rotate(180deg)';
    } else {
      e.target.style.transform = 'rotate(0deg)';
    }
  }

  toggleTime(e) {
    this.showTimes = !this.showTimes;
    if (this.showTimes) {
      e.target.style.transform = 'rotate(180deg)';
    } else {
      e.target.style.transform = 'rotate(0deg)';
    }
  }

  toggleDisclaimer(e) {
    this.showDisclaimer = !this.showDisclaimer;
    if (this.showDisclaimer) {
      e.target.style.transform = 'rotate(180deg)';
    } else {
      e.target.style.transform = 'rotate(0deg)';
    }
  }

  turn(e) {
    console.log(e.target);
    e.target.style.transform = 'rotate(180deg)';
  }

  toggleFavorite(e) {
    this.isFavorite = !this.isFavorite;
    if (this.isFavorite) {
      e.target.children[0].style.fill = '#BC2872';
    } else {
      e.target.children[0].style.fill = 'none';
    }
    e.preventDefault();
    // e.stopPropagation();
  }

  closeReviewPopup(e) {
    console.log(e.target.className);
    if (
      e.target.className === 'review-popup pop-up' ||
      e.target.className.baseVal === 'close' ||
      e.target.className === 'btn big secondary-food close-popup'
    ) {
      this.showReviewPopup = !this.showReviewPopup;
    }
  }
  openReviewPopup() {
    this.showReviewPopup = true;
    console.log(this.showReviewPopup);
  }

  printPage() {
    window.print();
  }

  setBackgroundColorthief(): string {
    var img = document.getElementById('img');
    var color = this.colorthief.getColor(img);
    // let exactOppositeHue = this.colorHandler.oppositeHue(color[0], color[1], color[2]);

    this.rgbImgBackground =
      'rgb(' + color[0] + ', ' + color[1] + ', ' + color[2] + ')';
    var pallete = this.colorthief.getPalette(img);

    // var oppositeColor = this.colorHandler.matchingHue(exactOppositeHue, pallete);

    // console.log(this.colorHandler.calculateLightness(oppositeColor[0], oppositeColor[1], oppositeColor[2]));
    console.log(
      this.colorHandler.calculateLightness(color[0], color[1], color[2])
    );
    if (
      this.colorHandler.calculateLightness(color[0], color[1], color[2]) < 65
    ) {
      //if first color in gradient is dark
      this.isDarkBg = true;
    }

    // this.rgbImgBackground = "linear-gradient(90deg, rgb(" + oppositeColor[0] + ", " + oppositeColor[1] + ", " + oppositeColor[2] +
    //   "), rgb(" + color[0] + ", " + color[1] + ", " + color[2] + ")";

    return this.rgbImgBackground;
  }
  openWhatsApp() {
    window.location.href = 'whatsapp://send?text=' + window.location.href;
  }
  copyLink() {
    navigator.clipboard.writeText(this.link).then(
      function () {
        /* success */
      },
      function () {
        /* failure */
        const tempArea = document.createElement('textarea');
        tempArea.style.position = 'fixed';
        tempArea.style.left = '0';
        tempArea.style.top = '0';
        tempArea.style.opacity = '0';
        tempArea.value = this.link;
        document.body.appendChild(tempArea);
        tempArea.focus();
        tempArea.select();
        document.execCommand('copy');
        document.body.removeChild(tempArea);
      }
    );
  }

  flipSwapables(id, e) {
    console.log('target', e.target);
    if (
      e.target.style.transform == '' ||
      e.target.style.transform == 'rotate(180deg)'
    ) {
      e.target.style.transform = 'rotate(0deg)';
    } else {
      e.target.style.transform = 'rotate(180deg)';
    }
    var swapElem = document.getElementsByClassName('swap-' + id);

    document.querySelectorAll('.swap-' + id).forEach((swapper) => {
      let swap = <HTMLElement>swapper;
      // console.log(swap.classList);
      if (swap.style.display == 'none') {
        swap.style.display = 'flex';
      } else {
        swap.style.display = 'none';
      }
    });
  }
  checkboxClick(e, id) {
    // var allInputs = document.getElementsByTagName('input');
    var swapElem = document
      .getElementById('ing-box-' + id)
      .getElementsByTagName('input');
    this.uncheckOthers(e, swapElem);
  }

  isChecked(id): boolean {
    var checkbox = <HTMLInputElement>(
      document.getElementById(id).getElementsByTagName('input')[0]
    );
    // console.log(id, checkbox);
    return checkbox.checked;
  }
  setChecked(id, groupId) {
    // console.log(id, document.getElementById(id));
    var checkbox = <HTMLInputElement>(
      document.getElementById(id).getElementsByTagName('input')[0]
    );
    var swapElem = document
      .getElementById('ing-box-' + groupId)
      .getElementsByTagName('input');
    checkbox.checked = !checkbox.checked;
    this.uncheckOthers(checkbox, swapElem);
    // console.log('to true: ', checkbox)s
  }

  private uncheckOthers(clickedCheckbox, allCheckboxes) {
    for (var i = 0; i < allCheckboxes.length; i++) {
      var inputElem = <HTMLInputElement>allCheckboxes[i];
      var clickedInput = <HTMLInputElement>clickedCheckbox;
      // console.log(allCheckboxes[i].id == clickedCheckbox.id);
      if (
        allCheckboxes[i].id != clickedCheckbox.id &&
        clickedCheckbox.checked == true
      ) {
        //if clicked one goes to checked and input element is not clicked one
        allCheckboxes[i].checked = false;
        // console.log(allCheckboxes[i], 'is unchecked');
      }
    }
  }

  private calculateCircleFill() {
    if (this.recipe.time.total < 60) {
      this.cookTimeStroke = this.recipe.time.total * 1.2666666;
      console.log('test stroke', this.cookTimeStroke);
    }
  }

  adjustServings(adjust: string) {
    if (adjust == 'inc') {
      this.recipe.serving++;
    } else {
      this.recipe.serving--;
    }
  }
  addRecipeToList() {
    localStorage.setItem('grocery-list', 'filled');
  }

  setImgUploadState(state: string) {
    this.imgUploadState = state;
  }
  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    console.log('hallohalo');
    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImgSnippet(event.target.result, file);

      //TODO:
      //   this.apiService.uploadImage(this.selectedFile.file).subscribe(
      //     (res) => {

      //     },
      //     (err) => {

      //     })
    });

    reader.readAsDataURL(file);

    this.setImgUploadState('approve-image');
  }

  scrollToCommentSection(): void {
    const element = document.getElementById('commentSection');
    const y = element.getBoundingClientRect().top + window.pageYOffset + -65;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}
