import { defineStore } from "pinia";
import { ref } from "vue";

export const useTukStore = defineStore('tuk-store',()=>{
    const searchQuery = ref("")
    const tuk = ref( [
                {
                    "nama": "Kovacek, Hoppe and Thompson",
                    "ketua": "Maybell",
                    "alamat": "879 Ullrich Trail",
                    "telepon": "(383) 221-2017",
                    "email": "Adolf_Kunze@gmail.com"
                },
                {
                    "nama": "Schaden LLC",
                    "ketua": "Bertram",
                    "alamat": "076 Verona Locks",
                    "telepon": "411.512.7256",
                    "email": "Clay10@yahoo.com"
                },
                {
                    "nama": "Gottlieb and Sons",
                    "ketua": "Darlene",
                    "alamat": "35498 Kunde Haven",
                    "telepon": "(691) 761-1911 x51932",
                    "email": "Alfonso35@yahoo.com"
                },
                {
                    "nama": "Emmerich, Lakin and Blick",
                    "ketua": "Curt",
                    "alamat": "046 Myrtie Plains",
                    "telepon": "372.929.2916 x297",
                    "email": "Henriette_Heller35@yahoo.com"
                },
                {
                    "nama": "O'Reilly - Halvorson",
                    "ketua": "Isabell",
                    "alamat": "91713 Tremblay Way",
                    "telepon": "287.587.6308",
                    "email": "Bettye_Krajcik63@yahoo.com"
                },
                {
                    "nama": "Jacobi and Sons",
                    "ketua": "Demetris",
                    "alamat": "9524 Christiansen Skyway",
                    "telepon": "(859) 788-9098",
                    "email": "Loyal65@hotmail.com"
                },
                {
                    "nama": "Morissette - Anderson",
                    "ketua": "Paige",
                    "alamat": "25161 Goodwin Viaduct",
                    "telepon": "837.468.6519",
                    "email": "Jennyfer_Daniel@hotmail.com"
                },
                {
                    "nama": "Gulgowski and Sons",
                    "ketua": "Adriel",
                    "alamat": "98699 Ellen Port",
                    "telepon": "462.379.5216",
                    "email": "Adelle23@yahoo.com"
                },
                {
                    "nama": "Muller, Rogahn and Kutch",
                    "ketua": "Scarlett",
                    "alamat": "100 Marlee Island",
                    "telepon": "997.404.3781 x492",
                    "email": "Mekhi10@hotmail.com"
                },
                {
                    "nama": "Ankunding and Sons",
                    "ketua": "Efrain",
                    "alamat": "1884 Hirthe Mountain",
                    "telepon": "1-660-340-6385",
                    "email": "Floyd93@gmail.com"
                },
                {
                    "nama": "Casper, Hodkiewicz and Gleason",
                    "ketua": "Lew",
                    "alamat": "3233 Christiansen Stravenue",
                    "telepon": "1-796-787-1243 x65228",
                    "email": "Abel68@yahoo.com"
                },
                {
                    "nama": "Torp - Mills",
                    "ketua": "Roselyn",
                    "alamat": "4281 Wendy Points",
                    "telepon": "1-392-494-0495 x307",
                    "email": "Hilbert_Stiedemann@gmail.com"
                },
                {
                    "nama": "Lakin - Labadie",
                    "ketua": "Verna",
                    "alamat": "94583 Schamberger Bypass",
                    "telepon": "710-420-4202",
                    "email": "Hayden.Stoltenberg@gmail.com"
                },
                {
                    "nama": "Blanda and Sons",
                    "ketua": "Fay",
                    "alamat": "805 Ortiz Drive",
                    "telepon": "(202) 769-5766 x36530",
                    "email": "Paige83@gmail.com"
                },
                {
                    "nama": "Rippin, Witting and Lehner",
                    "ketua": "Alek",
                    "alamat": "11344 Gayle Orchard",
                    "telepon": "671-664-8536 x26552",
                    "email": "Watson_Prosacco86@gmail.com"
                },
                {
                    "nama": "Bernhard, Cartwright and Bartoletti",
                    "ketua": "Claudie",
                    "alamat": "52902 Watsica Freeway",
                    "telepon": "298-359-7802",
                    "email": "Emery62@hotmail.com"
                },
                {
                    "nama": "Keebler Group",
                    "ketua": "Imelda",
                    "alamat": "22430 Marie Fall",
                    "telepon": "770-248-0462 x3016",
                    "email": "Montana_Kihn@gmail.com"
                },
                {
                    "nama": "Watsica - Hoppe",
                    "ketua": "Alessandro",
                    "alamat": "4086 Vicky Underpass",
                    "telepon": "604.347.8005 x4819",
                    "email": "Effie10@yahoo.com"
                },
                {
                    "nama": "Price, Hegmann and Reichel",
                    "ketua": "May",
                    "alamat": "935 Bennett Road",
                    "telepon": "1-630-778-2488",
                    "email": "Jabari_Pfeffer82@yahoo.com"
                },
                {
                    "nama": "West Group",
                    "ketua": "Lottie",
                    "alamat": "6906 Jacinto Shores",
                    "telepon": "910.336.2745 x26287",
                    "email": "Stuart.Wilkinson28@hotmail.com"
                },
                {
                    "nama": "Hoeger, Stiedemann and Hahn",
                    "ketua": "Erwin",
                    "alamat": "507 Crona Knoll",
                    "telepon": "1-550-484-6353 x53830",
                    "email": "Barbara_Kuphal48@hotmail.com"
                },
                {
                    "nama": "Wolff, Hagenes and Ferry",
                    "ketua": "Retta",
                    "alamat": "65975 Rodriguez Forges",
                    "telepon": "1-350-610-1081",
                    "email": "Birdie9@yahoo.com"
                },
                {
                    "nama": "Hagenes LLC",
                    "ketua": "Nayeli",
                    "alamat": "4613 Kyle Street",
                    "telepon": "(654) 601-7454",
                    "email": "Isabelle_Keebler@hotmail.com"
                },
                {
                    "nama": "Stracke and Sons",
                    "ketua": "Cruz",
                    "alamat": "85514 Torrey Neck",
                    "telepon": "(919) 697-2516",
                    "email": "Yvette_Abernathy@yahoo.com"
                },
                {
                    "nama": "Prosacco - Schuster",
                    "ketua": "Ericka",
                    "alamat": "681 Boyer Radial",
                    "telepon": "(261) 730-3876 x7079",
                    "email": "Laurine_Padberg@gmail.com"
                },
                {
                    "nama": "Rice and Sons",
                    "ketua": "Johnpaul",
                    "alamat": "596 Lurline Oval",
                    "telepon": "391-836-4233 x60369",
                    "email": "Elaina.Bode@gmail.com"
                },
                {
                    "nama": "Rolfson, Runolfsdottir and Oberbrunner",
                    "ketua": "Ona",
                    "alamat": "844 Tania Pike",
                    "telepon": "1-553-916-6230 x2237",
                    "email": "Lilyan8@hotmail.com"
                },
                {
                    "nama": "Batz LLC",
                    "ketua": "Carole",
                    "alamat": "53182 Madison Gardens",
                    "telepon": "972-886-8702 x111",
                    "email": "Samanta_Cartwright@yahoo.com"
                },
                {
                    "nama": "Padberg, King and Howell",
                    "ketua": "Dandre",
                    "alamat": "963 Marge Locks",
                    "telepon": "1-770-743-6222 x020",
                    "email": "Maxine.Hane@hotmail.com"
                },
                {
                    "nama": "Sporer, Ferry and Padberg",
                    "ketua": "Kenyon",
                    "alamat": "4290 Frederic Meadow",
                    "telepon": "334.318.3786",
                    "email": "Tyrel25@gmail.com"
                },
                {
                    "nama": "Pollich Inc",
                    "ketua": "Opal",
                    "alamat": "09162 Hollie Fall",
                    "telepon": "937.313.8698",
                    "email": "Federico_Hane23@yahoo.com"
                },
                {
                    "nama": "Kassulke, Skiles and Keeling",
                    "ketua": "Ransom",
                    "alamat": "490 Isabel Harbors",
                    "telepon": "680.287.5649 x90438",
                    "email": "Maci_Kiehn93@hotmail.com"
                },
                {
                    "nama": "Corwin LLC",
                    "ketua": "Earnest",
                    "alamat": "416 Cayla Stream",
                    "telepon": "1-230-915-3698 x327",
                    "email": "Thomas_Klein2@gmail.com"
                },
                {
                    "nama": "McKenzie - Ortiz",
                    "ketua": "Herminio",
                    "alamat": "3259 Barry Ports",
                    "telepon": "952-861-0359 x656",
                    "email": "Agnes_Orn38@hotmail.com"
                },
                {
                    "nama": "Doyle and Sons",
                    "ketua": "Stacey",
                    "alamat": "404 Jones Rest",
                    "telepon": "490-912-4158 x9114",
                    "email": "Loren34@gmail.com"
                },
                {
                    "nama": "Murazik, Von and Bergnaum",
                    "ketua": "Ron",
                    "alamat": "7532 Willms Forge",
                    "telepon": "1-514-925-4688",
                    "email": "Edwardo95@yahoo.com"
                },
                {
                    "nama": "Klein, Doyle and Herzog",
                    "ketua": "Janick",
                    "alamat": "742 Fay Drive",
                    "telepon": "281.659.0674 x25335",
                    "email": "Elissa53@gmail.com"
                },
                {
                    "nama": "Grimes - Crona",
                    "ketua": "Lizzie",
                    "alamat": "75581 Ole Glen",
                    "telepon": "474-217-1625 x639",
                    "email": "Keon86@yahoo.com"
                },
                {
                    "nama": "Mueller, Hermann and Hane",
                    "ketua": "Darrick",
                    "alamat": "6989 Rick Wall",
                    "telepon": "1-549-490-3229 x714",
                    "email": "Randal.Robel87@yahoo.com"
                },
                {
                    "nama": "Littel - Stark",
                    "ketua": "Adolf",
                    "alamat": "134 Keeling Squares",
                    "telepon": "471-912-8677",
                    "email": "Darrin83@gmail.com"
                },
                {
                    "nama": "Turcotte Inc",
                    "ketua": "Kaci",
                    "alamat": "44172 Denesik Valley",
                    "telepon": "212.503.0450 x099",
                    "email": "Tyrese.Cartwright88@hotmail.com"
                },
                {
                    "nama": "Aufderhar, Zemlak and Kutch",
                    "ketua": "Kaylie",
                    "alamat": "08139 Antone Drive",
                    "telepon": "634-948-6646 x042",
                    "email": "Richie.Sporer44@gmail.com"
                },
                {
                    "nama": "Rosenbaum Group",
                    "ketua": "Daron",
                    "alamat": "29538 Stewart Orchard",
                    "telepon": "507.593.1628",
                    "email": "Nyah_Murphy17@gmail.com"
                },
                {
                    "nama": "Renner - Hudson",
                    "ketua": "Randi",
                    "alamat": "4738 Krajcik Valleys",
                    "telepon": "(582) 562-9328 x56297",
                    "email": "Maybelle.MacGyver51@yahoo.com"
                },
                {
                    "nama": "Ortiz LLC",
                    "ketua": "Judson",
                    "alamat": "2797 Bahringer Burg",
                    "telepon": "(206) 750-4012 x35417",
                    "email": "Isabelle54@gmail.com"
                },
                {
                    "nama": "Turner Group",
                    "ketua": "Dimitri",
                    "alamat": "1813 Dane Glens",
                    "telepon": "509.714.7989",
                    "email": "Della_Greenfelder@yahoo.com"
                },
                {
                    "nama": "Mueller, Yundt and Wisoky",
                    "ketua": "Gregoria",
                    "alamat": "0640 Llewellyn Plains",
                    "telepon": "1-244-364-2978 x54587",
                    "email": "Neha_Boehm38@hotmail.com"
                },
                {
                    "nama": "Sanford, Upton and Larson",
                    "ketua": "Weldon",
                    "alamat": "729 Lakin Walk",
                    "telepon": "768.592.5244 x117",
                    "email": "Tavares.Schuster14@yahoo.com"
                },
                {
                    "nama": "Abshire Inc",
                    "ketua": "Gerry",
                    "alamat": "86859 Dickens Mountain",
                    "telepon": "255.996.7744 x033",
                    "email": "Lorenz19@gmail.com"
                },
                {
                    "nama": "Jenkins Group",
                    "ketua": "Amari",
                    "alamat": "3819 Idella Port",
                    "telepon": "242-892-6452 x28918",
                    "email": "Brennan.Johns29@yahoo.com"
                }
            ]
    )

    return {
        searchQuery,
        tuk
    }
})