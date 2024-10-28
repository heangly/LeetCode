// https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/
const findAllRecipes = (
  recipes: string[],
  ingredients: string[][],
  supplies: string[]
): string[] => {
  const ans: string[] = []
  const set = new Set(supplies)

  let i = 0

  while (i < recipes.length) {
    if (recipes[i] === '') {
      i++
      continue
    }

    let hasFullIngredient = true

    for (const ingredient of ingredients[i]) {
      if (!set.has(ingredient)) {
        hasFullIngredient = false
        break
      }
    }

    if (hasFullIngredient) {
      ans.push(recipes[i])
      set.add(recipes[i])
      recipes[i] = ''
      i = -1
    }

    i++
  }

  return ans
}

const recipes = ['bread', 'sandwich']
const ingredients = [
  ['yeast', 'flour'],
  ['bread', 'meat']
]
const supplies = ['yeast', 'flour', 'meat']

console.log(findAllRecipes(recipes, ingredients, supplies))

export {}
