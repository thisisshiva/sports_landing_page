"use client";

import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink } from "lucide-react";
import { GalleryModal } from "./GalleryModal";

export function TournamentsGrid() {
  const [selectedGallery, setSelectedGallery] = useState<{
    title: string;
    year: string;
    description: string;
  } | null>(null);
  const [isOpening, setIsOpening] = useState(false);
  const tournaments = [
    {
      title: "2019 : Late Smt. Manjeet Kaur U16 Trophy",
      year: "2019",
      description:
        "8 Teams • Noida • Guest: Ankit Yadav (Former BCCI Cricketer & NIS-Certified Coach, SAI)",
      image:`/static/images/2019/CLOSING CEREMONEY OF EVENT.jpeg`,
      viewership: "CRICHEROS VIEWERSHIP : 9389",
    },
    {
      title: "2020: JK ONE-DAY OPEN CRICKET TOURNAMENT 2022",
      year: "2020",
      image:
        "/static/images/2020/runner captain with trphy.jpg",
      viewership: "CRICHEROS VIEWERSHIP : 31279",
      description: `
      STRAIGHT DRIVE UNDER-19 40-OVERS CASH PRIZE CRICKET TOURNAMENT 2019-20
      PARTIICPATED TEAMS:10
      City: GREATER NOIDA
      Guest:CITY HAWKS SPORTS FOUNDATION MEMBERS 
      CRICHEROS VIEWRSIP:  17942
      ORG BY : NEERAJ SACDEVA (JK SPORTS & MEDIA VENTURES PVT LTD)
      WINEER TEAM CASH AWRAD : 31,000
      RUNNER-UP TEAM CASH AWRAD : 21000
      —--
      JK THIRTY OVERS UNLOCK OPEN CRICKET TOURNAMENT 2020
      PARTIICPATED TEAMS:8
      City:  NOIDA
      Guest:PHOOLCHAND SHARMA (CRICKET COACH OF SHIVAM MAVI), AJAY YADAV (INDIA UNDER-19 PLAYER ARADHYA YADAV FATHER AND OWNER AT TNM TRUST GHAZIABAD)
      CRICHEROS VIEWRSIP:  31279
      ORG BY : NEERAJ SACHDEVA (JK SPORTS & MEDIA VENTURES PVT LTD)
      BEST BATSMAN OF TE EVENT : VIMO RANA  (rajasthan STATE PALYER )
      SARTHAK RANJAN  : DELHI STATE PLAYER (1ST CLASS CRICKETER)
      —----
      JK THIRTY OVERS UNLOCK OPEN CRICKET TOURNAMENT 2020
      PARTIICPATED TEAMS:8
      City: GREATER NOIDA
      Guest:CITY HAWKS SPORTS FOUNDATION MEMBERS 
      CRICHEROS VIEWRSIP:  31279
      ORG BY : NEERAJ SACDEVA (JK SPORTS & MEDIA VENTURES PVT LTD)
      BEST BATSMAN OF TE EVENT : DRUV JUREL (CURRENTLY INDIAN PLAYER & ipl player for rajasthan )
      MOST VALUABLE PAYER : YASH GARG (UP STATE TEAM PLAYER) 
      DIVYANSH JOSI : UNDER 19 INDIAN PLAYER
      SWASTIK CHIKARA : UP STATE PLAYER & currently ipl player for rcb`,
    },
    {
      title: "2021: LSMKM UNDER-14,16 CRICKET TOURNAMENT 2021",
      year: "2021 ",
      image:"/static/images/2021/WhatsApp Image 2025-06-14 at 12.39.24 PM.jpeg",
      viewership: "CRICHEROS VIEWERSHIP : 47667",
      description: `
      2ND LATE SMT MANJEET KAUR MEMORIAL UNDER-16 CRICKET TOURNAMENT 2021
      PARTIICPATED TEAMS:10
      City:NOIDA
      Guest:NARENDRA NEGI (CRICKET COACH AT GUJARAT TITANS IPL TEAM & HEAD COACH AT ASHISH NEHRA CRICKET ACADEMY NOIDA)
      SHAHID SAIFI (CHIEF OFFICIAL COORDINATOR AT GHAZIABAD CRICKET ASSOCIATION )
      CRICHEROS VIEWRSIP: 47667
      ORG BY : NEERAJ SACHDEVA (JK SPORTS & MEDIA VENTURES PVT LTD)

      LATE SMT MANJEET KAUR MEMORIAL UNDER-14 CRICKET TOURNAMENT 2020-21
      PARTIICPATED TEAMS:5
      City:NOIDA
      Guest:PHOOLCHAND SHARMA (CRICKET COACH OF SHIVAM MAVI)
      CRICHEROS VIEWRSIP: 27652
      ORG BY : NEERAJ SACHDEVA (JK SPORTS & MEDIA VENTURES PVT LTD)`
    },
    {
      title:
        "2022: CAPTAIN JASWANT SINGH RAWAT MEMROIAL OPEN CRICKET TOURNAMENT 2022",
      year: "2022",
      image:"/static/images/2022/IMG_7075-min.jpeg",
      viewership: "CRICHEROS VIEWERSHIP : 67460",
      description: `
      1ST ALL INDIA 50 OVERS CASH PRIZE OPEN CRICKET TOURNAMENT 2021
      PARTIICPATED TEAMS:20
      City:GREATER NOIDA
      
      CRICHEROS VIEWRSIP:102979
      ORG BY : NEERAJ SACHDEVA (JK SPORTS & MEDIA VENTURES PVT LTD)



      1ST CAPTAIN JASWANT SINGH RAWAT MEMROIAL OPEN CRICKET TOURNAMENT 2022
      PARTIICPATED TEAMS:12
      City:GREATER NOIDA
      Guest:MR RAVI KAUSHIK UPCA CRICKET UMPIRE & ALL REPUTED MEMBERS 
      CRICHEROS VIEWRSIP:67460
      ORG BY : NEERAJ SACHDEVA (JK SPORTS & MEDIA VENTURES PVT LTD)`
    },
    {
      title: "2023: LSMKM OPEN T20 CRICKET CUP TOURNAMENT 2023",
      year: "2023",
      image:"/static/images/2023/WhatsApp Image 2025-06-14 at 12.39.30 PM.jpeg",
      viewership: "CRICHEROS VIEWERSHIP : 15425",
      description: `
      1ST LSMKM OPEN T20 CRICKET CUP TOURNAMENT 2023
      PARTIICPATED TEAMS:5
      City:GHAZIABAD
      Guest:
      CRICHEROS VIEWRSIP:15425
      ORG BY : NEERAJ SACHDEVA (JK SPORTS & MEDIA VENTURES PVT LTD)


      2nd CAPTAIN JASWANT SINGH RAWAT MEMROIAL OPEN CRICKET TOURNAMENT 2022
      PARTIICPATED TEAMS:12
      City:GHAZIABAD
      Guest:MR RAKESH MISHRA  (PRESIDENT OF GHAZIABAD CRICKET ASSOCIATION)
      CRICHEROS VIEWRSIP:56962
      ORG BY : NEERAJ SACHDEVA (JK SPORTS & MEDIA VENTURES PVT LTD)


      LSMKM UNDER-13 40 OVERS CRICKET TOURNAMENT 2023
      PARTIICPATED TEAMS:12
      City:GHAZIABAD
      Guest:REPUTED CRICKET COACHES & GURUCHARAN SINGH SIR 
      CRICHEROS VIEWRSIP:56474
      ORG BY : NEERAJ SACHDEVA (JK SPORTS & MEDIA VENTURES PVT LTD)
    `
    },
    {
      title: "2024: 2ND LSMKM U-13,14,17,19 CRICKET TOURNAMENT 2023-24",
      year: "2024",
      image:"/static/images/2024/WhatsApp Image 2024-06-18 at 12.09.49.jpeg",
      viewership: "CRICHEROS VIEWERSHIP : 29485",
      description: `
      1ST RAJESH DEVI WOMENS OPEN CRICKET T-20 TORUANMENT 2024
      PARTIICPATED TEAMS:8
      City:GREATER NODIA
      Guest: MR PRAKASH MEHRA  & MR JP NAUTIYAL 
      CRICHEROS VIEWRSIP:17608
      ORG BY : NEERAJ SACHDEVA (JK SPORTS & MEDIA VENTURES PVT LTD)


      2ND LSMKM U-14 CRICKET  TOURNAMENT 2023-24
      PARTIICPATED TEAMS:8
      City:DELHI
      Guest: PAWAN SHARMA , PHOOLCHAND SHARMA 
      CRICHEROS VIEWRSIP:29485
      ORG BY : NEERAJ SACHDEVA (JK SPORTS & MEDIA VENTURES PVT LTD)


      3RD LSMKM OPEN 40 OVERS CRICKET TORUNAMENT 2024
      PARTIICPATED TEAMS:12
      City:GHAZIABAD 
      Guest: MR SHAHID SAIFI 
      CRICHEROS VIEWRSIP:30376
      ORG BY : NEERAJ SACHDEVA (JK SPORTS & MEDIA VENTURES PVT LTD)


      JK OPEN CRICKET SHIELD 2024
      PARTIICPATED TEAMS:5
      City:GREATER NODIA
      Guest: MR SUNIL SAINI & MR RAHUL BHARDWAJ
      CRICHEROS VIEWRSIP:18316
      ORG BY : NEERAJ SACHDEVA (JK SPORTS & MEDIA VENTURES PVT LTD)


      3RD LSMKM OPEN 40 OVERS CRICKET TORUNAMENT 2024
      PARTIICPATED TEAMS:4
      City:GHAZIABAD 
      Guest: MR SHAHID SAIFI 
      CRICHEROS VIEWRSIP:8067
      ORG BY : NEERAJ SACHDEVA (JK SPORTS & MEDIA VENTURES PVT LTD)


      LATE SHRI ARVIND DUBEY MEMORIAL UNDER-13 CRICKET TOURNAMENT
      PARTIICPATED TEAMS:5
      City: GR. NOIDA 
      Guest: GAURAV CHOPRA(WOMENS INDIA PLAYER PARSHAVI CHOPRA FATHER) 
      CRICHEROS VIEWRSIP:12495
      ORG BY : NEERAJ SACHDEVA (JK SPORTS & MEDIA VENTURES PVT LTD)


      MINI IPL 2024
      PARTIICPATED TEAMS:6
      City:GREATER NODIA
      CRICHEROS VIEWRSIP:32298
      ORG BY : NEERAJ SACHDEVA (JK SPORTS & MEDIA VENTURES PVT LTD)


      NOIDA YOUTH CRICKET LEAGUE UNDER-17 2024
      PARTIICPATED TEAMS:12
      City:GREATER NODIA
      Guest: MR JP NAUTIYAL & MR RAJEEV
      CRICHEROS VIEWRSIP:60000
      ORG BY : NEERAJ SACHDEVA (JK SPORTS & MEDIA VENTURES PVT LTD)


      VVIP 1ST BOX CRICKET CUP 2024
      PARTIICPATED TEAMS:8
      City:GREATER NODIA
      Guest: MR PRAVEEN TYAGI (MD AT VVIP GROUP )
      CRICHEROS VIEWRSIP:1254
      ORG BY : NEERAJ SACHDEVA (JK SPORTS & MEDIA VENTURES PVT LTD)
      2024

      JK OPEN T-20 CRICKET CHAMPIONSHIP 2025
      PARTIICPATED TEAMS:12
      City:GHAZIABAD
      Guest: MR NEERAJ SACHDEVA 
      CRICHEROS VIEWRSIP:12655
      WINNER : 31K CASH PRIZE 
      RUNNER UP :11K CASH PRIZE 


      ORG BY : NEERAJ SACHDEVA (JK SPORTS & MEDIA VENTURES PVT LTD)


      LSMKM T-20 OPEN CRICKET TOURNAMENT 2025
      PARTIICPATED TEAMS:16
      City:GHAZIABAD
      GUEST : SATISH SHARMA (EX-MINISTER UTTARPRADESH) & SHAHID SAIFI (CHIEF OFFICILAL COORDINATOR GCA)
      CRICHEROS VIEWRSIP:40855
      ORG BY : NEERAJ SACHDEVA (JK SPORTS & MEDIA VENTURES PVT LTD)
      WINNER : 1LAC CASH PRIZE 
      RUNNER UP :70K CASH PRIZE 


      LSMKM U-13 CRICKET TOURNAMENT 2024-25
      PARTIICPATED TEAMS:8
      City:GHAZIABAD
      CRICHEROS VIEWRSIP:19133
      ORG BY : NEERAJ SACHDEVA (JK SPORTS & MEDIA VENTURES PVT LTD)`,
    },
    {
      title: "2025: LSMKM T-20 & U-13 OPEN CRICKET TOURNAMENT 2025",
      year: "2025",
      image:"/static/images/2025/WhatsApp Image 2025-06-15 at 7.26.21 PM (2).jpeg",
      viewership: "CRICHEROS VIEWERSHIP : 12655",
      description: ``,
    },
    {
      title: "2026: Coming Soon",
      year: "2026",
      image:"https://i.pinimg.com/736x/5f/6f/f6/5f6ff65f2b092855496399fb074014a1.jpg",
      description: `Coming Soon`,
    },
  ];

  return (
    <div id="tournaments" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Tournaments We Have Organized</h2>
          <p className="text-xl text-gray-600">
            Delivering excellence across India's cricket landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tournaments.map((tournament, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log("Card clicked:", tournament.title, tournament.year);
                if (!isOpening) {
                  setIsOpening(true);
                  const gallery = {
                    title: tournament.title,
                    year: tournament.year.trim(),
                    description: tournament.description || "",
                  };
                  console.log("Setting selected gallery:", gallery);
                  setSelectedGallery(gallery);
                  setTimeout(() => setIsOpening(false), 300);
                }
              }}
            >
              <div className="relative h-64">
                <ImageWithFallback
                  src={tournament.image}
                  alt={tournament.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white pointer-events-none">
                <h3 className="text-lg mb-2">{tournament.title}</h3>
                <button className="inline-flex items-center gap-2 text-[#a7fa25] group-hover:gap-3 transition-all">
                  View Gallery
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedGallery && (
        <>
          {/* {console.log("Rendering GalleryModal with:", selectedGallery)} */}
          <GalleryModal
            isOpen={true}
            onClose={() => {
              console.log("Closing modal");
              setSelectedGallery(null);
              setIsOpening(false);
            }}
            title={selectedGallery.title}
            year={selectedGallery.year}
            description={selectedGallery.description}
          />
        </>
      )}
    </div>
  );
}
