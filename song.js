const songData = [
    // --- Standard / Swing ---
    {
        "id": 1,
        "title": "Autumn Leaves (枯葉)",
        "key": "Gm",
        "style": "Swing",
        "progression": [
            "Cm7", "F7", "Bbmaj7", "Ebmaj7", "Am7b5", "D7", "Gm7", "Gm7",
            "Cm7", "F7", "Bbmaj7", "Ebmaj7", "Am7b5", "D7", "Gm7", "Gm7",
            "Am7b5", "D7", "Gm7", "Gm7", "Cm7", "F7", "Bbmaj7", "Ebmaj7",
            "Am7b5", "D7", "Gm7", "Fm7 Bb7", "Ebmaj7", "D7", "Gm7", "Gm7"
        ]
    },
    {
        "id": 2,
        "title": "Fly Me To The Moon",
        "key": "C",
        "style": "Swing",
        "progression": [
            "Am7", "Dm7", "G7", "Cmaj7", "Fmaj7", "Bm7b5", "E7", "Am7 A7",
            "Dm7", "G7", "Cmaj7", "Am7", "Dm7", "G7", "Cmaj7", "Bm7b5 E7",
            "Am7", "Dm7", "G7", "Cmaj7", "Fmaj7", "Bm7b5", "E7", "Am7 A7",
            "Dm7", "G7", "Cmaj7", "Fm7 Bb7", "Em7 A7", "Dm7 G7", "Cmaj7", "Bm7b5 E7"
        ]
    },
    {
        "id": 3,
        "title": "All The Things You Are",
        "key": "Ab",
        "style": "Swing",
        "progression": [
            "Fm7", "Bbm7", "Eb7", "Abmaj7", "Dbmaj7", "Dm7 G7", "Cmaj7", "Cmaj7",
            "Cm7", "Fm7", "Bb7", "Ebmaj7", "Abmaj7", "Am7 D7", "Gmaj7", "Gmaj7",
            "Am7", "D7", "Gmaj7", "Gmaj7", "F#m7b5", "B7", "Emaj7", "C7alt",
            "Fm7", "Bbm7", "Eb7", "Abmaj7", "Dbmaj7", "Dbm7", "Cm7", "Bdim7",
            "Bbm7", "Eb7", "Abmaj7", "G7 C7"
        ]
    },
    {
        "id": 4,
        "title": "Just Friends",
        "key": "G",
        "style": "Swing",
        "progression": [
            "Cmaj7", "Cmaj7", "Cm7", "F7", "Gmaj7", "Gmaj7", "Bbm7", "Eb7",
            "Am7", "D7", "Gmaj7", "Em7", "Am7", "D7", "Bm7", "E7",
            "Cmaj7", "Cmaj7", "Cm7", "F7", "Gmaj7", "Gmaj7", "Bbm7", "Eb7",
            "Am7", "D7", "Bm7", "E7", "Am7", "D7", "Gmaj7", "Gmaj7"
        ]
    },
    {
        "id": 5,
        "title": "There Will Never Be Another You",
        "key": "Eb",
        "style": "Swing",
        "progression": [
            "Ebmaj7", "Ebmaj7", "Dm7b5", "G7", "Cm7", "Cm7", "Bbm7", "Eb7",
            "Abmaj7", "Db7", "Ebmaj7", "C7", "F7", "F7", "Fm7", "Bb7",
            "Ebmaj7", "Ebmaj7", "Dm7b5", "G7", "Cm7", "Cm7", "Bbm7", "Eb7",
            "Abmaj7", "Db7", "Ebmaj7", "C7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7"
        ]
    },
    {
        "id": 6,
        "title": "Stella By Starlight",
        "key": "Bb",
        "style": "Swing",
        "progression": [
            "Em7b5", "A7", "Cm7", "F7", "Fm7", "Bb7", "Ebmaj7", "Ab7",
            "Bbmaj7", "Em7b5 A7", "Dm7", "Bm7b5 E7", "Amaj7", "Amaj7", "Am7b5", "D7",
            "Gmaj7", "Gmaj7", "Cm7", "F7", "Bbmaj7", "Ebmaj7", "Am7b5", "D7",
            "G7alt", "G7alt", "Cm7", "F7", "Bbmaj7", "Bbmaj7"
        ]
    },
    {
        "id": 7,
        "title": "Satin Doll",
        "key": "C",
        "style": "Swing",
        "progression": [
            "Dm7", "G7", "Dm7", "G7", "Em7", "A7", "Em7", "A7",
            "D7", "Db7", "Cmaj7", "F7", "Em7 A7", "Dm7 G7",
            "Dm7", "G7", "Dm7", "G7", "Em7", "A7", "Em7", "A7",
            "D7", "Db7", "Cmaj7", "F7", "Cmaj7", "Cmaj7",
            "Gm7", "C7", "Fmaj7", "Fmaj7", "Am7", "D7", "G7", "G7",
            "Dm7", "G7", "Dm7", "G7", "Em7", "A7", "Em7", "A7",
            "D7", "Db7", "Cmaj7", "F7", "Cmaj7", "Cmaj7"
        ]
    },
    {
        "id": 8,
        "title": "Take The 'A' Train",
        "key": "C",
        "style": "Swing",
        "progression": [
            "Cmaj7", "Cmaj7", "D7b5", "D7b5", "Dm7", "G7", "Cmaj7", "Dm7 G7",
            "Cmaj7", "Cmaj7", "D7b5", "D7b5", "Dm7", "G7", "Cmaj7", "Gm7 C7",
            "Fmaj7", "Fmaj7", "Fmaj7", "Fmaj7", "D7", "D7", "Dm7", "G7",
            "Cmaj7", "Cmaj7", "D7b5", "D7b5", "Dm7", "G7", "Cmaj7", "Cmaj7"
        ]
    },
    {
        "id": 9,
        "title": "On Green Dolphin Street",
        "key": "Eb",
        "style": "Swing",
        "progression": [
            "Ebmaj7", "Ebmaj7", "Gbmaj7", "Gbmaj7", "Fmaj7", "Fmaj7", "Emaj7", "Emaj7",
            "Ebmaj7", "Ebmaj7", "Dm7", "G7", "Cm7", "Cm7", "Fm7", "Bb7",
            "Ebmaj7", "Ebmaj7", "Gbmaj7", "Gbmaj7", "Fmaj7", "Fmaj7", "Emaj7", "Emaj7",
            "Ebmaj7", "Am7b5 D7", "Gm7", "C7", "Fm7", "Bb7", "Ebmaj7", "Fm7 Bb7"
        ]
    },
    {
        "id": 10,
        "title": "Softly, As In A Morning Sunrise",
        "key": "Cm",
        "style": "Swing",
        "progression": [
            "Cm7", "Dm7b5 G7", "Cm7", "Dm7b5 G7", "Cm7", "Dm7b5 G7", "Cm7", "Dm7b5 G7",
            "Cm7", "Dm7b5 G7", "Cm7", "Dm7b5 G7", "Cm7", "Fm7", "Ebmaj7", "Ebmaj7",
            "Ebmaj7", "G7", "Cm7", "Cm7", "Ebmaj7", "G7", "Cm7", "G7",
            "Cm7", "Dm7b5 G7", "Cm7", "Dm7b5 G7", "Cm7", "Fm7", "Ebmaj7", "Ebmaj7"
        ]
    },
    {
        "id": 11,
        "title": "But Not For Me",
        "key": "Eb",
        "style": "Swing",
        "progression": [
            "Ebmaj7", "Edim7", "Fm7", "Bb7", "Ebmaj7", "Edim7", "Fm7", "Bb7",
            "Gm7", "C7", "Fm7", "C7", "Fm7", "Bb7", "Ebmaj7", "Bb7",
            "Ebmaj7", "Edim7", "Fm7", "Bb7", "Ebmaj7", "Edim7", "Fm7", "Bb7",
            "Gm7", "C7", "Fm7", "Bb7", "Ebmaj7", "Ab7", "Ebmaj7", "Ebmaj7"
        ]
    },
    {
        "id": 12,
        "title": "Cherokee",
        "key": "Bb",
        "style": "BeBop",
        "progression": [
            "Bbmaj7", "Bbmaj7", "Fm7", "Bb7", "Ebmaj7", "Ab7", "Bbmaj7", "C7",
            "Cm7", "F7", "Bbmaj7", "Cm7 F7", "Bbmaj7", "Bbmaj7", "Fm7", "Bb7",
            "Ebmaj7", "Ab7", "Bbmaj7", "C7", "Cm7", "F7", "Bbmaj7", "C#m7 F#7",
            "Bmaj7", "Bmaj7", "Bm7", "E7", "Amaj7", "Amaj7", "Am7", "D7",
            "Gmaj7", "Gmaj7", "Gm7", "C7", "Cm7", "F7", "Bbmaj7", "Bbmaj7",
            "Fm7", "Bb7", "Ebmaj7", "Ab7", "Bbmaj7", "C7", "Cm7", "F7", "Bbmaj7", "Bbmaj7"
        ]
    },
    {
        "id": 13,
        "title": "Confirmation",
        "key": "F",
        "style": "BeBop",
        "progression": [
            "Fmaj7", "Em7b5 A7", "Dm7", "Cm7 F7", "Bb7", "Am7 D7", "G7", "Gm7 C7",
            "Fmaj7", "Em7b5 A7", "Dm7", "Cm7 F7", "Bb7", "Am7 D7", "Gm7 C7", "Fmaj7",
            "Cm7", "F7", "Bbmaj7", "Bbmaj7", "Ebm7", "Ab7", "Dbmaj7", "Dbmaj7",
            "Dm7", "G7", "Cmaj7", "Cmaj7", "Gm7", "C7", "Gm7", "C7",
            "Fmaj7", "Em7b5 A7", "Dm7", "Cm7 F7", "Bb7", "Am7 D7", "Gm7 C7", "Fmaj7"
        ]
    },
    {
        "id": 14,
        "title": "Oleo (Rhythm Changes)",
        "key": "Bb",
        "style": "BeBop",
        "progression": [
            "Bbmaj7 G7", "Cm7 F7", "Bbmaj7 G7", "Cm7 F7", "Bbmaj7 G7", "Cm7 F7", "Dm7 G7", "Cm7 F7",
            "Bbmaj7 G7", "Cm7 F7", "Bbmaj7 G7", "Cm7 F7", "Bbmaj7 G7", "Cm7 F7", "Bbmaj7", "Bbmaj7",
            "D7", "D7", "G7", "G7", "C7", "C7", "F7", "F7",
            "Bbmaj7 G7", "Cm7 F7", "Bbmaj7 G7", "Cm7 F7", "Bbmaj7 G7", "Cm7 F7", "Bbmaj7", "Bbmaj7"
        ]
    },

    // --- Bossa Nova / Latin ---
    {
        "id": 15,
        "title": "Blue Bossa",
        "key": "Cm",
        "style": "Bossa",
        "progression": [
            "Cm7", "Cm7", "Fm7", "Fm7", "Dm7b5", "G7alt", "Cm7", "Cm7",
            "Ebm7", "Ab7", "Dbmaj7", "Dbmaj7", "Dm7b5", "G7alt", "Cm7", "Dm7b5 G7alt"
        ]
    },
    {
        "id": 16,
        "title": "The Girl From Ipanema",
        "key": "F",
        "style": "Bossa",
        "progression": [
            "Fmaj7", "Fmaj7", "G7", "G7", "Gm7", "Gb7", "Fmaj7", "Gb7",
            "Fmaj7", "Fmaj7", "G7", "G7", "Gm7", "Gb7", "Fmaj7", "Fmaj7",
            "Gbmaj7", "Gbmaj7", "Cb7", "Cb7", "F#m7", "B7", "Dmaj7", "Dmaj7",
            "Gm7", "Gm7", "Eb7", "Eb7", "Am7", "D7", "Gm7", "C7",
            "Fmaj7", "Fmaj7", "G7", "G7", "Gm7", "Gb7", "Fmaj7", "Fmaj7"
        ]
    },
    {
        "id": 17,
        "title": "Wave",
        "key": "D",
        "style": "Bossa",
        "progression": [
            "Dmaj7", "Bodim7", "Em7", "A7", "Dmaj7", "Bodim7", "Em7", "A7",
            "Dmaj7", "G7", "Cmaj7", "Cmaj7", "F#7alt", "F#7alt", "Bm7", "E7",
            "Bbdim7", "Am7", "D7", "Gmaj7", "Gm7", "C7", "Fmaj7", "Fm7",
            "Bb7", "Ebmaj7", "A7", "Dmaj7", "Bodim7", "Em7", "A7",
            "Dmaj7", "G7", "Cmaj7", "Cmaj7", "F#7alt", "F#7alt", "Bm7", "E7",
            "Gm7", "A7", "Dmaj7", "Dmaj7"
        ]
    },
    {
        "id": 18,
        "title": "Black Orpheus (Manha de Carnaval)",
        "key": "Am",
        "style": "Bossa",
        "progression": [
            "Am7", "Bm7b5 E7", "Am7", "Bm7b5 E7", "Am7", "Dm7", "Cmaj7", "C#dim7",
            "Dm7", "G7", "Cmaj7", "Fmaj7", "Bm7b5", "E7", "Am7", "Bm7b5 E7",
            "Am7", "Bm7b5 E7", "Am7", "Bm7b5 E7", "Am7", "Dm7", "Cmaj7", "C#dim7",
            "Dm7", "Bm7b5", "E7", "Am7", "Dm7", "G7", "Cmaj7", "Fmaj7",
            "Bm7b5", "E7", "Am7", "Am7"
        ]
    },
    {
        "id": 19,
        "title": "Spain",
        "key": "Bm",
        "style": "Fusion/Samba",
        "progression": [
            "Gmaj7", "F#7", "Em7", "A7", "Dmaj7", "Gmaj7", "C#7", "F#7",
            "Bm", "Bm", "Bm", "Bm", "Gmaj7", "F#7", "Em7", "A7", "Dmaj7", "Gmaj7", "C#7", "F#7",
            "Bm", "Bm", "Bm", "Bm"
        ]
    },

    // --- Ballad ---
    {
        "id": 20,
        "title": "Body And Soul",
        "key": "Db",
        "style": "Ballad",
        "progression": [
            "Ebm7", "Ab7", "Dbmaj7", "Ddim7", "Ebm7", "Ab7", "Dm7 G7", "Cmaj7",
            "Cm7 F7", "Bbmaj7", "Em7 A7", "Dmaj7", "Dm7 G7", "C7", "B7", "Bb7 A7",
            "Ebm7", "Ab7", "Dbmaj7", "Ddim7", "Ebm7", "Ab7", "Dbmaj7", "Dbmaj7"
            // (Simplified structure for app)
        ]
    },
    {
        "id": 21,
        "title": "Misty",
        "key": "Eb",
        "style": "Ballad",
        "progression": [
            "Ebmaj7", "Bbm7 Eb7", "Abmaj7", "Abm7 Db7", "Ebmaj7 Cm7", "Fm7 Bb7", "Gm7 C7", "Fm7 Bb7",
            "Ebmaj7", "Bbm7 Eb7", "Abmaj7", "Abm7 Db7", "Ebmaj7 Cm7", "Fm7 Bb7", "Ebmaj7", "Ebmaj7",
            "Bbm7", "Eb7", "Abmaj7", "Abmaj7", "Am7", "D7", "Gmaj7", "Fm7 Bb7",
            "Ebmaj7", "Bbm7 Eb7", "Abmaj7", "Abm7 Db7", "Ebmaj7 Cm7", "Fm7 Bb7", "Ebmaj7", "Ebmaj7"
        ]
    },

    // --- Waltz (3/4) ---
    {
        "id": 22,
        "title": "Someday My Prince Will Come",
        "key": "Bb",
        "style": "Waltz",
        "progression": [
            "Bbmaj7", "D7alt", "Ebmaj7", "G7", "C7", "C7", "Cm7", "F7",
            "Dm7", "Ddim7", "Cm7", "F7", "Bbmaj7", "G7", "Cm7", "F7",
            "Bbmaj7", "D7alt", "Ebmaj7", "G7", "C7", "C7", "Cm7", "F7",
            "Dm7", "Ddim7", "Cm7", "F7", "Bbmaj7", "Bbmaj7", "Bbmaj7", "Bbmaj7"
        ]
    },
    {
        "id": 23,
        "title": "Alice In Wonderland",
        "key": "C",
        "style": "Waltz",
        "progression": [
            "Dm7", "G7", "Cmaj7", "Fmaj7", "Bm7b5", "E7", "Am7", "Eb7",
            "Dm7", "G7", "Em7", "A7", "Dm7", "G7", "Cmaj7", "A7",
            "Dm7", "G7", "Cmaj7", "Fmaj7", "Bm7b5", "E7", "Am7", "Eb7",
            "Dm7", "G7", "Em7", "Ebdim7", "Dm7", "G7", "Cmaj7", "Cmaj7"
        ]
    },

    // --- Blues ---
    {
        "id": 24,
        "title": "Billie's Bounce (Blues)",
        "key": "F",
        "style": "Blues",
        "progression": [
            "F7", "Bb7", "F7", "Cm7 F7", "Bb7", "Bdim7", "F7", "Am7 D7",
            "Gm7", "C7", "F7 D7", "Gm7 C7"
        ]
    },
    {
        "id": 25,
        "title": "Au Privave (Blues)",
        "key": "F",
        "style": "Blues",
        "progression": [
            "F7", "F7", "F7", "Cm7 F7", "Bb7", "Bb7", "F7", "D7alt",
            "Gm7", "C7", "F7", "Gm7 C7"
        ]
    },

    // --- Others ---
    {
        "id": 26,
        "title": "Tune Up",
        "key": "D",
        "style": "Swing",
        "progression": [
            "Em7", "A7", "Dmaj7", "Dmaj7", "Dm7", "G7", "Cmaj7", "Cmaj7",
            "Cm7", "F7", "Bbmaj7", "Bbmaj7", "Em7", "A7", "Bbmaj7", "A7"
        ]
    },
    {
        "id": 27,
        "title": "Four",
        "key": "Eb",
        "style": "Swing",
        "progression": [
            "Ebmaj7", "Ebmaj7", "Fm7", "Bb7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7",
            "Ebm7", "Ab7", "Dbmaj7", "Dbmaj7", "Gm7", "C7", "Fm7", "Bb7",
            "Ebmaj7", "Ebmaj7", "Fm7", "Bb7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7",
            "Ebm7", "Ab7", "Dbmaj7", "Gb7", "Fm7", "Bb7", "Ebmaj7", "Fm7 Bb7"
        ]
    },
    {
        "id": 28,
        "title": "Have You Met Miss Jones?",
        "key": "F",
        "style": "Swing",
        "progression": [
            "Fmaj7", "D7", "Gm7", "C7", "Am7", "Dm7", "Gm7", "C7",
            "Bbmaj7", "Abm7 Db7", "Gbmaj7", "Em7 A7", "Dmaj7", "Abm7 Db7", "Gbmaj7", "Gm7 C7",
            "Fmaj7", "D7", "Gm7", "C7", "Am7", "Dm7", "Gm7", "C7",
            "Am7", "D7", "Gm7", "C7", "Fmaj7", "Gm7 C7"
        ]
    },
    {
        "id": 29,
        "title": "Solar",
        "key": "Cm",
        "style": "Swing",
        "progression": [
            "Cm7", "Cm7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Fm7", "Bb7",
            "Ebmaj7", "Ebmaj7", "Ebm7", "Ab7", "Dbmaj7", "Dm7b5 G7alt", "Cm7", "Cm7"
        ]
    },
    {
        "id": 30,
        "title": "Giant Steps",
        "key": "Eb",
        "style": "Coltrane",
        "progression": [
            "Bmaj7 D7", "Gmaj7 Bb7", "Ebmaj7", "Am7 D7",
            "Gmaj7 Bb7", "Ebmaj7 F#7", "Bmaj7", "Fm7 Bb7",
            "Ebmaj7", "Am7 D7", "Gmaj7", "C#m7 F#7", "Bmaj7", "Fm7 Bb7", "Ebmaj7", "C#m7 F#7"
        ]
    },
    // --- Standard Vol.2 ---
    {
        "id": 31,
        "title": "It Could Happen To You",
        "key": "Eb",
        "style": "Swing",
        "progression": [
            "Ebmaj7", "Gm7b5 C7", "Fm7", "C7alt", "Fm7", "Abm7 Db7", "Ebmaj7", "G7",
            "Cm7", "F7", "Fm7", "Bb7", "Ebmaj7", "C7", "F7", "Bb7",
            "Ebmaj7", "Gm7b5 C7", "Fm7", "C7alt", "Fm7", "Abm7 Db7", "Ebmaj7", "Am7b5 D7",
            "Gmaj7", "Bbdim7", "Fm7", "Bb7", "Ebmaj7", "Fm7 Bb7"
        ]
    },
    {
        "id": 32,
        "title": "I'll Close My Eyes",
        "key": "F",
        "style": "Swing",
        "progression": [
            "Fmaj7", "Em7b5 A7", "Dm7", "G7", "Gm7", "C7", "Fmaj7", "Em7b5 A7",
            "Dm7", "G7", "Cmaj7", "Cmaj7", "Gm7", "C7", "Fmaj7", "C7",
            "Fmaj7", "Em7b5 A7", "Dm7", "G7", "Gm7", "C7", "Am7b5", "D7",
            "Gm7", "Bbm7 Eb7", "Am7", "D7", "Gm7", "C7", "Fmaj7", "Gm7 C7"
        ]
    },
    {
        "id": 33,
        "title": "Candy",
        "key": "Bb",
        "style": "Swing",
        "progression": [
            "Bbmaj7", "G7", "Cm7", "F7", "Bbmaj7", "G7", "Cm7", "F7",
            "Fm7", "Bb7", "Ebmaj7", "Ebm7 Ab7", "Dm7", "G7", "Cm7", "F7",
            "Bbmaj7", "G7", "Cm7", "F7", "Bbmaj7", "G7", "Cm7", "F7",
            "Fm7", "Bb7", "Ebmaj7", "Ebm7 Ab7", "Cm7", "F7", "Bbmaj7", "Bbmaj7"
        ]
    },
    {
        "id": 34,
        "title": "If I Were A Bell",
        "key": "F",
        "style": "Swing",
        "progression": [
            "Fmaj7", "Fmaj7", "Gm7", "C7", "Gm7", "C7", "Gm7", "C7",
            "Gm7", "C7", "Fmaj7", "Fmaj7", "Em7b5", "A7", "Dm7", "G7",
            "Fmaj7", "Fmaj7", "Gm7", "C7", "Gm7", "C7", "Gm7", "C7",
            "Gm7", "C7", "Am7b5", "D7", "Gm7", "C7", "Fmaj7", "Gm7 C7"
        ]
    },
    {
        "id": 35,
        "title": "My Romance",
        "key": "Bb",
        "style": "Swing",
        "progression": [
            "Bbmaj7", "F7", "Gm7", "Cm7 F7", "Bbmaj7", "F7", "Gm7", "C7",
            "Cm7", "F7", "Bbmaj7", "G7", "Cm7", "C7", "Fsus4", "F7",
            "Bbmaj7", "F7", "Gm7", "Cm7 F7", "Bbmaj7", "F7", "Gm7", "G7",
            "Cm7", "Ebm7 Ab7", "Dm7", "G7", "Cm7", "F7", "Bbmaj7", "Cm7 F7"
        ]
    },
    {
        "id": 36,
        "title": "Stablemates",
        "key": "Db",
        "style": "BeBop",
        "progression": [
            "Em7", "A7", "Ebmaj7", "Ab7", "Dbmaj7", "Gb7", "Cbmaj7", "Cbmaj7",
            "Bb7alt", "Bb7alt", "Ebm7", "Ab7", "Dbmaj7", "Dbmaj7",
            "Em7", "A7", "Ebmaj7", "Ab7", "Dbmaj7", "Gb7", "Cbmaj7", "Cbmaj7",
            "Bb7alt", "Bb7alt", "Ebm7", "Ab7", "Dbmaj7", "Em7 A7",
            "Dmaj7", "Dmaj7", "Cm7", "F7", "Fm7", "Bb7", "Ebmaj7", "Em7 A7",
            "Em7", "A7", "Ebmaj7", "Ab7", "Dbmaj7", "Gb7", "Cbmaj7", "Cbmaj7",
            "Bb7alt", "Bb7alt", "Ebm7", "Ab7", "Dbmaj7", "Dbmaj7"
        ]
    },
    {
        "id": 37,
        "title": "Scrapple From The Apple",
        "key": "F",
        "style": "BeBop",
        "progression": [
            "Gm7", "Gm7", "C7", "C7", "Gm7", "C7", "Fmaj7", "Fmaj7",
            "Gm7", "Gm7", "C7", "C7", "Fmaj7", "Bb7", "Fmaj7", "A7",
            "Dm7", "G7", "Dm7", "G7", "C7", "F7", "Bb7", "A7",
            "Gm7", "Gm7", "C7", "C7", "Fmaj7", "Bb7", "Fmaj7", "Fmaj7"
        ]
    },
    {
        "id": 38,
        "title": "Yardbird Suite",
        "key": "C",
        "style": "BeBop",
        "progression": [
            "Cmaj7", "Fm7 Bb7", "Cmaj7", "Bb7 A7", "D7", "D7", "Dm7", "G7",
            "Cmaj7", "Fm7 Bb7", "Cmaj7", "Bb7 A7", "D7", "G7", "Cmaj7", "Cmaj7",
            "Em7", "A7", "Em7", "A7", "D7", "D7", "Dm7", "G7",
            "Cmaj7", "Fm7 Bb7", "Cmaj7", "Bb7 A7", "D7", "G7", "Cmaj7", "Cmaj7"
        ]
    },
    {
        "id": 39,
        "title": "Donna Lee",
        "key": "Ab",
        "style": "BeBop",
        "progression": [
            "Abmaj7", "F7", "Bb7", "Bb7", "Bbm7", "Eb7", "Abmaj7", "Eb7",
            "Abmaj7", "F7", "Bb7", "Bb7", "C7", "C7", "Fm7", "C7alt",
            "Fm7", "C7alt", "Fm7", "Ab7", "Dbmaj7", "Ddim7", "Abmaj7", "F7",
            "Bb7", "Bb7", "Bbm7", "Eb7", "Abmaj7", "Eb7"
        ]
    },
    {
        "id": 40,
        "title": "Ornithology",
        "key": "G",
        "style": "BeBop",
        "progression": [
            "Gmaj7", "Gmaj7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Fm7", "Bb7",
            "Ebmaj7", "Ebmaj7", "Am7", "D7", "Bm7", "E7", "Am7", "D7",
            "Gmaj7", "Gmaj7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Fm7", "Bb7",
            "Bm7", "E7", "Am7", "D7", "Gmaj7", "D7"
        ]
    },
    {
        "id": 41,
        "title": "Whisper Not",
        "key": "Cm",
        "style": "Swing",
        "progression": [
            "Cm7", "Cm7", "Cm7", "Am7b5 D7", "Gm7", "Gm7", "Gm7", "Dm7b5 G7",
            "Cm7", "Fm7 Bb7", "Ebmaj7", "Abmaj7", "Dm7b5", "G7", "Cm7", "Dm7b5 G7",
            "Cm7", "Cm7", "Cm7", "Am7b5 D7", "Gm7", "Gm7", "Gm7", "Dm7b5 G7",
            "Cm7", "Fm7 Bb7", "Ebmaj7", "Abmaj7", "Dm7b5", "G7", "Cm7", "C7",
            "Fm7", "G7", "Cm7", "Cm7", "Fm7", "Bb7", "Ebmaj7", "Dm7b5 G7",
            "Cm7", "Cm7", "Cm7", "Am7b5 D7", "Gm7", "Gm7", "Gm7", "Dm7b5 G7",
            "Cm7", "Fm7 Bb7", "Ebmaj7", "Abmaj7", "Dm7b5", "G7", "Cm7", "Dm7b5 G7"
        ]
    },
    {
        "id": 42,
        "title": "Moanin'",
        "key": "F",
        "style": "Swing",
        "progression": [
            "Fm7", "Fm7", "Fm7", "Fm7", "Bb7", "Bb7", "Fm7", "Fm7",
            "C7", "Bb7", "Fm7", "C7"
        ]
    },
    {
        "id": 43,
        "title": "Dat Dere",
        "key": "Cm",
        "style": "Swing",
        "progression": [
            "Cm7", "Dm7b5 G7", "Cm7", "Dm7b5 G7", "Cm7", "Dm7b5 G7", "Cm7", "Dm7b5 G7",
            "Fm7", "Bb7", "Ebmaj7", "Abmaj7", "Am7b5", "D7", "G7", "G7",
            "Cm7", "Dm7b5 G7", "Cm7", "Dm7b5 G7", "Cm7", "Dm7b5 G7", "Cm7", "Dm7b5 G7"
        ]
    },
    {
        "id": 44,
        "title": "Recado Bossa Nova",
        "key": "Dm",
        "style": "Bossa",
        "progression": [
            "Dm7", "Dm7", "Em7b5", "A7", "Dm7", "Dm7", "Cm7", "F7",
            "Bbmaj7", "Eb9", "Dm7", "Dm7", "Em7b5", "A7", "Dm7", "A7",
            "Dm7", "Dm7", "Em7b5", "A7", "Dm7", "Dm7", "Cm7", "F7",
            "Bbmaj7", "Eb9", "Dm7", "Dm7", "Em7b5", "A7", "Dm7", "Dm7"
        ]
    },
    {
        "id": 45,
        "title": "Corcovado",
        "key": "C",
        "style": "Bossa",
        "progression": [
            "D7", "D7", "Fm7", "Bb7", "Em7", "Em7", "A7b9", "A7b9",
            "D7", "D7", "Fm7", "Bb7", "Em7", "Em7", "F#dim7", "B7b9",
            "Fmaj7", "G7", "Em7", "Am7", "Dm7", "G7", "Em7", "A7b9",
            "D7", "G7", "Em7", "Am7", "Dm7", "G7", "Cmaj7", "Cmaj7"
        ]
    },
    {
        "id": 46,
        "title": "How Insensitive",
        "key": "Dm",
        "style": "Bossa",
        "progression": [
            "Dm7", "Dm7", "C#dim7", "C#dim7", "Cm6", "Cm6", "G7/B", "G7/B",
            "Bbmaj7", "Bbmaj7", "Ebmaj7", "Ebmaj7", "Em7b5", "A7", "Dm7", "A7",
            "Dm7", "Dm7", "C#dim7", "C#dim7", "Cm6", "Cm6", "G7/B", "G7/B",
            "Bbmaj7", "Bbmaj7", "Ebmaj7", "Ebmaj7", "Em7b5", "A7", "Dm7", "Dm7"
        ]
    },
    {
        "id": 47,
        "title": "St. Thomas",
        "key": "C",
        "style": "Calypso",
        "progression": [
            "Cmaj7", "Cmaj7", "Em7b5", "A7", "Dm7", "G7", "Cmaj7", "G7",
            "Cmaj7", "Cmaj7", "Em7b5", "A7", "Dm7", "G7", "Cmaj7", "Cmaj7",
            "Em7", "A7", "Dm7", "G7", "Em7", "A7", "Dm7", "G7",
            "Cmaj7", "Cmaj7", "Em7b5", "A7", "Dm7", "G7", "Cmaj7", "Cmaj7"
        ]
    },
    {
        "id": 48,
        "title": "Moritat (Mack The Knife)",
        "key": "Bb",
        "style": "Swing",
        "progression": [
            "Bb6", "Bb6", "Cm7", "Cm7", "F7", "F7", "Bb6", "Bb6",
            "Gm7", "Gm7", "Cm7", "Cm7", "F7", "F7", "Bb6", "F7"
        ]
    },
    {
        "id": 49,
        "title": "You'd Be So Nice To Come Home To",
        "key": "Gm",
        "style": "Swing",
        "progression": [
            "Gm7", "Gm7", "Am7b5", "D7", "Gm7", "Gm7", "Fm7", "Bb7",
            "Ebmaj7", "F7", "D7", "Gm7", "C7", "C7", "Am7b5", "D7",
            "Gm7", "Gm7", "Am7b5", "D7", "Gm7", "Gm7", "Fm7", "Bb7",
            "Ebmaj7", "F7", "D7", "Gm7", "Cm7", "F7", "Bbmaj7", "Am7b5 D7"
        ]
    },
    {
        "id": 50,
        "title": "Alone Together",
        "key": "Dm",
        "style": "Swing",
        "progression": [
            "Am7b5", "D7", "Gm7", "Gm7", "Em7b5", "A7", "Dm7", "D7",
            "Am7b5", "D7", "Gm7", "Gm7", "Bb7", "A7", "Dm7", "Dm7",
            "Am7b5", "D7", "Gm7", "Gm7", "C7", "C7", "Fmaj7", "Em7b5 A7",
            "Am7b5", "D7", "Gm7", "Gm7", "Bb7", "A7", "Dm7", "Dm7"
        ]
    },
    {
        "id": 51,
        "title": "Yesterdays",
        "key": "Dm",
        "style": "Swing",
        "progression": [
            "Dm7", "Em7b5 A7", "Dm7", "Em7b5 A7", "Em7b5", "A7", "Dm7", "Dm7",
            "Em7b5", "A7", "Dm7", "G7", "Cmaj7", "Cmaj7", "Bbmaj7", "A7",
            "Dm7", "Em7b5 A7", "Dm7", "Em7b5 A7", "Em7b5", "A7", "Dm7", "Dm7",
            "Em7b5", "A7", "Dm7", "G7", "Bb7", "A7", "Dm7", "Dm7"
        ]
    },
    {
        "id": 52,
        "title": "What Is This Thing Called Love",
        "key": "C",
        "style": "Swing",
        "progression": [
            "Gm7", "C7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Am7b5", "D7",
            "Gmaj7", "Gmaj7", "Gmaj7", "Gmaj7", "Gm7", "C7", "Fmaj7", "Fmaj7",
            "Gm7", "C7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Am7b5", "D7",
            "Gmaj7", "Gmaj7", "Ab7", "G7", "Cmaj7", "Cmaj7", "Cmaj7", "Cmaj7"
        ]
    },
    {
        "id": 53,
        "title": "Love For Sale",
        "key": "Bbm",
        "style": "Swing/Latin",
        "progression": [
            "Bbm6", "Bbm6", "Ab7", "Db7", "Gbmaj7", "Gbmaj7", "Cm7b5", "F7",
            "Bbm6", "Bbm6", "Ab7", "Db7", "Gbmaj7", "Gbmaj7", "Cm7b5", "F7",
            "Bbm7", "Ebm7", "Bbm7", "Ebm7", "Bbm7", "Ebm7", "Bbm7", "Bbm7",
            "Ebm7", "Ab7", "Dbmaj7", "F7alt", "Bbm6", "Bbm6", "Bbm6", "Bbm6"
        ]
    },
    {
        "id": 54,
        "title": "Night And Day",
        "key": "C",
        "style": "Swing/Bossa",
        "progression": [
            "Abmaj7", "G7", "Cmaj7", "Cmaj7", "Abmaj7", "G7", "Cmaj7", "Cmaj7",
            "F#m7b5", "Fm7", "Em7", "Ebdim7", "Dm7", "G7", "Cmaj7", "Cmaj7",
            "Abmaj7", "G7", "Cmaj7", "Cmaj7", "Abmaj7", "G7", "Cmaj7", "Cmaj7",
            "F#m7b5", "Fm7", "Em7", "Ebdim7", "Dm7", "G7", "Cmaj7", "Cmaj7",
            "Ebmaj7", "Ebmaj7", "Cmaj7", "Cmaj7", "Ebmaj7", "Ebmaj7", "Cmaj7", "Cmaj7",
            "F#m7b5", "Fm7", "Em7", "Ebdim7", "Dm7", "G7", "Cmaj7", "Cmaj7"
        ]
    },
    {
        "id": 55,
        "title": "My One And Only Love",
        "key": "C",
        "style": "Ballad",
        "progression": [
            "Cmaj7", "Am7", "Dm7", "G7", "Cmaj7", "C7", "Fmaj7", "E7",
            "Am7", "D7", "Dm7", "G7", "Cmaj7", "Em7 A7", "Dm7", "G7",
            "Cmaj7", "Am7", "Dm7", "G7", "Cmaj7", "C7", "Fmaj7", "E7",
            "Am7", "D7", "Dm7", "G7", "Cmaj7", "Fm7 Bb7", "Cmaj7", "Cmaj7"
        ]
    },
    {
        "id": 56,
        "title": "In A Sentimental Mood",
        "key": "F",
        "style": "Ballad",
        "progression": [
            "Dm", "Dm(maj7)", "Dm7", "Dm6", "Gm7", "Gm7", "A7", "A7",
            "Dm", "Dm(maj7)", "Dm7", "Dm6", "Gm7", "C7", "Fmaj7", "Fmaj7",
            "Dbmaj7", "Bb7", "Ebmaj7", "Ebmaj7", "Dbmaj7", "G7", "Cmaj7", "A7",
            "Dm", "Dm(maj7)", "Dm7", "Dm6", "Gm7", "C7", "Fmaj7", "A7"
        ]
    },
    {
        "id": 57,
        "title": "Round Midnight",
        "key": "Eb",
        "style": "Ballad",
        "progression": [
            "Ebm", "Cm7b5 F7", "Bbm7 Eb7", "Ab7", "Am7b5 D7", "Gm7 C7", "Fm7 Bb7", "Am7b5 D7",
            "Ebm", "Cm7b5 F7", "Bbm7 Eb7", "Ab7", "Am7b5 D7", "G7", "Cm7", "Bmaj7 Bb7",
            "C7", "Fm7", "Bb7", "Bdim7", "Cm7", "Cm7", "F7", "Bb7",
            "Ebm", "Cm7b5 F7", "Bbm7 Eb7", "Ab7", "Am7b5 D7", "G7", "Cm7", "Cm7"
        ]
    },
    {
        "id": 58,
        "title": "Prelude To A Kiss",
        "key": "C",
        "style": "Ballad",
        "progression": [
            "D7", "G7", "Cmaj7", "Am7", "D7", "G7", "Cmaj7", "F#dim7 B7",
            "Emaj7", "F#m7 B7", "Emaj7", "C#m7 F#7", "Bmaj7", "Bm7 E7", "Amaj7", "A7",
            "D7", "G7", "Cmaj7", "Am7", "D7", "G7", "Cmaj7", "Cmaj7"
        ]
    },
    {
        "id": 59,
        "title": "Wave",
        "key": "D",
        "style": "Bossa",
        "progression": [
            "Dmaj7", "Bodim7", "Em7", "A7", "Dmaj7", "Bodim7", "Em7", "A7",
            "Dmaj7", "G7", "Cmaj7", "Cmaj7", "F#7", "F#7", "Bm7", "E7",
            "Bbdim7", "Am7", "D7", "Gmaj7", "Gm7", "C7", "Fmaj7", "Fm7",
            "Bb7", "Ebmaj7", "A7", "Dmaj7", "Bodim7", "Em7", "A7",
            "Dmaj7", "G7", "Cmaj7", "Cmaj7", "F#7", "F#7", "Bm7", "E7",
            "Gm7", "A7", "Dmaj7", "Dmaj7"
        ]
    },
    {
        "id": 60,
        "title": "Recorda Me",
        "key": "Am",
        "style": "Bossa/Latin",
        "progression": [
            "Am7", "Am7", "Cm7", "F7", "Bbmaj7", "Bbmaj7", "Bbm7", "Eb7",
            "Abmaj7", "Abmaj7", "Gm7", "C7", "Fmaj7", "Fmaj7", "E7alt", "E7alt"
        ]
    },
    {
        "id": 61,
        "title": "Invitation",
        "key": "Cm",
        "style": "Latin/Swing",
        "progression": [
            "Cm7", "Cm7", "F7", "F7", "Cm7", "Cm7", "F7", "F7",
            "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Am7b5", "D7alt", "Gmaj7", "Gmaj7",
            "Cm7", "Cm7", "F7", "F7", "Cm7", "Cm7", "F7", "F7",
            "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Am7b5", "D7alt", "Gm7", "G7"
        ]
    },
    {
        "id": 62,
        "title": "On Green Dolphin Street",
        "key": "Eb",
        "style": "Swing",
        "progression": [
            "Ebmaj7", "Ebmaj7", "Gbmaj7", "Gbmaj7", "Fmaj7", "Fmaj7", "Emaj7", "Emaj7",
            "Ebmaj7", "Ebmaj7", "Dm7", "G7", "Cm7", "Cm7", "Fm7", "Bb7",
            "Ebmaj7", "Ebmaj7", "Gbmaj7", "Gbmaj7", "Fmaj7", "Fmaj7", "Emaj7", "Emaj7",
            "Ebmaj7", "Am7b5 D7", "Gm7", "C7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7"
        ]
    },
    {
        "id": 63,
        "title": "Just One Of Those Things",
        "key": "Dm",
        "style": "Swing",
        "progression": [
            "Dm7", "Dm7", "Em7b5", "A7", "Dm7", "Dm7", "Cm7", "F7",
            "Bbmaj7", "Gm7", "C7", "F7", "Bbmaj7", "Gm7", "A7", "A7",
            "Dm7", "Dm7", "Em7b5", "A7", "Dm7", "Dm7", "Cm7", "F7",
            "Bbmaj7", "Gm7", "C7", "F7", "Bbmaj7", "Gm7", "Am7b5", "D7",
            "Gm7", "Gm7", "C7", "C7", "Fmaj7", "Eb7", "D7", "D7",
            "Gm7", "Bbm7", "Fmaj7", "E7", "Eb7", "D7", "Gm7", "C7", "Fmaj7", "A7"
        ]
    },
    {
        "id": 64,
        "title": "How High The Moon",
        "key": "G",
        "style": "Swing",
        "progression": [
            "Gmaj7", "Gmaj7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Fm7", "Bb7",
            "Ebmaj7", "Am7b5 D7", "Gm7", "Am7b5 D7", "Gmaj7", "Gmaj7", "Bm7", "Bb7",
            "Am7", "D7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Fm7", "Bb7",
            "Ebmaj7", "Am7b5 D7", "Gm7", "C7", "Bm7", "Bb7", "Am7 D7", "Gmaj7"
        ]
    },
    {
        "id": 65,
        "title": "Softly, As In A Morning Sunrise",
        "key": "Cm",
        "style": "Swing",
        "progression": [
            "Cm7", "Dm7b5 G7", "Cm7", "Dm7b5 G7", "Cm7", "Dm7b5 G7", "Cm7", "Dm7b5 G7",
            "Cm7", "Dm7b5 G7", "Cm7", "Dm7b5 G7", "Cm7", "Fm7", "Ebmaj7", "Ebmaj7",
            "Ebmaj7", "G7", "Cm7", "Cm7", "Ebmaj7", "G7", "Cm7", "G7",
            "Cm7", "Dm7b5 G7", "Cm7", "Dm7b5 G7", "Cm7", "Fm7", "Ebmaj7", "Ebmaj7"
        ]
    },// --- Modern / Modal / Funk ---
    {
        "id": 66,
        "title": "So What",
        "key": "Dm",
        "style": "Modal",
        "progression": [
            "Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "Dm7",
            "Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "Dm7",
            "Ebm7", "Ebm7", "Ebm7", "Ebm7", "Ebm7", "Ebm7", "Ebm7", "Ebm7",
            "Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "Dm7"
        ]
    },
    {
        "id": 67,
        "title": "Impressions",
        "key": "Dm",
        "style": "Modal",
        "progression": [
            "Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "Dm7",
            "Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "Dm7",
            "Ebm7", "Ebm7", "Ebm7", "Ebm7", "Ebm7", "Ebm7", "Ebm7", "Ebm7",
            "Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "Dm7", "Dm7"
        ]
    },
    {
        "id": 68,
        "title": "Cantaloupe Island",
        "key": "Fm",
        "style": "Funk",
        "progression": [
            "Fm7", "Fm7", "Fm7", "Fm7", "Db7", "Db7", "Db7", "Db7",
            "Dm7", "Dm7", "Dm7", "Dm7", "Fm7", "Fm7", "Fm7", "Fm7"
        ]
    },
    {
        "id": 69,
        "title": "Watermelon Man",
        "key": "F",
        "style": "Funk/Blues",
        "progression": [
            "F7", "F7", "F7", "F7", "Bb7", "Bb7", "F7", "F7",
            "C7", "Bb7", "F7", "C7", "C7", "Bb7", "F7", "C7"
        ]
    },
    {
        "id": 70,
        "title": "Maiden Voyage",
        "key": "D",
        "style": "Modal",
        "progression": [
            "D7sus4", "D7sus4", "D7sus4", "D7sus4", "F7sus4", "F7sus4", "F7sus4", "F7sus4",
            "Eb7sus4", "Eb7sus4", "Eb7sus4", "Eb7sus4", "Db7sus4", "Db7sus4", "Db7sus4", "Db7sus4",
            "D7sus4", "D7sus4", "D7sus4", "D7sus4", "D7sus4", "D7sus4", "D7sus4", "D7sus4"
        ]
    },
    {
        "id": 71,
        "title": "Footprints",
        "key": "Cm",
        "style": "Modal/Waltz",
        "progression": [
            "Cm7", "Cm7", "Cm7", "Cm7", "Fm7", "Fm7", "Cm7", "Cm7",
            "D7alt", "Db7alt", "Cm7", "Cm7"
        ]
    },

    // --- Monk & Bebop Classics ---
    {
        "id": 72,
        "title": "Blue Monk",
        "key": "Bb",
        "style": "Blues",
        "progression": [
            "Bb7", "Eb7", "Bb7", "Bb7", "Eb7", "Eb7", "Bb7", "Bb7",
            "F7", "Eb7", "Bb7", "F7"
        ]
    },
    {
        "id": 73,
        "title": "Straight No Chaser",
        "key": "F",
        "style": "Blues",
        "progression": [
            "F7", "Bb7", "F7", "F7", "Bb7", "Bb7", "F7", "Am7 D7",
            "Gm7", "C7", "F7", "C7"
        ]
    },
    {
        "id": 74,
        "title": "Well You Needn't",
        "key": "F",
        "style": "Monk",
        "progression": [
            "Fmaj7", "Gb7", "Fmaj7", "Gb7", "Fmaj7", "Gb7", "Fmaj7", "Gb7",
            "Fmaj7", "Gb7", "Fmaj7", "Gb7", "Fmaj7", "Gb7", "Fmaj7", "Gb7",
            "Db7", "Db7", "D7", "D7", "Eb7", "Eb7", "E7", "E7",
            "Fmaj7", "Gb7", "Fmaj7", "Gb7", "Fmaj7", "Gb7", "Fmaj7", "Fmaj7"
        ]
    },
    {
        "id": 75,
        "title": "A Night In Tunisia",
        "key": "Dm",
        "style": "Latin/Swing",
        "progression": [
            "Eb7", "Dm6", "Eb7", "Dm6", "Eb7", "Dm6", "Eb7", "Dm6",
            "Eb7", "Dm6", "Eb7", "Dm6", "Em7b5", "A7alt", "Dm6", "Dm6",
            "Am7b5", "D7", "Gm7", "Gm7", "Gm7b5", "C7", "Fmaj7", "Em7b5 A7",
            "Eb7", "Dm6", "Eb7", "Dm6", "Eb7", "Dm6", "Eb7", "Dm6"
        ]
    },
    {
        "id": 76,
        "title": "Caravan",
        "key": "Fm",
        "style": "Latin/Swing",
        "progression": [
            "C7", "C7", "C7", "C7", "C7", "C7", "C7", "C7",
            "Db7", "Db7", "C7", "C7", "Fm6", "Fm6", "Fm6", "Fm6",
            "F7", "F7", "Bb7", "Bb7", "Eb7", "Eb7", "Abmaj7", "C7",
            "C7", "C7", "C7", "C7", "C7", "C7", "C7", "C7",
            "Db7", "Db7", "C7", "C7", "Fm6", "Fm6", "Fm6", "Fm6"
        ]
    },
    {
        "id": 77,
        "title": "Lullaby Of Birdland",
        "key": "Eb",
        "style": "Swing",
        "progression": [
            "Fm7", "Fm7", "Fm7", "Bb7", "Ebmaj7", "C7", "Fm7", "Bb7",
            "Fm7", "Fm7", "Fm7", "Bb7", "Ebmaj7", "Abmaj7", "Gm7 C7", "Fm7 Bb7",
            "Gm7b5", "C7", "Fm7", "Fm7", "Abm7", "Db7", "Ebmaj7", "Ebmaj7",
            "Fm7", "Fm7", "Fm7", "Bb7", "Ebmaj7", "C7", "Fm7", "Bb7"
        ]
    },
    {
        "id": 78,
        "title": "Joy Spring",
        "key": "F",
        "style": "BeBop",
        "progression": [
            "Fmaj7", "G7", "Gm7", "C7", "Fmaj7", "Bbm7 Eb7", "Am7", "Ab7",
            "Gm7", "C7", "Fmaj7", "Fmaj7", "Fm7", "Bb7", "Ebmaj7", "Ebmaj7",
            "Ebm7", "Ab7", "Dbmaj7", "Dbmaj7", "Gm7", "C7", "Fmaj7", "Bbm7 Eb7",
            "Am7", "Ab7", "Gm7", "C7", "Fmaj7", "Fmaj7"
        ]
    },
    {
        "id": 79,
        "title": "Lady Bird",
        "key": "C",
        "style": "BeBop",
        "progression": [
            "Cmaj7", "Cmaj7", "Fm7", "Bb7", "Cmaj7", "Cmaj7", "Bbm7", "Eb7",
            "Abmaj7", "Abmaj7", "Am7", "D7", "Dm7", "G7", "Cmaj7", "Ebmaj7 Abmaj7"
        ]
    },
    {
        "id": 80,
        "title": "Woody 'n' You",
        "key": "Db",
        "style": "BeBop",
        "progression": [
            "Gm7b5", "C7", "Fm7b5", "Bb7", "Ebm7b5", "Ab7", "Dbmaj7", "Dbmaj7",
            "Gm7b5", "C7", "Fm7b5", "Bb7", "Ebm7b5", "Ab7", "Dbmaj7", "Dbmaj7",
            "Dbmaj7", "Dbmaj7", "Bm7", "E7", "Amaj7", "Amaj7", "Am7", "D7",
            "Gmaj7", "Gmaj7", "Gm7b5", "C7", "Fm7b5", "Bb7", "Ebm7b5", "Ab7", "Dbmaj7", "Dbmaj7"
        ]
    },

    // --- Guitar Heroes (Wes, etc) ---
    {
        "id": 81,
        "title": "Four On Six",
        "key": "Gm",
        "style": "Swing",
        "progression": [
            "Gm7", "Gm7", "Cm7", "F7", "Gm7", "Gm7", "Cm7", "F7",
            "Gm7", "Gm7", "Am7", "D7", "Gm7", "E7", "Eb7", "D7",
            "Gm7", "Gm7", "Cm7", "F7", "Gm7", "Gm7", "Cm7", "F7",
            "Gm7", "Gm7", "Am7", "D7", "Gm7", "Gm7", "Gm7", "Gm7"
        ]
    },
    {
        "id": 82,
        "title": "Road Song",
        "key": "Gm",
        "style": "Latin/Funk",
        "progression": [
            "Gm7", "Cm7", "Gm7", "Cm7", "Gm7", "Cm7", "Gm7", "Cm7",
            "Fm7", "Bb7", "Ebmaj7", "Ebmaj7", "Am7b5", "D7", "Gm7", "D7alt"
        ]
    },
    {
        "id": 83,
        "title": "Full House",
        "key": "Gm",
        "style": "Waltz",
        "progression": [
            "Gm7", "Gm7", "Cm7", "F7", "Gm7", "Gm7", "A7", "D7",
            "Gm7", "G7", "Cm7", "Cm7", "Gm7", "D7", "Gm7", "D7"
        ]
    },
    {
        "id": 84,
        "title": "Emily",
        "key": "C",
        "style": "Waltz",
        "progression": [
            "Cmaj7", "Em7", "Dm7", "G7", "Cmaj7", "Am7", "Dm7", "G7",
            "Cmaj7", "C7", "Fmaj7", "Fm7", "Cmaj7", "Am7", "D7", "G7",
            "Cmaj7", "Em7", "Dm7", "G7", "Cmaj7", "Am7", "Dm7", "G7",
            "Cmaj7", "C7", "Fmaj7", "Fm7", "Cmaj7", "G7", "Cmaj7", "G7"
        ]
    },

    // --- Jobim / Bossa Continued ---
    {
        "id": 85,
        "title": "Desafinado",
        "key": "F",
        "style": "Bossa",
        "progression": [
            "Fmaj7", "Fmaj7", "G7", "G7", "Gm7", "C7", "Am7b5", "D7",
            "Gm7", "C7", "Am7b5", "D7", "G7", "G7", "Gbmaj7", "Gbmaj7",
            "Fmaj7", "Fmaj7", "G7", "G7", "Gm7", "C7", "Am7b5", "D7",
            "Gm7", "A7", "Dm7", "Dbm7", "Cm7", "F7", "Bbmaj7", "Bdim7",
            "Fmaj7", "Fmaj7", "G7", "G7", "Gm7", "C7", "Fmaj7", "Fmaj7"
        ]
    },
    {
        "id": 86,
        "title": "One Note Samba",
        "key": "Bb",
        "style": "Bossa",
        "progression": [
            "Dm7", "Db7", "Cm7", "B7", "Dm7", "Db7", "Cm7", "B7",
            "Fm7", "Bb7", "Ebmaj7", "Ab7", "Dbmaj7", "Dbmaj7", "Gbmaj7", "B7",
            "Dm7", "Db7", "Cm7", "B7", "Dm7", "Db7", "Cm7", "B7",
            "Fm7", "Bb7", "Ebmaj7", "Ab7", "Dm7", "G7", "Cm7 F7", "Bbmaj7"
        ]
    },
    {
        "id": 87,
        "title": "Triste",
        "key": "Bb",
        "style": "Bossa",
        "progression": [
            "Bbmaj7", "Bbmaj7", "Gbmaj7", "B7", "Bbmaj7", "Bbmaj7", "Fm7", "Bb7",
            "Ebmaj7", "Ab7", "Dm7", "D7", "Gm7", "Gm7", "Cm7", "F7",
            "Bbmaj7", "Bbmaj7", "Fm7", "Bb7", "Ebmaj7", "Ebm7", "Dm7", "G7",
            "Cm7", "F7", "Bbmaj7", "F7"
        ]
    },
    {
        "id": 88,
        "title": "Meditation",
        "key": "C",
        "style": "Bossa",
        "progression": [
            "Cmaj7", "Cmaj7", "B7", "B7", "Cmaj7", "Cmaj7", "B7", "B7",
            "Em7", "A7", "Dm7", "Dm7", "Dm7", "G7", "Cmaj7", "G7",
            "Cmaj7", "Cmaj7", "B7", "B7", "Cmaj7", "Cmaj7", "B7", "B7",
            "Em7", "A7", "Dm7", "Fm6", "Cmaj7", "G7", "Cmaj7", "Cmaj7"
        ]
    },

    // --- Ballads & Standards ---
    {
        "id": 89,
        "title": "My Funny Valentine",
        "key": "Cm",
        "style": "Ballad",
        "progression": [
            "Cm", "Cm(maj7)", "Cm7", "Cm6", "Abmaj7", "Fm7", "Dm7b5", "G7",
            "Cm", "Cm(maj7)", "Cm7", "Cm6", "Abmaj7", "Fm7", "Fm7", "Bb7",
            "Ebmaj7", "Fm7", "Gm7", "Fm7", "Ebmaj7", "Fm7", "Gm7", "C7",
            "Fm7", "Bb7", "Ebmaj7", "Abmaj7", "Dm7b5", "G7", "Cm7", "G7",
            "Cm", "Cm(maj7)", "Cm7", "Cm6", "Abmaj7", "Fm7", "Dm7b5", "G7",
            "Cm7", "Bbm7 Eb7", "Abmaj7", "Fm7", "Dm7b5", "G7", "Cm7", "G7"
        ]
    },
    {
        "id": 90,
        "title": "I Remember You",
        "key": "F",
        "style": "Swing",
        "progression": [
            "Fmaj7", "Fmaj7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Bm7b5", "E7",
            "Am7", "Am7", "D7", "D7", "G7", "G7", "Gm7", "C7",
            "Fmaj7", "Fmaj7", "Gm7", "C7", "Fmaj7", "Fmaj7", "Bm7b5", "E7",
            "Am7", "Am7", "Bbm7", "Eb7", "Fmaj7", "D7", "Gm7 C7", "Fmaj7"
        ]
    },
    {
        "id": 91,
        "title": "It's Only A Paper Moon",
        "key": "G",
        "style": "Swing",
        "progression": [
            "Gmaj7", "E7", "Am7", "D7", "Am7", "D7", "Gmaj7", "D7",
            "Gmaj7", "E7", "Am7", "D7", "Am7", "D7", "Gmaj7", "G7",
            "Cmaj7", "C#dim7", "Gmaj7", "E7", "Am7", "D7", "Gmaj7", "G7",
            "Cmaj7", "C#dim7", "Gmaj7", "E7", "Am7", "D7", "Gmaj7", "Gmaj7"
        ]
    },
    {
        "id": 92,
        "title": "Polka Dots And Moonbeams",
        "key": "F",
        "style": "Ballad",
        "progression": [
            "Fmaj7", "Dm7", "Gm7", "C7", "Fmaj7", "Dm7", "Cm7", "F7",
            "Bbmaj7", "Bdim7", "Fmaj7", "D7", "Gm7", "C7", "Am7", "D7",
            "Fmaj7", "Dm7", "Gm7", "C7", "Fmaj7", "Dm7", "Cm7", "F7",
            "Bbmaj7", "Bdim7", "Fmaj7", "D7", "Gm7", "C7", "Fmaj7", "Fmaj7"
        ]
    },
    {
        "id": 93,
        "title": "Stolen Moments",
        "key": "Cm",
        "style": "Blues/Minor",
        "progression": [
            "Cm7", "Cm7", "Cm7", "Cm7", "Fm7", "Fm7", "Cm7", "Cm7",
            "Dm7", "Ebm7", "Dm7", "G7", "Cm7", "G7"
        ]
    },
    {
        "id": 94,
        "title": "Mr. P.C.",
        "key": "Cm",
        "style": "Blues/Minor",
        "progression": [
            "Cm7", "Cm7", "Cm7", "Cm7", "Fm7", "Fm7", "Cm7", "Cm7",
            "Ab7", "G7", "Cm7", "Cm7"
        ]
    },
    {
        "id": 95,
        "title": "Nardis",
        "key": "Em",
        "style": "Modern",
        "progression": [
            "Em", "Fmaj7", "B7alt", "Cmaj7", "Am7", "Fmaj7", "Emaj7", "Emaj7",
            "Em", "Fmaj7", "B7alt", "Cmaj7", "Am7", "Fmaj7", "Emaj7", "Emaj7",
            "Am7", "Fmaj7", "Emaj7", "Emaj7", "Dm7", "G7", "Cmaj7", "Fmaj7",
            "Em", "Fmaj7", "B7alt", "Cmaj7", "Am7", "Fmaj7", "Emaj7", "Emaj7"
        ]
    },
    {
        "id": 96,
        "title": "Pent Up House",
        "key": "G",
        "style": "BeBop",
        "progression": [
            "Am7", "D7", "Gmaj7", "Gmaj7", "Cm7", "F7", "Bbmaj7", "Bbmaj7",
            "Am7", "D7", "Bm7", "E7", "Am7", "D7", "Gmaj7", "Gmaj7"
        ]
    },
    {
        "id": 97,
        "title": "Doxy",
        "key": "Bb",
        "style": "Swing",
        "progression": [
            "Bb7", "Ab7", "G7", "G7", "C7", "F7", "Bb7", "F7",
            "Bb7", "Ab7", "G7", "G7", "C7", "F7", "Bb7", "Bb7",
            "Bb7", "Bb7", "Eb7", "Edim7", "Bb7", "Bb7", "Gm7", "C7",
            "Bb7", "Ab7", "G7", "G7", "C7", "F7", "Bb7", "F7"
        ]
    },
    {
        "id": 98,
        "title": "C Jam Blues",
        "key": "C",
        "style": "Blues",
        "progression": [
            "C7", "C7", "C7", "C7", "F7", "F7", "C7", "C7",
            "G7", "G7", "C7", "G7"
        ]
    },
    {
        "id": 99,
        "title": "Bag's Groove",
        "key": "F",
        "style": "Blues",
        "progression": [
            "F7", "F7", "F7", "F7", "Bb7", "Bb7", "F7", "F7",
            "Cm7", "F7", "Bb7", "C7"
        ]
    },
    {
        "id": 100,
        "title": "Au Privave",
        "key": "F",
        "style": "Blues/BeBop",
        "progression": [
            "F7", "F7", "F7", "Cm7 F7", "Bb7", "Bb7", "F7", "D7",
            "Gm7", "C7", "F7", "Gm7 C7"
        ]
    }
];