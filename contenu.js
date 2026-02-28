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
        },
        {
            title: "Ce qui m’attire au fond : élan vital ou fuite subtile ?",
            audioFile: "", 
            imageFile: "",
            videoFile: "",
            text: "Lorsqu’une chose nous attire, la question décisive n’est pas quoi, mais pourquoi. Non pas au sens des raisons que l’on peut expliquer, mais de ce que cette attraction produit réellement dans le fonctionnement quotidien.<br><br>Un élan vital se manifeste par une augmentation nette de la capacité à faire face. Il ne supprime pas les contraintes, mais il rend plus disponible pour les assumer. Après l’engagement, même s’il est exigeant, on observe une forme de continuité intérieure : moins de dispersion, moins de justification mentale, une attention plus stable à ce qui est à faire.<br><br>Une fuite subtile, en revanche, agit comme un soulagement transitoire. Elle attire parce qu’elle promet une diminution de la tension immédiate. Le critère principal apparaît après coup : la situation de fond n’a pas changé, mais l’énergie disponible a diminué. Il faut compenser, rationaliser, relancer une nouvelle attraction pour maintenir l’équilibre.<br><br>On peut aussi observer le rapport au temps. L’élan vital s’inscrit dans la durée. Il tolère la progression lente, les ajustements, les reprises. La fuite subtile, elle, entretient une relation impatiente au temps : il faut que cela change vite, maintenant, sinon l’attrait s’éteint ou se déplace ailleurs.<br><br>Un autre indicateur simple concerne la relation à soi-même. Une attraction issue d’un élan vital n’exige pas de se raconter une histoire flatteuse ou héroïque. Elle peut rester discrète, presque banale. Une fuite subtile, au contraire, a souvent besoin d’un récit pour se maintenir : justification morale, urgence personnelle, nécessité extérieure.<br><br>Enfin, le test le plus fiable reste l’effet cumulatif. Après plusieurs semaines ou plusieurs mois, l’élan vital conduit à plus de cohérence dans les actes, même imparfaits. La fuite laisse derrière elle une succession de départs, d’interruptions, ou de changements qui n’ont pas réellement consolidé la vie quotidienne.<br><br>Distinguer les deux ne relève donc pas d’une intuition mystérieuse, mais d’une observation répétée de leurs effets. Ce qui attire peut être évalué comme on évalue un traitement : non sur la promesse, mais sur le résultat mesurable dans la durée."
        },
        {
            title: "Être touché sans être brisé",
            audioFile: "", 
            imageFile: "",
            videoFile: "",
            text: "Être touché sans être brisé consiste à laisser l’impact, l’émotion, la critique ou la douleur se produire sans que cela ne fracture l’unité de la personne. Ce n’est ni un trait magique ni une vertu abstraite. C’est une capacité qui se développe à travers l’attention portée au corps, au souffle et aux réactions naturelles du système nerveux.<br><br>La vie exerce constamment des pressions : paroles, événements, pertes ou situations inattendues peuvent produire des effets intenses ou discrets. Se barricader contre cette réalité crée une rigidité qui finit souvent par céder de manière plus violente. Reconnaître que l’on peut être affecté sans être détruit permet de répondre plutôt que de réagir. Être touché est un fait ; être brisé n’est pas une fatalité.<br><br>La sensibilité elle-même est une ressource : elle permet de percevoir, d’ajuster et de rester en contact avec le monde. L’effondrement survient lorsque la régulation intérieure est perdue. La différence se mesure dans la capacité à laisser la sensation exister sans qu’elle gouverne l’ensemble du corps et de l’esprit. La sensibilité devient alors une information utile plutôt qu’une menace, sans avoir besoin de fuir ni de chercher à l’anesthésier.<br><br>Pour rester entier lorsqu’on est touché, il suffit de gestes simples et concrets. Identifier ce qui se produit dans le corps ou l’esprit, reconnaître la tension, le froid, la chaleur ou l’agitation, noter mentalement la sensation comme un phénomène passager sans jugement. Ajuster le souffle pour réduire l’amplification automatique et retrouver un centre d’observation interne. Répondre à partir d’un espace intérieur plus vaste, sans se laisser dicter par l’urgence de l’émotion, ce qui peut se traduire par des gestes prudents, des limites claires ou des pauses pour laisser passer l’impact. Enfin, considérer la gêne, la critique ou la douleur comme une information utile pour ajuster comportements, relations ou habitudes, sans chercher à les effacer.<br><br>Cette approche évite deux excès : glorifier la souffrance ou la nier sous des distractions. Elle repose sur un travail concret et mesurable sur l’attention, le souffle et la régulation corporelle. L’objectif n’est ni mystique ni spectaculaire : il s’agit d’une compétence pratique qui permet de maintenir stabilité et intégrité face aux événements.<br><br>Être touché sans être brisé n’est pas une posture passive. C’est une compétence active, fondée sur la présence, la respiration et le choix. Elle transforme la sensibilité en force adaptative et la blessure en information utile. Il devient possible de recevoir l’impact sans se laisser dissoudre par lui et de répondre au monde avec clarté et intégrité."
        },
        {
            title: "Ce que je retiens encore sans le savoir (2)",
            audioFile: "", 
            imageFile: "",
            videoFile: "",
            text: "Sans que je m’en rende compte, le corps et la conscience accumulent des traces — postures, respirations, réactions émotionnelles, gestes répétés, croyances — qui continuent d’agir comme des automatismes. Ces traces ne sont pas des mystères occultes, mais des données pratiques. Elles orientent les choix, colorent les relations et conditionnent la capacité à être pleinement présent. Reconnaître leur existence permet de les considérer, non comme un poids, mais comme des informations utiles pour ajuster l’action.<br><br>Ces traces prennent diverses formes. Des tensions corporelles chroniques s’installent et deviennent la toile de fond du vécu. Des réactions émotionnelles automatiques — peurs, défenses, schémas relationnels — se répètent sans que leur origine soit immédiatement claire. Des gestes, des routines mentales et des manières d’être se conservent comme savoirs implicites. Et certaines croyances intériorisées continuent d’orienter les décisions, souvent sans être perçues. Leur effet est discret mais constant : elles fonctionnent comme des programmes en tâche de fond, influençant les gestes et les pensées sans réclamer d’attention consciente.<br><br>Ces traces se forment et se renforcent par la répétition. Chaque réaction automatique consolide le circuit, tandis que le système nerveux privilégie les réponses connues, même inadaptées, parce qu’elles demandent moins d’effort conscient. Tant qu’aucune attention précise n’est portée à ces schémas, ils restent invisibles et continuent d’opérer. La simple prise de conscience progressive de ces patterns transforme leur fonctionnement : ce qui était invisible devient observable, et ce qui agissait automatiquement peut être ajusté.<br><br>Ces traces tentent de signaler quelque chose. Elles indiquent les habitudes qui protègent mais limitent, les énergies non intégrées sous forme de tensions ou d’impulsions, et les informations pratiques pour ajuster la vie : posture, rythme, gestes ou relations. Les recevoir n’exige ni dramatisation ni auto‑jugement : il s’agit simplement de noter ce qui se manifeste et de s’en servir pour guider l’action.<br><br>Pour rendre ces traces visibles et exploitables, quelques gestes concrets suffisent. Repérer la sensation, la localiser, la nommer, la suivre sans créer d’histoire autour. Ajuster le souffle pour réduire l’amplification automatique et retrouver un espace d’observation stable. Avancer par étapes mesurables, plutôt que chercher un changement radical. Puis modifier progressivement les postures, les routines et les réponses relationnelles à partir de ce que l’on découvre. Ces actions transforment des traces implicites en informations pratiques, sans mystification ni auto‑flagellation.<br><br>Les effets concrets de cette attention soutenue apparaissent lentement mais de manière tangible : moins de réactions automatiques, des décisions plus claires et fondées sur une information plus complète, et une présence plus stable et plus disponible. Ce résultat n’est pas spectaculaire du jour au lendemain ; il se construit par un travail patient et mesurable, centré sur l’expérience directe.<br><br>Ce que l’on retient encore sans le savoir n’est ni une faute ni une fatalité. Ce sont des traces — corporelles, émotionnelles, cognitives — qui attendent d’être vues et traitées. En adoptant une posture d’observation, en utilisant la respiration et un rythme progressif dans la pratique, il devient possible de transformer ces traces en informations utiles et de naviguer dans la vie avec plus de clarté et d’intégrité."
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
        },
        {
            title: "What deeply attracts me: vital urge or subtle escape?",
            audioFile: "", 
            imageFile: "",
            videoFile: "",
            text: "When something attracts us, the decisive question is not what, but why. Not in the sense of reasons that can be explained, but of what this attraction actually produces in daily functioning.<br><br>A vital urge manifests itself by a clear increase in the capacity to cope. It does not remove constraints, but it makes us more available to assume them. After committing, even if it is demanding, we observe a form of inner continuity: less dispersion, less mental justification, a more stable attention to what needs to be done.<br><br>A subtle escape, on the other hand, acts as a temporary relief. It attracts because it promises a decrease in immediate tension. The main criterion appears afterward: the underlying situation has not changed, but the available energy has decreased. One must compensate, rationalize, relaunch a new attraction to maintain balance.<br><br>We can also observe the relationship to time. The vital urge is inscribed in duration. It tolerates slow progression, adjustments, resumptions. The subtle escape maintains an impatient relationship with time: it must change quickly, now, otherwise the attraction fades or shifts elsewhere.<br><br>Another simple indicator concerns the relationship with oneself. An attraction stemming from a vital urge does not require telling oneself a flattering or heroic story. It can remain discreet, almost mundane. A subtle escape, conversely, often needs a narrative to sustain itself: moral justification, personal urgency, external necessity.<br><br>Finally, the most reliable test remains the cumulative effect. After several weeks or months, the vital urge leads to greater coherence in actions, even imperfect ones. The escape leaves behind a succession of starts, interruptions, or changes that have not truly consolidated daily life.<br><br>Distinguishing between the two is therefore not a matter of mysterious intuition, but of repeated observation of their effects. What attracts can be evaluated as one evaluates a treatment: not on the promise, but on the measurable result over time."
        },
        {
            title: "To be touched without being broken",
            audioFile: "", 
            imageFile: "",
            videoFile: "",
            text: "To be touched without being broken consists of letting the impact, the emotion, the criticism, or the pain occur without it fracturing the unity of the person. This is neither a magical trait nor an abstract virtue. It is a capacity that develops through attention paid to the body, the breath, and the natural reactions of the nervous system.<br><br>Life constantly exerts pressures: words, events, losses, or unexpected situations can produce intense or discreet effects. Barricading oneself against this reality creates a rigidity that often ends up giving way more violently. Recognizing that one can be affected without being destroyed allows one to respond rather than react. Being touched is a fact; being broken is not an inevitability.<br><br>Sensitivity itself is a resource: it allows one to perceive, adjust, and stay in contact with the world. Collapse occurs when internal regulation is lost. The difference is measured in the capacity to let the sensation exist without it governing the whole body and mind. Sensitivity then becomes useful information rather than a threat, without needing to flee or seek to anesthetize it.<br><br>To remain whole when touched, simple and concrete gestures are enough. Identify what is happening in the body or mind, recognize the tension, cold, heat, or agitation, mentally note the sensation as a passing phenomenon without judgment. Adjust the breath to reduce the automatic amplification and find an internal center of observation. Respond from a vaster inner space, without letting the urgency of the emotion dictate, which can translate into cautious gestures, clear boundaries, or pauses to let the impact pass. Finally, consider the discomfort, criticism, or pain as useful information to adjust behaviors, relationships, or habits, without trying to erase them.<br><br>This approach avoids two excesses: glorifying suffering or denying it under distractions. It is based on concrete and measurable work on attention, breath, and bodily regulation. The goal is neither mystical nor spectacular: it is a practical skill that allows maintaining stability and integrity in the face of events.<br><br>To be touched without being broken is not a passive posture. It is an active skill, based on presence, breathing, and choice. It transforms sensitivity into adaptive strength and the wound into useful information. It becomes possible to receive the impact without letting oneself dissolve into it and to respond to the world with clarity and integrity."
        },
        {
            title: "What I still hold onto without knowing it (2)",
            audioFile: "", 
            imageFile: "",
            videoFile: "",
            text: "Without me realizing it, the body and consciousness accumulate traces — postures, breaths, emotional reactions, repeated gestures, beliefs — which continue to act as automatisms. These traces are not occult mysteries, but practical data. They guide choices, color relationships, and condition the ability to be fully present. Recognizing their existence allows them to be considered, not as a burden, but as useful information to adjust action.<br><br>These traces take various forms. Chronic bodily tensions settle in and become the backdrop of experience. Automatic emotional reactions — fears, defenses, relational patterns — repeat without their origin being immediately clear. Gestures, mental routines, and ways of being are preserved as implicit knowledge. And certain internalized beliefs continue to guide decisions, often without being perceived. Their effect is discreet but constant: they function like background programs, influencing gestures and thoughts without demanding conscious attention.<br><br>These traces form and strengthen through repetition. Each automatic reaction consolidates the circuit, while the nervous system favors known responses, even maladaptive ones, because they require less conscious effort. As long as no precise attention is paid to these patterns, they remain invisible and continue to operate. The simple progressive awareness of these patterns transforms their functioning: what was invisible becomes observable, and what acted automatically can be adjusted.<br><br>These traces try to signal something. They indicate the habits that protect but limit, the unintegrated energies in the form of tensions or impulses, and practical information to adjust life: posture, rhythm, gestures, or relationships. Receiving them requires neither dramatization nor self-judgment: it is simply a matter of noting what manifests and using it to guide action.<br><br>To make these traces visible and usable, a few concrete gestures are enough. Spot the sensation, locate it, name it, follow it without creating a story around it. Adjust the breath to reduce automatic amplification and find a stable observation space. Advance by measurable steps, rather than seeking radical change. Then gradually modify postures, routines, and relational responses based on what is discovered. These actions transform implicit traces into practical information, without mystification or self-flagellation.<br><br>The concrete effects of this sustained attention appear slowly but tangibly: fewer automatic reactions, clearer decisions based on more complete information, and a more stable and available presence. This result is not spectacular overnight; it is built through patient and measurable work, centered on direct experience.<br><br>What we still hold onto without knowing it is neither a fault nor an inevitability. These are traces — bodily, emotional, cognitive — waiting to be seen and processed. By adopting a posture of observation, using the breath and a progressive rhythm in practice, it becomes possible to transform these traces into useful information and to navigate life with greater clarity and integrity."
        }
    ]
};
const parableData = {
    fr: {
        title: "Au-delà de la Rivière — Une Parabole sur l’Appel Intérieur",
        body: `<p>Il y a des lieux où personne n’ose plus aller. Des frontières invisibles, marquées non par des murs, mais par des récits anciens — des récits de peur.</p><p>Dans un village reculé, au cœur de la savane, vivait un jeune homme nommé Kofi. Il n’avait ni la stature des guerriers, ni le prestige des anciens. Mais il portait en lui une question qui ne le quittait jamais : que se cache-t-il au-delà de ce que l’on croit savoir ?</p><p>Un jour, cette question prit chair.</p><p>La fille du chef, Adwoa, fut frappée d’un mal mystérieux. Les prières, les soins, rien n’y faisait. Le guérisseur consulta les oracles, qui désignèrent un remède oublié : une plante rare, cachée au plus profond de la forêt, de l’autre côté de la rivière sacrée. Mais cette forêt, disaient les anciens, était hantée. Un territoire d’esprits dévoreurs d’âmes, que l’homme sage ne franchit pas.</p><p>Le chef promit richesses et honneurs à quiconque oserait s’y aventurer. Les plus braves reculèrent. La peur, nourrie de récits, était plus forte que la promise d’or. Tous refusèrent. Tous, sauf Kofi.</p><p>Il ne demandait rien. Ni gloire, ni récompense. Ce qu’il entendait en lui, c’était ce silence profond, qui ne marchande pas, mais qui dit simplement : avance. Il prit une gourde d’eau, une amulette offerte par sa mère, et marcha vers la rivière. Là, il s’arrêta. L’eau était limpide, mais à ses yeux, elle était autre chose : une frontière symbolique. La limite entre le connu et l’inconnu.</p><p>Il ferma les yeux. Non pour fuir, mais pour écouter plus loin que ses pensées. Puis il traversa.</p><p>De l’autre côté, la forêt l’enveloppa. Mais il n’y trouva ni esprits, ni cris. Seulement une présence. La terre sous ses pas était dense, vivante. Le vent chantait dans les feuillages. Ce qui devait être un territoire d’ombres était en réalité un sanctuaire oublié.</p><p>Au cœur de cette paix, Kofi rencontra un vieil homme, assis au pied d’un arbre immense. Sa peau semblait sculptée par le temps. Ses yeux portaient la lumière des nuits sans nuages.</p><p>— Pourquoi viens-tu, marcheur ? demanda-t-il.<br>Kofi raconta son histoire.<br>Le sage écouta, puis montra une plante discrète à ses pieds.</p><p>— Voici ce que tu cherches. Mais souviens-toi : ce n’est pas la forêt qui dévore les âmes. Ce sont les désirs non maîtrisés des hommes. Les anciens ont semé des récits de peur pour protéger ce lieu sacré de la convoitise. Mais ceux qui viennent avec un cœur pur n’y trouvent rien d’autre que ce qu’ils portent déjà en eux.</p><p>Kofi prit la plante, remercia et repartit. Lorsqu’il franchit à nouveau la rivière, un silence épais s’abattit sur le village. Adwoa fut guérie. Les anciens, d’un regard fuyant, comprirent ce qu’ils avaient oublié.</p><p>Ce jour-là, le village reçut une vérité simple, qui passa de bouche en bouche, mais dont la compréhension appartient à ceux qui osent la vivre :</p><p><strong>“Les oreilles entendent les peurs des autres, mais seuls les yeux du cœur voient la vérité.”</strong></p><p>Chacun d’entre nous est appelé, un jour ou l’autre, à s’approcher de cette rivière intérieure. À franchir la frontière des peurs héritées. À entrer dans cette forêt qui, derrière les ombres projetées par notre mental, cache un espace de paix inaltérable.</p><p>La véritable initiation commence là.</p><p>La forêt n’a jamais été dangereuse. Ce sont nos histoires qui l’ont rendue hostile. Ce que nous cherchons ne se trouve pas ailleurs. Il est en nous, depuis toujours, mais voilé par le tumulte de nos désirs et de nos résistances.</p><p>Traverse. Écoute. Pratique.<br>Le reste suivra.</p>
        <div style="display: flex; justify-content: flex-end; align-items: center; margin-top: 50px; opacity: 0.95;">
            <img src="sceau-gardien.png" alt="Sceau du Gardien" style="width: 45px; margin-right: 15px; filter: drop-shadow(0 0 8px rgba(212, 175, 55, 0.5));">
            <span style="font-style: italic; font-size: 1.1rem; color: var(--couleur-accent);">Œuvre Originale & Propriété</span>
        </div>`
    },
    en: {
        title: "Beyond the River — A Parable on the Inner Calling",
        body: `<p>There are places where no one dares to go anymore. Invisible borders, marked not by walls, but by ancient tales — tales of fear.</p><p>In a remote village, in the heart of the savanna, lived a young man named Kofi. He had neither the stature of warriors nor the prestige of elders. But he carried within him a question that never left him: what lies beyond what we think we know?</p><p>One day, this question took form.</p><p>The chief's daughter, Adwoa, was struck by a mysterious illness. Prayers and treatments were in vain. The healer consulted the oracles, who pointed to a forgotten remedy: a rare plant, hidden deep in the forest, on the other side of the sacred river. But this forest, the elders said, was haunted. A territory of soul-devouring spirits, which the wise man does not cross.</p><p>The chief promised wealth and honors to anyone who dared venture there. The bravest retreated. Fear, fed by stories, was stronger than the promise of gold. All refused. All, except Kofi.</p><p>He asked for nothing. Neither glory nor reward. What he heard within him was that deep silence, which does not bargain, but simply says: move forward. He took a water gourd, an amulet given by his mother, and walked toward the river. There, he stopped. The water was crystal clear, but to his eyes, it was something else: a symbolic border. The limit between the known and the unknown.</p><p>He closed his eyes. Not to flee, but to listen beyond his thoughts. Then he crossed.</p><p>On the other side, the forest enveloped him. But he found neither spirits nor screams. Only a presence. The earth beneath his steps was dense, alive. The wind sang in the leaves. What was supposed to be a territory of shadows was in reality a forgotten sanctuary.</p><p>In the heart of this peace, Kofi met an old man, sitting at the foot of an immense tree. His skin seemed sculpted by time. His eyes carried the light of cloudless nights.</p><p>— Why do you come, walker? he asked.<br>Kofi told his story.<br>The sage listened, then pointed to a discreet plant at his feet.</p><p>— Here is what you seek. But remember: it is not the forest that devours souls. It is the uncontrolled desires of men. The elders sowed tales of fear to protect this sacred place from greed. But those who come with a pure heart find nothing else there but what they already carry within themselves.</p><p>Kofi took the plant, gave thanks, and left. When he crossed the river again, a thick silence fell upon the village. Adwoa was healed. The elders, with a fleeting gaze, understood what they had forgotten.</p><p>That day, the village received a simple truth, which passed from mouth to mouth, but whose understanding belongs to those who dare to live it:</p><p><strong>“Ears hear the fears of others, but only the eyes of the heart see the truth.”</strong></p><p>Each of us is called, one day or another, to approach this inner river. To cross the border of inherited fears. To enter this forest which, behind the shadows projected by our mind, hides a space of unalterable peace.</p><p>True initiation begins there.</p><p>The forest was never dangerous. It is our stories that made it hostile. What we seek is not found elsewhere. It has been within us, always, but veiled by the tumult of our desires and our resistances.</p><p>Cross. Listen. Practice.<br>The rest will follow.</p>
        <div style="display: flex; justify-content: flex-end; align-items: center; margin-top: 50px; opacity: 0.95;">
            <img src="sceau-gardien.png" alt="Guardian Seal" style="width: 45px; margin-right: 15px; filter: drop-shadow(0 0 8px rgba(212, 175, 55, 0.5));">
            <span style="font-style: italic; font-size: 1.1rem; color: var(--couleur-accent);">Original Work & Property</span>
        </div>`
    }
};

const TEACHINGS_DATABASE = {
    fr: [
        {
            title: "L’éveil du Silence Intérieur : La Fondation Inébranlable",
            body: `
                <p>Le Silence intérieur n’est pas quelque chose que l’on crée. Il n’est ni le résultat d’un effort mental, ni un état de vide que l'on imposerait par la force. Au début du chemin, nous cherchons souvent à discipliner l'esprit, à le forcer à se taire, mais cette stratégie produit l'effet inverse.</p>
                <p>Ce silence n'est ni une concentration tendue, ni un retrait du monde. C'est une présence dynamique, un roc de conscience pure qui réside naturellement en nous. En chacun existe une zone intacte, stable, qui n'a jamais été perturbée par les événements ou les blessures. Elle n'est pas produite par la pratique : la pratique ne fait que la révéler.</p>
                <h3 style="color: var(--couleur-accent); margin-top: 40px; text-align: left; font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-style: italic; letter-spacing: 1px;">La Mécanique de l'Éveil : Régularité avant Intensité</h3>
                <p>La graine de ce silence se dévoile progressivement. L’éveil repose sur un principe physiologique fondamental : la régularité est bien plus importante que l’intensité.</p>
                <p><strong>La Méditation Profonde :</strong> L'outil pour éveiller ce silence est une pratique simple et sans effort. En utilisant doucement un mantra, l'esprit est autorisé à plonger vers l'intérieur, transcendant l'agitation de surface.</p>
                <p><strong>L'Effet Cumulatif :</strong> Un peu de pratique, chaque jour, permet au système nerveux de s'habituer à un état de repos conscient très profond. Le silence s'installe par gouttes. Il ne surgit pas comme une rupture violente, mais comme une évidence tranquille qui devient familière.</p>
                <h3 style="color: var(--couleur-accent); margin-top: 40px; text-align: left; font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-style: italic; letter-spacing: 1px;">Purification et Émergence du Témoin</h3>
                <p>L'éveil n'est pas qu'un concept psychologique, c'est un nettoyage biologique. À mesure que l'on descend dans le silence, le système nerveux dissout ses blocages accumulés.</p>
                <p><strong>Le Processus de Libération :</strong> Ce repos profond met en lumière ce qui était enfoui. Anciennes tensions et résistances peuvent remonter à la surface. Le Silence n'élimine pas immédiatement les conditionnements, il les dévoile pour qu'ils se dissolvent. Il n'y a rien à analyser ; il suffit de continuer la pratique avec douceur et de laisser le Silence faire son travail.</p>
                <p><strong>Le Témoin Inébranlable :</strong> À mesure que le système nerveux se purifie, un changement subtil se produit : nous cessons de nous identifier entièrement à la surface de la vie. Quelque chose en nous observe, sans juger. Les pensées passent, les émotions circulent, mais le témoin demeure, profondément vivant et disponible.</p>
                <h3 style="color: var(--couleur-accent); margin-top: 40px; text-align: left; font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-style: italic; letter-spacing: 1px;">Le Silence en Action : Une Base, Pas un Sommet</h3>
                <p>Le véritable test du silence ne se fait pas les yeux fermés sur un coussin, mais au cœur de l'activité quotidienne.</p>
                <p><strong>Le Cycle Pratique-Action :</strong> L'action permet au système nerveux de métaboliser l'énergie libérée en méditation. Avec le temps, le Silence ne reste plus confiné aux moments formels ; il accompagne la parole, le travail et les relations.</p>
                <p><strong>La Cohérence Intérieure :</strong> L'action devient plus simple, les décisions émergent avec moins de conflit. La vie est vécue avec plus de fluidité.</p>
                <p><strong>La Fondation :</strong> Le Silence intérieur n’est pas la fin du chemin, il en est la base stable. À partir de lui, l'amour s'exprime plus librement et l'intelligence devient plus fine. Il ne retire rien à la vie, il lui permet enfin de circuler sans entrave.</p>
                <div style="display: flex; justify-content: flex-end; align-items: center; margin-top: 50px; opacity: 0.95;">
                    <img src="sceau-gardien.png" alt="Sceau du Gardien" style="width: 45px; margin-right: 15px; filter: drop-shadow(0 0 8px rgba(212, 175, 55, 0.5));">
                    <span style="font-style: italic; font-size: 1.1rem; color: var(--couleur-accent);">Œuvre Originale & Propriété</span>
                </div>
            `
        },
        {
            title: "La Mécanique de l’Extase : Une Compréhension Progressive de l’Éveil",
            body: `
                <p>Dans le cheminement spirituel, l’extase est souvent mal comprise. Elle est parfois recherchée comme une expérience mystique exceptionnelle, redoutée comme une perte de contrôle, ou idéalisée comme l'apanage de quelques élus. En réalité, l’extase n’est rien de tout cela. Elle est le résultat naturel d’un mécanisme précis, inscrit dans le fonctionnement neurobiologique humain, qui s'active lorsque certaines conditions sont réunies.</p>
                <p>Comprendre cette mécanique ne sert pas à provoquer l’extase — car elle ne se laisse jamais forcer — mais à laisser le processus de purification se déployer sans confusion ni excès, jusqu'à son intégration harmonieuse dans le quotidien.</p>
                <h3 style="color: var(--couleur-accent); margin-top: 40px; text-align: left; font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-style: italic; letter-spacing: 1px;">1. Ce que l'extase n'est pas (et ce qu'elle est)</h3>
                <p>Dans le langage courant, l'extase est confondue avec une exaltation mentale ou une émotion passagère déclenchée par un événement extérieur. Dans la perspective yogique, il s’agit de tout autre chose :</p>
                <ul style="line-height: 1.8; margin-bottom: 20px;">
                    <li><strong>Un ressenti neurobiologique :</strong> C'est un courant de félicité stable, ressenti directement dans le corps et le système nerveux.</li>
                    <li><strong>Une signature constante :</strong> Qu'elle soit douce ou puissante, subtile ou expansive, elle se manifeste comme une sensation de vie intensifiée, calme, silencieuse et profondément nourrissante.</li>
                    <li><strong>Un signe fonctionnel :</strong> Ce n’est pas l’esprit qui devient exalté, c'est le corps qui devient le conducteur vivant d'une énergie libérée de ses entraves. L'extase indique simplement que quelque chose s'est dégagé à l'intérieur.</li>
                </ul>
                <h3 style="color: var(--couleur-accent); margin-top: 40px; text-align: left; font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-style: italic; letter-spacing: 1px;">2. Le fondement indispensable : Le Silence Intérieur</h3>
                <p>Toute extase authentique et toute transformation profonde reposent sur une base primordiale : le silence intérieur. Ce silence n’est pas une absence d’activité ou un retrait du monde, mais une présence consciente, stable et témoin, indépendante des pensées et des émotions.</p>
                <ul style="line-height: 1.8; margin-bottom: 20px;">
                    <li><strong>Le rôle de conducteur :</strong> Ce silence agit comme un régulateur naturel. Sans lui, toute stimulation énergétique devient instable, agitée, voire perturbante.</li>
                    <li><strong>L'alchimie de l'énergie :</strong> Sans silence, l’énergie excite. Avec le silence, l’énergie extasie. L’énergie vitale peut alors circuler sans provoquer de surchauffe.</li>
                </ul>
                <h3 style="color: var(--couleur-accent); margin-top: 40px; text-align: left; font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-style: italic; letter-spacing: 1px;">3. Purification et Conductivité du Système Nerveux</h3>
                <p>L’extase apparaît à mesure que les canaux internes se dégagent. Cette purification n’est pas un ajout, mais un retrait :</p>
                <ul style="line-height: 1.8; margin-bottom: 20px;">
                    <li><strong>La dissolution des résistances :</strong> Chaque séance de pratique enlève une fine couche de tensions anciennes, de blocages émotionnels et d'inerties profondes.</li>
                    <li><strong>L'augmentation de la conductivité :</strong> Comme un fil électrique nettoyé de ses impuretés, le système nerveux laisse passer le courant vital avec de moins en moins de résistance.</li>
                    <li><strong>Les manifestations naturelles :</strong> Cette conductivité naissante se perçoit par des sensations de chaleur, des frémissements subtils, des vagues de plaisir pur, ou la perception d'un axe vivant le long de la colonne vertébrale.</li>
                </ul>
                <h3 style="color: var(--couleur-accent); margin-top: 40px; text-align: left; font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-style: italic; letter-spacing: 1px;">4. L'Union : Les Deux Dimensions de l'Éveil</h3>
                <p>L’expérience intérieure mûrit véritablement lorsque deux qualités complémentaires se rencontrent :</p>
                <ul style="line-height: 1.8; margin-bottom: 20px;">
                    <li><strong>Le silence (la paix) :</strong> S'il se développe seul, il peut devenir sec, statique ou détaché.</li>
                    <li><strong>L'énergie (le mouvement) :</strong> Si elle s'éveille sans un silence suffisant, elle devient instable et excessive.</li>
                </ul>
                <p>Lorsque la paix du silence et le mouvement de l'énergie avancent ensemble, une félicité consciente, incarnée et durable apparaît. Le mouvement trouve son repos, et l'immobilité devient créative.</p>
                <h3 style="color: var(--couleur-accent); margin-top: 40px; text-align: left; font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-style: italic; letter-spacing: 1px;">5. Les Outils de la Mécanique</h3>
                <p>L’extase n’est jamais un objectif à rechercher directement ; la traquer crée une tension qui l'entrave. Elle est le fruit d'un processus automatique nourri par des outils précis :</p>
                <ul style="line-height: 1.8; margin-bottom: 20px;">
                    <li><strong>La méditation profonde :</strong> Installe le silence intérieur par le relâchement (et non par l'effort).</li>
                    <li><strong>La respiration spinale :</strong> Purifie et active les canaux centraux, préparant le terrain à une conductivité stable.</li>
                    <li><strong>Les gestes internes (mudras/bandhas) :</strong> Intensifient le processus en appliquant une pression ciblée lorsque le corps est prêt.</li>
                    <li><strong>L'intention (samyama) :</strong> Permet d’intégrer la transformation dans la vie quotidienne à partir du silence.</li>
                    <li><strong>La transmutation de l'énergie :</strong> Canalise la vitalité naturelle (y compris sexuelle) pour alimenter le courant intérieur.</li>
                </ul>
                <h3 style="color: var(--couleur-accent); margin-top: 40px; text-align: left; font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-style: italic; letter-spacing: 1px;">6. L'Art de l'Autorégulation</h3>
                <p>Dans cette mécanique, un principe est non négociable : l’équilibre prime toujours sur l’intensité.</p>
                <p>Si l’énergie devient trop forte ou inconfortable, cela indique un excès de stimulation par rapport au niveau de silence disponible. La réponse juste n’est jamais de forcer, mais de ralentir, d'ajuster son temps de pratique et de s'ancrer. Le chemin n'est pas une course, c'est une maturation.</p>
                <h3 style="color: var(--couleur-accent); margin-top: 40px; text-align: left; font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-style: italic; letter-spacing: 1px;">7. De l'Extase à l'Action Vivante</h3>
                <p>À maturité, l'extase cesse d'être une expérience isolée sur un coussin de méditation. Elle ne détourne plus du monde, mais irrigue la vie ordinaire. Elle devient une joie sans objet, stable et fiable, qui nourrit la clarté, la compassion et la justesse de nos actes.</p>
                <p>Le yoga cesse alors d’être une pratique séparée pour devenir une manière vivante d’être au monde : la vie circule enfin sans entrave.</p>
                <div style="display: flex; justify-content: flex-end; align-items: center; margin-top: 50px; opacity: 0.95;">
                    <img src="sceau-gardien.png" alt="Sceau du Gardien" style="width: 45px; margin-right: 15px; filter: drop-shadow(0 0 8px rgba(212, 175, 55, 0.5));">
                    <span style="font-style: italic; font-size: 1.1rem; color: var(--couleur-accent);">Œuvre Originale & Propriété</span>
                </div>
            `
        }
    ],
    en: [
        {
            title: "The Awakening of Inner Silence: The Unshakable Foundation",
            body: `
                <p>Inner silence is not something we create. It is neither the result of mental effort nor a state of emptiness imposed by force. At the beginning of the path, we often try to discipline the mind, to force it to be quiet, but this strategy produces the opposite effect.</p>
                <p>This silence is neither tense concentration nor a withdrawal from the world. It is a dynamic presence, a rock of pure consciousness that naturally resides within us. In everyone, there is an intact, stable zone that has never been disturbed by events or wounds. It is not produced by practice: practice merely reveals it.</p>
                <h3 style="color: var(--couleur-accent); margin-top: 40px; text-align: left; font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-style: italic; letter-spacing: 1px;">The Mechanics of Awakening: Regularity over Intensity</h3>
                <p>The seed of this silence unfolds gradually. Awakening rests on a fundamental physiological principle: regularity is far more important than intensity.</p>
                <p><strong>Deep Meditation:</strong> The tool to awaken this silence is a simple, effortless practice. By gently using a mantra, the mind is allowed to dive inward, transcending surface agitation.</p>
                <p><strong>The Cumulative Effect:</strong> A little practice, every day, allows the nervous system to accustom itself to a state of very deep conscious rest. Silence settles in drops. It does not emerge as a violent rupture, but as a quiet evidence that becomes familiar.</p>
                <h3 style="color: var(--couleur-accent); margin-top: 40px; text-align: left; font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-style: italic; letter-spacing: 1px;">Purification and Emergence of the Witness</h3>
                <p>Awakening is not just a psychological concept; it is a biological cleansing. As we descend into silence, the nervous system dissolves its accumulated blockages.</p>
                <p><strong>The Liberation Process:</strong> This deep rest brings to light what was buried. Old tensions and resistances may rise to the surface. Silence does not immediately eliminate conditioning; it reveals them so they can dissolve. There is nothing to analyze; simply continue the practice gently and let Silence do its work.</p>
                <p><strong>The Unshakable Witness:</strong> As the nervous system purifies, a subtle shift occurs: we cease to identify entirely with the surface of life. Something within us observes, without judging. Thoughts pass, emotions circulate, but the witness remains, deeply alive and available.</p>
                <h3 style="color: var(--couleur-accent); margin-top: 40px; text-align: left; font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-style: italic; letter-spacing: 1px;">Silence in Action: A Foundation, Not a Peak</h3>
                <p>The true test of silence is not done with eyes closed on a cushion, but in the heart of daily activity.</p>
                <p><strong>The Practice-Action Cycle:</strong> Action allows the nervous system to metabolize the energy released in meditation. Over time, Silence is no longer confined to formal moments; it accompanies speech, work, and relationships.</p>
                <p><strong>Inner Coherence:</strong> Action becomes simpler, decisions emerge with less conflict. Life is lived with more fluidity.</p>
                <p><strong>The Foundation:</strong> Inner silence is not the end of the path; it is the stable base. From it, love expresses itself more freely and intelligence becomes sharper. It takes nothing away from life; it finally allows it to flow unhindered.</p>
                <div style="display: flex; justify-content: flex-end; align-items: center; margin-top: 50px; opacity: 0.95;">
                    <img src="sceau-gardien.png" alt="Guardian Seal" style="width: 45px; margin-right: 15px; filter: drop-shadow(0 0 8px rgba(212, 175, 55, 0.5));">
                    <span style="font-style: italic; font-size: 1.1rem; color: var(--couleur-accent);">Original Work & Property</span>
                </div>
            `
        },
        {
            title: "The Mechanics of Ecstasy: A Progressive Understanding of Awakening",
            body: `
                <p>In the spiritual journey, ecstasy is often misunderstood. It is sometimes sought as an exceptional mystical experience, feared as a loss of control, or idealized as the privilege of a chosen few. In reality, ecstasy is none of these. It is the natural result of a precise mechanism, inscribed in human neurobiological functioning, which activates when certain conditions are met.</p>
                <p>Understanding this mechanic does not serve to provoke ecstasy — for it can never be forced — but to allow the purification process to unfold without confusion or excess, until its harmonious integration into daily life.</p>
                <h3 style="color: var(--couleur-accent); margin-top: 40px; text-align: left; font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-style: italic; letter-spacing: 1px;">1. What ecstasy is not (and what it is)</h3>
                <p>In everyday language, ecstasy is confused with mental exaltation or a fleeting emotion triggered by an external event. In the yogic perspective, it is something entirely different:</p>
                <ul style="line-height: 1.8; margin-bottom: 20px;">
                    <li><strong>A neurobiological feeling:</strong> It is a stable current of bliss, felt directly in the body and the nervous system.</li>
                    <li><strong>A constant signature:</strong> Whether gentle or powerful, subtle or expansive, it manifests as a sensation of intensified life, calm, silent, and deeply nourishing.</li>
                    <li><strong>A functional sign:</strong> It is not the mind that becomes exalted, it is the body that becomes the living conductor of an energy freed from its shackles. Ecstasy simply indicates that something has cleared inside.</li>
                </ul>
                <h3 style="color: var(--couleur-accent); margin-top: 40px; text-align: left; font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-style: italic; letter-spacing: 1px;">2. The indispensable foundation: Inner Silence</h3>
                <p>All authentic ecstasy and deep transformation rest on a primordial base: inner silence. This silence is not an absence of activity or a withdrawal from the world, but a conscious, stable, and witnessing presence, independent of thoughts and emotions.</p>
                <ul style="line-height: 1.8; margin-bottom: 20px;">
                    <li><strong>The role of conductor:</strong> This silence acts as a natural regulator. Without it, any energetic stimulation becomes unstable, agitated, or even disruptive.</li>
                    <li><strong>The alchemy of energy:</strong> Without silence, energy excites. With silence, energy induces ecstasy. Vital energy can then circulate without causing overheating.</li>
                </ul>
                <h3 style="color: var(--couleur-accent); margin-top: 40px; text-align: left; font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-style: italic; letter-spacing: 1px;">3. Purification and Conductivity of the Nervous System</h3>
                <p>Ecstasy appears as the internal channels clear. This purification is not an addition, but a removal:</p>
                <ul style="line-height: 1.8; margin-bottom: 20px;">
                    <li><strong>The dissolution of resistances:</strong> Each practice session removes a thin layer of old tensions, emotional blockages, and deep inertias.</li>
                    <li><strong>The increase in conductivity:</strong> Like an electrical wire cleaned of its impurities, the nervous system lets the vital current pass with less and less resistance.</li>
                    <li><strong>Natural manifestations:</strong> This nascent conductivity is perceived through sensations of heat, subtle thrills, waves of pure pleasure, or the perception of a living axis along the spine.</li>
                </ul>
                <h3 style="color: var(--couleur-accent); margin-top: 40px; text-align: left; font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-style: italic; letter-spacing: 1px;">4. Union: The Two Dimensions of Awakening</h3>
                <p>Inner experience truly matures when two complementary qualities meet:</p>
                <ul style="line-height: 1.8; margin-bottom: 20px;">
                    <li><strong>Silence (peace):</strong> If it develops alone, it can become dry, static, or detached.</li>
                    <li><strong>Energy (movement):</strong> If it awakens without sufficient silence, it becomes unstable and excessive.</li>
                </ul>
                <p>When the peace of silence and the movement of energy advance together, a conscious, embodied, and lasting bliss appears. Movement finds its rest, and stillness becomes creative.</p>
                <h3 style="color: var(--couleur-accent); margin-top: 40px; text-align: left; font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-style: italic; letter-spacing: 1px;">5. The Tools of the Mechanic</h3>
                <p>Ecstasy is never a goal to be sought directly; chasing it creates tension that hinders it. It is the fruit of an automatic process nourished by precise tools:</p>
                <ul style="line-height: 1.8; margin-bottom: 20px;">
                    <li><strong>Deep meditation:</strong> Installs inner silence through release (and not through effort).</li>
                    <li><strong>Spinal breathing:</strong> Purifies and activates the central channels, preparing the ground for stable conductivity.</li>
                    <li><strong>Internal gestures (mudras/bandhas):</strong> Intensify the process by applying targeted pressure when the body is ready.</li>
                    <li><strong>Intention (samyama):</strong> Allows the transformation to be integrated into daily life from silence.</li>
                    <li><strong>Transmutation of energy:</strong> Channels natural vitality (including sexual) to feed the inner current.</li>
                </ul>
                <h3 style="color: var(--couleur-accent); margin-top: 40px; text-align: left; font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-style: italic; letter-spacing: 1px;">6. The Art of Self-Regulation</h3>
                <p>In this mechanic, one principle is non-negotiable: balance always takes precedence over intensity.</p>
                <p>If the energy becomes too strong or uncomfortable, this indicates an excess of stimulation compared to the available level of silence. The right response is never to force, but to slow down, adjust one's practice time, and ground oneself. The path is not a race, it is a maturation.</p>
                <h3 style="color: var(--couleur-accent); margin-top: 40px; text-align: left; font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-style: italic; letter-spacing: 1px;">7. From Ecstasy to Living Action</h3>
                <p>At maturity, ecstasy ceases to be an isolated experience on a meditation cushion. It no longer distracts from the world, but irrigates ordinary life. It becomes an objectless joy, stable and reliable, which nourishes the clarity, compassion, and rightness of our actions.</p>
                <p>Yoga then ceases to be a separate practice to become a living way of being in the world: life finally flows unhindered.</p>
                <div style="display: flex; justify-content: flex-end; align-items: center; margin-top: 50px; opacity: 0.95;">
                    <img src="sceau-gardien.png" alt="Guardian Seal" style="width: 45px; margin-right: 15px; filter: drop-shadow(0 0 8px rgba(212, 175, 55, 0.5));">
                    <span style="font-style: italic; font-size: 1.1rem; color: var(--couleur-accent);">Original Work & Property</span>
                </div>
            `
        }
    ]
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





