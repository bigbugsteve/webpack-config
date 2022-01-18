import "./styles/index.scss";

const elvenShieldRecipe = {
    leatherStrips: 2,
    ironIngot: 1,
    refinedMoonstone: 4
}

const elvenGauntletsRecipe = {
    ...elvenShieldRecipe,
    leather: 1,
    refinedMoonstone: 4,
}
console.log('🚀 ~ file: index.js ~ line 6 ~ elvenShieldRecipe', elvenShieldRecipe);
console.log('🚀 ~ file: index.js ~ line 6 ~ elvenShieldRecipe', elvenGauntletsRecipe);

