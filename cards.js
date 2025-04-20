const cardData = [
    {
        "tmdb_id": 31,
        "name": "Tom Hanks",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/eKF1sGJRrZJbfBG1KirPt1cfNd3.jpg",
        "credits": [
            "Toy Story (1995)",
            "The Green Mile (1999)",
            "Forrest Gump (1994)"
        ]
    },
    {
        "tmdb_id": 4165,
        "name": "John Wayne",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/ggHZ8WTKaoD9bGRhmC1FlV9sXwL.jpg",
        "credits": [
            "Rio Bravo (1959)",
            "The Searchers (1956)",
            "The Man Who Shot Liberty Valance (1962)"
        ]
    },
    {
        "tmdb_id": 10017,
        "name": "Charlton Heston",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/mJabHWZrjlFiF8U8Bbr8lSFtLX6.jpg",
        "credits": [
            "The Ten Commandments (1956)",
            "Ben-Hur (1959)",
            "Planet of the Apes (1968)"
        ]
    },
    {
        "tmdb_id": 3084,
        "name": "Marlon Brando",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/vklkhX4QlRKnEG8ylhWzoBdcuev.jpg",
        "credits": [
            "The Godfather (1972)",
            "Apocalypse Now (1979)",
            "On the Waterfront (1954)"
        ]
    },
    {
        "tmdb_id": 8252,
        "name": "William Holden",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/yx5LpyKzCc4H52mFjybrPTuwKPM.jpg",
        "credits": [
            "The Bridge on the River Kwai (1957)",
            "Sunset Boulevard (1950)",
            "The Wild Bunch (1969)"
        ]
    },
    {
        "tmdb_id": 3150,
        "name": "Tony Curtis",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/6Pj1XkYdI5Wc40Jl0UxJk8PPwlY.jpg",
        "credits": [
            "Spartacus (1960)",
            "Some Like It Hot (1959)",
            "The Defiant Ones (1958)"
        ]
    },
    {
        "tmdb_id": 3149,
        "name": "Marilyn Monroe",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/9lwUFj9zV6C7qYeWSR7UhWXt0uY.jpg",
        "credits": [
            "Some Like It Hot (1959)",
            "The Seven Year Itch (1955)",
            "How to Marry a Millionaire (1953)"
        ]
    },
    {
        "tmdb_id": 4070,
        "name": "Grace Kelly",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/gnz3NGJrUERwklqfuPWXxcOPs0Q.jpg",
        "credits": [
            "Rear Window (1954)",
            "To Catch a Thief (1955)",
            "Dial M for Murder (1954)"
        ]
    },
    {
        "tmdb_id": 1932,
        "name": "Audrey Hepburn",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/nbkNJ8dr6j5vSZ3M6SKwp0F7Q1P.jpg",
        "credits": [
            "Roman Holiday (1953)",
            "Breakfast at Tiffany's (1961)",
            "My Fair Lady (1964)"
        ]
    },
    {
        "tmdb_id": 3635,
        "name": "Elizabeth Taylor",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/luj6AJgWpwKtXJNwmAAT5PYHJx3.jpg",
        "credits": [
            "Cleopatra (1963)",
            "Who's Afraid of Virginia Woolf? (1966)",
            "Giant (1956)"
        ]
    },
    {
        "tmdb_id": 8857,
        "name": "Debbie Reynolds",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/9Z9DQqNztKlinANGGgD5dQODtlr.jpg",
        "credits": [
            "Singin' in the Rain (1952)",
            "How the West Was Won (1963)",
            "Halloweentown (1998)"
        ]
    },
    {
        "tmdb_id": 2749,
        "name": "James Dean",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/5oaDvEoQssXlDt1KSQVl0M4rgBn.jpg",
        "credits": [
            "Giant (1956)",
            "Rebel Without a Cause (1955)",
            "East of Eden (1955)"
        ]
    },
    {
        "tmdb_id": 2094,
        "name": "Peter Lorre",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/hgum7XGkYgiJ8jkFr4MC03PCnD4.jpg",
        "credits": [
            "Casablanca (1943)",
            "M (1933)",
            "The Maltese Falcon (1941)"
        ]
    },
    {
        "tmdb_id": 109897,
        "name": "Ethel Merman",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/bqNcRrAXBImXem21bO4hW4bCT31.jpg",
        "credits": [
            "Airplane! (1980)",
            "It's a Mad, Mad, Mad, Mad World (1963)",
            "There's No Business Like Show Business (1954)"
        ]
    },
    {
        "tmdb_id": 2753,
        "name": "Burl Ives",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/mXwJvOFzdbgHgq1Znt1jqP8hi7W.jpg",
        "credits": [
            "Cat on a Hot Tin Roof (1958)",
            "Rudolph the Red-Nosed Reindeer (1964)",
            "East of Eden (1955)"
        ]
    },
    {
        "tmdb_id": 93895,
        "name": "Tallulah Bankhead",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/kYInXXu8oydHuXYabba0Y12MHga.jpg",
        "credits": [
            "Lifeboat (1944)",
            "Fanatic (1965)",
            "A Royal Scandal (1945)"
        ]
    },
    {
        "tmdb_id": 738,
        "name": "Sean Connery",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/hbB676mW62gjsh0f51ICYE11niG.jpg",
        "credits": [
            "Indiana Jones and the Last Crusade (1989)",
            "The Rock (1996)",
            "The League of Extraordinary Gentlemen (2003)"
        ]
    },
    {
        "tmdb_id": 13565,
        "name": "Steve McQueen",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/mhHk4NRPXEJLL0SySheXZAArp5w.jpg",
        "credits": [
            "The Great Escape (1963)",
            "Bullitt (1968)",
            "Papillon (1973)"
        ]
    },
    {
        "tmdb_id": 3636,
        "name": "Paul Newman",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/bP2fByqNR7BorsUNuD6nSm0u2vJ.jpg",
        "credits": [
            "Cars (2006)",
            "The Sting (1973)",
            "Butch Cassidy and the Sundance Kid (1969)"
        ]
    },
    {
        "tmdb_id": 190,
        "name": "Clint Eastwood",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/8TwdCfeOZH7ucRlfLZ6wObxa7cO.jpg",
        "credits": [
            "The Good, the Bad and the Ugly (1967)",
            "Million Dollar Baby (2004)",
            "Gran Torino (2008)"
        ]
    },
    {
        "tmdb_id": 16897,
        "name": "Sidney Poitier",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/fhMiCe3ScxBGKEX6Y6flEJm7iHd.jpg",
        "credits": [
            "Sneakers (1992)",
            "The Jackal (1997)",
            "In the Heat of the Night (1967)"
        ]
    },
    {
        "tmdb_id": 5823,
        "name": "Julie Andrews",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/yQ0J92DMiLtQYoytLJ6CuBkdeN0.jpg",
        "credits": [
            "Shrek 2 (2004)",
            "The Sound of Music (1965)",
            "Mary Poppins (1965)"
        ]
    },
    {
        "tmdb_id": 16757,
        "name": "Sophia Loren",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/94Kglg5dsAgOKG76230FFN7m6W3.jpg",
        "credits": [
            "A Special Day (1977)",
            "Two Women (1961)",
            "The Life Ahead (2020)"
        ]
    },
    {
        "tmdb_id": 21462,
        "name": "Raquel Welch",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/gsKsY1PlhZ8qGx54zq7ciswZ0zw.jpg",
        "credits": [
            "Legally Blonde (2001)",
            "One Million Years B.C. (1967)",
            "Fantastic Voyage (1966)"
        ]
    },
    {
        "tmdb_id": 2769,
        "name": "Natalie Wood",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/6me9oS7GV1VjejWV61XD6y7fVA1.jpg",
        "credits": [
            "The Searchers (1956)",
            "West Side Story (1961)",
            "Rebel Without a Cause (1955)"
        ]
    },
    {
        "tmdb_id": 6450,
        "name": "Faye Dunaway",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/bwHJPkiDOjTslgrl0mri1Ndvx2V.jpg",
        "credits": [
            "Chinatown (1974)",
            "Bonnie and Clyde (1967)",
            "Network (1976)"
        ]
    },
    {
        "tmdb_id": 10169,
        "name": "Telly Savalas",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/pdJfRVsCdKgrRFXODXkaOfJzAtH.jpg",
        "credits": [
            "On Her Majesty's Secret Service (1969)",
            "Kelly's Heroes (1970)",
            "Lisa and the Devil (1976)"
        ]
    },
    {
        "tmdb_id": 12446,
        "name": "Peter Sellers",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/sCVIv2DGoC9U16anTjLwMxKBPZ.jpg",
        "credits": [
            "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb (1964)",
            "Being There (1979)",
            "The Party (1968)"
        ]
    },
    {
        "tmdb_id": 522,
        "name": "Rod Steiger",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/brIyEn13q7IQr0MoNcU529roNbr.jpg",
        "credits": [
            "Mars Attacks! (1996)",
            "In the Heat of the Night (1967)",
            "Duck, You Sucker (1972)"
        ]
    },
    {
        "tmdb_id": 7301,
        "name": "Anthony Perkins",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/7FipKwmg2woHNvt5ATeXLBirHXs.jpg",
        "credits": [
            "Psycho (1960)",
            "The Trial (1963)",
            "Psycho II (1983)"
        ]
    },
    {
        "tmdb_id": 10400,
        "name": "Barbra Streisand",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/6YD223jsdZX7VnWSjGjP1S7Xj6X.jpg",
        "credits": [
            "Little Fockers (2010)",
            "Meet the Fockers (2004)",
            "The Way We Were (1973)"
        ]
    },
    {
        "tmdb_id": 4135,
        "name": "Robert Redford",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/hNiy78lk26xTE6tjisSCowcOVw0.jpg",
        "credits": [
            "Captain America: The Winter Soldier (2014)",
            "Spy Game (2001)",
            "All Is Lost (2013)"
        ]
    },
    {
        "tmdb_id": 1158,
        "name": "Al Pacino",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/2dGBb1fOcNdZjtQToVPFxXjm4ke.jpg",
        "credits": [
            "The Godfather (1972)",
            "The Godfather Part II (1974)",
            "Scarface (1983)"
        ]
    },
    {
        "tmdb_id": 514,
        "name": "Jack Nicholson",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/hBHcQIEa6P48HQAlLZkh0eKSSkG.jpg",
        "credits": [
            "The Shining (1980)",
            "One Flew Over the Cuckoo's Nest (1975)",
            "Mars Attacks! (1996)"
        ]
    },
    {
        "tmdb_id": 16475,
        "name": "Burt Reynolds",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/5FNuc4f1OR9EF9QcrcnFIr3zZQr.jpg",
        "credits": [
            "The Longest Yard (2005)",
            "Boogie Nights (1997)",
            "All Dogs Go to Heaven (1989)"
        ]
    },
    {
        "tmdb_id": 16483,
        "name": "Sylvester Stallone",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/gn3pDWthJqR0VDYGViGD3048og7.jpg",
        "credits": [
            "The Expendables (2010)",
            "Rocky (1976)",
            "The Expendables 2 (2012)"
        ]
    },
    {
        "tmdb_id": 3092,
        "name": "Diane Keaton",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/A8B3BsFgbmw2WEmJuQX38qeU9eR.jpg",
        "credits": [
            "The Godfather (1972)",
            "The Godfather Part II (1974)",
            "The Godfather Part III (1990)"
        ]
    },
    {
        "tmdb_id": 6352,
        "name": "Jane Fonda",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/5Yb3nmRWXXZAxNhfhEuOMdfyVNN.jpg",
        "credits": [
            "Luck (2022)",
            "Monster-in-Law (2005)",
            "Barbarella (1968)"
        ]
    },
    {
        "tmdb_id": 35,
        "name": "Sally Field",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/5fBK36MdmdwQQMuP0W70rXADXih.jpg",
        "credits": [
            "Forrest Gump (1994)",
            "The Amazing Spider-Man (2012)",
            "Mrs. Doubtfire (1993)"
        ]
    },
    {
        "tmdb_id": 18892,
        "name": "Goldie Hawn",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/vutargQeknoxfFj4uhgtcVJbWpU.jpg",
        "credits": [
            "Death Becomes Her (1992)",
            "The First Wives Club (1996)",
            "Overboard (1987)"
        ]
    },
    {
        "tmdb_id": 55636,
        "name": "Donald Sutherland",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/hHd64HbSwxjfnNfPbIPeboFApfS.jpg",
        "credits": [
            "Pride & Prejudice (2005)",
            "The Hunger Games: Catching Fire (2013)",
            "The Hunger Games (2012)"
        ]
    },
    {
        "tmdb_id": 3460,
        "name": "Gene Wilder",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/mwwOSWS2m8ArpiUKnoxVVyT8fND.jpg",
        "credits": [
            "Willy Wonka & the Chocolate Factory (1971)",
            "Young Frankenstein (1974)",
            "Blazing Saddles (1974)"
        ]
    },
    {
        "tmdb_id": 4785,
        "name": "Jeff Goldblum",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/o3PahuK7OmCI0RAQUq38CUBWYZ9.jpg",
        "credits": [
            "Jurassic Park (1993)",
            "The Fly (1986)",
            "The Lost World: Jurassic Park (1997)"
        ]
    },
    {
        "tmdb_id": 518,
        "name": "Danny DeVito",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/6kO4IN7ndoIGw2JhyhAQN3SFmdx.jpg",
        "credits": [
            "The Lorax (2012)",
            "One Flew Over the Cuckoo's Nest (1975)",
            "Batman Returns (1992)"
        ]
    },
    {
        "tmdb_id": 1037,
        "name": "Harvey Keitel",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/7P30hza1neYWW3r7rSQOC736K2Z.jpg",
        "credits": [
            "Pulp Fiction (1994)",
            "Taxi Driver (1976)",
            "Reservoir Dogs (1992)"
        ]
    },
    {
        "tmdb_id": 1100,
        "name": "Arnold Schwarzenegger",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/2marNcjIfCUE5Z2HyrcEiJHPbsA.jpg",
        "credits": [
            "The Terminator (1984)",
            "Terminator 2: Judgment Day (1991)",
            "Predator (1987)"
        ]
    },
    {
        "tmdb_id": 3,
        "name": "Harrison Ford",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/zVnHagUvXkR2StdOtquEwsiwSVt.jpg",
        "credits": [
            "Star Wars: The Force Awakens (2015)",
            "Blade Runner (1982)",
            "Raiders of the Lost Ark (1981)"
        ]
    },
    {
        "tmdb_id": 500,
        "name": "Tom Cruise",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/8qBylBsQf4llkGrWR3qAsOtOU8O.jpg",
        "credits": [
            "Mission: Impossible - Ghost Protocol (2011)",
            "Edge of Tomorrow (2014)",
            "Oblivion (2013)"
        ]
    },
    {
        "tmdb_id": 2461,
        "name": "Mel Gibson",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/bLzZZRyAsGJvQqsQ1hdptv93aIL.jpg",
        "credits": [
            "Braveheart (1995)",
            "Lethal Weapon (1987)",
            "Signs (2002)"
        ]
    },
    {
        "tmdb_id": 776,
        "name": "Eddie Murphy",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/qgjMfefsKwSYsyCaIX46uyOXIpy.jpg",
        "credits": [
            "Shrek (2001)",
            "Shrek 2 (2004)",
            "Mulan (1998)"
        ]
    },
    {
        "tmdb_id": 10205,
        "name": "Sigourney Weaver",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/wTSnfktNBLd6kwQxgvkqYw6vEon.jpg",
        "credits": [
            "Avatar (2009)",
            "Alien (1979)",
            "Aliens (1986)"
        ]
    },
    {
        "tmdb_id": 21625,
        "name": "Molly Ringwald",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/eXRphPiX18t8C3nCoOuxQFNegqP.jpg",
        "credits": [
            "The Breakfast Club (1985)",
            "The Kissing Booth (2018)",
            "Sixteen Candles (1984)"
        ]
    },
    {
        "tmdb_id": 1160,
        "name": "Michelle Pfeiffer",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/oGUmQBU87QXAsnaGleYaAjAXSlj.jpg",
        "credits": [
            "Scarface (1983)",
            "Murder on the Orient Express (2017)",
            "Dark Shadows (2012)"
        ]
    },
    {
        "tmdb_id": 589,
        "name": "Daryl Hannah",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/4LLmp6AQdlj6ueGCRbVRSGvvFSt.jpg",
        "credits": [
            "Blade Runner (1982)",
            "Kill Bill: Vol. 1 (2003)",
            "Kill Bill: Vol. 2 (2004)"
        ]
    },
    {
        "tmdb_id": 3391,
        "name": "Kathleen Turner",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/fItxvQb7Jp3DnP6fXOm30zvYYaM.jpg",
        "credits": [
            "Who Framed Roger Rabbit (1988)",
            "Romancing the Stone (1984)",
            "Marley & Me (2008)"
        ]
    },
    {
        "tmdb_id": 1062,
        "name": "Christopher Lloyd",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/nxVjpyb3UrfbPZnEyDNlQVlFAs5.jpg",
        "credits": [
            "Back to the Future (1985)",
            "Back to the Future Part II (1989)",
            "Back to the Future Part III (1990)"
        ]
    },
    {
        "tmdb_id": 2047,
        "name": "Danny Glover",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/yjow3MJDkgQuHx1fCpo4FZmXZcq.jpg",
        "credits": [
            "Saw (2004)",
            "Lethal Weapon (1987)",
            "Predator 2 (1990)"
        ]
    },
    {
        "tmdb_id": 2395,
        "name": "Whoopi Goldberg",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/wZKI7qcEIVgiHxeFtk3NuKt8URQ.jpg",
        "credits": [
            "Ghost (1990)",
            "Sister Act 2: Back in the Habit (1993)",
            "Sister Act (1992)"
        ]
    },
    {
        "tmdb_id": 95024,
        "name": "Bobcat Goldthwait",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/dvx9ykvmZnpLJhXqdMx3rF00Mx7.jpg",
        "credits": [
            "Hercules (1997)",
            "Blow (2001)",
            "Scrooged (1988)"
        ]
    },
    {
        "tmdb_id": 7073,
        "name": "Michael Berryman",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/jnyXbS5NqYdfZyvRUX2PHeKuOg4.jpg",
        "credits": [
            "One Flew Over the Cuckoo's Nest (1975)",
            "Weird Science (1985)",
            "The Hills Have Eyes Part 2 (1985)"
        ]
    },
    {
        "tmdb_id": 2888,
        "name": "Will Smith",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/1QqaRZ8neYlqLx7ODZC4as47wUV.jpg",
        "credits": [
            "I Am Legend (2007)",
            "I, Robot (2004)",
            "Suicide Squad (2016)"
        ]
    },
    {
        "tmdb_id": 6384,
        "name": "Keanu Reeves",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/8RZLOyYGsoRe9p44q3xin9QkMHv.jpg",
        "credits": [
            "The Matrix (1999)",
            "John Wick: Chapter 2 (2017)",
            "John Wick (2014)"
        ]
    },
    {
        "tmdb_id": 287,
        "name": "Brad Pitt",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/4rjnRCQ6bGFYdBb4UooOjsQy12c.jpg",
        "credits": [
            "Fight Club (1999)",
            "World War Z (2013)",
            "Inglourious Basterds (2009)"
        ]
    },
    {
        "tmdb_id": 2963,
        "name": "Nicolas Cage",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/ar33qcWbEgREn07ZpXv5Pbj8hbM.jpg",
        "credits": [
            "The Croods (2013)",
            "Ghost Rider (2007)",
            "National Treasure (2004)"
        ]
    },
    {
        "tmdb_id": 1204,
        "name": "Julia Roberts",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/fQacAdIa1WUNChQ6FgEko13eqOA.jpg",
        "credits": [
            "Notting Hill (1999)",
            "Pretty Woman (1990)",
            "Wonder (2017)"
        ]
    },
    {
        "tmdb_id": 18277,
        "name": "Sandra Bullock",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/hPHGKPAWZ8gArYXMk225rrYPoyJ.jpg",
        "credits": [
            "Gravity (2013)",
            "Bird Box (2018)",
            "Minions (2015)"
        ]
    },
    {
        "tmdb_id": 1920,
        "name": "Winona Ryder",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/dlffgYbqr1BllWacVLhAFw23nLl.jpg",
        "credits": [
            "Black Swan (2010)",
            "Edward Scissorhands (1990)",
            "Girl, Interrupted (1999)"
        ]
    },
    {
        "tmdb_id": 6941,
        "name": "Cameron Diaz",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/d4f4cQ9EiYuvNMjT1IB2h06KoRx.jpg",
        "credits": [
            "Shrek (2001)",
            "The Holiday (2006)",
            "There's Something About Mary (1998)"
        ]
    },
    {
        "tmdb_id": 3416,
        "name": "Demi Moore",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/wApParZYBDi4yxekjfxjKEifJYh.jpg",
        "credits": [
            "The Substance (2024)",
            "Ghost (1990)",
            "The Hunchback of Notre Dame (1996)"
        ]
    },
    {
        "tmdb_id": 884,
        "name": "Steve Buscemi",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/lQKdHMxfYcCBOvwRKBAxPZVNtkg.jpg",
        "credits": [
            "Monsters, Inc. (2001)",
            "Monsters University (2013)",
            "The Boss Baby (2017)"
        ]
    },
    {
        "tmdb_id": 64,
        "name": "Gary Oldman",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/2v9FVVBUrrkW2m3QOcYkuhq9A6o.jpg",
        "credits": [
            "The Dark Knight (2008)",
            "The Dark Knight Rises (2012)",
            "Bram Stoker's Dracula (1992)"
        ]
    },
    {
        "tmdb_id": 66,
        "name": "Chris Tucker",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/f3oQKRJEGjK8Yc4qSMrD5P9oYbg.jpg",
        "credits": [
            "Rush Hour (1998)",
            "The Fifth Element (1997)",
            "Rush Hour 2 (2001)"
        ]
    },
    {
        "tmdb_id": 11160,
        "name": "Danny Trejo",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/7JrUkRGBscZ1Hy5JinaaXjjzSCF.jpg",
        "credits": [
            "From Dusk Till Dawn (1996)",
            "Machete (2010)",
            "Machete Kills (2013)"
        ]
    },
    {
        "tmdb_id": 6949,
        "name": "John Malkovich",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/8YfVmWi9Z1iyX9Oc90yd9dbhSfL.jpg",
        "credits": [
            "RED (2010)",
            "Bird Box (2018)",
            "Being John Malkovich (1999)"
        ]
    },
    {
        "tmdb_id": 2219,
        "name": "Tobey Maguire",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/ncF4HivY2W6SQW5dEP3N3I4mfT0.jpg",
        "credits": [
            "Spider-Man (2002)",
            "Spider-Man 3 (2007)",
            "Spider-Man 2 (2004)"
        ]
    },
    {
        "tmdb_id": 1892,
        "name": "Matt Damon",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/4KAxONjmVq7qcItdXo38SYtnpul.jpg",
        "credits": [
            "Good Will Hunting (1997)",
            "The Martian (2015)",
            "The Bourne Identity (2002)"
        ]
    },
    {
        "tmdb_id": 3894,
        "name": "Christian Bale",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/7Pxez9J8fuPd2Mn9kex13YALrCQ.jpg",
        "credits": [
            "The Dark Knight (2008)",
            "The Dark Knight Rises (2012)",
            "Batman Begins (2005)"
        ]
    },
    {
        "tmdb_id": 6968,
        "name": "Hugh Jackman",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/4Xujtewxqt6aU0Y81tsS9gkjizk.jpg",
        "credits": [
            "The Prestige (2006)",
            "Logan (2017)",
            "X-Men: Days of Future Past (2014)"
        ]
    },
    {
        "tmdb_id": 114,
        "name": "Orlando Bloom",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/lwQoA0qJTCZ6l2FH6PjmhRQjiaB.jpg",
        "credits": [
            "Pirates of the Caribbean: The Curse of the Black Pearl (2003)",
            "Pirates of the Caribbean: Dead Man's Chest (2006)",
            "Troy (2004)"
        ]
    },
    {
        "tmdb_id": 11701,
        "name": "Angelina Jolie",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/bXNxIKcJ5cNNW8QFrBPWcfTSu9x.jpg",
        "credits": [
            "Maleficent (2014)",
            "Maleficent: Mistress of Evil (2019)",
            "Lara Croft: Tomb Raider (2001)"
        ]
    },
    {
        "tmdb_id": 524,
        "name": "Natalie Portman",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/qJ0ipMSZkIYvsOPh7e12l0AMoXl.jpg",
        "credits": [
            "Black Swan (2010)",
            "Thor (2011)",
            "V for Vendetta (2006)"
        ]
    },
    {
        "tmdb_id": 116,
        "name": "Keira Knightley",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/bRC1B2VwV0wK3ElciFAK6QZf2wD.jpg",
        "credits": [
            "Pride & Prejudice (2005)",
            "Pirates of the Caribbean: Dead Man's Chest (2006)",
            "The Imitation Game (2014)"
        ]
    },
    {
        "tmdb_id": 1245,
        "name": "Scarlett Johansson",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg",
        "credits": [
            "Black Widow (2021)",
            "Lucy (2014)",
            "Ghost in the Shell (2017)"
        ]
    },
    {
        "tmdb_id": 56731,
        "name": "Jessica Alba",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/jCImuXo4TqdWeIs4Hc2tO0U28LV.jpg",
        "credits": [
            "Fantastic Four (2005)",
            "Fantastic Four: Rise of the Silver Surfer (2007)",
            "Sin City (2005)"
        ]
    },
    {
        "tmdb_id": 1333,
        "name": "Andy Serkis",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/eNGqhebQ4cDssjVeNFrKtUvweV5.jpg",
        "credits": [
            "Rise of the Planet of the Apes (2011)",
            "Dawn of the Planet of the Apes (2014)",
            "War for the Planet of the Apes (2017)"
        ]
    },
    {
        "tmdb_id": 39995,
        "name": "Michael Cera",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/mjz0PEriQqUP3BgJBztKAOXzXXM.jpg",
        "credits": [
            "Superbad (2007)",
            "Scott Pilgrim vs. the World (2010)",
            "Juno (2007)"
        ]
    },
    {
        "tmdb_id": 58225,
        "name": "Zach Galifianakis",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/qsDfoUlRnXHUiqZeBPWHzmgmKGX.jpg",
        "credits": [
            "The Hangover (2009)",
            "The Hangover Part II (2011)",
            "Birdman or (The Unexpected Virtue of Ignorance) (2014)"
        ]
    },
    {
        "tmdb_id": 3063,
        "name": "Tilda Swinton",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/gWbX3a7V2MgRMRzekfITNcb27xV.jpg",
        "credits": [
            "Doctor Strange (2016)",
            "We Need to Talk About Kevin (2011)",
            "Only Lovers Left Alive (2014)"
        ]
    },
    {
        "tmdb_id": 4495,
        "name": "Steve Carell",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/dA6n0qpnlMFBlTr8SBULsZbWkvn.jpg",
        "credits": [
            "Despicable Me (2010)",
            "Despicable Me 2 (2013)",
            "The Big Short (2015)"
        ]
    },
    {
        "tmdb_id": 74568,
        "name": "Chris Hemsworth",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/piQGdoIQOF3C1EI5cbYZLAW1gfj.jpg",
        "credits": [
            "Thor: Ragnarok (2017)",
            "Thor (2011)",
            "Thor: The Dark World (2013)"
        ]
    },
    {
        "tmdb_id": 135651,
        "name": "Michael B. Jordan",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/hz9AOUWZ2zzS0dpPJ1yQv2grA35.jpg",
        "credits": [
            "Black Panther (2018)",
            "Creed (2015)",
            "Creed II (2018)"
        ]
    },
    {
        "tmdb_id": 30614,
        "name": "Ryan Gosling",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/lyUyVARQKhGxaxy0FbPJCQRpiaW.jpg",
        "credits": [
            "Blade Runner 2049 (2017)",
            "La La Land (2016)",
            "Drive (2011)"
        ]
    },
    {
        "tmdb_id": 25072,
        "name": "Oscar Isaac",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/dW5U5yrIIPmMjRThR9KT2xH6nTz.jpg",
        "credits": [
            "Dune (2021)",
            "Moon Knight (N/A)",
            "Ex Machina (2015)"
        ]
    },
    {
        "tmdb_id": 1023139,
        "name": "Adam Driver",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/rsjwgpV2OukxOJ9HEiEyf4qu1vR.jpg",
        "credits": [
            "Star Wars: The Last Jedi (2017)",
            "Star Wars: The Force Awakens (2015)",
            "Marriage Story (2019)"
        ]
    },
    {
        "tmdb_id": 72129,
        "name": "Jennifer Lawrence",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/k6CsASaySnS3ag0Y2Ns2vqPahVn.jpg",
        "credits": [
            "The Hunger Games: Mockingjay - Part 1 (2014)",
            "The Hunger Games (2012)",
            "The Hunger Games: Catching Fire (2013)"
        ]
    },
    {
        "tmdb_id": 90633,
        "name": "Gal Gadot",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/qCJB1ACi5VjtY4ypXuv3hjAvbSu.jpg",
        "credits": [
            "Batman v Superman: Dawn of Justice (2016)",
            "Wonder Woman (2017)",
            "Wonder Woman 1984 (2020)"
        ]
    },
    {
        "tmdb_id": 60073,
        "name": "Brie Larson",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/xSGvMwNNJcEQvVcjiIUTyxyMfkZ.jpg",
        "credits": [
            "Captain Marvel (2019)",
            "21 Jump Street (2012)",
            "Room (2015)"
        ]
    },
    {
        "tmdb_id": 234352,
        "name": "Margot Robbie",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/kkZKkxI2MfvaeZ38bJERWlqSXSZ.jpg",
        "credits": [
            "Barbie (2023)",
            "The Suicide Squad (2021)",
            "Birds of Prey (and the Fantabulous Emancipation of One Harley Quinn) (2020)"
        ]
    },
    {
        "tmdb_id": 1267329,
        "name": "Lupita Nyong'o",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/y40Wu1T742kynOqtwXASc5Qgm49.jpg",
        "credits": [
            "The Wild Robot (2024)",
            "Black Panther (2018)",
            "Us (2019)"
        ]
    },
    {
        "tmdb_id": 71580,
        "name": "Benedict Cumberbatch",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/fBEucxECxGLKVHBznO0qHtCGiMO.jpg",
        "credits": [
            "The Imitation Game (2014)",
            "Doctor Strange in the Multiverse of Madness (2022)",
            "Doctor Strange (2016)"
        ]
    },
    {
        "tmdb_id": 1625558,
        "name": "Awkwafina",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/l5AKkg3H1QhMuXmTTmq1EyjyiRb.jpg",
        "credits": [
            "Shang-Chi and the Legend of the Ten Rings (2021)",
            "Jumanji: The Next Level (2019)",
            "Raya and the Last Dragon (2021)"
        ]
    },
    {
        "tmdb_id": 1200864,
        "name": "LaKeith Stanfield",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/x3k0HCpMNqEtVf2VKQrSCol1ia2.jpg",
        "credits": [
            "Get Out (2017)",
            "Uncut Gems (2019)",
            "Death Note (2017)"
        ]
    },
    {
        "tmdb_id": 62561,
        "name": "Tessa Thompson",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/fycqdiiM6dsNSbnONBVVQ57ILV1.jpg",
        "credits": [
            "Thor: Ragnarok (2017)",
            "Creed (2015)",
            "Men in Black: International (2019)"
        ]
    },
    {
        "tmdb_id": 5293,
        "name": "Willem Dafoe",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/ui8e4sgZAwMPi3hzEO53jyBJF9B.jpg",
        "credits": [
            "Spider-Man (2002)",
            "Finding Nemo (2003)",
            "John Wick (2014)"
        ]
    },
    {
        "tmdb_id": 1190668,
        "name": "Timothée Chalamet",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/BE2sdjpgsa2rNTFa66f7upkaOP.jpg",
        "credits": [
            "Dune (2021)",
            "Dune: Part Two (2024)",
            "Call Me by Your Name (2017)"
        ]
    },
    {
        "tmdb_id": 1253360,
        "name": "Pedro Pascal",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/9VYK7oxcqhjd5LAH6ZFJ3XzOlID.jpg",
        "credits": [
            "The Last of Us (N/A)",
            "The Mandalorian (N/A)",
            "The Equalizer 2 (2018)"
        ]
    },
    {
        "tmdb_id": 2326151,
        "name": "Paul Mescal",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/vrzZ41TGNAFgfmZjC2sOJySzBLd.jpg",
        "credits": [
            "Gladiator II (2024)",
            "Aftersun (2022)",
            "Normal People (N/A)"
        ]
    },
    {
        "tmdb_id": 86654,
        "name": "Austin Butler",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/atdAs4pFGjUQ4m2W8kJYly7N6cC.jpg",
        "credits": [
            "Dune: Part Two (2024)",
            "Once Upon a Time... in Hollywood (2019)",
            "Elvis (2022)"
        ]
    },
    {
        "tmdb_id": 1674162,
        "name": "Jonathan Majors",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/nsxnMbkl9Lpc12AmYwKi9SmsJ7e.jpg",
        "credits": [
            "Creed III (2023)",
            "Ant-Man and the Wasp: Quantumania (2023)",
            "The Harder They Fall (2021)"
        ]
    },
    {
        "tmdb_id": 1136406,
        "name": "Tom Holland",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/bBRlrpJm9XkNSg0YT5LCaxqoFMX.jpg",
        "credits": [
            "Spider-Man: Homecoming (2017)",
            "Spider-Man: No Way Home (2021)",
            "Spider-Man: Far From Home (2019)"
        ]
    },
    {
        "tmdb_id": 2034418,
        "name": "Jacob Elordi",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/khfLyxY9gsKiLFoz2zj0h3uhDFJ.jpg",
        "credits": [
            "Euphoria (N/A)",
            "The Kissing Booth (2018)",
            "The Kissing Booth 2 (2020)"
        ]
    },
    {
        "tmdb_id": 1290466,
        "name": "Barry Keoghan",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/ngoitknM6hw8fffLywyvjzy6Iti.jpg",
        "credits": [
            "Dunkirk (2017)",
            "Saltburn (2023)",
            "The Killing of a Sacred Deer (2017)"
        ]
    },
    {
        "tmdb_id": 3232669,
        "name": "Jude Hill",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/yAcW6qaqQVok6UpfPb1D9dPBFbK.jpg",
        "credits": [
            "Holland (2025)",
            "A Haunting in Venice (2023)",
            "Belfast (2021)"
        ]
    },
    {
        "tmdb_id": 206905,
        "name": "Jeremy Allen White",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/zKk4vmDeUexdevtt6wm8WdMQ1TG.jpg",
        "credits": [
            "Shameless (N/A)",
            "The Bear (N/A)",
            "The Iron Claw (2023)"
        ]
    },
    {
        "tmdb_id": 1373737,
        "name": "Florence Pugh",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/6Sjz9teWjrMY9lF2o9FCo4XmoRh.jpg",
        "credits": [
            "Midsommar (2019)",
            "Black Widow (2021)",
            "Don't Worry Darling (2022)"
        ]
    },
    {
        "tmdb_id": 1397778,
        "name": "Anya Taylor-Joy",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/qYNofOjlRke2MlJVihmJmEdQI4v.jpg",
        "credits": [
            "The Menu (2022)",
            "Split (2017)",
            "The Witch (2016)"
        ]
    },
    {
        "tmdb_id": 505710,
        "name": "Zendaya",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/3WdOloHpjtjL96uVOhFRRCcYSwq.jpg",
        "credits": [
            "Euphoria (N/A)",
            "Dune: Part Two (2024)",
            "Spider-Man: No Way Home (2021)"
        ]
    },
    {
        "tmdb_id": 2217977,
        "name": "Rachel Zegler",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/2zk0hYmVtDNVENhHbsVs2FPzP3o.jpg",
        "credits": [
            "The Hunger Games: The Ballad of Songbirds & Snakes (2023)",
            "Shazam! Fury of the Gods (2023)",
            "West Side Story (2021)"
        ]
    },
    {
        "tmdb_id": 36592,
        "name": "Saoirse Ronan",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/lVow9oXm454wjTfqOqTZeo1iwCd.jpg",
        "credits": [
            "Little Women (2019)",
            "The Lovely Bones (2010)",
            "Lady Bird (2017)"
        ]
    },
    {
        "tmdb_id": 2201315,
        "name": "Emma Mackey",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/y8nDoKXpyNViFL8Eam4Ey1PkgQ6.jpg",
        "credits": [
            "Sex Education (N/A)",
            "Barbie (2023)",
            "Death on the Nile (2022)"
        ]
    },
    {
        "tmdb_id": 130640,
        "name": "Hailee Steinfeld",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/dxSDWkiVaC6JYjrV3XRAZI7HOSS.jpg",
        "credits": [
            "Arcane (N/A)",
            "Spider-Man: Into the Spider-Verse (2018)",
            "The Edge of Seventeen (2016)"
        ]
    },
    {
        "tmdb_id": 115440,
        "name": "Sydney Sweeney",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/uDnIdU4KGjQg7liFvb9wnALvg95.jpg",
        "credits": [
            "Euphoria (N/A)",
            "Anyone But You (2023)",
            "Immaculate (2024)"
        ]
    },
    {
        "tmdb_id": 974169,
        "name": "Jenna Ortega",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/q1NRzyZQlYkxLY07GO9NVPkQnu8.jpg",
        "credits": [
            "Wednesday (N/A)",
            "Scream (2022)",
            "X (2022)"
        ]
    },
    {
        "tmdb_id": 1459885,
        "name": "Lily-Rose Depp",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/cvBXqmj3waqMUQ7yhQljAUhAivX.jpg",
        "credits": [
            "Nosferatu (2024)",
            "The King (2019)",
            "Voyagers (2021)"
        ]
    },
    {
        "tmdb_id": 17142,
        "name": "Paul Dano",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/zEJJsm0z07EPNl2Pi1h67xuCmcA.jpg",
        "credits": [
            "There Will Be Blood (2007)",
            "Looper (2012)",
            "Swiss Army Man (2016)"
        ]
    },
    {
        "tmdb_id": 2195140,
        "name": "Ayo Edebiri",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/V9TNVjNkAJIiCHLTzcnHLktnPf.jpg",
        "credits": [
            "Inside Out 2 (2024)",
            "The Bear (N/A)",
            "Bottoms (2023)"
        ]
    },
    {
        "tmdb_id": 1668004,
        "name": "Bella Ramsey",
        "gender": "OTHER",
        "headshot": "https://image.tmdb.org/t/p/original/wbVOq34tJXME1rK6cHSlq6FjNV3.jpg",
        "credits": [
            "The Last of Us (N/A)",
            "Game of Thrones (N/A)",
            "Chicken Run: Dawn of the Nugget (2023)"
        ]
    },
    {
        "tmdb_id": 1467219,
        "name": "Joe Keery",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/ayIAVLMfZGEGIFwAo3pPnY7p59.jpg",
        "credits": [
            "Stranger Things (N/A)",
            "Free Guy (2021)",
            "Spree (2020)"
        ]
    },
    {
        "tmdb_id": 2174509,
        "name": "Mason Gooding",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/bmlry1xqBzNgv8Chm783ss93Cvg.jpg",
        "credits": [
            "Fall (2022)",
            "Scream VI (2023)",
            "Scream (2022)"
        ]
    },
    {
        "tmdb_id": 569,
        "name": "Ethan Hawke",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/a7rgJl8TYUWAfJuM4fxbLHgD7BL.jpg",
        "credits": [
            "Predestination (2015)",
            "Gattaca (1997)",
            "The Purge (2013)"
        ]
    },
    {
        "tmdb_id": 1137824,
        "name": "Mia Goth",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/xB8fVduiFtgu35ieEjiTiFx8ylv.jpg",
        "credits": [
            "X (2022)",
            "Pearl (2022)",
            "A Cure for Wellness (2017)"
        ]
    },
    {
        "tmdb_id": 83854,
        "name": "David Dastmalchian",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/sF7yHISn8kuBy7T39gB5dMpObpk.jpg",
        "credits": [
            "The Suicide Squad (2021)",
            "Late Night with the Devil (2024)",
            "Ant-Man (2015)"
        ]
    },
    {
        "tmdb_id": 1382987,
        "name": "Ramy Youssef",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/uLQWOoq11TKqnLfJBu90aKEGj8O.jpg",
        "credits": [
            "Poor Things (2023)",
            "Wish (2023)",
            "Why Him? (2016)"
        ]
    },
    {
        "tmdb_id": 8944,
        "name": "Jamie Lee Curtis",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/eWKubKAAssRzmFwCZKh1mdYqGCH.jpg",
        "credits": [
            "Knives Out (2019)",
            "Halloween (1978)",
            "Halloween (2018)"
        ]
    },
    {
        "tmdb_id": 1905,
        "name": "Vincent Price",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/7JIv7U5kwveryP7hrPYgHlKea4d.jpg",
        "credits": [
            "Edward Scissorhands (1990)",
            "The Great Mouse Detective (1986)",
            "Vincent (1982)"
        ]
    },
    {
        "tmdb_id": 19384,
        "name": "Tony Todd",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/6mzKpHdwfFY6sUpTS7cMPCoLzB3.jpg",
        "credits": [
            "The Man from Earth (2007)",
            "Transformers: Revenge of the Fallen (2009)",
            "Candyman (1992)"
        ]
    },
    {
        "tmdb_id": 37366,
        "name": "Linda Blair",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/3jswDdLDsmSAO4ZtVPwyKAp6D5d.jpg",
        "credits": [
            "The Exorcist (1973)",
            "Exorcist II: The Heretic (1977)",
            "Repossessed (1990)"
        ]
    },
    {
        "tmdb_id": 17005,
        "name": "Doug Jones",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/rpvvWATYWHGjedJea0G97XufOwU.jpg",
        "credits": [
            "Pan's Labyrinth (2006)",
            "The Shape of Water (2017)",
            "Hellboy (2004)"
        ]
    },
    {
        "tmdb_id": 1103,
        "name": "Bill Duke",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/hZrYPwer5PeK77OEILkNWHVb3ss.jpg",
        "credits": [
            "Predator (1987)",
            "Payback (1999)",
            "X-Men: The Last Stand (2006)"
        ]
    },
    {
        "tmdb_id": 11086,
        "name": "Michael Ironside",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/mzHmxtKcMJjDqWxKd67mKQJFW1B.jpg",
        "credits": [
            "Top Gun (1986)",
            "Nobody (2021)",
            "Total Recall (1990)"
        ]
    },
    {
        "tmdb_id": 1104,
        "name": "Jesse Ventura",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/j1OaAOYJbelxGrFMzlwz6wfGaXA.jpg",
        "credits": [
            "Predator (1987)",
            "Batman & Robin (1997)",
            "The Running Man (1987)"
        ]
    },
    {
        "tmdb_id": 591,
        "name": "Brion James",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/3v7Z039TZyMaMen2asOMmMG02lB.jpg",
        "credits": [
            "Blade Runner (1982)",
            "The Fifth Element (1997)",
            "Tango & Cash (1989)"
        ]
    },
    {
        "tmdb_id": 1737,
        "name": "David Patrick Kelly",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/dPAqT9CuCgvMxEZQqtQPWEQwmIe.jpg",
        "credits": [
            "John Wick: Chapter 2 (2017)",
            "John Wick (2014)",
            "The Warriors (1979)"
        ]
    },
    {
        "tmdb_id": 11784,
        "name": "Tom Atkins",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/cqQnpAlq3FNLDr1jrAkUJokLw1M.jpg",
        "credits": [
            "Lethal Weapon (1987)",
            "Halloween III: Season of the Witch (1982)",
            "Maniac Cop (1988)"
        ]
    },
    {
        "tmdb_id": 61704,
        "name": "Al Leong",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/zC01uEOvbdTQIg19LKVu5r2QKan.jpg",
        "credits": [
            "Die Hard (1988)",
            "Lethal Weapon (1987)",
            "Bill & Ted's Excellent Adventure (1989)"
        ]
    },
    {
        "tmdb_id": 7675,
        "name": "Paul Gleason",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/a7PJofFcVpDxw2wAak1d56J7L4k.jpg",
        "credits": [
            "The Breakfast Club (1985)",
            "Die Hard (1988)",
            "Trading Places (1983)"
        ]
    },
    {
        "tmdb_id": 6573,
        "name": "William Sadler",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/rWeb2kjYCA7V9MC9kRwRpm57YoY.jpg",
        "credits": [
            "The Shawshank Redemption (1994)",
            "Iron Man 3 (2013)",
            "Die Hard 2 (1990)"
        ]
    },
    {
        "tmdb_id": 51581,
        "name": "Clarence Gilyard Jr.",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/mTxlCE2RqtRK4NehoX70n2NKmjO.jpg",
        "credits": [
            "Walker, Texas Ranger (N/A)",
            "Top Gun (1986)",
            "Die Hard (1988)"
        ]
    },
    {
        "tmdb_id": 48,
        "name": "Sean Bean",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/kTjiABk3TJ3yI0Cto5RsvyT6V3o.jpg",
        "credits": [
            "Game of Thrones (N/A)",
            "The Lord of the Rings: The Fellowship of the Ring (2001)",
            "The Martian (2015)"
        ]
    },
    {
        "tmdb_id": 2048,
        "name": "Gary Busey",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/8H7Hlv6b7ZoK4jZKeLnc2i4pfPL.jpg",
        "credits": [
            "Lethal Weapon (1987)",
            "Predator 2 (1990)",
            "Point Break (1991)"
        ]
    },
    {
        "tmdb_id": 5049,
        "name": "John Hurt",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/bjNSzt1d7uK3q5PbtFXUJrRt4qg.jpg",
        "credits": [
            "Snowpiercer (2014)",
            "Alien (1979)",
            "V for Vendetta (2006)"
        ]
    },
    {
        "tmdb_id": 2712,
        "name": "Michael Biehn",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/9oFLsADWQm2TvU8XzLIzBbjdMkU.jpg",
        "credits": [
            "The Terminator (1984)",
            "Aliens (1986)",
            "The Abyss (1989)"
        ]
    },
    {
        "tmdb_id": 13022,
        "name": "Tom Berenger",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/zLxzAdAfu7y02yEx29JSLDgXJZ4.jpg",
        "credits": [
            "Inception (2010)",
            "Platoon (1986)",
            "Training Day (2001)"
        ]
    },
    {
        "tmdb_id": 8655,
        "name": "R. Lee Ermey",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/aXFJlEGHlQT7bwxkKwq6Sx7PeEp.jpg",
        "credits": [
            "Se7en (1995)",
            "Toy Story (1995)",
            "Full Metal Jacket (1987)"
        ]
    },
    {
        "tmdb_id": 10698,
        "name": "Tchéky Karyo",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/jrtGiLYaALwDZgF39Hlgb8O1XZ1.jpg",
        "credits": [
            "Bad Boys (1995)",
            "The Patriot (2000)",
            "La Femme Nikita (1991)"
        ]
    },
    {
        "tmdb_id": 11477,
        "name": "Ray Liotta",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/jdwGJbJNSRQiG2kB5MJxiu2clCQ.jpg",
        "credits": [
            "GoodFellas (1990)",
            "Marriage Story (2019)",
            "Identity (2003)"
        ]
    },
    {
        "tmdb_id": 2778,
        "name": "Dennis Hopper",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/kqyNvLHi5RZGZcZMxl7e6XvoB5U.jpg",
        "credits": [
            "Speed (1994)",
            "Waterworld (1995)",
            "Blue Velvet (1986)"
        ]
    },
    {
        "tmdb_id": 1283,
        "name": "Helena Bonham Carter",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/hJMbNSPJ2PCahsP3rNEU39C8GWU.jpg",
        "credits": [
            "Fight Club (1999)",
            "Harry Potter and the Order of the Phoenix (2007)",
            "Corpse Bride (2005)"
        ]
    },
    {
        "tmdb_id": 4690,
        "name": "Christopher Walken",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/ApgDL7nudR9T2GpjCG4vESgymO2.jpg",
        "credits": [
            "Pulp Fiction (1994)",
            "Catch Me If You Can (2002)",
            "Click (2006)"
        ]
    },
    {
        "tmdb_id": 4517,
        "name": "Joe Pesci",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/1WHLXwT0TDZDWFVRcFve1B0EjNK.jpg",
        "credits": [
            "GoodFellas (1990)",
            "Home Alone 2: Lost in New York (1992)",
            "Home Alone (1990)"
        ]
    },
    {
        "tmdb_id": 82191,
        "name": "Sharlto Copley",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/em89OJJvBRX7kNJJPASmNKQujsC.jpg",
        "credits": [
            "Chappie (2015)",
            "Maleficent (2014)",
            "District 9 (2009)"
        ]
    },
    {
        "tmdb_id": 10431,
        "name": "Jennifer Jason Leigh",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/7DbG2AO3nygHAkNC866HLPKkxv9.jpg",
        "credits": [
            "Annihilation (2018)",
            "The Machinist (2004)",
            "The Hateful Eight (2015)"
        ]
    },
    {
        "tmdb_id": 6807,
        "name": "Sam Rockwell",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/vYpWxV0bnUgKo7SdasfGP9HttUq.jpg",
        "credits": [
            "Iron Man 2 (2010)",
            "Three Billboards Outside Ebbing, Missouri (2017)",
            "Moon (2009)"
        ]
    },
    {
        "tmdb_id": 1064,
        "name": "Crispin Glover",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/imBnLpSXvg61qDDdEfvL6R4ITKt.jpg",
        "credits": [
            "Back to the Future (1985)",
            "Alice in Wonderland (2010)",
            "9 (2009)"
        ]
    },
    {
        "tmdb_id": 7499,
        "name": "Jared Leto",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/ca3x0OfIKbJppZh8S1Alx3GfUZO.jpg",
        "credits": [
            "Fight Club (1999)",
            "Suicide Squad (2016)",
            "Mr. Nobody (2013)"
        ]
    },
    {
        "tmdb_id": 16850,
        "name": "Rose McGowan",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/x8sHWjQ7cWVcHKhqGR09x0Y0tsP.jpg",
        "credits": [
            "Scream (1996)",
            "Planet Terror (2007)",
            "Grindhouse (2007)"
        ]
    },
    {
        "tmdb_id": 12074,
        "name": "John Lithgow",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/8Y1sjBdnVR483S8PrnAQzlESwhx.jpg",
        "credits": [
            "Interstellar (2014)",
            "Shrek (2001)",
            "Rise of the Planet of the Apes (2011)"
        ]
    },
    {
        "tmdb_id": 10912,
        "name": "Eva Green",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/xCK90nAZWwElzmWwgvKyEwoCTrI.jpg",
        "credits": [
            "Casino Royale (2006)",
            "Miss Peregrine's Home for Peculiar Children (2016)",
            "300: Rise of an Empire (2014)"
        ]
    },
    {
        "tmdb_id": 4512,
        "name": "James Woods",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/UAvunLhXXFMD83wXOUvRWhNBmO.jpg",
        "credits": [
            "Contact (1997)",
            "Once Upon a Time in America (1984)",
            "Videodrome (1983)"
        ]
    },
    {
        "tmdb_id": 27763,
        "name": "Casper Van Dien",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/jxRmw8gJYsJ7IG5n9B0PFzy2nHO.jpg",
        "credits": [
            "Sleepy Hollow (1999)",
            "Starship Troopers (1997)",
            "Starship Troopers 3: Marauder (2008)"
        ]
    },
    {
        "tmdb_id": 2133,
        "name": "Dina Meyer",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/bKte4cIXI1aQat8JLVNONZE4Y2.jpg",
        "credits": [
            "Saw (2004)",
            "Starship Troopers (1997)",
            "Saw III (2006)"
        ]
    },
    {
        "tmdb_id": 9205,
        "name": "Denise Richards",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/i1MDAhdjiqXWwEhr7ujnlk8ksdl.jpg",
        "credits": [
            "Starship Troopers (1997)",
            "The World Is Not Enough (1999)",
            "Valentine (2001)"
        ]
    },
    {
        "tmdb_id": 41686,
        "name": "Neil Patrick Harris",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/qZwbo23uaJU87NxE5RubbeeLTYh.jpg",
        "credits": [
            "How I Met Your Mother (N/A)",
            "Gone Girl (2014)",
            "The Smurfs (2011)"
        ]
    },
    {
        "tmdb_id": 28410,
        "name": "Jake Busey",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/3WknfRePAvwFJfrbYVvfYXTQCh9.jpg",
        "credits": [
            "Starship Troopers (1997)",
            "The Predator (2018)",
            "Enemy of the State (1998)"
        ]
    },
    {
        "tmdb_id": 41687,
        "name": "Patrick Muldoon",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/nuqKElpRossYTwh9BIymHLA5G6e.jpg",
        "credits": [
            "Starship Troopers (1997)",
            "Stigmata (1999)",
            "Vanquish (2021)"
        ]
    },
    {
        "tmdb_id": 27972,
        "name": "Josh Hutcherson",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/uSwSFPpVTmTc4GHq1nPGHYJ8axD.jpg",
        "credits": [
            "The Hunger Games: Mockingjay - Part 1 (2014)",
            "The Hunger Games: Catching Fire (2013)",
            "The Hunger Games (2012)"
        ]
    },
    {
        "tmdb_id": 2283,
        "name": "Stanley Tucci",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/q4TanMDI5Rgsvw4SfyNbPBh4URr.jpg",
        "credits": [
            "The Devil Wears Prada (2006)",
            "The Hunger Games (2012)",
            "Transformers: Age of Extinction (2014)"
        ]
    },
    {
        "tmdb_id": 9281,
        "name": "Elizabeth Banks",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/zrkI1dYucpTM8Qydtrtro9MgQPb.jpg",
        "credits": [
            "The Hunger Games (2012)",
            "The Hunger Games: Catching Fire (2013)",
            "The Lego Movie (2014)"
        ]
    },
    {
        "tmdb_id": 8210,
        "name": "Wes Bentley",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/voD93lzFZrr9xfAggwFcPRBi84i.jpg",
        "credits": [
            "Interstellar (2014)",
            "The Hunger Games (2012)",
            "American Beauty (1999)"
        ]
    },
    {
        "tmdb_id": 23498,
        "name": "Alexander Ludwig",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/3KpzKT4iGhNivSISQMe6EwpAmCi.jpg",
        "credits": [
            "Bad Boys: Ride or Die (2024)",
            "Bad Boys for Life (2020)",
            "The Hunger Games (2012)"
        ]
    },
    {
        "tmdb_id": 5050,
        "name": "Yaphet Kotto",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/f0jquWLj22hvYf6PTIggdolhiDx.jpg",
        "credits": [
            "Alien (1979)",
            "The Running Man (1987)",
            "Live and Let Die (1973)"
        ]
    },
    {
        "tmdb_id": 10460,
        "name": "Richard Kiel",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/wop4KV2ywl6gdYnCUs1OthtGylM.jpg",
        "credits": [
            "Tangled (2010)",
            "The Spy Who Loved Me (1977)",
            "Moonraker (1979)"
        ]
    },
    {
        "tmdb_id": 13006,
        "name": "Professor Toru Tanaka",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/jCRknWUQZ2VdZqzJkBlnpSQ8e4A.jpg",
        "credits": [
            "The Running Man (1987)",
            "Last Action Hero (1993)",
            "Darkman (1990)"
        ]
    },
    {
        "tmdb_id": 21411,
        "name": "Ice-T",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/96TdPckI16ggfHcPrSFf6bHYLLe.jpg",
        "credits": [
            "Law & Order: Special Victims Unit (N/A)",
            "Johnny Mnemonic (1995)",
            "New Jack City (1991)"
        ]
    },
    {
        "tmdb_id": 585,
        "name": "Rutger Hauer",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/3Lly7qwOrESdFcwyaiEOfPlB76l.jpg",
        "credits": [
            "Blade Runner (1982)",
            "Batman Begins (2005)",
            "Sin City (2005)"
        ]
    },
    {
        "tmdb_id": 976,
        "name": "Jason Statham",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/8FMhYekyLR4ibHQ9Kpuaqe4cVjL.jpg",
        "credits": [
            "Wrath of Man (2021)",
            "The Meg (2018)",
            "The Transporter (2002)"
        ]
    },
    {
        "tmdb_id": 11148,
        "name": "Joan Allen",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/ipUhzenaOCmrxqbPqc7RadYxWao.jpg",
        "credits": [
            "The Notebook (2004)",
            "Hachi: A Dog's Tale (2009)",
            "Room (2015)"
        ]
    },
    {
        "tmdb_id": 8169,
        "name": "Tyrese Gibson",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/jxoy4fbXNKFQtBdK73cLXEz3ufS.jpg",
        "credits": [
            "F9 (2021)",
            "Fast Five (2011)",
            "2 Fast 2 Furious (2003)"
        ]
    },
    {
        "tmdb_id": 141,
        "name": "David Carradine",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/1X2GlkMKS9FIG1kGou7o6LRqAjz.jpg",
        "credits": [
            "Kill Bill: Vol. 1 (2003)",
            "Kill Bill: Vol. 2 (2004)",
            "Crank: High Voltage (2009)"
        ]
    },
    {
        "tmdb_id": 2176,
        "name": "Tommy Lee Jones",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/zixpaPmOonRh1I3TWgxDkeGxkrv.jpg",
        "credits": [
            "No Country for Old Men (2007)",
            "Men in Black (1997)",
            "Men in Black II (2002)"
        ]
    },
    {
        "tmdb_id": 819,
        "name": "Edward Norton",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/8nytsqL59SFJTVYVrN72k6qkGgJ.jpg",
        "credits": [
            "Fight Club (1999)",
            "The Incredible Hulk (2008)",
            "American History X (1998)"
        ]
    },
    {
        "tmdb_id": 2713,
        "name": "Linda Hamilton",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/ybthFm1aatOct2FVD7DrfC0Dq5B.jpg",
        "credits": [
            "The Terminator (1984)",
            "Terminator 2: Judgment Day (1991)",
            "Terminator: Dark Fate (2019)"
        ]
    },
    {
        "tmdb_id": 18999,
        "name": "J.K. Simmons",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/ScmKoJ9eiSUOthAt1PDNLi8Fkw.jpg",
        "credits": [
            "Spider-Man (2002)",
            "La La Land (2016)",
            "Whiplash (2014)"
        ]
    },
    {
        "tmdb_id": 19,
        "name": "Allison Janney",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/hpBKWV1jjoXQbr1s0iUZTSvw582.jpg",
        "credits": [
            "Finding Nemo (2003)",
            "Minions (2015)",
            "I, Tonya (2017)"
        ]
    },
    {
        "tmdb_id": 129101,
        "name": "Lance Reddick",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/22mVtEXZbpt0J7S0LhIhdkfRrZV.jpg",
        "credits": [
            "John Wick: Chapter 2 (2017)",
            "John Wick (2014)",
            "John Wick: Chapter 3 - Parabellum (2019)"
        ]
    },
    {
        "tmdb_id": 3810,
        "name": "Javier Bardem",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/eCBiiPvBfIY7exDQwH0vEM6Bf3c.jpg",
        "credits": [
            "No Country for Old Men (2007)",
            "Pirates of the Caribbean: Dead Men Tell No Tales (2017)",
            "Skyfall (2012)"
        ]
    },
    {
        "tmdb_id": 10882,
        "name": "Rosamund Pike",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/8ObNklHDi2hjdz0ayzJFB9jtqzm.jpg",
        "credits": [
            "Gone Girl (2014)",
            "Jack Reacher (2012)",
            "I Care a Lot (2021)"
        ]
    },
    {
        "tmdb_id": 335,
        "name": "Michael Shannon",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/6mMczfjM8CiS1WuBOgo5Xom1TcR.jpg",
        "credits": [
            "Man of Steel (2013)",
            "The Shape of Water (2017)",
            "Nocturnal Animals (2016)"
        ]
    },
    {
        "tmdb_id": 537,
        "name": "Stephen Tobolowsky",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/uL8yfcm0dCFYFQt052kczVQVvac.jpg",
        "credits": [
            "Memento (2001)",
            "Garfield (2004)",
            "Groundhog Day (1993)"
        ]
    },
    {
        "tmdb_id": 20750,
        "name": "Judy Greer",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/qiwvGgbbgwiE8gA4oBQpFnTNzl2.jpg",
        "credits": [
            "Jurassic World (2015)",
            "Ant-Man (2015)",
            "Halloween (2018)"
        ]
    },
    {
        "tmdb_id": 6574,
        "name": "Clancy Brown",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/xjg0ZIxP0tFcEQCTeRgKxNtLdpe.jpg",
        "credits": [
            "The Shawshank Redemption (1994)",
            "Thor: Ragnarok (2017)",
            "The SpongeBob SquarePants Movie (2004)"
        ]
    },
    {
        "tmdb_id": 18918,
        "name": "Dwayne Johnson",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/5QApZVV8FUFlVxQpIK3Ew6cqotq.jpg",
        "credits": [
            "Jumanji: The Next Level (2019)",
            "Jumanji: Welcome to the Jungle (2017)",
            "San Andreas (2015)"
        ]
    },
    {
        "tmdb_id": 119592,
        "name": "Aubrey Plaza",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/780BVfLoEv5jY4kuLH5vHEZj3oz.jpg",
        "credits": [
            "Dirty Grandpa (2016)",
            "Safety Not Guaranteed (2012)",
            "The To Do List (2013)"
        ]
    },
    {
        "tmdb_id": 38673,
        "name": "Channing Tatum",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/4TpgnS6l8YUXSne9Av9nda6mjxY.jpg",
        "credits": [
            "21 Jump Street (2012)",
            "Jupiter Ascending (2015)",
            "White House Down (2013)"
        ]
    },
    {
        "tmdb_id": 1772,
        "name": "Anna Faris",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/y3YKNr4qPPJZ9w4lR2a3yySKotd.jpg",
        "credits": [
            "Scary Movie (2000)",
            "Scary Movie 2 (2001)",
            "Scary Movie 3 (2003)"
        ]
    },
    {
        "tmdb_id": 29222,
        "name": "Zac Efron",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/pdWXP7XG6qqOoxoLid1DWYwmaMY.jpg",
        "credits": [
            "The Greatest Showman (2017)",
            "17 Again (2009)",
            "High School Musical (2006)"
        ]
    },
    {
        "tmdb_id": 206,
        "name": "Jim Carrey",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/u0AqTz6Y7GHPCHINS01P7gPvDSb.jpg",
        "credits": [
            "The Truman Show (1998)",
            "Eternal Sunshine of the Spotless Mind (2004)",
            "Bruce Almighty (2003)"
        ]
    },
    {
        "tmdb_id": 1240487,
        "name": "Kate McKinnon",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/7o26OzpEPAUma65jGQZop9d52gy.jpg",
        "credits": [
            "Barbie (2023)",
            "Ferdinand (2017)",
            "Ghostbusters (2016)"
        ]
    },
    {
        "tmdb_id": 4173,
        "name": "Anthony Hopkins",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/cbFWUHhk6pZKTEm48OKVM5awNNn.jpg",
        "credits": [
            "Thor (2011)",
            "The Silence of the Lambs (1991)",
            "Hannibal (2001)"
        ]
    },
    {
        "tmdb_id": 515,
        "name": "Glenn Close",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/eNTn3OmlnsQYLIp7HVGeH9kOJiA.jpg",
        "credits": [
            "What Happened to Monday (2017)",
            "101 Dalmatians (1996)",
            "Mars Attacks! (1996)"
        ]
    },
    {
        "tmdb_id": 70851,
        "name": "Jack Black",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/9QKdFKfc3Zi5XwnQHrFukFMpo5o.jpg",
        "credits": [
            "Kung Fu Panda (2008)",
            "Kung Fu Panda 3 (2016)",
            "Kung Fu Panda 2 (2011)"
        ]
    },
    {
        "tmdb_id": 8318,
        "name": "Brian Blessed",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/3mLIr94V5IOA5ndY6GyqKKcyrX6.jpg",
        "credits": [
            "Tarzan (1999)",
            "Star Wars: Episode I - The Phantom Menace (1999)",
            "Robin Hood: Prince of Thieves (1991)"
        ]
    },
    {
        "tmdb_id": 3380,
        "name": "Bette Davis",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/uBRNCljWHEG9cW9em2ZyoGWQQN5.jpg",
        "credits": [
            "All About Eve (1950)",
            "What Ever Happened to Baby Jane? (1962)",
            "Hush... Hush, Sweet Charlotte (1964)"
        ]
    },
    {
        "tmdb_id": 38334,
        "name": "Jennifer Coolidge",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/hcpbV0dY4ZJxmZi1WcAWe8euqV2.jpg",
        "credits": [
            "Legally Blonde (2001)",
            "A Cinderella Story (2004)",
            "Promising Young Woman (2020)"
        ]
    },
    {
        "tmdb_id": 1267329,
        "name": "Lupita Nyong'o",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/y40Wu1T742kynOqtwXASc5Qgm49.jpg",
        "credits": [
            "The Wild Robot (2024)",
            "Black Panther (2018)",
            "Us (2019)"
        ]
    },
    {
        "tmdb_id": 1200864,
        "name": "LaKeith Stanfield",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/x3k0HCpMNqEtVf2VKQrSCol1ia2.jpg",
        "credits": [
            "Get Out (2017)",
            "Uncut Gems (2019)",
            "Death Note (2017)"
        ]
    },
    {
        "tmdb_id": 3063,
        "name": "Tilda Swinton",
        "gender": "FEMALE",
        "headshot": "https://image.tmdb.org/t/p/original/gWbX3a7V2MgRMRzekfITNcb27xV.jpg",
        "credits": [
            "Doctor Strange (2016)",
            "We Need to Talk About Kevin (2011)",
            "Only Lovers Left Alive (2014)"
        ]
    },
    {
        "tmdb_id": 10460,
        "name": "Richard Kiel",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/wop4KV2ywl6gdYnCUs1OthtGylM.jpg",
        "credits": [
            "Tangled (2010)",
            "The Spy Who Loved Me (1977)",
            "Moonraker (1979)"
        ]
    },
    {
        "tmdb_id": 819,
        "name": "Edward Norton",
        "gender": "MALE",
        "headshot": "https://image.tmdb.org/t/p/original/8nytsqL59SFJTVYVrN72k6qkGgJ.jpg",
        "credits": [
            "Fight Club (1999)",
            "The Incredible Hulk (2008)",
            "American History X (1998)"
        ]
    }
];
