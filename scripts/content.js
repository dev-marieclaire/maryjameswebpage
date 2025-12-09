const text =
[
    {
        nom: "sumarized_aboutme",
        txt_container: "Hi, and welcome to the website that I will use as an archive for my work.\n\n",
        prolongation: "I started living (which isn't really my thing) on October 10, 2007. When I was 8 years old, I joined a local orchestra in a town I lived in back then. Then, after I got back to my city when I was 11, I started learning the violin.\n" +
        "I started learning programming when I was 12 because I was curious about how computer software and hardware worked. Around that same time, I also got into composing. \n\nNowadays composing and programming are two things I'm still actively involved in and really enjoy."
    },
    {
        nom: "common_questions",
        txt_container:
        [
            "How old are you? \n· I am currently 18 years old (I was born on October 10th, 2007).\n\n" +
            "In which country do you live? \n· In Mexico.\n\n"
        ],
        prolongation:
        [
            "Have you studied software development?\n· Yes, I have; and I am currently getting a degree in it.\n\n" +
            "Do you have any certificate with curricular value?\n· Yes, I own the CCNA certification.\n\n" +
            "Do you play any instrument? \n· Yes, I do. I am a classical guitarrist.\n\n" +
            "Have you studied music? \n· Yes, I have studied performance on local orchestras and, lately, I entered a pitch-class set course with the Dr. Agustín Calabrese."
        ]
    }
];

const ouvre =
[
    [
        {
            nom: "Set of Three Miniatures for the Fortepiano (Op. 1)",
            couverture: "./img/Op. 1_lower.png",
            stream_lien: "https://maryjamesmusic.bandcamp.com/album/conjunto-de-tres-miniaturas-para-el-fortepiano-op-1",
            partition_lien: "./PDF/Op. 1.pdf"
        },
        {
            nom: "Two submissions (Op. 2)",
            couverture: "./img/Op. 2_lower.png",
            stream_lien: "https://maryjamesmusic.bandcamp.com/album/dos-propuestas-musicales-op-2",
            partition_lien: "./PDF/Op. 2.pdf"
        },
        {
            nom: "Set of Three Miniatures for an Upcoming Ending (Op. 3)",
            couverture: "./img/Op. 3_lower.png",
            stream_lien: "https://maryjamesmusic.bandcamp.com/album/tres-piezas-microtonales-para-un-final-pr-ximo-op-3",
            partition_lien: "./PDF/Op. 3.pdf"
        },
        {
            nom: "Suite (Op. 4)",
            couverture: "./img/Op. 4_lower.png",
            stream_lien: null,
            partition_lien: null
        }
    ]
];

const im =
[
    {
        nom: "Landscape with Snow",
        auteur_e: "Pierre-Auguste Renoir",
        lien: "https://uploads2.wikiart.org/images/pierre-auguste-renoir/landscape-with-snow.jpg"
    },
    {
        nom: "Vorfrühling",
        auteur_e: "Kolo Moser",
        lien: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Kolo_Moser_-_Vorfr%C3%BChling1_-_1900.jpeg"
    },
    {
        nom: "Isle of Shoals",
        auteur_e: "Childe Hassam",
        lien: "https://uploads8.wikiart.org/images/childe-hassam/isles-of-shoals.jpg"
    },
    {
        nom: "Paysage montagneux",
        auteur_e: "Robert Delaunay",
        lier: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Robert_Delaunay_Paysage_montagneux_1904.jpg"
    },
    {
        nom: "Water Lilies and Japanese Bridge",
        auteur_e: "Claude Monet",
        lier: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/The_Water-Lily_Pond_-_Google_Arts_%26_Culture.jpg/1043px-The_Water-Lily_Pond_-_Google_Arts_%26_Culture.jpg"
    },
    // The one used in "The Snow is Dancing" is pending.
    // The one used in "Microtonal Miniatures" is pending.
    {
        nom: "Bridge Over a River",
        auteur_e: "Santiago Rusiñol",
        lier: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Santiago_Rusi%C3%B1ol_-_Bridge_over_a_River_-_Google_Art_Project.jpg"
    },
    {
        nom: "Garden of Montmartre",
        auteur_e: "Santiago Rusiñol",
        lier: "https://upload.wikimedia.org/wikipedia/commons/7/73/Santiago_Rusi%C3%B1ol_-_Garden_of_Montmartre_-_Google_Art_Project.jpg"
    },
    {
        nom: "The Daughters of Edward Darley Boit",
        auteur_e: "John Singer Sargent",
        lier: "https://upload.wikimedia.org/wikipedia/commons/9/96/The_Daughters_of_Edward_Darley_Boit%2C_John_Singer_Sargent%2C_1882_%28unfree_frame_crop%29.jpg"
    },
    {
        nom: "Les Glacons",
        auteur_e: "Claude Monet",
        lier: "https://commons.wikimedia.org/wiki/File:Claude_Monet_-_Les_Glacons.jpg"
    },
    // The one used in "Suite no. 0: 1st movement" is pending.
    {
        nom: "Muralla Verde",
        auteur_e: "Santiago Rusiñol",
        lier: "https://upload.wikimedia.org/wikipedia/commons/8/81/Rusi%C3%B1ol_en_MNCARS.jpg"
    },
    {
        nom: "Carnation, Lily, Lily, Rose",
        auteur_e: "John Singer Sargent",
        lier: "https://upload.wikimedia.org/wikipedia/commons/e/ed/John_Singer_Sargent_-_Carnation%2C_Lily%2C_Lily%2C_Rose_-_Google_Art_Project.jpg"
    },
    {
        nom: "Glorieta al Atardecer",
        auteur_e: "Santiago Rusiñol",
        lier: "https://upload.wikimedia.org/wikipedia/commons/1/14/Santiago_Rusi%C3%B1ol_%2C1913_-_Glorieta_al_atardecer%2C_Oil_on_canvas%2C_82x99_cm.jpg"
    },
    {
        nom: "Carrer de Rouen",
        auteur_e: "Santiago Rusiñol",
        lier: "https://upload.wikimedia.org/wikipedia/commons/3/34/Carrer_de_Rouen.JPG"
    },
    {
        nom: "Son Moragues",
        auteur_e: "Santiago Rusiñol",
        lier: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Santiago_Rusi%C3%B1ol-Son_Moragues.jpg"
    },
    {
        nom: "The Spreading",
        auteur_e: "George Clausen",
        lier: "https://upload.wikimedia.org/wikipedia/commons/d/d2/George_Clausen_-_The_spreading_tree.jpg"
    },
    {
        nom: "The Landing Stage",
        auteur_e: "Santiago Rusiñol",
        lier: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Santiago_Rusi%C3%B1ol_-_The_Landing_Stage_-_Google_Art_Project.jpg"
    },
    {
        nom: "The River Seine at la Grande-jatte",
        auteur_e: "Georges Seurat",
        lier: "https://uploads6.wikiart.org/images/georges-seurat/the-river-seine-at-la-grande-jatte-1888.jpg"
    },
    {
        nom: "Camino de Rosas",
        auteur_e: "Santiago Rusiñol",
        lier: "https://upload.wikimedia.org/wikipedia/commons/5/54/Camino_de_rosas_-_Santiago_Rusi%C3%B1ol.jpg"
    },
    {
        nom: "Satie Logis",
        auteur_e: "Santiago Rusiñol",
        lier: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Satie_Logis%2C_Santiago_Rusinol%2C_1891.jpg"
    },
    {
        nom: "La Butte",
        auteur_e: "Santiago Rusiñol",
        lier: "https://upload.wikimedia.org/wikipedia/commons/3/34/Santiago_Rusinol_La_Butte.jpg"
    },
    {
        nom: "Female Figure",
        auteur_e: "Santiago Rusiñol",
        lier: "https://upload.wikimedia.org/wikipedia/commons/0/08/%28Barcelona%29_Figura_femenina_-_Santiago_Rusi%C3%B1ol_-_Museu_Nacional_d%27Art_de_Catalunya.jpg"
    },
    {
        nom: "Le Bohemi",
        auteur_e: "Ramón Casas",
        lier: "https://upload.wikimedia.org/wikipedia/commons/0/0a/El_bohemi_by_Ramon_Casas.jpg"
    },
    {
        nom: "Impression, Sunrise",
        auteur_e: "Claude Monet",
        lier: "https://upload.wikimedia.org/wikipedia/commons/5/59/Monet_-_Impression%2C_Sunrise.jpg"
    },
    {
        nom: "Woman with a Parasol / Madame Monet and Her Son",
        auteur_e: "Claude Monet",
        lier: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Claude_Monet_-_Woman_with_a_Parasol_-_Madame_Monet_and_Her_Son_-_Google_Art_Project.jpg"
    }
    // {
    //     nom: ,
    //     auteur_e: "",
    //     lier: ""
    // },
]

window.onload = function()
{
    let txt_container = document.getElementById("txt_container");
    let ouvre_container = document.getElementById("ouvre_container");
    let im_container = document.getElementById("im_container");

    // Sets the default text.
    var current_text = text[0];
    txt_container.innerText = current_text.txt_container+current_text.prolongation;

    onclick = event =>
    {
        if (event.target.id == "faq_button")
        {
            im_container.innerHTML = ouvre_container.innerHTML = '';
            current_text = text[1];
            txt_container.innerText = current_text.txt_container+current_text.prolongation;
        }
        if (event.target.id == "home_button")
        {
            im_container.innerHTML = ouvre_container.innerHTML = '';
            current_text = text[0];
            txt_container.innerText = current_text.txt_container+current_text.prolongation;
        }
        if (event.target.id == "gallery_button")
        {
            im_container.innerHTML = ouvre_container.innerHTML = '';
            for (i = 0; i<im.length; i++)
            {
                let im_item = document.createElement("img");
                im_item.src = im[i].lien;
                im_item.title = im[i].nom + " made by " + im[i].auteur_e;
                im_container.appendChild(im_item);
            }
        }
        if (event.target.id == "works_button")
        {
            txt_container.innerText = im_container.innerHTML = '';
            for (i = 0; i<ouvre[0].length; i++)
            {
                // Creates the item.
                let fiche = document.createElement("div");
                fiche.setAttribute("class", "content_item");

                // Creates a container for the cover image.
                let couverture_container = document.createElement("div");
                couverture_container.setAttribute("class", "couverture_container");

                // Creates a container for the links.
                let lien_container = document.createElement("div");
                lien_container.setAttribute("class", "lien_container");

                // item_nom (h) holds the title of the ouvre.
                // item_couverture (img) is for the cover image.
                // item_stream (a) is for the stream link.
                // item_partition (a) is for the sheet music link.
                let item_nom = document.createElement("h");
                let item_couverture = document.createElement("img");
                let item_stream = document.createElement("a");
                let item_partition = document.createElement("a");

                // Introduces the title and cover information on their respective HTML element.
                item_nom.innerText = ouvre[0][i].nom;
                item_couverture.src = ouvre[0][i].couverture;

                // In case the work is unfinished but anounced (aka. WIP),
                // the stream and sheet music download links are set to null.
                // the conditionals avoid the link texts to be displayed.
                if (ouvre[0][i].stream_lien != null)
                {
                    item_stream.href = ouvre[0][i].stream_lien;
                    item_stream.innerText = "Stream here";
                }
                
                if (ouvre[0][i].partition_lien != null)
                {
                    item_partition.href = ouvre[0][i].partition_lien;
                    item_partition.innerText = "Sheet music download (free!)";
                }

                // if (ouvre[0][i].stream_lien != null && ouvre[0][i].partition_lien != null)
                //     partition_item.innerText = "Comming soon.";

                // if the item needs a container for appropiate align, it gets added to a child element first.
                couverture_container.appendChild(item_couverture);
                lien_container.appendChild(item_stream);
                lien_container.appendChild(item_partition);

                // Then, that child is added to the tree of the work's respective card.
                fiche.appendChild(couverture_container);
                fiche.appendChild(item_nom);
                fiche.appendChild(lien_container);

                // To finally, insert the card inside the main canvas.
                ouvre_container.appendChild(fiche);
            }
        }
    }
}
