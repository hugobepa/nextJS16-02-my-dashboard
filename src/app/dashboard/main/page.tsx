//https://redux-toolkit.js.org/introduction/getting-started

import { SimpleWidget, WidgetsGrid } from "@/components";


export const metadata = {
 title: 'Admin Dashboard',
 description: 'SEO TitleDuis ipsum exercitation amet ex eu exercitation irure consequat incididunt aliquip ut.',
};

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl">Informacion general</span>

        <WidgetsGrid />
    </div>
  );
}
