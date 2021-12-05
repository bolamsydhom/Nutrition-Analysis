export interface NutritionDetailsResponseModel {
  uri: string;
  yield: number;
  calories: number;
  totalWeight: number;
  dietLabels: string[];
  healthLabels: string[];
  cautions: [];
  totalNutrients: {
    ENERC_KCAL: TotalNutrient;
    FAT: TotalNutrient;
    FASAT: TotalNutrient;
    FAMS: TotalNutrient;
    FAPU: TotalNutrient;
    CHOCDF: TotalNutrient;
    FIBTG: TotalNutrient;
    SUGAR: TotalNutrient;
    PROCNT: TotalNutrient;
    CHOLE: TotalNutrient;
    NA: TotalNutrient;
    CA: TotalNutrient;
    MG: TotalNutrient;
    K: TotalNutrient;
    FE: TotalNutrient;
    ZN: TotalNutrient;
    P: TotalNutrient;
    VITA_RAE: TotalNutrient;
    VITC: TotalNutrient;
    THIA: TotalNutrient;
    RIBF: TotalNutrient;
    NIA: TotalNutrient;
    VITB6A: TotalNutrient;
    FOLDFE: TotalNutrient;
    FOLFD: TotalNutrient;
    FOLAC: TotalNutrient;
    VITB12: TotalNutrient;
    VITD: TotalNutrient;
    TOCPHA: TotalNutrient;
    VITK1: TotalNutrient;
    WATER: TotalNutrient;
  };
  totalDaily: {
    ENERC_KCAL: TotalNutrient;
    FAT: TotalNutrient;
    FASAT: TotalNutrient;
    CHOCDF: TotalNutrient;
    FIBTG: TotalNutrient;
    PROCNT: TotalNutrient;
    CHOLE: TotalNutrient;
    NA: TotalNutrient;
    CA: TotalNutrient;
    MG: TotalNutrient;
    K: TotalNutrient;
    FE: TotalNutrient;
    ZN: TotalNutrient;
    P: TotalNutrient;
    VITA_RAE: TotalNutrient;
    VITC: TotalNutrient;
    THIA: TotalNutrient;
    RIBF: TotalNutrient;
    NIA: TotalNutrient;
    VITB6A: TotalNutrient;
    FOLDFE: TotalNutrient;
    VITB12: TotalNutrient;
    VITD: TotalNutrient;
    TOCPHA: TotalNutrient;
    VITK1: TotalNutrient;
  };
  ingredients: Ingredient[];
}

interface TotalNutrient {
  label: string;
  quantity: number;
  unit: string;
}

interface Ingredient {
  text: string;
  parsed: [
    {
      quantity: number;
      measure: string;
      foodMatch: string;
      food: string;
      foodId: string;
      weight: number;
      retainedWeight: number;
      nutrients: {
        RIBF: TotalNutrient;
        VITD: TotalNutrient;
        THIA: TotalNutrient;
        FAPU: TotalNutrient;
        NIA: TotalNutrient;
        ENERC_KCAL: TotalNutrient;
        FASAT: TotalNutrient;
        VITA_RAE: TotalNutrient;
        VITC: TotalNutrient;
        PROCNT: TotalNutrient;
        TOCPHA: TotalNutrient;
        CHOLE: TotalNutrient;
        FAMS: TotalNutrient;
        CHOCDF: TotalNutrient;
        FAT: TotalNutrient;
        VITB6A: TotalNutrient;
        VITB12: TotalNutrient;
        FIBTG: TotalNutrient;
        WATER: TotalNutrient;
        K: TotalNutrient;
        P: TotalNutrient;
        NA: TotalNutrient;
        ZN: TotalNutrient;
        SUGAR: TotalNutrient;
        CA: TotalNutrient;
        MG: TotalNutrient;
        FE: TotalNutrient;
        VITK1: TotalNutrient;
        FOLFD: TotalNutrient;
        FOLAC: TotalNutrient;
        FOLDFE: TotalNutrient;
      };
      measureURI: string;
      status: string;
    }
  ];
}
