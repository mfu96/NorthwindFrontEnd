import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  categories: Category[] = [];
  currentCategory: Category; //Burada initialize hatası alırsan 18. gün 1.20
  dataLoaded = false;

  constructor(private categorySevice: CategoryService) {}

  ngOnInit(): void {
    this.getCategories();
  }
  getCategories() {
    this.categorySevice.getCategories().subscribe(
      (
        response //Methodun senkron ve asekron çalışması ile
      ) =>
        //ilgli 17. gün 2.52 hayti önem taşıyor
        {
          this.categories = response.data;
          this.dataLoaded = true;
        }
    );
  }
  setCurrentCategory(category: Category) {
    this.currentCategory = category;
  }

  getCurrentCategoryClass(category: Category) {
    if (category == this.currentCategory) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
  getAllCategoryClass() {
    if ( ! this.currentCategory) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }

}
