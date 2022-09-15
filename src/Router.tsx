import { Route, Routes } from "react-router";
import { DefaultLayout } from "./Layout/default";
import { Characters } from "./pages/Characters";
import { CharacterCardInfo } from "./pages/Characters/components/CharacterCardInfo";
import { Episodes } from "./pages/Episodes";
import { Locations } from "./pages/Locations";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Characters />}/>
        <Route path="/Characters/Info" element={<CharacterCardInfo />} />
        <Route path="/Episodes" element={<Episodes />} />
        <Route path="/Locations" element={<Locations />} />
      </Route>
    </Routes>
  );
}
