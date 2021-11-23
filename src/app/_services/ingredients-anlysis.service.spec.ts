import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { IngredientsAnlysisService } from './ingredients-anlysis.service';

describe('IngredientsAnlysisService', () => {
  let service: IngredientsAnlysisService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(IngredientsAnlysisService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add new ingredients', () => {
    service.addIngredient('test');
    expect(service.ingredientsArray.length).toBe(1);
  });

  it('should delete  ingredients', () => {
    service.deleteIngredient('test');
    expect(service.ingredientsArray.length).toBe(0);
  });

  it('should get ingredient Details', () => {
    service.ingredientsArray = ['100gr Chicken'];
    service.getIngredientData(0).subscribe((res) => {
      expect(res).toBeTruthy();
    });
    const req = httpTestingController.expectOne((r) =>
      r.url.includes('nutrition-data')
    );
    expect(req.request.method).toBe('GET');
    req.flush({
      uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_5ae03b9042694a42a3bd9413f7d469e8',
      calories: 215,
      totalWeight: 100,
      dietLabels: ['LOW_CARB', 'LOW_SODIUM'],
      healthLabels: [
        'SUGAR_CONSCIOUS',
        'LOW_SUGAR',
        'LOW_POTASSIUM',
        'KIDNEY_FRIENDLY',
        'KETO_FRIENDLY',
        'PALEO',
        'SPECIFIC_CARBS',
        'MEDITERRANEAN',
        'DAIRY_FREE',
        'GLUTEN_FREE',
        'WHEAT_FREE',
        'EGG_FREE',
        'MILK_FREE',
        'PEANUT_FREE',
        'TREE_NUT_FREE',
        'SOY_FREE',
        'FISH_FREE',
        'SHELLFISH_FREE',
        'PORK_FREE',
        'RED_MEAT_FREE',
        'CRUSTACEAN_FREE',
        'CELERY_FREE',
        'MUSTARD_FREE',
        'SESAME_FREE',
        'LUPINE_FREE',
        'MOLLUSK_FREE',
        'ALCOHOL_FREE',
        'NO_OIL_ADDED',
        'NO_SUGAR_ADDED',
        'SULPHITE_FREE',
        'FODMAP_FREE',
        'KOSHER',
      ],
      cautions: [],
      totalNutrients: {
        ENERC_KCAL: {
          label: 'Energy',
          quantity: 215,
          unit: 'kcal',
        },
        FAT: {
          label: 'Total lipid (fat)',
          quantity: 15.06,
          unit: 'g',
        },
        FASAT: {
          label: 'Fatty acids, total saturated',
          quantity: 4.31,
          unit: 'g',
        },
        FATRN: {
          label: 'Fatty acids, total trans',
          quantity: 0.097,
          unit: 'g',
        },
        FAMS: {
          label: 'Fatty acids, total monounsaturated',
          quantity: 6.24,
          unit: 'g',
        },
        FAPU: {
          label: 'Fatty acids, total polyunsaturated',
          quantity: 3.23,
          unit: 'g',
        },
        CHOCDF: {
          label: 'Carbohydrate, by difference',
          quantity: 0,
          unit: 'g',
        },
        FIBTG: {
          label: 'Fiber, total dietary',
          quantity: 0,
          unit: 'g',
        },
        SUGAR: {
          label: 'Sugars, total',
          quantity: 0,
          unit: 'g',
        },
        PROCNT: {
          label: 'Protein',
          quantity: 18.6,
          unit: 'g',
        },
        CHOLE: {
          label: 'Cholesterol',
          quantity: 75,
          unit: 'mg',
        },
        NA: {
          label: 'Sodium, Na',
          quantity: 70,
          unit: 'mg',
        },
        CA: {
          label: 'Calcium, Ca',
          quantity: 11,
          unit: 'mg',
        },
        MG: {
          label: 'Magnesium, Mg',
          quantity: 20,
          unit: 'mg',
        },
        K: {
          label: 'Potassium, K',
          quantity: 189,
          unit: 'mg',
        },
        FE: {
          label: 'Iron, Fe',
          quantity: 0.9,
          unit: 'mg',
        },
        ZN: {
          label: 'Zinc, Zn',
          quantity: 1.31,
          unit: 'mg',
        },
        P: {
          label: 'Phosphorus, P',
          quantity: 147,
          unit: 'mg',
        },
        VITA_RAE: {
          label: 'Vitamin A, RAE',
          quantity: 41,
          unit: 'µg',
        },
        VITC: {
          label: 'Vitamin C, total ascorbic acid',
          quantity: 1.6,
          unit: 'mg',
        },
        THIA: {
          label: 'Thiamin',
          quantity: 0.06,
          unit: 'mg',
        },
        RIBF: {
          label: 'Riboflavin',
          quantity: 0.12,
          unit: 'mg',
        },
        NIA: {
          label: 'Niacin',
          quantity: 6.801,
          unit: 'mg',
        },
        VITB6A: {
          label: 'Vitamin B-6',
          quantity: 0.35,
          unit: 'mg',
        },
        FOLDFE: {
          label: 'Folate, DFE',
          quantity: 6,
          unit: 'µg',
        },
        FOLFD: {
          label: 'Folate, food',
          quantity: 6,
          unit: 'µg',
        },
        FOLAC: {
          label: 'Folic acid',
          quantity: 0,
          unit: 'µg',
        },
        VITB12: {
          label: 'Vitamin B-12',
          quantity: 0.31,
          unit: 'µg',
        },
        VITD: {
          label: 'Vitamin D (D2 + D3)',
          quantity: 0.2,
          unit: 'µg',
        },
        TOCPHA: {
          label: 'Vitamin E (alpha-tocopherol)',
          quantity: 0.3,
          unit: 'mg',
        },
        VITK1: {
          label: 'Vitamin K (phylloquinone)',
          quantity: 1.5,
          unit: 'µg',
        },
        WATER: {
          label: 'Water',
          quantity: 65.99,
          unit: 'g',
        },
      },
      totalDaily: {
        ENERC_KCAL: {
          label: 'Energy',
          quantity: 10.75,
          unit: '%',
        },
        FAT: {
          label: 'Fat',
          quantity: 23.16923076923077,
          unit: '%',
        },
        FASAT: {
          label: 'Saturated',
          quantity: 21.549999999999997,
          unit: '%',
        },
        CHOCDF: {
          label: 'Carbs',
          quantity: 0,
          unit: '%',
        },
        FIBTG: {
          label: 'Fiber',
          quantity: 0,
          unit: '%',
        },
        PROCNT: {
          label: 'Protein',
          quantity: 37.2,
          unit: '%',
        },
        CHOLE: {
          label: 'Cholesterol',
          quantity: 25,
          unit: '%',
        },
        NA: {
          label: 'Sodium',
          quantity: 2.9166666666666665,
          unit: '%',
        },
        CA: {
          label: 'Calcium',
          quantity: 1.1,
          unit: '%',
        },
        MG: {
          label: 'Magnesium',
          quantity: 4.761904761904762,
          unit: '%',
        },
        K: {
          label: 'Potassium',
          quantity: 4.0212765957446805,
          unit: '%',
        },
        FE: {
          label: 'Iron',
          quantity: 5,
          unit: '%',
        },
        ZN: {
          label: 'Zinc',
          quantity: 11.909090909090908,
          unit: '%',
        },
        P: {
          label: 'Phosphorus',
          quantity: 21,
          unit: '%',
        },
        VITA_RAE: {
          label: 'Vitamin A',
          quantity: 4.555555555555555,
          unit: '%',
        },
        VITC: {
          label: 'Vitamin C',
          quantity: 1.7777777777777777,
          unit: '%',
        },
        THIA: {
          label: 'Thiamin (B1)',
          quantity: 5,
          unit: '%',
        },
        RIBF: {
          label: 'Riboflavin (B2)',
          quantity: 9.23076923076923,
          unit: '%',
        },
        NIA: {
          label: 'Niacin (B3)',
          quantity: 42.50625,
          unit: '%',
        },
        VITB6A: {
          label: 'Vitamin B6',
          quantity: 26.923076923076923,
          unit: '%',
        },
        FOLDFE: {
          label: 'Folate equivalent (total)',
          quantity: 1.5,
          unit: '%',
        },
        VITB12: {
          label: 'Vitamin B12',
          quantity: 12.916666666666668,
          unit: '%',
        },
        VITD: {
          label: 'Vitamin D',
          quantity: 1.3333333333333333,
          unit: '%',
        },
        TOCPHA: {
          label: 'Vitamin E',
          quantity: 2,
          unit: '%',
        },
        VITK1: {
          label: 'Vitamin K',
          quantity: 1.25,
          unit: '%',
        },
      },
      totalNutrientsKCal: {
        ENERC_KCAL: {
          label: 'Energy',
          quantity: 215,
          unit: 'kcal',
        },
        PROCNT_KCAL: {
          label: 'Calories from protein',
          quantity: 76,
          unit: 'kcal',
        },
        FAT_KCAL: {
          label: 'Calories from fat',
          quantity: 139,
          unit: 'kcal',
        },
        CHOCDF_KCAL: {
          label: 'Calories from carbohydrates',
          quantity: 0,
          unit: 'kcal',
        },
      },
    });
  });

  it('should return full analysis for a recipe ', () => {
    service.ingredientsArray = ['100gr Chicken', '200gr Meat'];
    service.getFullRecipeAnalysis().subscribe((res) => {
      expect(res).toBeTruthy();
    });
    const req = httpTestingController.expectOne((r) =>
      r.url.includes('nutrition-details')
    );
    expect(req.request.method).toBe('POST');
    req.flush({
      "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_63f9ad90bf884b20892f4a698fdd8a6e",
      "yield": 4,
      "calories": 475,
      "totalWeight": 300,
      "dietLabels": [
        "HIGH_PROTEIN",
        "LOW_CARB",
        "LOW_SODIUM"
      ],
      "healthLabels": [
        "SUGAR_CONSCIOUS",
        "LOW_SUGAR",
        "KIDNEY_FRIENDLY",
        "KETO_FRIENDLY",
        "PALEO",
        "SPECIFIC_CARBS",
        "DAIRY_FREE",
        "GLUTEN_FREE",
        "WHEAT_FREE",
        "EGG_FREE",
        "MILK_FREE",
        "PEANUT_FREE",
        "TREE_NUT_FREE",
        "SOY_FREE",
        "FISH_FREE",
        "SHELLFISH_FREE",
        "PORK_FREE",
        "CRUSTACEAN_FREE",
        "CELERY_FREE",
        "MUSTARD_FREE",
        "SESAME_FREE",
        "LUPINE_FREE",
        "MOLLUSK_FREE",
        "ALCOHOL_FREE",
        "NO_OIL_ADDED",
        "NO_SUGAR_ADDED",
        "SULPHITE_FREE",
        "FODMAP_FREE",
        "KOSHER"
      ],
      "cautions": [],
      "totalNutrients": {
        "ENERC_KCAL": {
          "label": "Energy",
          "quantity": 475,
          "unit": "kcal"
        },
        "FAT": {
          "label": "Total lipid (fat)",
          "quantity": 24.68,
          "unit": "g"
        },
        "FASAT": {
          "label": "Fatty acids, total saturated",
          "quantity": 8.286,
          "unit": "g"
        },
        "FATRN": {
          "label": "Fatty acids, total trans",
          "quantity": 0.597,
          "unit": "g"
        },
        "FAMS": {
          "label": "Fatty acids, total monounsaturated",
          "quantity": 11.26,
          "unit": "g"
        },
        "FAPU": {
          "label": "Fatty acids, total polyunsaturated",
          "quantity": 3.85,
          "unit": "g"
        },
        "CHOCDF": {
          "label": "Carbohydrate, by difference",
          "quantity": 0.24,
          "unit": "g"
        },
        "FIBTG": {
          "label": "Fiber, total dietary",
          "quantity": 0,
          "unit": "g"
        },
        "SUGAR": {
          "label": "Sugars, total",
          "quantity": 0,
          "unit": "g"
        },
        "PROCNT": {
          "label": "Protein",
          "quantity": 61.88,
          "unit": "g"
        },
        "CHOLE": {
          "label": "Cholesterol",
          "quantity": 201,
          "unit": "mg"
        },
        "NA": {
          "label": "Sodium, Na",
          "quantity": 228,
          "unit": "mg"
        },
        "CA": {
          "label": "Calcium, Ca",
          "quantity": 37,
          "unit": "mg"
        },
        "MG": {
          "label": "Magnesium, Mg",
          "quantity": 62,
          "unit": "mg"
        },
        "K": {
          "label": "Potassium, K",
          "quantity": 935,
          "unit": "mg"
        },
        "FE": {
          "label": "Iron, Fe",
          "quantity": 5.08,
          "unit": "mg"
        },
        "ZN": {
          "label": "Zinc, Zn",
          "quantity": 12.13,
          "unit": "mg"
        },
        "P": {
          "label": "Phosphorus, P",
          "quantity": 581,
          "unit": "mg"
        },
        "VITA_RAE": {
          "label": "Vitamin A, RAE",
          "quantity": 45,
          "unit": "µg"
        },
        "VITC": {
          "label": "Vitamin C, total ascorbic acid",
          "quantity": 1.6,
          "unit": "mg"
        },
        "THIA": {
          "label": "Thiamin",
          "quantity": 0.22,
          "unit": "mg"
        },
        "RIBF": {
          "label": "Riboflavin",
          "quantity": 0.46,
          "unit": "mg"
        },
        "NIA": {
          "label": "Niacin",
          "quantity": 16.575,
          "unit": "mg"
        },
        "VITB6A": {
          "label": "Vitamin B-6",
          "quantity": 1.4859999999999998,
          "unit": "mg"
        },
        "FOLDFE": {
          "label": "Folate, DFE",
          "quantity": 12,
          "unit": "µg"
        },
        "FOLFD": {
          "label": "Folate, food",
          "quantity": 12,
          "unit": "µg"
        },
        "FOLAC": {
          "label": "Folic acid",
          "quantity": 0,
          "unit": "µg"
        },
        "VITB12": {
          "label": "Vitamin B-12",
          "quantity": 4.85,
          "unit": "µg"
        },
        "VITD": {
          "label": "Vitamin D (D2 + D3)",
          "quantity": 0.4,
          "unit": "µg"
        },
        "TOCPHA": {
          "label": "Vitamin E (alpha-tocopherol)",
          "quantity": 0.6599999999999999,
          "unit": "mg"
        },
        "VITK1": {
          "label": "Vitamin K (phylloquinone)",
          "quantity": 4.5,
          "unit": "µg"
        },
        "WATER": {
          "label": "Water",
          "quantity": 210.63,
          "unit": "g"
        }
      },
      "totalDaily": {
        "ENERC_KCAL": {
          "label": "Energy",
          "quantity": 23.75,
          "unit": "%"
        },
        "FAT": {
          "label": "Fat",
          "quantity": 37.96923076923077,
          "unit": "%"
        },
        "FASAT": {
          "label": "Saturated",
          "quantity": 41.42999999999999,
          "unit": "%"
        },
        "CHOCDF": {
          "label": "Carbs",
          "quantity": 0.08,
          "unit": "%"
        },
        "FIBTG": {
          "label": "Fiber",
          "quantity": 0,
          "unit": "%"
        },
        "PROCNT": {
          "label": "Protein",
          "quantity": 123.76,
          "unit": "%"
        },
        "CHOLE": {
          "label": "Cholesterol",
          "quantity": 67,
          "unit": "%"
        },
        "NA": {
          "label": "Sodium",
          "quantity": 9.5,
          "unit": "%"
        },
        "CA": {
          "label": "Calcium",
          "quantity": 3.7,
          "unit": "%"
        },
        "MG": {
          "label": "Magnesium",
          "quantity": 14.761904761904763,
          "unit": "%"
        },
        "K": {
          "label": "Potassium",
          "quantity": 19.893617021276597,
          "unit": "%"
        },
        "FE": {
          "label": "Iron",
          "quantity": 28.22222222222222,
          "unit": "%"
        },
        "ZN": {
          "label": "Zinc",
          "quantity": 110.27272727272727,
          "unit": "%"
        },
        "P": {
          "label": "Phosphorus",
          "quantity": 83,
          "unit": "%"
        },
        "VITA_RAE": {
          "label": "Vitamin A",
          "quantity": 5,
          "unit": "%"
        },
        "VITC": {
          "label": "Vitamin C",
          "quantity": 1.7777777777777777,
          "unit": "%"
        },
        "THIA": {
          "label": "Thiamin (B1)",
          "quantity": 18.333333333333336,
          "unit": "%"
        },
        "RIBF": {
          "label": "Riboflavin (B2)",
          "quantity": 35.38461538461539,
          "unit": "%"
        },
        "NIA": {
          "label": "Niacin (B3)",
          "quantity": 103.59375,
          "unit": "%"
        },
        "VITB6A": {
          "label": "Vitamin B6",
          "quantity": 114.30769230769228,
          "unit": "%"
        },
        "FOLDFE": {
          "label": "Folate equivalent (total)",
          "quantity": 3,
          "unit": "%"
        },
        "VITB12": {
          "label": "Vitamin B12",
          "quantity": 202.08333333333331,
          "unit": "%"
        },
        "VITD": {
          "label": "Vitamin D",
          "quantity": 2.6666666666666665,
          "unit": "%"
        },
        "TOCPHA": {
          "label": "Vitamin E",
          "quantity": 4.3999999999999995,
          "unit": "%"
        },
        "VITK1": {
          "label": "Vitamin K",
          "quantity": 3.75,
          "unit": "%"
        }
      },
      "totalNutrientsKCal": {
        "ENERC_KCAL": {
          "label": "Energy",
          "quantity": 475,
          "unit": "kcal"
        },
        "PROCNT_KCAL": {
          "label": "Calories from protein",
          "quantity": 250,
          "unit": "kcal"
        },
        "FAT_KCAL": {
          "label": "Calories from fat",
          "quantity": 224,
          "unit": "kcal"
        },
        "CHOCDF_KCAL": {
          "label": "Calories from carbohydrates",
          "quantity": 1,
          "unit": "kcal"
        }
      }
    })
  })
});
