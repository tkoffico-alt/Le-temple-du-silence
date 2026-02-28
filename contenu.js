/* =========================================================
   LE MANUSCRIT DU TEMPLE (Base de données des textes)
   Ajoute tes nouveaux articles, murmures et paraboles ici.
========================================================= */

const PODCASTS_DATABASE = {
    fr: [{
        title: "La Mécanique de l'Extase",
        audioFile: "podcast_fr_1.mp3",
        transcript: "Ceci est la transcription intégrale du premier podcast. Le silence intérieur s'installe non par l'effort, mais par la régularité biquotidienne..."
    }],
    en: [{
        title: "The Mechanics of Ecstasy",
        audioFile: "podcast_en_1.mp3",
        transcript: "This is the full transcript of the first podcast. Inner silence settles not through effort, but through twice-daily regularity..."
    }]
};

const MURMURES_DATABASE = {
    fr: [
        {
            title: "La Boussole du Silence",
            audioFile: "boussole.mp3",
            imageFile: "paysage.jpg",
            videoFile: "video_boussole.mp4",
            text: "Voyageur, ne cherche pas ta voie dans le tumulte de la tempête. Une direction intérieure véritable ne hurle jamais avec l'émotion. L'urgence et la peur ne t'offrent qu'une clarté illusoire qui s'évapore avec le vent. La boussole du Soi se lit dans l'immobilité : la voie juste est celle qui demeure intelligible lorsque ton cœur cesse de s'emballer."
        },
        {
            title: "Le Roseau et l'Orage",
            audioFile: "", 
            imageFile: "",
            videoFile: "",
            text: "Tu t'épuises à bâtir des forteresses. Dans ton effort constant pour te rendre invulnérable, ton corps se crispe et ton souffle se verrouille. Comprends ceci : la véritable force ne réside pas dans l'armure. Elle s'éveille à l'instant même où tu cesses de lutter contre le fait d'être affecté. Laisse l'impact traverser ton système nerveux comme le vent traverse les feuilles."
        }
    ],
    en: [
        {
            title: "The Compass of Silence",
            audioFile: "",
            imageFile: "",
            videoFile: "",
            text: "Traveler, do not seek your path in the tumult of the storm. A true inner direction never howls with emotion. Urgency and fear offer only an illusory clarity that evaporates with the wind. The compass of the Self is read in stillness: the right path is the one that remains intelligible when your heart stops racing."
        },
        {
            title: "The Reed and the Storm",
            audioFile: "",
            imageFile: "",
            videoFile: "",
            text: "You exhaust yourself building fortresses. In your constant effort to make yourself invulnerable, your body tenses and your breath locks. Understand this: true strength does not reside in armor. It awakens the very moment you stop fighting the fact of being affected. Let the impact pass through your nervous system like the wind through the leaves."
        }
    ]
};

const parableData = {
    fr: {
        title: "Au-delà de la Rivière — Une Parabole sur l’Appel Intérieur",
        body: `<p>Il y a des lieux où personne n’ose plus aller. Des frontières invisibles, marquées non par des murs, mais par des récits anciens — des récits de peur.</p><p>Dans un village reculé, au cœur de la savane, vivait un jeune homme nommé Kofi. Il n’avait ni la stature des guerriers, ni le prestige des anciens. Mais il portait en lui une question qui ne le quittait jamais : que se cache-t-il au-delà de ce que l’on croit savoir ?</p><p>Un jour, cette question prit chair.</p><p>La fille du chef, Adwoa, fut frappée d’un mal mystérieux. Les prières, les soins, rien n’y faisait. Le guérisseur consulta les oracles, qui désignèrent un remède oublié : une plante rare, cachée au plus profond de la forêt, de l’autre côté de la rivière sacrée. Mais cette forêt, disaient les anciens, était hantée. Un territoire d’esprits dévoreurs d’âmes, que l’homme sage ne franchit pas.</p><p>Le chef promit richesses et honneurs à quiconque oserait s’y aventurer. Les plus braves reculèrent. La peur, nourrie de récits, était plus forte que la promesse d’or. Tous refusèrent. Tous, sauf Kofi.</p><p>Il ne demandait rien. Ni gloire, ni récompense. Ce qu’il entendait en lui, c’était ce silence profond, qui ne marchande pas, mais qui dit simplement : avance. Il prit une gourde d’eau, une amulette offerte par sa mère, et marcha vers la rivière. Là, il s’arrêta. L’eau était limpide, mais à ses yeux, elle était autre chose : une frontière symbolique. La limite entre le connu et l’inconnu.</p><p>Il ferma les yeux. Non pour fuir, mais pour écouter plus loin que ses pensées. Puis il traversa.</p><p>De l’autre côté, la forêt l’enveloppa. Mais il n’y trouva ni esprits, ni cris. Seulement une présence. La terre sous ses pas était dense, vivante. Le vent chantait dans les feuillages. Ce qui devait être un territoire d’ombres était en réalité un sanctuaire oublié.</p><p>Au cœur de cette paix, Kofi rencontra un vieil homme, assis au pied d’un arbre immense. Sa peau semblait sculptée par le temps. Ses yeux portaient la lumière des nuits sans nuages.</p><p>— Pourquoi viens-tu, marcheur ? demanda-t-il.<br>Kofi raconta son histoire.<br>Le sage écouta, puis montra une plante discrète à ses pieds.</p><p>— Voici ce que tu cherches. Mais souviens-toi : ce n’est pas la forêt qui dévore les âmes. Ce sont les désirs non maîtrisés des hommes. Les anciens ont semé des récits de peur pour protéger ce lieu sacré de la convoitise. Mais ceux qui viennent avec un cœur pur n’y trouvent rien d’autre que ce qu’ils portent déjà en eux.</p><p>Kofi prit la plante, remercia et repartit. Lorsqu’il franchit à nouveau la rivière, un silence épais s’abattit sur le village. Adwoa fut guérie. Les anciens, d’un regard fuyant, comprirent ce qu’ils avaient oublié.</p><p>Ce jour-là, le village reçut une vérité simple, qui passa de bouche en bouche, mais dont la compréhension appartient à ceux qui osent la vivre :</p><p><strong>“Les oreilles entendent les peurs des autres, mais seuls les yeux du cœur voient la vérité.”</strong></p><p>Chacun d’entre nous est appelé, un jour ou l’autre, à s’approcher de cette rivière intérieure. À franchir la frontière des peurs héritées. À entrer dans cette forêt qui, derrière les ombres projetées par notre mental, cache un espace de paix inaltérable.</p><p>La véritable initiation commence là.</p><p>La forêt n’a jamais été dangereuse. Ce sont nos histoires qui l’ont rendue hostile. Ce que nous cherchons ne se trouve pas ailleurs. Il est en nous, depuis toujours, mais voilé par le tumulte de nos désirs et de nos résistances.</p><p>Traverse. Écoute. Pratique.<br>Le reste suivra.</p>
        <div style="text-align: right; margin-top: 50px; font-style: italic; font-size: 1.1rem; color: var(--couleur-accent);">
            <span>🪷 Œuvre Originale & Propriété</span>
        </div>`
    },
    en: {
        title: "Beyond the River — A Parable on the Inner Calling",
        body: `<p>There are places where no one dares to go anymore. Invisible borders, marked not by walls, but by ancient tales — tales of fear.</p><p>In a remote village, in the heart of the savanna, lived a young man named Kofi. He had neither the stature of warriors nor the prestige of elders. But he carried within him a question that never left him: what lies beyond what we think we know?</p><p>One day, this question took form.</p><p>The chief's daughter, Adwoa, was struck by a mysterious illness. Prayers and treatments were in vain. The healer consulted the oracles, who pointed to a forgotten remedy: a rare plant, hidden deep in the forest, on the other side of the sacred river. But this forest, the elders said, was haunted. A territory of soul-devouring spirits, which the wise man does not cross.</p><p>The chief promised wealth and honors to anyone who dared venture there. The bravest retreated. Fear, fed by stories, was stronger than the promise of gold. All refused. All, except Kofi.</p><p>He asked for nothing. Neither glory nor reward. What he heard within him was that deep silence, which does not bargain, but simply says: move forward. He took a water gourd, an amulet given by his mother, and walked toward the river. There, he stopped. The water was crystal clear, but to his eyes, it was something else: a symbolic border. The limit between the known and the unknown.</p><p>He closed his eyes. Not to flee, but to listen beyond his thoughts. Then he crossed.</p><p>On the other side, the forest enveloped him. But he found neither spirits nor screams. Only a presence. The earth beneath his steps was dense, alive. The wind sang in the leaves. What was supposed to be a territory of shadows was in reality a forgotten sanctuary.</p><p>In the heart of this peace, Kofi met an old man, sitting at the foot of an immense tree. His skin seemed sculpted by time. His eyes carried the light of cloudless nights.</p><p>— Why do you come, walker? he asked.<br>Kofi told his story.<br>The sage listened, then pointed to a discreet plant at his feet.</p><p>— Here is what you seek. But remember: it is not the forest that devours souls. It is the uncontrolled desires of men. The elders sowed tales of fear to protect this sacred place from greed. But those who come with a pure heart find nothing else there but what they already carry within themselves.</p><p>Kofi took the plant, gave thanks, and left. When he crossed the river again, a thick silence fell upon the village. Adwoa was healed. The elders, with a fleeting gaze, understood what they had forgotten.</p><p>That day, the village received a simple truth, which passed from mouth to mouth, but whose understanding belongs to those who dare to live it:</p><p><strong>“Ears hear the fears of others, but only the eyes of the heart see the truth.”</strong></p><p>Each of us is called, one day or another, to approach this inner river. To cross the border of inherited fears. To enter this forest which, behind the shadows projected by our mind, hides a space of unalterable peace.</p><p>True initiation begins there.</p><p>The forest was never dangerous. It is our stories that made it hostile. What we seek is not found elsewhere. It has been within us, always, but veiled by the tumult of our desires and our resistances.</p><p>Cross. Listen. Practice.<br>The rest will follow.</p>
        <div style="text-align: right; margin-top: 50px; font-style: italic; font-size: 1.1rem; color: var(--couleur-accent);">
            <span>🪷 Original Work & Property</span>
        </div>`
    }
};

const teachingData = {
    fr: {
        title: "L’éveil du Silence Intérieur : La Fondation Inébranlable",
        body: `
            <p>Le Silence intérieur n’est pas quelque chose que l’on crée. Il n’est ni le résultat d’un effort mental, ni un état de vide que l'on imposerait par la force. Au début du chemin, nous cherchons souvent à discipliner l'esprit, à le forcer à se taire, mais cette stratégie produit l'effet inverse.</p>
            
            <p>Ce silence n'est ni une concentration tendue, ni un retrait du monde. C'est une présence dynamique, un roc de conscience pure qui réside naturellement en nous. En chacun existe une zone intacte, stable, qui n'a jamais été perturbée par les événements ou les blessures. Elle n'est pas produite par la pratique : la pratique ne fait que la révéler.</p>

            <h3 style="color: var(--couleur-accent); margin-top: 40px; text-align: left;">La Mécanique de l'Éveil : Régularité avant Intensité</h3>
            <p>La graine de ce silence se dévoile progressivement. L’éveil repose sur un principe physiologique fondamental : la régularité est bien plus importante que l’intensité.</p>
            <p><strong>La Méditation Profonde :</strong> L'outil pour éveiller ce silence est une pratique simple et sans effort. En utilisant doucement un mantra, l'esprit est autorisé à plonger vers l'intérieur, transcendant l'agitation de surface.</p>
            <p><strong>L'Effet Cumulatif :</strong> Un peu de pratique, chaque jour, permet au système nerveux de s'habituer à un état de repos conscient très profond. Le silence s'installe par gouttes. Il ne surgit pas comme une rupture violente, mais comme une évidence tranquille qui devient familière.</p>

            <h3 style="color: var(--couleur-accent); margin-top: 40px; text-align: left;">Purification et Émergence du Témoin</h3>
            <p>L'éveil n'est pas qu'un concept psychologique, c'est un nettoyage biologique. À mesure que l'on descend dans le silence, le système nerveux dissout ses blocages accumulés.</p>
            <p><strong>Le Processus de Libération :</strong> Ce repos profond met en lumière ce qui était enfoui. Anciennes tensions et résistances peuvent remonter à la surface. Le Silence n'élimine pas immédiatement les conditionnements, il les dévoile pour qu'ils se dissolvent. Il n'y a rien à analyser ; il suffit de continuer la pratique avec douceur et de laisser le Silence faire son travail.</p>
            <p><strong>Le Témoin Inébranlable :</strong> À mesure que le système nerveux se purifie, un changement subtil se produit : nous cessons de nous identifier entièrement à la surface de la vie. Quelque chose en nous observe, sans juger. Les pensées passent, les émotions circulent, mais le témoin demeure, profondément vivant et disponible.</p>

            <h3 style="color: var(--couleur-accent); margin-top: 40px; text-align: left;">Le Silence en Action : Une Base, Pas un Sommet</h3>
            <p>Le véritable test du silence ne se fait pas les yeux fermés sur un coussin, mais au cœur de l'activité quotidienne.</p>
            <p><strong>Le Cycle Pratique-Action :</strong> L'action permet au système nerveux de métaboliser l'énergie libérée en méditation. Avec le temps, le Silence ne reste plus confiné aux moments formels ; il accompagne la parole, le travail et les relations.</p>
            <p><strong>La Cohérence Intérieure :</strong> L'action devient plus simple, les décisions émergent avec moins de conflit. La vie est vécue avec plus de fluidité.</p>
            <p><strong>La Fondation :</strong> Le Silence intérieur n’est pas la fin du chemin, il en est la base stable. À partir de lui, l'amour s'exprime plus librement et l'intelligence devient plus fine. Il ne retire rien à la vie, il lui permet enfin de circuler sans entrave.</p>
            
            <div style="text-align: right; margin-top: 50px; font-style: italic; font-size: 1.1rem; color: var(--couleur-accent);">
                <span>🪷 Œuvre Originale & Propriété</span>
            </div>
        `
    },
    en: {
        title: "The Awakening of Inner Silence: The Unshakable Foundation",
        body: `<p style="font-style:italic; opacity:0.7; text-align:center;">Translation coming soon...</p>
        <div style="text-align: right; margin-top: 50px; font-style: italic; font-size: 1.1rem; color: var(--couleur-accent);">
            <span>🪷 Original Work & Property</span>
        </div>`
    }
};

const sageBrain = {
    fr: {
        meditation: {
            core: [
                "Le Témoin Silencieux observe le tumulte sans jamais y plonger. L'immobilité est sa seule arme.", 
                "Le silence intérieur ne se capture pas par la force. Il s'installe délicatement, comme la rosée du matin.",
                "La pensée n'est que l'écume ; ne lutte pas contre elle, plonge simplement vers les profondeurs de l'océan.",
                "Le mantra n'est pas un bouclier contre le monde, mais un véhicule d'une douceur infinie vers ton centre.",
                "L'immobilité n'est pas l'absence d'action, c'est la source vibrante d'où jaillit le Soi Intérieur."
            ],
            science: ["Même les érudits de ce temps découvrent que cette immobilité n'est pas un vide, mais un baume pour le système nerveux.", "La recherche confirme qu'une assise immobile abaisse la fréquence cardiaque, ouvrant les portes de la véritable guérison."],
            pacing: ["Ne forcez pas le fleuve à couler plus vite. La goutte d'eau finit par percer la pierre la plus dure.", "Laissez la nature accomplir son œuvre. L'auto-rythme est le gardien bienveillant de votre évolution."]
        },
        kundalini: {
            core: [
                "La Kundalini est le serpent de feu sacré qui dort à la base de ta montagne intérieure.", 
                "Ne poursuis pas les frissons de l'extase, ils ne sont que l'écho de la purification de tes canaux.",
                "L'énergie suit la conscience. Cultive le silence du Témoin, et le flot divin trouvera naturellement son chemin."
            ],
            science: ["Ce feu intérieur est la pure conductivité de tes nerfs, une réorganisation profonde observée comme la danse plastique du nerf vague.", "Ce que les anciens appelaient l'éveil est la magnifique synchronisation cohérente des ondes cérébrales à travers le corps."],
            pacing: ["Mais prends garde, voyageur. Si la chaleur te consume, tu dois t'arrêter. Le feu doit réchauffer le foyer, non l'incendier.", "Le secret de l'intégration est une infinie douceur. N'enfonce jamais les portes de ton propre temple."]
        },
        samyama: {
            core: [
                "Le Samyama est le murmure du vent dans une vallée silencieuse. Dépose la graine et éloigne-toi.", 
                "L'attente est le poison de la manifestation ; seul l'oubli bienveillant permet à la magie du sutra d'opérer.",
                "Saisir l'intention, c'est l'étouffer. La relâcher dans l'immobilité du Témoin, c'est lui donner vie."
            ],
            science: ["C'est une mécanique vertigineuse : l'observation fige la particule, l'oubli bienveillant permet l'expansion de l'onde.", "Ce lâcher-prise total permet à tes processus inconscients de tisser la réalité bien au-delà de ta cognition frontale."],
            pacing: ["Si une douleur étreint ton front, relâche ton emprise immédiatement.", "N'attends aucun prodige dans l'instant. L'auto-rythme exige un abandon absolu à sa propre heure."]
        },
        respiration: {
            core: [
                "Le souffle spinal est le pont invisible entre ton esprit égaré et ton âme éveillée.", 
                "Cette inspiration lente balaye la poussière avant l'entrée dans le grand temple de la méditation.",
                "Ne force pas l'air. Invite-le à parcourir le fil d'or de ta colonne vertébrale avec une douceur royale."
            ],
            science: ["Ce va-et-vient conscient apaise le cœur, module ton tonus vagal et synchronise ton rythme avec l'univers.", "Cette lenteur majestueuse optimise et harmonise la danse de tes fluides cérébro-spinaux."],
            pacing: ["Si l'angoisse vient brouiller ton souffle, sois doux comme la brise du soir.", "Ne retiens jamais ton souffle si ton corps te supplie de respirer."]
        },
        kechari: {
            core: [
                "Kechari Mudra est l'interrupteur divin qui court-circuite la mortalité pour éveiller le nectar céleste.",
                "La langue repliée n'est qu'un symbole extérieur de l'esprit qui se retourne pour s'absorber dans sa propre source.",
                "Ne tire pas sur la langue avec force. Laisse l'ambroisie du silence l'attirer naturellement vers le haut."
            ],
            science: ["Cette union anatomique ferme le circuit entre le canal central et le cerveau glandulaire, inondant le corps d'endorphines.", "En stimulant directement les plexus supérieurs, Kechari pacifie instantanément le chaos du système nerveux sympathique."],
            pacing: ["Si la tension est trop vive, redescends la langue. La porte s'ouvrira quand les charnières seront prêtes.", "La douceur est la clé des royaumes supérieurs. Laisse le temps fondre les dernières barrières."]
        },
        universel: { 
            core: [
                "La véritable sagesse commence là où s'arrêtent nos certitudes. Questionner l'existence, c'est déjà y participer pleinement.",
                "Nous ne voyons pas le monde tel qu'il est, mais tel que nous sommes. Éclaircir son propre regard, c'est illuminer l'univers.",
                "Ce qui résiste persiste. Accepter le cours naturel des événements est le premier pas vers la véritable liberté intérieure.",
                "Le fleuve de la vie coule à travers toutes les traditions et toutes les vallées. Bois simplement à la source qui étanche ta soif.",
                "L'univers n'est pas à l'extérieur de toi. Regarde profondément dans les yeux de l'instant, et tu y trouveras toutes les étoiles."
            ],
            science: ["La philosophie universelle nous rappelle que l'homme est le microcosme du macrocosme : nos lois intérieures reflètent la mécanique des astres.", "La quête de sens est une nécessité vitale, inscrite au cœur même de notre architecture humaine."],
            pacing: ["La réponse viendra quand tu cesseras de la poursuivre avec tant d'acharnement.", "Sois patient avec tout ce qui n'est pas résolu dans ton cœur. Essaye d'aimer les questions elles-mêmes."]
        }
    },
    en: {
        meditation: {
            core: ["The Silent Witness observes the chaos without ever diving in. Stillness is its only weapon.", "Inner silence cannot be captured by force. It settles delicately.", "Thought is but foam; dive into the depths of the ocean.", "The mantra is a vehicle of infinite sweetness toward your center.", "Stillness is the vibrant source from which the Inner Self springs."],
            science: ["Stillness is a balm for the nervous system.", "Sitting still drastically lowers the heart rate, opening doors to true healing."],
            pacing: ["Do not force the river. The drop of water pierces the hardest stone.", "Let nature perform its work. Self-pacing is your guardian."]
        },
        kundalini: {
            core: ["Kundalini is the sacred fire sleeping at the base of your inner mountain.", "Do not chase ecstasy, it is merely the echo of purified channels.", "Energy follows consciousness. Cultivate the Witness, and the divine flow will find its way."],
            science: ["This fire is pure conductivity, a profound reorganization of the vagus nerve.", "Awakening is the magnificent synchronization of brainwaves."],
            pacing: ["If heat consumes you, you must stop. Warm the hearth, do not burn it down.", "The secret is infinite gentleness. Never kick down your own doors."]
        },
        samyama: {
            core: ["Samyama is the whisper of the wind. Drop the seed and walk away.", "Expectation is poison; only benevolent forgetting allows the sutra's magic to work.", "To grasp intention is to suffocate it. Release it into the Witness's stillness."],
            science: ["Observation freezes the particle, forgetting allows the wave's expansion.", "Total letting go allows unconscious processes to weave reality."],
            pacing: ["If pain grips your forehead, release your grip immediately.", "Expect no prodigy in the moment. Absolute surrender is required."]
        },
        respiration: {
            core: ["Spinal breath is the bridge between wandering mind and awakened soul.", "This slow breath sweeps the dust away before entering the temple.", "Invite the air to travel the golden thread of your spine."],
            science: ["This conscious ebb and flow calms the heart and modulates vagal tone.", "Majestic slowness harmonizes cerebrospinal fluids."],
            pacing: ["If anxiety blurs your breath, be gentle like the evening breeze.", "Never hold your breath if your body begs to breathe."]
        },
        kechari: {
            core: ["Kechari Mudra is the divine switch that awakens celestial nectar.", "The folded tongue is the mind turning back to absorb itself in its source.", "Do not force the tongue. Let the ambrosia of silence draw it upward."],
            science: ["This union closes the circuit to the glandular brain, flooding the body with endorphins.", "Stimulating higher plexuses instantly pacifies the nervous system."],
            pacing: ["If tension is too sharp, bring the tongue down. The door will open when ready.", "Gentleness is the key to higher realms."]
        },
        universel: {
            core: ["True wisdom begins where certainty ends.", "We see the world not as it is, but as we are.", "What you resist, persists. Acceptance is the first step to freedom.", "The river of life flows through all traditions. Drink from what quenches your thirst.", "The universe is not outside. Look within, and find the stars."],
            science: ["Universal philosophy reminds us that man is a microcosm of the macrocosm.", "The quest for meaning is inscribed in our very architecture."],
            pacing: ["The answer will come when you stop chasing it.", "Be patient with what is unresolved. Love the questions themselves."]
        }
    }
};
