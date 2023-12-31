"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef, use } from "react";

interface PageProps {
  randomWords: string[];
}

const generateRandomWords = (mode: number): string[] => {
  const randomWords = [
    "apple",
    "banana",
    "orange",
    "grape",
    "kiwi",
    "dog",
    "cat",
    "bird",
    "fish",
    "rabbit",
    "sun",
    "moon",
    "star",
    "cloud",
    "rain",
    "house",
    "car",
    "book",
    "pen",
    "chair",
    "music",
    "dance",
    "paint",
    "draw",
    "write",
    "happy",
    "smile",
    "laugh",
    "friend",
    "love",
    "green",
    "blue",
    "red",
    "yellow",
    "purple",
    "ocean",
    "river",
    "mountain",
    "forest",
    "desert",
    "pizza",
    "burger",
    "pasta",
    "rice",
    "soup",
    "train",
    "plane",
    "bus",
    "bike",
    "walk",
    "fire",
    "water",
    "earth",
    "air",
    "space",
    "play",
    "learn",
    "teach",
    "study",
    "explore",
    "flower",
    "tree",
    "grass",
    "leaf",
    "root",
    "light",
    "dark",
    "day",
    "night",
    "twilight",
    "road",
    "path",
    "journey",
    "destination",
    "adventure",
    "sunny",
    "cloudy",
    "windy",
    "rainy",
    "snowy",
    "jump",
    "run",
    "swim",
    "climb",
    "crawl",
    "sunset",
    "sunrise",
    "midnight",
    "noon",
    "afternoon",
    "island",
    "continent",
    "country",
    "city",
    "village",
    "summer",
    "autumn",
    "winter",
    "spring",
    "season",
    "mirror",
    "window",
    "door",
    "wall",
    "floor",
    "candle",
    "lamp",
    "torch",
    "flashlight",
    "bulb",
    "magic",
    "spell",
    "wizard",
    "witch",
    "wand",
    "computer",
    "keyboard",
    "mouse",
    "screen",
    "code",
    "friendship",
    "family",
    "love",
    "joy",
    "peace",
    "mind",
    "body",
    "soul",
    "spirit",
    "energy",
    "dream",
    "wish",
    "hope",
    "imagine",
    "create",
    "challenge",
    "adventure",
    "journey",
    "discovery",
    "success",
    "balance",
    "harmony",
    "zen",
    "meditate",
    "breathe",
    "celebrate",
    "party",
    "festive",
    "gather",
    "rejoice",
    // Add more words as needed
  ];

  const advancedWords = [
    "Aberration",
    "Benevolent",
    "Cacophony",
    "Dichotomy",
    "Ephemeral",
    "Facetious",
    "Garrulous",
    "Harangue",
    "Ineffable",
    "Juxtapose",
    "Kaleidoscope",
    "Labyrinthine",
    "Mellifluous",
    "Nefarious",
    "Obfuscate",
    "Pernicious",
    "Quixotic",
    "Rambunctious",
    "Sycophant",
    "Ubiquitous",
    "Voracious",
    "Wanderlust",
    "Xenophobic",
    "Yielding",
    "Zephyr",
    "Apostrophe",
    "Bazaar",
    "Fauxpas",
    "Grisaille",
    "Horsd'oeuvre",
    "Ivresse",
    "Jalapeno",
    "Kitsch",
    "Lagniappe",
    "Nouveauriche",
    "Oeuvre",
    "Panache",
    "Quidproquo",
    "Umbra",
    "Vignette",
    "Wunderkind",
    "Xanadu",
    "Ylang-ylang",
    "Zaftig",
    "India",
    "USA",
    "don't",
    "aren't",
    "can't",
    "won't",
    "don't",
    "it's",
    "I'm",
    "you're",
    "he's",
    "she's",
    "we're",
    "they're",
    "isn't",
    "aren't",
    "wasn't",
    "weren't",
    "hasn't",
    "haven't",
    "doesn't",
    "don't",
    "didn't",
    "shouldn't",
    "wouldn't",
    "couldn't",
    "mightn't",
    "mustn't",
    "I'll",
    "you'll",
    "he'll",
    "she'll",
    "we'll",
    "they'll",
    "I'd",
    "you'd",
    "he'd",
    "she'd",
    "we'd",
    "they'd",
    "I've",
    "you've",
    "we've",
    "they've",
    "let's",
    "who's",
    "what's",
    "where's",
    "when's",
    "why's",
    "how's",
    "it's",
    "that's",
    "who'd",
    "what'd",
    "where'd",
    "when'd",
    "why'd",
    "how'd",
    "it'd",
    "that'd",
    "who've",
    "what've",
    "where've",
    "when've",
    "why've",
    "how've",
    "it'll",
    "that'll",
    "who'll",
    "what'll",
    "where'll",
    "when'll",
    "why'll",
    "how'll",
    "banana",
    "orange",
    "grape",
    "kiwi",
    "dog",
    "cat",
    "bird",
    "fish",
    "rabbit",
    "sun",
    "moon",
    "star",
    "cloud",
    "rain",
    "house",
    "car",
    "book",
    "pen",
    "chair",
    "music",
    "dance",
    "paint",
    "draw",
    "write",
    "happy",
    "smile",
    "laugh",
    "friend",
    "love",
    "green",
    "blue",
    "red",
    "yellow",
    "purple",
    "ocean",
    "river",
    "mountain",
    "forest",
    "desert",
    "pizza",
    "burger",
    "pasta",
    "rice",
    "soup",
    "train",
    "plane",
    "bus",
    "bike",
    "walk",
    "fire",
    "water",
    "earth",
    "air",
    "space",
    "play",
    "learn",
    "teach",
    "study",
    "explore",
    "flower",
    "tree",
    "grass",
    "leaf",
    "root",
    "light",
    "dark",
    "day",
    "night",
    "twilight",
    "road",
    "path",
    "journey",
    "destination",
    "adventure",
    "sunny",
    "cloudy",
    "windy",
    "rainy",
  ];

  const wordsList = mode === 1 ? advancedWords : randomWords;

  if (!wordsList) {
    throw new Error("Invalid mode");
  }

  return Array.from({ length: 100 }, () => {
    const randomIndex = Math.floor(Math.random() * wordsList.length);
    return wordsList[randomIndex];
  });
};

const Page: React.FC<PageProps> = ({ randomWords: initialRandomWords }) => {
  const [randomWords, setRandomWords] = useState<string[]>(
    initialRandomWords || []
  );

  const time = 60;
  const timerStartedRef = useRef(false);
  const [mode, setMode] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
  const [loading, setLoading] = useState(true);
  // const [randomWords, setRandomWords] = useState(initialRandomWords);
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [wrongWord, setWrongWord] = useState(false);
  const [origWordCharIndex, setOrigWordCharIndex] = useState(0);
  const [wordHistory, setWordHistory] = useState<
    Array<{ word: string; correct: number }>
  >([]);
  // const [flag, setFlag] = useState(false);
  const [correctWords, setCorrectWords] = useState(0);
  const [wrongWordsCount, setWrongWordsCount] = useState(0);
  const [timer, setTimer] = useState(time);

  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState("");

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [randomWords]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  const startTimer = () => {
    if (timer < 0) {
      return;
    }
    if (timerStartedRef.current) {
      return; // Timer has already been started
    }
    setTimer(time);
    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          clearInterval(countdown);
        }
        return prevTimer - 1;
      });
    }, 1000);

    // Store the interval ID
    setIntervalId(countdown);
    timerStartedRef.current = true; // Set the flag to true
  };

  useEffect(() => {
    setWordHistory(randomWords.map((word) => ({ word, correct: 2 })));
  }, [randomWords]);

  const checkMatch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentChar = e.target.value;
    const currentWord = randomWords[wordIndex];
    setOrigWordCharIndex(origWordCharIndex + 1);

    if (currentChar[origWordCharIndex] !== currentWord[origWordCharIndex]) {
      setWrongWord(true);
    }
    if (currentChar === currentWord.substring(0, origWordCharIndex + 1)) {
      setWrongWord(false);
    }

    if (currentChar.endsWith(" ")) {
      const trimmedCurrentChar = currentChar.trim();
      const trimmedCurrentWord = currentWord.trim();

      setWrongWord((prevWrongWord) => {
        const newWrongWord = trimmedCurrentChar !== trimmedCurrentWord;
        // console.log(newWrongWord);
        setWordHistory((prevHistory) => {
          return prevHistory.map((entry, index) => {
            if (index === wordIndex) {
              return { ...entry, correct: Number(newWrongWord) };
            }
            return entry;
          });
        });

        return newWrongWord;
      });
    }

    if (e.target.value.endsWith(" ") && text != "") {
      const trimmedInput = e.target.value.trim();

      setWordIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        return nextIndex < randomWords.length ? nextIndex : 0;
      });

      if (!wrongWord && trimmedInput === currentWord) {
        setCorrectWords(correctWords + 1);
      }
      setOrigWordCharIndex(0);
      setText("");
      // console.log(wordHistory)
      setWordHistory((prevHistory) => {
        const updatedHistory = prevHistory.map((entry, index) => {
          if (index === wordIndex) {
            return { ...entry, correct: Number(wrongWord) };
          }
          return entry;
        });

        return updatedHistory;
      });

      setWrongWord(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && origWordCharIndex > 0) {
      setOrigWordCharIndex(origWordCharIndex - 2);
    }
    if (timer === time) {
      startTimer();
    }
  };

  const restartGame = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    timerStartedRef.current = false;
    setTimer(time);
    setWordIndex(0);
    setOrigWordCharIndex(0);
    setCorrectWords(0);
    setWrongWord(false);
    setText("");
    setRandomWords(generateRandomWords(mode));
    setWordHistory(randomWords.map((word) => ({ word, correct: 2 })));
  };

  const focusWordRef = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    if (focusWordRef.current) {
      focusWordRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
    }
  }, [text, randomWords]);
  useEffect(() => {
    if (timer === 0) {
      setWpm(correctWords);
      const acc = Math.round((correctWords / wordIndex) * 100).toFixed(2);
      if (isNaN(Number(acc))) setAccuracy("0");
      else setAccuracy(acc);
      setWrongWordsCount(wordIndex - correctWords);
    }
  }, [timer, correctWords, wordIndex]);

  useEffect(() => {
    restartGame();
  }, [mode]);

  return (
    <div className="bg-blue-100 flex flex-col h-screen justify-between ">
      <div className="bg-blue-500 h-20 w-full flex justify-between">
        <Image
          className="m-[-20px] ml-4"
          src="/assets/logo.png"
          alt="logo"
          height={300}
          width={150}
        />
        <div className="flex justify-center items-center mr-8 gap-4">
          <button
            onClick={() => {
              setMode(0);
            }}
            disabled={!mode ? true : false}
            className={` ${
              !mode ? "opacity-50" : ""
            } sm:w-[100px] w-[70px] sm:text-md text-xs rounded-md h-[40px] bg-blue-800 text-white`}
          >
            Normal
          </button>
          <button
            onClick={() => {
              setMode(1);
            }}
            disabled={mode ? true : false}
            className={` ${
              mode ? "opacity-50" : ""
            } sm:w-[120px] w-[120px] flex justify-center items-center  sm:text-md text-xs rounded-md h-[40px] bg-black text-white`}
          >
            Advanced
            <Image src="/assets/fire.png" alt="fire" width={30} height={30} />
          </button>
        </div>
      </div>

      <div
        className={`mx-auto sm:w-[600px] md:w-[768px] w-[400px] ${
          timer != 0 ? "mt-[-250px]" : ""
        } sm:max-h-[200px] max-h-[200px] overflow-hidden flex flex-col gap-6`}
      >
        {loading && (
          <div className="flex items-center justify-center h-full ">
            <div
              aria-label="Loading..."
              role="status"
              className="flex items-center space-x-2"
            >
              <svg
                className="h-20 w-20 animate-spin stroke-gray-500"
                viewBox="0 0 256 256"
              >
                <line
                  x1="128"
                  y1="32"
                  x2="128"
                  y2="64"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></line>
                <line
                  x1="195.9"
                  y1="60.1"
                  x2="173.3"
                  y2="82.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></line>
                <line
                  x1="224"
                  y1="128"
                  x2="192"
                  y2="128"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></line>
                <line
                  x1="195.9"
                  y1="195.9"
                  x2="173.3"
                  y2="173.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></line>
                <line
                  x1="128"
                  y1="224"
                  x2="128"
                  y2="192"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></line>
                <line
                  x1="60.1"
                  y1="195.9"
                  x2="82.7"
                  y2="173.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></line>
                <line
                  x1="32"
                  y1="128"
                  x2="64"
                  y2="128"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></line>
                <line
                  x1="60.1"
                  y1="60.1"
                  x2="82.7"
                  y2="82.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="24"
                ></line>
              </svg>
              <span className="text-4xl font-medium text-gray-500">
                Loading...
              </span>
            </div>
          </div>
        )}
        {!loading && (
          <div
            className={`bg-white h-24 pt-2 rounded-md ${
              timer === 0 ? "hidden" : ""
            }`}
          >
            <div
              className={`${
                timer === 0 ? "hidden" : ""
              } w-full sm:h-20 h-16  rounded-md bg-white overflow-hidden`}
            >
              <div className=" flex flex-wrap gap-2 w-full px-6 ">
                {wordHistory.map((item, i) => (
                  <span
                    key={i}
                    className={`line  p-0.5 ${
                      i === wordIndex ? "bg-gray-300" : ""
                    } ${i === wordIndex && wrongWord ? "bg-red-500" : ""}`}
                  >
                    <span
                      className={`${
                        item.correct === 1 ? " text-red-500" : ""
                      } ${item.correct === 0 ? " text-green-500" : ""} `}
                    >
                      {item.word.split("").map((char, idx) => (
                        <span
                          className={`sm:text-xl  md:text-2xl lg:text-3x; `}
                          id="text"
                          key={idx}
                          ref={(ref) => {
                            if (i === wordIndex) {
                              focusWordRef.current = ref;
                            }
                          }}
                        >
                          {char}
                        </span>
                      ))}
                    </span>
                    <span> </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
        <div className="sm:w-[600px] md:w-[760px] w-[400px] flex px-12">
          <input
            autoFocus
            ref={inputRef}
            value={text}
            onKeyDown={(e) => {
              handleKeyDown(e);
            }}
            onChange={(e) => {
              if (text == "" && e.target.value == " ") setText("");
              else {
                setText(e.target.value);

                checkMatch(e);
              }
            }}
            type="text"
            className="p-1 pl-4 w-full border sm:text-2xl text-xl border-none rounded-sm border-black"
          />
          <div className="w-8 flex justify-center items-center bg-blue-500 text-white rounded-sm mx-1 px-5">
            {timer}
          </div>
          <button
            onClick={restartGame}
            className="sm:w-[50px] w-[50px] sm:text-md text-xs rounded-md h-[40px] bg-black flex justify-center items-center "
          >
            <Image
              src="/assets/reset.svg"
              alt="reset"
              height={20}
              width={20}
              className="text-white fill-white"
            />
          </button>
        </div>
      </div>

      {timer === 0 ? (
        <div className="w-[200px]   bg-blue-400 mx-auto rounded-md flex flex-col  mt-6 ">
          <h2 className="text-white font-bold p-2 text-center">Result</h2>
          <div className="  bg-white flex flex-col ">
            <span className="text-4xl mt-4 font-bold text-green-500 text-center flex flex-col ">
              {wpm} WPM{" "}
              <span className="text-sm font-normal opacity-90 text-gray-400 ">
                (Words Per Minute)
              </span>{" "}
            </span>
            <div className="mt-2 flex flex-col gap-2 mb-2  ">
              <div className="flex justify-between px-2">
                <span>Accuracy</span>
                <span className="font-bold">{accuracy}%</span>
              </div>
              <hr className="w-48 h-0.5 mx-auto my-1 bg-gray-100 border-0 rounded  opacity-30 dark:bg-gray-700" />
              <div className="flex justify-between px-2">
                <span>Correct Words</span>
                <span className="text-green-500 font-semibold">
                  {correctWords}
                </span>
              </div>
              <hr className="w-48 h-0.5 mx-auto my-1 bg-gray-100 border-0 rounded  opacity-30 dark:bg-gray-700" />

              <div className="flex justify-between px-2">
                <span>Wrong Words</span>
                <span className="text-red-500 font-semibold">
                  {wrongWordsCount}
                </span>
              </div>
              <hr className="w-48 h-0.5 mx-auto my-1 bg-gray-100 border-0 rounded  opacity-30 dark:bg-gray-700" />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <footer className="  shadow bg-blue-500  w-full ">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-900 sm:text-center dark:text-gray-900">
            © 2023{" "}
            <a href="" className="hover:underline">
              Speedcraft
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-900 dark:text-gray-900 sm:mt-0">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

const App: React.FC = () => {
  const randomWords = generateRandomWords(0);

  return <Page randomWords={randomWords} />;
};

export default App;
