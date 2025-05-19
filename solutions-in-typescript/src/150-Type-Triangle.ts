function triangleType(nums: number[]): string {
  if (!isTriangle(nums)) return 'none'
  const uniqueSides = new Set(nums).size
  return uniqueSides === 1 ? 'equilateral' : uniqueSides === 2 ? 'isosceles' : 'scalene'
}

const isTriangle = (nums: number[]) => {
  const caseOne = nums[0] + nums[1] > nums[2]
  const caseTwo = nums[0] + nums[2] > nums[1]
  const caseThree = nums[1] + nums[2] > nums[0]
  return caseOne && caseTwo && caseThree
}
