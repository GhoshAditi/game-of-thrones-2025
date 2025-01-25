import React, { FC } from 'react';
import { IIconProps } from '../../interfaces';

const LogoSVG: FC<IIconProps> = (props) => {
  const {
    className = '',
    width = '538',
    height = '678',
    fill = '#FF0000',
  } = props;
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 143 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect
        x="65.5083"
        y="11.9832"
        width="77.4916"
        height="40.743"
        fill="url(#pattern0)"
      />
      <rect width="65.5084" height="52.7263" fill="url(#pattern1)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_419_258"
            transform="scale(0.0103093 0.0196078)"
          />
        </pattern>
        <pattern
          id="pattern1"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image1_419_258"
            transform="scale(0.0121951 0.0151515)"
          />
        </pattern>
        <image
          id="image0_419_258"
          width="97"
          height="51"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGEAAAAzCAYAAACHQGZfAAAAAXNSR0IArs4c6QAACfZJREFUeF7tm3ewpEUVxc8BjGAiiQkVRQsURBEDIoIBlUIFBRWRjCgYyhxAiYppQdAqEEyAAZQVFWOJyGIqRaUEzEVQoLCUoBgAUTzW73m/V9++fTPzzXuzO2PV3L923/TXfbtP9+17z71tTWXsK+CxazBVQFMQJmATjByEJPeWdC9JD5O0hqS/SvqjpKtt/2VlzTnJXSWtL+lBktaRdKukGyRdaZvx+0qSdSVtYvu7g9p2/T3JmpK2sP39ft+MBIQkT5H0IknPlHSZpJ9K+m0NDBAAsnkt0KWSzpb0Nds3dZ3QfO2S3FPSQZJ2kPQYSXfv0d/vJH1b0gm2L+k1ZpLzJW0q6R+S0qPdHVt/v62P/neQtJ6k7W3/cKWBkGR7SYdLepSk42uSPXd7kgdIerqkw2rXHmX7vcMCkeROkl4j6QBJn5bETgP0v0l6sCRO4wsl7Vj/bg/xJUmvtQ0wy0mSl0i6xPbP+wD1I0mPq99Z4GV92n7M9v6D5regk5CE3fD+WogfM+H5JtVHuftIen0t4ga2/zlI0eb3JCzyKZLOknS6bczOvJKE3bhHbRTMVCN/knSgbQCZlSSc2rVt83uvPocBYR3bmMS+MjQISe4v6atlXr4i6cW2Ob5DS5I31l3x2S4fJ9miwN/b9rVdvqFNgXFIncDV6jtMyZ62P9e1n+qrMwhd+x0KhCQb1NHfSBJHdrsuSPdThoW1/bNBCtcJOLEW7vpB7ef7PcnjJZ1ZdxNNOEVb2v5l1/6SjB2EL0p6nqR/S9p4GBPUdZI9Fu/OXOSS9lvsmEkeIgkPCJOIcGluY/v2LjqOFYQkr5b0wVL0CNtHdlF6FG2SHCfpYtunjai/LSX9pNXXTrYxsQNlbCAkuYskjiyXG6dgI9tXD9R4BA2SMOa5tjceQXezXSR5s6TGM1tmG09voIwThAMlnVwa4pHsPVDbETVI8lFJ19t+64i6nOmm3NxfSMI8/UfSmv08rWbscYJwkaRHlyK72+ZyWyWS5EpcYdtfHvWASYglGs+MC5p59pWxgJAECuLGlmaPGMabGDSpfr8neZqkb7EBunhQw45V8Q6UBpH3jra/PqiPcYEAJTEbFdoeyq0dNKkBIBwl6R1EwYv1inqNk2SppBdI2sU23t9EngQizk+VZjfYhuhaJZKEiPa50CL9OJ/FKJMEkAH7GbY5dRMJwl6SGtfwCttcZKtEklwoaasK0JqNMNKxk+wj6RNFtPXkgZpBx2WOHisJfgi5xjYk3CqRupRxUY+2Dek3cknCSePErW/7ukEDjAsELi0ILciw22zDYK4SSfKbosEvsL3dyhg0yUsLZIjBgTIWENCqePZmEdazvSDuZuAM5zRIAlO6a/15pVzOSYj8N7S9bxf9xgkCnDhBE7LzXAq4i/IFJqfqWZKIVnF9G1ki6Ru2L2/3leQYSW+rv73P9lu6jtW1XW2wd3W5lGsO4yHwyp8maLqvJBIVJFMWLEmOrXwCfZxjG1JwBUnC6SPbhZAm3cp2k7Fb8PjNh0WJnG+7kykaKwg1+G6S4N5ZjM1t/36hqzCHtzm1nylIQjpysxqrM8fTRbckeEWcwE75jLGDUArAH8EjnWWbkH9BMiQIDfjNWMfaJhm0KEmyjaSDbZPS7CxjuxNax5f033mStsWc2P5AZ+1bDYcBocA/t3LTTS+LotLLDJGb3tX2H4aZw9hBqAVZS9Lnq8JhQUD0AiEJlAhxyXVtmqJSqgRS7UDxSNtHDLOApf9DK/jcgzGSUKFB2vRS238e1N9EgNA6FU24j2fDzuycZ05yqKR3Vl+zd0IrQqbcZIe2x1K7l1NIarURsmKwuitUTsxdzCRk5yiP2a88vMurz+9Juh+5bklb276mHxATBULtKryK0yWR/D9J0lLbV3TYTVyI0AXIDAhJHslubH17mu2mzcyfa9HeTXHBnDE+iQtt+zvzLD6FYK+S9IpyLA5vitAqUOPbRl5mu3HF551GEnREVwRzhlVYlIyEEU1CupDIE5fybrWrSN7PLe6iQo4apa1bWlOnxPfQ5UTItEH2t/3x+WZXFDfVE0+d8zulM/jxJGmoqqDojBMA93Wc7ava7atorc0X9STxqpoOPS9o9QEDe8Bii9hGAsKciUFrcLxhW0mLrt5xmxCooQ/1SJiX422zmD2l7gruEIqxmsQ97TGNuLZkzi6yfUuvTpLsImmnOsU98wlJnljzma8rxlhwiefIQei44NNmrRWYgjAB22EKwv8zCOXy3W77X3PuhNUG2fJh5l3jaFAlBO0GtRlyXOKhmxc6lyq9XL2LTkOfhCR4Nw+X9IPyhKjEO6eZIOSc7Te0/g8djes3c3GVm0kx7iFJyOnCqCIo/KvWd3hJBGd4N9DZeDvEJveQhJv69spx3IJbXGXyVGPjEOws6SPlnVE1fmJTaV18EfVGkIYkqyjtpHiB2AX9cCpwvdeWRKHBTSSUkqAD7WaL3iorR+UJc2zmzHfM44H1PoOUcF+ebSgQktDxQb1qgAogoth9W4vOIq9hG1qaScI5EYgdkORs28/v4YZu2q7qSELJzZ5VsPWeXqRfgbxPE00ngVo5pQE4yakEl5KezUayfXGSM2zvXvNj989m2JLQFteZ+AdPit/JSTMXiqHPnDuP5u9dT96wIBALXGubBxcrSBIeieCrUyg8QykkwYUkNcm3VO+xuw+zvRvKAxjt2r52VV9jXpZ7XFH5hRMkfVjS6+q75aLlHiB8s3YnnwAK386AUKwwNUdLk+xlm+BzOUnC24szKMWsudxoe0kbhGYekv5O0YCkl3MabVND21eGBYGOr2rX59TzKAbmVcoTarIn2d666v0BAfPFAw6UX9bsnDYI/8Nh1mQR9K1lm9L7WUmCP48JmTkJVNHNfdsw5EmAvHsSpf6l14ckHWobur49Lg9b0J962FuTQNUQh5DunTkJLRBm5lF6PAeT3ViBXkgMCwKZMV65zBJnSXglAy3Me6+ZEvPihthl8DGUnxMNf6YCMEBgt70JqmM+c1T2HZZzN9s3V58wuE+umtiRmaN63kV1H2YRQLZtZ/BqkxF0ct/MgFD6QL1wHx08jzlat0kB8/rHNnPvKUOBUINT/cDu/nUdPRYLW71Zk/asRSQBtMQ2pgBg4G7giZqd9AV2XdX8QG/wQmb2gV1VQfAOjouPnDae2IVJNpF0jG3s8wpSpgxH4JU1LoCf3PSdhHG5rLloKSA4LwkntSEk0ZOon3nx8O8y21dW/oHHjzOXbDG+ZAi58wARk4tF4FIHTP7G/9F71uGYT+ehQRhk30b9e5INqfbo4uotZuy2S1kvQdkUfRnVxYzX/nbiQRjVRCe5nykIE4DOFIQpCBOwAhOgwvQkTEGYgBWYABWmJ2EKwgSswASoMD0JEwDCfwHoFZBwkcBlfQAAAABJRU5ErkJggg=="
        />
        <image
          id="image1_419_258"
          width="82"
          height="66"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default LogoSVG;
