import React from 'react';
import { copyResultsToClipboard } from '../utils/copyResultsToClipboard';
import CountdownToMidnightUTC from './countdown';

function ResultScreen({ dailyResults }) {
  const totalResult = dailyResults.reduce((a, b) => a + b, 0);

  return (
    <>
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '40%',
          transform: 'translate(-50%, -50%)',
          zIndex: '9999',
        }}
      >
        <div className='result-screen result-screen-results'>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            Jingle #2
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ textAlign: 'left' }}>Score</div>
            <div style={{ textAlign: 'right' }}>{totalResult}</div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              version='1.1'
              viewBox='0 0 800 800'
              preserveAspectRatio='xMidYMid slice'
              style={{ maxHeight: '3vw' }}
            >
              <defs>
                <pattern
                  id='pppixelate-pattern'
                  width='20'
                  height='20'
                  patternUnits='userSpaceOnUse'
                  patternTransform='translate(0 0) scale(40) rotate(0)'
                  shape-rendering='crispEdges'
                >
                  <rect
                    width='1'
                    height='1'
                    x='7'
                    y='1'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='8'
                    y='1'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='9'
                    y='1'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='10'
                    y='1'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='11'
                    y='1'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='5'
                    y='2'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='6'
                    y='2'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='7'
                    y='2'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='11'
                    y='2'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='12'
                    y='2'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='13'
                    y='2'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='3'
                    y='3'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='4'
                    y='3'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='5'
                    y='3'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='9'
                    y='3'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='13'
                    y='3'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='14'
                    y='3'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='15'
                    y='3'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='3'
                    y='4'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='9'
                    y='4'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='15'
                    y='4'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='2'
                    y='5'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='3'
                    y='5'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='9'
                    y='5'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='15'
                    y='5'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='16'
                    y='5'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='2'
                    y='6'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='9'
                    y='6'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='16'
                    y='6'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='1'
                    y='7'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='2'
                    y='7'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='9'
                    y='7'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='16'
                    y='7'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='17'
                    y='7'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='1'
                    y='8'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='9'
                    y='8'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='17'
                    y='8'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='1'
                    y='9'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='9'
                    y='9'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='17'
                    y='9'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='1'
                    y='10'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='10'
                    y='10'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='17'
                    y='10'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='1'
                    y='11'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='2'
                    y='11'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='11'
                    y='11'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='16'
                    y='11'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='17'
                    y='11'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='2'
                    y='12'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='12'
                    y='12'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='16'
                    y='12'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='2'
                    y='13'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='3'
                    y='13'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='15'
                    y='13'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='16'
                    y='13'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='3'
                    y='14'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='15'
                    y='14'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='3'
                    y='15'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='4'
                    y='15'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='5'
                    y='15'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='13'
                    y='15'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='14'
                    y='15'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='15'
                    y='15'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='5'
                    y='16'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='6'
                    y='16'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='7'
                    y='16'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='11'
                    y='16'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='12'
                    y='16'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='13'
                    y='16'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='7'
                    y='17'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='8'
                    y='17'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='9'
                    y='17'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='10'
                    y='17'
                    fill='#edfd07'
                  ></rect>
                  <rect
                    width='1'
                    height='1'
                    x='11'
                    y='17'
                    fill='#edfd07'
                  ></rect>
                </pattern>
              </defs>
              <rect
                width='100%'
                height='100%'
                fill='url(#pppixelate-pattern)'
              ></rect>
            </svg>
            <CountdownToMidnightUTC />
          </div>
          <hr />
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'center',
            }}
          >
            {!navigator.userAgent.match(
              /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i,
            ) && (
              <div
                className='result-screen-option'
                onClick={() => copyResultsToClipboard(dailyResults)}
              >
                Copy Results
              </div>
            )}

            <a
              href='/'
              className='result-screen-option'
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResultScreen;
