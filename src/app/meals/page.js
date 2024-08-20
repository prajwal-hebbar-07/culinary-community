import MealsGrid from "@/components/meals/meals-grid";
import MealsHero from "@/components/meals/meals-hero";

import { getMeals } from "@/lib/meals";

export default async function MealsPage() {
  const meals = await getMeals();
  return (
    <div className="md:container mt-8">
      <section>
        <MealsHero />
      </section>
      <section className="mt-16 mb-8 mx-16">
        <MealsGrid meals={meals} />
      </section>
    </div>
  );
}
