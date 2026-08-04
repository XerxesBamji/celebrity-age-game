/**
 * Curated celebrity pool with dates of birth for instant offline age calculation.
 * Features 132 highly recognizable global celebrities across many nations, fully deduped.
 */
export const CELEBRITY_POOL = [
  // ─── ARGENTINA ─────────────────────────────────────────────────────────────
  { id: 'Q11579',   name: 'Lionel Messi',       wikiTitle: 'Lionel_Messi',      dob: '1987-06-24' },
  { id: 'Q20810844',name: 'Anya Taylor-Joy',    wikiTitle: 'Anya_Taylor-Joy',    dob: '1996-04-16' },
  { id: 'Q44',      name: 'Pope Francis',       wikiTitle: 'Pope_Francis',       dob: '1936-12-17' },
  { id: 'Q1757133', name: 'Lali Espósito',      wikiTitle: 'Lali_Espósito',      dob: '1991-10-10' },
  { id: 'Q105622660',name: 'Bizarrap',          wikiTitle: 'Bizarrap',          dob: '1998-08-29' },

  // ─── BRAZIL ────────────────────────────────────────────────────────────────
  { id: 'Q14274',    name: 'Neymar',            wikiTitle: 'Neymar',            dob: '1992-02-05' },
  { id: 'Q152208',   name: 'Gisele Bündchen',   wikiTitle: 'Gisele_Bündchen',   dob: '1980-07-20' },
  { id: 'Q13409809', name: 'Anitta',            wikiTitle: 'Anitta_(singer)',   dob: '1993-03-30' },

  // ─── COLOMBIA ──────────────────────────────────────────────────────────────
  { id: 'Q484244',  name: 'Shakira',            wikiTitle: 'Shakira',           dob: '1977-02-02' },
  { id: 'Q2656966', name: 'Sofía Vergara',      wikiTitle: 'Sofía_Vergara',      dob: '1972-07-10' },
  { id: 'Q17490329',name: 'Maluma',             wikiTitle: 'Maluma_(singer)',   dob: '1994-01-28' },
  { id: 'Q955483',  name: 'J Balvin',           wikiTitle: 'J_Balvin',           dob: '1985-05-07' },

  // ─── MEXICO ────────────────────────────────────────────────────────────────
  { id: 'Q172628',  name: 'Salma Hayek',        wikiTitle: 'Salma_Hayek',        dob: '1966-09-02' },
  { id: 'Q218242',  name: 'Guillermo del Toro', wikiTitle: 'Guillermo_del_Toro', dob: '1964-10-09' },
  { id: 'Q178294',  name: 'Gael García Bernal', wikiTitle: 'Gael_García_Bernal', dob: '1978-11-30' },
  { id: 'Q313072',  name: 'Diego Luna',         wikiTitle: 'Diego_Luna',         dob: '1979-12-29' },

  // ─── JAMAICA ───────────────────────────────────────────────────────────────
  { id: 'Q1189',    name: 'Usain Bolt',         wikiTitle: 'Usain_Bolt',         dob: '1986-08-21' },

  // ─── JAPAN ─────────────────────────────────────────────────────────────────
  { id: 'Q17494323',name: 'Naomi Osaka',        wikiTitle: 'Naomi_Osaka',        dob: '1997-10-16' },
  { id: 'Q11504135',name: 'Shohei Ohtani',      wikiTitle: 'Shohei_Ohtani',      dob: '1994-07-05' },
  { id: 'Q211778',  name: 'Ken Watanabe',       wikiTitle: 'Ken_Watanabe',       dob: '1959-10-21' },
  { id: 'Q55400',   name: 'Hayao Miyazaki',     wikiTitle: 'Hayao_Miyazaki',     dob: '1941-01-05' },

  // ─── CHINA / HONG KONG ──────────────────────────────────────────────────────
  { id: 'Q36855',   name: 'Jackie Chan',        wikiTitle: 'Jackie_Chan',       dob: '1954-04-07' },
  { id: 'Q150903',  name: 'Gong Li',            wikiTitle: 'Gong_Li',            dob: '1965-12-31' },
  { id: 'Q242689',  name: 'Liu Yifei',          wikiTitle: 'Liu_Yifei',          dob: '1987-08-25' },

  // ─── SOUTH KOREA ───────────────────────────────────────────────────────────
  { id: 'Q18356704',name: 'RM (BTS)',           wikiTitle: 'RM_(rapper)',       dob: '1994-09-12' },
  { id: 'Q28698296',name: 'Jennie (BLACKPINK)', wikiTitle: 'Jennie_(singer)',   dob: '1996-01-16' },
  { id: 'Q483012',  name: 'Son Heung-min',      wikiTitle: 'Son_Heung-min',      dob: '1992-07-08' },
  { id: 'Q72460',   name: 'IU',                 wikiTitle: 'IU_(singer)',       dob: '1993-05-16' },
  { id: 'Q491318',  name: 'Lee Jung-jae',       wikiTitle: 'Lee_Jung-jae',       dob: '1972-12-15' },

  // ─── PHILIPPINES ───────────────────────────────────────────────────────────
  { id: 'Q486359',  name: 'Manny Pacquiao',     wikiTitle: 'Manny_Pacquiao',     dob: '1978-12-17' },

  // ─── NEW ZEALAND ───────────────────────────────────────────────────────────
  { id: 'Q13410526',name: 'Lorde',              wikiTitle: 'Lorde',              dob: '1996-11-07' },
  { id: 'Q2388731', name: 'Taika Waititi',      wikiTitle: 'Taika_Waititi',      dob: '1975-08-16' },

  // ─── TURKEY ────────────────────────────────────────────────────────────────
  { id: 'Q21524662',name: 'Hande Erçel',        wikiTitle: 'Hande_Erçel',        dob: '1993-11-24' },
  { id: 'Q17045931',name: 'Kerem Bürsin',       wikiTitle: 'Kerem_Bürsin',       dob: '1987-06-04' },

  // ─── SOUTH AFRICA ──────────────────────────────────────────────────────────
  { id: 'Q7090',    name: 'Charlize Theron',    wikiTitle: 'Charlize_Theron',    dob: '1975-08-07' },
  { id: 'Q7839402', name: 'Trevor Noah',        wikiTitle: 'Trevor_Noah',        dob: '1984-02-20' },
  { id: 'Q358',     name: 'Elon Musk',          wikiTitle: 'Elon_Musk',          dob: '1971-06-28' },
  { id: 'Q7533270', name: 'Siya Kolisi',        wikiTitle: 'Siya_Kolisi',        dob: '1991-06-16' },

  // ─── SENEGAL ───────────────────────────────────────────────────────────────
  { id: 'Q3461919', name: 'Sadio Mané',         wikiTitle: 'Sadio_Mané',         dob: '1992-04-10' },

  // ─── CAMEROON ──────────────────────────────────────────────────────────────
  { id: 'Q15114421',name: 'Joel Embiid',        wikiTitle: 'Joel_Embiid',        dob: '1994-03-16' },

  // ─── GREECE ────────────────────────────────────────────────────────────────
  { id: 'Q13515328',name: 'Giannis Antetokounmpo',wikiTitle: 'Giannis_Antetokounmpo',dob: '1994-12-06' },

  // ─── DENMARK ───────────────────────────────────────────────────────────────
  { id: 'Q294646',  name: 'Mads Mikkelsen',     wikiTitle: 'Mads_Mikkelsen',     dob: '1965-11-22' },

  // ─── BELGIUM ───────────────────────────────────────────────────────────────
  { id: 'Q313491',  name: 'Stromae',            wikiTitle: 'Stromae',            dob: '1985-03-12' },

  // ─── AUSTRIA ───────────────────────────────────────────────────────────────
  { id: 'Q76819',   name: 'Christoph Waltz',    wikiTitle: 'Christoph_Waltz',    dob: '1956-10-04' },

  // ─── EGYPT ─────────────────────────────────────────────────────────────────
  { id: 'Q13580554',name: 'Mohamed Salah',      wikiTitle: 'Mohamed_Salah',      dob: '1992-06-15' },
  { id: 'Q12555',   name: 'Rami Malek',         wikiTitle: 'Rami_Malek',         dob: '1981-05-12' },

  // ─── KENYA ─────────────────────────────────────────────────────────────────
  { id: 'Q3840329', name: "Lupita Nyong'o",     wikiTitle: "Lupita_Nyong'o",     dob: '1983-03-01' },

  // ─── NIGERIA ───────────────────────────────────────────────────────────────
  { id: 'Q17986790',name: 'Burna Boy',          wikiTitle: 'Burna_Boy',         dob: '1991-07-02' },
  { id: 'Q11013444',name: 'Wizkid',             wikiTitle: 'Wizkid',            dob: '1990-07-16' },

  // ─── AUSTRALIA ─────────────────────────────────────────────────────────────
  { id: 'Q105971',  name: 'Cate Blanchett',     wikiTitle: 'Cate_Blanchett',    dob: '1969-05-14' },
  { id: 'Q129596',  name: 'Hugh Jackman',       wikiTitle: 'Hugh_Jackman',       dob: '1968-10-12' },
  { id: 'Q19248472',name: 'Margot Robbie',       wikiTitle: 'Margot_Robbie',      dob: '1990-07-02' },
  { id: 'Q298417',  name: 'Chris Hemsworth',    wikiTitle: 'Chris_Hemsworth',    dob: '1983-08-11' },

  // ─── CANADA ────────────────────────────────────────────────────────────────
  { id: 'Q168565',  name: 'Keanu Reeves',       wikiTitle: 'Keanu_Reeves',      dob: '1964-09-02' },
  { id: 'Q43416',   name: 'Justin Bieber',      wikiTitle: 'Justin_Bieber',     dob: '1994-03-01' },
  { id: 'Q192682',  name: 'Ryan Reynolds',      wikiTitle: 'Ryan_Reynolds',      dob: '1976-10-23' },
  { id: 'Q5105',    name: 'Celine Dion',        wikiTitle: 'Celine_Dion',        dob: '1968-03-30' },
  { id: 'Q33240',   name: 'Drake',              wikiTitle: 'Drake_(musician)',  dob: '1986-10-24' },
  { id: 'Q40541',   name: 'Jim Carrey',         wikiTitle: 'Jim_Carrey',         dob: '1962-01-17' },

  // ─── UK / IRELAND ──────────────────────────────────────────────────────────
  { id: 'Q16045',   name: 'Adele',              wikiTitle: 'Adele',             dob: '1988-05-05' },
  { id: 'Q1266',    name: 'Elton John',         wikiTitle: 'Elton_John',        dob: '1947-03-25' },
  { id: 'Q18071803',name: 'Harry Styles',       wikiTitle: 'Harry_Styles',      dob: '1994-02-01' },
  { id: 'Q25920',   name: 'Paul McCartney',     wikiTitle: 'Paul_McCartney',    dob: '1942-06-18' },
  { id: 'Q342666',  name: 'Idris Elba',         wikiTitle: 'Idris_Elba',         dob: '1972-09-06' },
  { id: 'Q299063',  name: 'Emma Watson',        wikiTitle: 'Emma_Watson',        dob: '1990-04-15' },
  { id: 'Q235074',  name: 'Dev Patel',          wikiTitle: 'Dev_Patel',          dob: '1990-04-23' },
  { id: 'Q202588',  name: 'Cillian Murphy',     wikiTitle: 'Cillian_Murphy',     dob: '1976-05-25' },
  { id: 'Q24260900',name: 'Millie Bobby Brown', wikiTitle: 'Millie_Bobby_Brown', dob: '2004-02-19' },
  { id: 'Q223759',  name: 'Tom Holland',        wikiTitle: 'Tom_Holland',        dob: '1996-06-01' },
  { id: 'Q9524',    name: 'David Beckham',      wikiTitle: 'David_Beckham',      dob: '1975-05-02' },
  { id: 'Q19066',   name: 'Lewis Hamilton',     wikiTitle: 'Lewis_Hamilton',     dob: '1985-01-07' },
  { id: 'Q22277846',name: 'Florence Pugh',      wikiTitle: 'Florence_Pugh',      dob: '1996-01-03' },
  { id: 'Q244674',  name: 'Benedict Cumberbatch',wikiTitle: 'Benedict_Cumberbatch',dob: '1976-07-19' },
  { id: 'Q43878',   name: 'Daniel Radcliffe',   wikiTitle: 'Daniel_Radcliffe',   dob: '1989-07-23' },

  // ─── FRANCE ────────────────────────────────────────────────────────────────
  { id: 'Q284167',  name: 'Omar Sy',            wikiTitle: 'Omar_Sy',            dob: '1978-01-20' },
  { id: 'Q230614',  name: 'Kylian Mbappé',      wikiTitle: 'Kylian_Mbappé',      dob: '1998-12-20' },
  { id: 'Q8912',    name: 'Marion Cotillard',   wikiTitle: 'Marion_Cotillard',   dob: '1975-09-30' },

  // ─── SPAIN ─────────────────────────────────────────────────────────────────
  { id: 'Q39666',   name: 'Penélope Cruz',      wikiTitle: 'Penélope_Cruz',      dob: '1974-04-28' },
  { id: 'Q5830',    name: 'Rafael Nadal',       wikiTitle: 'Rafael_Nadal',       dob: '1986-06-03' },
  { id: 'Q276006',  name: 'Rosalía',            wikiTitle: 'Rosalía_(singer)',   dob: '1992-09-25' },

  // ─── ITALY ─────────────────────────────────────────────────────────────────
  { id: 'Q81819',   name: 'Monica Bellucci',    wikiTitle: 'Monica_Bellucci',    dob: '1964-09-30' },
  { id: 'Q42440',   name: 'Andrea Bocelli',     wikiTitle: 'Andrea_Bocelli',     dob: '1958-09-22' },
  { id: 'Q43252',   name: 'Sophia Loren',       wikiTitle: 'Sophia_Loren',       dob: '1934-09-20' },

  // ─── GERMANY ───────────────────────────────────────────────────────────────
  { id: 'Q60036',   name: 'Heidi Klum',         wikiTitle: 'Heidi_Klum',         dob: '1973-06-01' },
  { id: 'Q57118',   name: 'Diane Kruger',       wikiTitle: 'Diane_Kruger',       dob: '1976-07-15' },

  // ─── INDIA ─────────────────────────────────────────────────────────────────
  { id: 'Q95353',   name: 'Shah Rukh Khan',     wikiTitle: 'Shah_Rukh_Khan',    dob: '1965-11-02' },
  { id: 'Q158957',  name: 'Priyanka Chopra',    wikiTitle: 'Priyanka_Chopra',   dob: '1982-07-18' },
  { id: 'Q3713',    name: 'A. R. Rahman',       wikiTitle: 'A._R._Rahman',       dob: '1967-01-06' },
  { id: 'Q56016',   name: 'Aishwarya Rai',      wikiTitle: 'Aishwarya_Rai_Bachchan', dob: '1973-11-01' },

  // ─── PORTUGAL ──────────────────────────────────────────────────────────────
  { id: 'Q170592',  name: 'Cristiano Ronaldo',  wikiTitle: 'Cristiano_Ronaldo', dob: '1985-02-05' },

  // ─── ISRAEL ────────────────────────────────────────────────────────────────
  { id: 'Q185654',  name: 'Gal Gadot',          wikiTitle: 'Gal_Gadot',         dob: '1985-04-30' },

  // ─── CHILE ─────────────────────────────────────────────────────────────────
  { id: 'Q14752',   name: 'Pedro Pascal',       wikiTitle: 'Pedro_Pascal',       dob: '1975-04-02' },

  // ─── SWITZERLAND ───────────────────────────────────────────────────────────
  { id: 'Q14285',   name: 'Roger Federer',      wikiTitle: 'Roger_Federer',      dob: '1981-08-08' },

  // ─── PAKISTAN ──────────────────────────────────────────────────────────────
  { id: 'Q32753',   name: 'Malala Yousafzai',   wikiTitle: 'Malala_Yousafzai',   dob: '1997-07-12' },

  // ─── SWEDEN ────────────────────────────────────────────────────────────────
  { id: 'Q60191370',name: 'Greta Thunberg',      wikiTitle: 'Greta_Thunberg',     dob: '2003-01-03' },

  // ─── USA ───────────────────────────────────────────────────────────────────
  { id: 'Q37079',   name: 'Taylor Swift',      wikiTitle: 'Taylor_Swift',      dob: '1989-12-13' },
  { id: 'Q1171',    name: 'Beyoncé',            wikiTitle: 'Beyoncé',           dob: '1981-09-04' },
  { id: 'Q26180',   name: 'Rihanna',            wikiTitle: 'Rihanna',           dob: '1988-02-20' },
  { id: 'Q43049',   name: 'Ariana Grande',      wikiTitle: 'Ariana_Grande',     dob: '1993-06-26' },
  { id: 'Q49230',   name: 'Katy Perry',         wikiTitle: 'Katy_Perry',        dob: '1984-10-25' },
  { id: 'Q131186',  name: 'Lady Gaga',          wikiTitle: 'Lady_Gaga',         dob: '1986-03-28' },
  { id: 'Q2685',    name: 'Tom Hanks',          wikiTitle: 'Tom_Hanks',         dob: '1956-07-09' },
  { id: 'Q28941',   name: 'Leonardo DiCaprio',  wikiTitle: 'Leonardo_DiCaprio', dob: '1974-11-11' },
  { id: 'Q2263',    name: 'Brad Pitt',          wikiTitle: 'Brad_Pitt',         dob: '1963-12-18' },
  { id: 'Q44578',   name: 'Dwayne Johnson',     wikiTitle: 'Dwayne_Johnson',    dob: '1972-05-02' },
  { id: 'Q51294',   name: 'Jennifer Aniston',   wikiTitle: 'Jennifer_Aniston',  dob: '1969-02-11' },
  { id: 'Q18154',   name: 'Will Smith',         wikiTitle: 'Will_Smith',        dob: '1968-09-25' },
  { id: 'Q180274',  name: 'Meryl Streep',       wikiTitle: 'Meryl_Streep',      dob: '1949-06-22' },
  { id: 'Q1877',    name: 'Denzel Washington',  wikiTitle: 'Denzel_Washington', dob: '1954-12-28' },
  { id: 'Q34459',   name: 'Johnny Depp',        wikiTitle: 'Johnny_Depp',       dob: '1963-06-09' },
  { id: 'Q189489',  name: 'Zendaya',            wikiTitle: 'Zendaya',            dob: '1996-09-01' },
  { id: 'Q165219',  name: 'Robert Downey Jr.',  wikiTitle: 'Robert_Downey_Jr.',  dob: '1965-04-04' },
  { id: 'Q39096',   name: 'Angelina Jolie',     wikiTitle: 'Angelina_Jolie',     dob: '1975-06-04' },
  { id: 'Q26882',   name: 'Arnold Schwarzenegger', wikiTitle: 'Arnold_Schwarzenegger', dob: '1947-07-30' },
  { id: 'Q11490',   name: 'Serena Williams',    wikiTitle: 'Serena_Williams',    dob: '1981-09-26' },
  { id: 'Q36153',   name: 'LeBron James',       wikiTitle: 'LeBron_James',       dob: '1984-12-30' },
  { id: 'Q76',      name: 'Barack Obama',       wikiTitle: 'Barack_Obama',      dob: '1961-08-04' },
  { id: 'Q22686',   name: 'Donald Trump',       wikiTitle: 'Donald_Trump',      dob: '1946-06-14' },
  { id: 'Q186375',  name: 'Kim Kardashian',     wikiTitle: 'Kim_Kardashian',     dob: '1980-10-21' },
  { id: 'Q55162',   name: 'Oprah Winfrey',      wikiTitle: 'Oprah_Winfrey',      dob: '1954-01-29' },
  { id: 'Q21073330',name: 'Jenna Ortega',       wikiTitle: 'Jenna_Ortega',       dob: '2002-09-27' },
  { id: 'Q37190',   name: 'Tom Cruise',         wikiTitle: 'Tom_Cruise',         dob: '1962-07-03' },
  { id: 'Q19877770',name: 'Timothée Chalamet',  wikiTitle: 'Timothée_Chalamet',  dob: '1995-12-27' },
  { id: 'Q34410',   name: 'Scarlett Johansson', wikiTitle: 'Scarlett_Johansson', dob: '1984-11-22' },
  { id: 'Q189490',  name: 'Jennifer Lawrence',  wikiTitle: 'Jennifer_Lawrence',  dob: '1990-08-15' },
  { id: 'Q41421',   name: 'Michael Jordan',     wikiTitle: 'Michael_Jordan',     dob: '1963-02-17' },
  { id: 'Q10993',   name: 'Tiger Woods',        wikiTitle: 'Tiger_Woods',        dob: '1975-12-30' },
  { id: 'Q5284',    name: 'Bill Gates',         wikiTitle: 'Bill_Gates',         dob: '1955-10-28' },
];

/**
 * Malena Edition — Argentina-only pool.
 * Covers football, music, acting, TV, and digital/podcast personalities.
 */
export const ARGENTINA_POOL = [
  // ─── FOOTBALL — Legends ────────────────────────────────────────────────────
  { id: 'Q726',      name: 'Gabriel Batistuta',      wikiTitle: 'Gabriel_Batistuta',             dob: '1969-02-01' },
  { id: 'Q216602',   name: 'Javier Mascherano',      wikiTitle: 'Javier_Mascherano',             dob: '1984-06-08' },
  { id: 'Q38993',    name: 'Sergio Agüero',           wikiTitle: 'Sergio_Agüero',                dob: '1988-06-02' },
  { id: 'Q211025',   name: 'Carlos Tevez',            wikiTitle: 'Carlos_Tevez',                 dob: '1984-02-05' },
  { id: 'Q201485',   name: 'Fernando Gago',           wikiTitle: 'Fernando_Gago',                dob: '1986-04-10' },
  { id: 'Q18223',    name: 'Pablo Aimar',             wikiTitle: 'Pablo_Aimar',                  dob: '1979-11-03' },
  { id: 'Q57398',    name: 'Maximiliano Rodríguez',   wikiTitle: 'Maximiliano_Rodríguez',         dob: '1981-01-02' },
  { id: 'Q131259',   name: 'Ángel Di María',          wikiTitle: 'Ángel_Di_María',               dob: '1988-02-14' },

  // ─── FOOTBALL — 2026 World Cup Squad ───────────────────────────────────────
  { id: 'Q11579',    name: 'Lionel Messi',            wikiTitle: 'Lionel_Messi',                 dob: '1987-06-24' },
  { id: 'Q19603696', name: 'Emiliano Martínez',       wikiTitle: 'Emiliano_Martínez_(footballer)', dob: '1992-09-02' },
  { id: 'Q337155',   name: 'Juan Musso',              wikiTitle: 'Juan_Musso',                   dob: '1994-05-06' },
  { id: 'Q1210401',  name: 'Gerónimo Rulli',          wikiTitle: 'Gerónimo_Rulli',               dob: '1992-05-07' },
  { id: 'Q558836',   name: 'Nicolás Otamendi',        wikiTitle: 'Nicolás_Otamendi',             dob: '1988-02-12' },
  { id: 'Q21036283', name: 'Lisandro Martínez',       wikiTitle: 'Lisandro_Martínez',            dob: '1998-01-18' },
  { id: 'Q21036284', name: 'Cristian Romero',         wikiTitle: 'Cristian_Romero_(footballer)', dob: '1998-04-27' },
  { id: 'Q17494477', name: 'Nicolás Tagliafico',      wikiTitle: 'Nicolás_Tagliafico',           dob: '1992-08-31' },
  { id: 'Q22270626', name: 'Gonzalo Montiel',         wikiTitle: 'Gonzalo_Montiel',              dob: '1997-01-01' },
  { id: 'Q21058271', name: 'Leonardo Balerdi',        wikiTitle: 'Leonardo_Balerdi',             dob: '1999-01-26' },
  { id: 'Q18189537', name: 'Rodrigo De Paul',         wikiTitle: 'Rodrigo_De_Paul',              dob: '1994-05-24' },
  { id: 'Q21007671', name: 'Alexis Mac Allister',     wikiTitle: 'Alexis_Mac_Allister',          dob: '1998-12-24' },
  { id: 'Q111625226',name: 'Enzo Fernández',          wikiTitle: 'Enzo_Fernández',               dob: '2001-01-17' },
  { id: 'Q17494398', name: 'Leandro Paredes',         wikiTitle: 'Leandro_Paredes',              dob: '1994-06-29' },
  { id: 'Q26270820', name: 'Giovani Lo Celso',        wikiTitle: 'Giovani_Lo_Celso',             dob: '1996-04-09' },
  { id: 'Q55799953', name: 'Thiago Almada',           wikiTitle: 'Thiago_Almada',                dob: '2001-04-16' },
  { id: 'Q27508985', name: 'Exequiel Palacios',       wikiTitle: 'Exequiel_Palacios',            dob: '1998-10-05' },
  { id: 'Q24039201', name: 'Lautaro Martínez',        wikiTitle: 'Lautaro_Martínez',             dob: '1997-08-22' },
  { id: 'Q55800274', name: 'Julián Álvarez',          wikiTitle: 'Julián_Álvarez',               dob: '2000-01-31' },
  { id: 'Q21023408', name: 'Ángel Correa',            wikiTitle: 'Ángel_Correa_(footballer)',    dob: '1995-03-09' },
  { id: 'Q18406272', name: 'Nicolás González',        wikiTitle: 'Nicolás_González_(footballer)', dob: '1998-04-06' },

  // ─── MUSIC ─────────────────────────────────────────────────────────────────
  { id: 'Q1757133',  name: 'Lali Espósito',          wikiTitle: 'Lali_Espósito',             dob: '1991-10-10' },
  { id: 'Q105622660',name: 'Bizarrap',               wikiTitle: 'Bizarrap',                  dob: '1998-08-29' },
  { id: 'Q21034280', name: 'Tini Stoessel',          wikiTitle: 'Martina_Stoessel',          dob: '2002-03-22' },
  { id: 'Q99424048', name: 'María Becerra',          wikiTitle: 'María_Becerra',             dob: '2000-02-12' },
  { id: 'Q96380558', name: 'Nicki Nicole',           wikiTitle: 'Nicki_Nicole',              dob: '2000-06-25' },
  { id: 'Q55800341', name: 'Paulo Londra',           wikiTitle: 'Paulo_Londra',              dob: '1998-04-12' },
  { id: 'Q55800340', name: 'Duki',                   wikiTitle: 'Duki_(rapper)',             dob: '1996-01-25' },
  { id: 'Q64055430', name: 'Wos',                    wikiTitle: 'Wos_(rapper)',              dob: '1999-06-07' },
  { id: 'Q313870',   name: 'Fito Páez',              wikiTitle: 'Fito_Páez',                 dob: '1963-03-13' },
  { id: 'Q202906',   name: 'Gustavo Cerati',         wikiTitle: 'Gustavo_Cerati',            dob: '1959-08-11' },
  { id: 'Q209165',   name: 'Mercedes Sosa',          wikiTitle: 'Mercedes_Sosa',             dob: '1935-07-09' },
  { id: 'Q3282052',  name: 'Abel Pintos',            wikiTitle: 'Abel_Pintos',               dob: '1984-11-11' },
  { id: 'Q2050552',  name: 'Soledad Pastorutti',     wikiTitle: 'Soledad_Pastorutti',        dob: '1980-02-08' },
  // New-wave urban / pop
  { id: 'arg-luckra',    name: 'Luck Ra',            wikiTitle: 'Luck_Ra',                   dob: '2001-09-10' },
  { id: 'arg-tiagopzk',  name: 'Tiago PZK',          wikiTitle: 'Tiago_PZK',                 dob: '2001-05-16' },
  { id: 'arg-angelat',   name: 'Ángela Torres',      wikiTitle: 'Ángela_Torres',             dob: '1999-05-25' },
  { id: 'arg-emilia',    name: 'Emilia Mernes',      wikiTitle: 'Emilia_Mernes',             dob: '1996-12-22' },
  { id: 'arg-rusher',    name: 'Rusherking',          wikiTitle: 'Rusherking',                dob: '2001-01-28' },
  { id: 'arg-lgante',    name: 'L-Gante',            wikiTitle: 'L-Gante',                   dob: '2000-01-07' },
  { id: 'arg-cazzu',     name: 'Cazzu',              wikiTitle: 'Cazzu',                     dob: '1997-03-02' },
  { id: 'arg-khea',      name: 'Khea',               wikiTitle: 'Khea',                      dob: '1999-08-07' },

  // ─── ACTORS / TV ───────────────────────────────────────────────────────────
  { id: 'Q214889',   name: 'Ricardo Darín',          wikiTitle: 'Ricardo_Darín',             dob: '1957-01-16' },
  { id: 'Q2316737',  name: 'Guillermo Francella',    wikiTitle: 'Guillermo_Francella',       dob: '1955-11-29' },
  { id: 'Q1397403',  name: 'Florencia Peña',         wikiTitle: 'Florencia_Peña',            dob: '1975-08-14' },
  { id: 'Q2007478',  name: 'Adrián Suar',            wikiTitle: 'Adrián_Suar',               dob: '1968-05-20' },
  { id: 'Q1376396',  name: 'Natalia Oreiro',         wikiTitle: 'Natalia_Oreiro',            dob: '1977-05-19' },
  { id: 'Q233155',   name: 'Luisana Lopilato',       wikiTitle: 'Luisana_Lopilato',          dob: '1987-05-18' },
  { id: 'Q20810844', name: 'Anya Taylor-Joy',        wikiTitle: 'Anya_Taylor-Joy',           dob: '1996-04-16' },
  { id: 'Q1387466',  name: 'Celeste Cid',            wikiTitle: 'Celeste_Cid',               dob: '1982-03-25' },
  { id: 'Q845854',   name: 'Benjamín Vicuña',        wikiTitle: 'Benjamín_Vicuña',           dob: '1978-04-09' },

  // ─── INFLUENCERS / PODCAST / DIGITAL ───────────────────────────────────────
  { id: 'arg-occhiato', name: 'Nicolás Occhiato',   wikiTitle: 'Nicolás_Occhiato',          dob: '1993-06-26' },
  { id: 'arg-luquitas', name: 'Luquitas Rodríguez', wikiTitle: 'Luquitas_Rodríguez',        dob: '1997-03-10' },
  { id: 'arg-natijota', name: 'Nati Jota',           wikiTitle: 'Nati_Jota',                 dob: '1996-04-05' },
  { id: 'arg-coscu',    name: 'Coscu',               wikiTitle: 'Coscu',                     dob: '1994-03-15' },
  { id: 'arg-fran',     name: 'Agustín Franzoni',    wikiTitle: 'Agustín_Franzoni',          dob: '2000-09-01' },
  { id: 'arg-martina',  name: 'Martina Peroni',      wikiTitle: 'Martina_Peroni',            dob: '2001-01-22' },
  { id: 'arg-juariu',   name: 'Juariu',              wikiTitle: 'Juariu',                    dob: '1989-07-14' },
];

