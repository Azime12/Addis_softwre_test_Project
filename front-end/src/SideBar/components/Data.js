import {
    HomeIcon,
    LayoutIcon,
    CalendarIcon,
    InvoiceIcon,
    UserIcon,
    RolesIcon,
    PagesIcon,
    AuthIcon,
    WizardIcon,
    ModalIcon,
} from "./Icons";

import Home from "./Contents/Home";
import Container from "../../Components/Container";
import AddPlayList from "../../Components/FormComponers/AddPlayList"
export const SIDEBAR_DATA = [{
        id: 1,
        name: < Container / > ,
        title: "Home",
        path: "home",
        icon: < HomeIcon / > ,
        data: < Home / > ,
    },

    {
        id: 4,
        name: < Container / > ,
        title: "play list",
        path: "playlist",
        icon: < UserIcon / > ,
    },
    {
        id: 5,
        name: < AddPlayList / > ,
        title: "add list",
        path: "addList",
        icon: < InvoiceIcon / > ,
    },

];