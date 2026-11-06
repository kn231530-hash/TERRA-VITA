import React, { useState, useEffect } from 'react';
import { ORAL_HISTORIES, OralHistory } from '../data/monographData';
import { Play, Pause, RotateCcw, Volume2, Globe } from 'lucide-react';

export const OralHistoryPlayer: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState<OralHistory>(ORAL_HISTORIES[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackProgress, setPlaybackProgress] = useState(0); // 0 to 100
  const [showFullTranscript, setShowFullTranscript] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setPlaybackProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1.2;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handleSelectStory = (story: OralHistory) => {
    setSelectedStory(story);
    setIsPlaying(false);
    setPlaybackProgress(0);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const handleWaveformClick = (index: number, total: number) => {
    const newProgress = (index / total) * 100;
    setPlaybackProgress(newProgress);
    setIsPlaying(true);
  };

  return (
    <div className="w-full my-12 border hairline-border bg-[#F0EFEA] p-6 md:p-10">
      <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
        {/* Left Side: Audio Recording Deck & Waveform */}
        <div className="w-full lg:w-7/12">
          <div className="flex items-center justify-between mb-3">
            <span className="label-caps text-[#1B4947]">
              FIELD RECORDING ARCHIVE // 24-BIT UNCOMPRESSED
            </span>
            <div className="flex items-center gap-2 text-xs font-mono text-[#0A192F]">
              <Volume2 className="w-3.5 h-3.5 text-[#E05A47]" />
              <span>48 kHz ARCHIVAL MASTER</span>
            </div>
          </div>

          <h4 className="font-serif text-2xl md:text-3xl font-bold text-[#0A192F] mb-1">
            {selectedStory.speaker}
          </h4>
          <div className="label-caps text-[#44474d] text-xs mb-6">
            {selectedStory.role} · {selectedStory.community} · {selectedStory.region}
          </div>

          {/* Player Controls & Interactive Waveform */}
          <div className="bg-[#fcf9f8] p-5 border hairline-border">
            <div className="flex items-center gap-4 mb-4">
              <button
                onClick={togglePlay}
                className="w-12 h-12 bg-[#0A192F] hover:bg-[#E05A47] text-white flex items-center justify-center transition-colors cursor-pointer shrink-0 rounded-none"
                aria-label={isPlaying ? 'Pause Oral Recording' : 'Play Oral Recording'}
              >
                {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
              </button>

              <button
                onClick={() => setPlaybackProgress(0)}
                className="p-2.5 border hairline-border hover:bg-[#F0EFEA] text-[#0A192F] cursor-pointer"
                title="Restart Recording"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <div className="flex-1 font-mono text-xs tabular-nums text-[#0A192F] flex justify-between px-2">
                <span>
                  {Math.floor((playbackProgress / 100) * 164 / 60)}:
                  {String(Math.floor(((playbackProgress / 100) * 164) % 60)).padStart(2, '0')}
                </span>
                <span className="text-[#75777e]">/ {selectedStory.audioDuration}</span>
              </div>
            </div>

            {/* Simulated Dynamic Sound Waveform Bars */}
            <div className="w-full flex items-center justify-between gap-[3px] h-14 px-1 py-1 bg-[#F0EFEA] border hairline-border">
              {selectedStory.waveform.map((val, idx) => {
                const barPercent = (idx / selectedStory.waveform.length) * 100;
                const isPassed = playbackProgress >= barPercent;
                const currentHeight = isPlaying ? Math.min(100, Math.max(15, val + (Math.sin(idx + playbackProgress) * 20))) : val;

                return (
                  <div
                    key={idx}
                    onClick={() => handleWaveformClick(idx, selectedStory.waveform.length)}
                    className="flex-1 h-full flex items-center justify-center cursor-pointer group"
                    title={`Seek to ${Math.round(barPercent)}%`}
                  >
                    <div
                      className={`w-full transition-all duration-75 ${
                        isPassed ? 'bg-[#E05A47]' : 'bg-[#0A192F]/40 group-hover:bg-[#0A192F]'
                      }`}
                      style={{ height: `${currentHeight}%` }}
                    />
                  </div>
                );
              })}
            </div>

            <div className="mt-3 flex items-center justify-between text-[11px] text-[#44474d] font-editorial-sans">
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#1B4947]" />
                {selectedStory.dialectNote}
              </span>
              <button
                onClick={() => setShowFullTranscript(!showFullTranscript)}
                className="label-caps text-[10px] text-[#E05A47] hover:underline cursor-pointer"
              >
                {showFullTranscript ? 'Hide Field Log' : 'Read Full Field Log'}
              </button>
            </div>
          </div>

          {/* Full Field Transcript Box */}
          {showFullTranscript && (
            <div className="mt-4 p-5 bg-white border hairline-border font-editorial-sans text-sm text-[#1c1b1b] leading-relaxed animate-in fade-in duration-200">
              <div className="label-caps text-xs text-[#0A192F] mb-2 font-bold">
                COMMUNITY TESTIMONY TRANSCRIPT // {selectedStory.year}
              </div>
              <p className="mb-2 italic text-[#44474d]">"{selectedStory.quote}"</p>
              <p>{selectedStory.story}</p>
            </div>
          )}
        </div>

        {/* Right Side: Community Speaker Selector Deck */}
        <div className="w-full lg:w-5/12 border-t lg:border-t-0 lg:border-l hairline-border lg:pl-8">
          <span className="label-caps text-[#0A192F] block mb-4">
            Select Archive Testimony
          </span>

          <div className="space-y-3">
            {ORAL_HISTORIES.map((story) => (
              <div
                key={story.id}
                onClick={() => handleSelectStory(story)}
                className={`p-4 border transition-all cursor-pointer ${
                  selectedStory.id === story.id
                    ? 'border-[#0A192F] bg-[#fcf9f8] shadow-xs'
                    : 'border-transparent bg-white/70 hover:bg-white'
                }`}
              >
                <div className="flex items-baseline justify-between mb-1">
                  <div className="font-serif font-bold text-base text-[#0A192F]">
                    {story.speaker}
                  </div>
                  <span className="font-mono text-xs text-[#E05A47] font-semibold">
                    {story.audioDuration}
                  </span>
                </div>
                <div className="text-xs text-[#1B4947] font-medium mb-2">
                  {story.role} · {story.region}
                </div>
                <p className="text-xs text-[#44474d] line-clamp-2 italic font-editorial-sans">
                  "{story.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
