export const TravelItemImg = ({ type, onClick, isFilled }) => {
  const renderContent = () => {
    switch (type) {
      case "heart":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            onClick={onClick}
          >
            <path
              d="M11 19.7488C10.6828 19.7488 10.3758 19.7079 10.12 19.6158C6.21116 18.2753 0 13.5172 0 6.48744C0 2.90605 2.89581 0 6.45674 0C8.18605 0 9.80279 0.675349 11 1.88279C12.1972 0.675349 13.814 0 15.5433 0C19.1042 0 22 2.91628 22 6.48744C22 13.5274 15.7888 18.2753 11.88 19.6158C11.6242 19.7079 11.3172 19.7488 11 19.7488ZM6.45674 1.53488C3.74512 1.53488 1.53488 3.75535 1.53488 6.48744C1.53488 13.4763 8.25767 17.3646 10.6214 18.173C10.8056 18.2344 11.2047 18.2344 11.3888 18.173C13.7423 17.3646 20.4753 13.4865 20.4753 6.48744C20.4753 3.75535 18.2651 1.53488 15.5535 1.53488C13.9981 1.53488 12.5553 2.2614 11.6242 3.52C11.3377 3.90884 10.6828 3.90884 10.3963 3.52C9.44465 2.25116 8.01209 1.53488 6.45674 1.53488Z"
              fill={isFilled ? "red" : "white"}
            />
          </svg>
        );
      case "point":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <g clip-path="url(#clip0_1_151)">
              <path
                d="M8.00007 4C7.47266 4 6.95708 4.1564 6.51855 4.44941C6.08002 4.74243 5.73823 5.15891 5.53639 5.64618C5.33456 6.13345 5.28175 6.66962 5.38464 7.18691C5.48754 7.70419 5.74151 8.17935 6.11445 8.55229C6.48739 8.92523 6.96255 9.1792 7.47983 9.28209C7.99711 9.38499 8.53329 9.33218 9.02056 9.13035C9.50783 8.92851 9.92431 8.58672 10.2173 8.14819C10.5103 7.70966 10.6667 7.19408 10.6667 6.66667C10.6667 5.95942 10.3858 5.28115 9.88569 4.78105C9.38559 4.28095 8.70732 4 8.00007 4ZM8.00007 8C7.73636 8 7.47858 7.9218 7.25931 7.77529C7.04005 7.62878 6.86915 7.42055 6.76823 7.17691C6.66732 6.93328 6.64091 6.66519 6.69236 6.40655C6.74381 6.14791 6.87079 5.91033 7.05726 5.72386C7.24373 5.53739 7.48131 5.4104 7.73995 5.35895C7.99859 5.30751 8.26668 5.33391 8.51032 5.43483C8.75395 5.53574 8.96219 5.70664 9.1087 5.92591C9.25521 6.14517 9.33341 6.40296 9.33341 6.66667C9.33341 7.02029 9.19293 7.35943 8.94288 7.60948C8.69283 7.85952 8.35369 8 8.00007 8Z"
                fill="currentColor"
              />
              <path
                d="M7.99995 16.0002C7.43858 16.003 6.88469 15.8714 6.38466 15.6162C5.88463 15.361 5.45301 14.9898 5.12595 14.5335C2.58528 11.0288 1.29662 8.39417 1.29662 6.70217C1.29662 4.92434 2.00286 3.21932 3.25998 1.9622C4.5171 0.705082 6.22211 -0.00115967 7.99995 -0.00115967C9.77778 -0.00115967 11.4828 0.705082 12.7399 1.9622C13.997 3.21932 14.7033 4.92434 14.7033 6.70217C14.7033 8.39417 13.4146 11.0288 10.8739 14.5335C10.5469 14.9898 10.1153 15.361 9.61524 15.6162C9.11521 15.8714 8.56132 16.003 7.99995 16.0002ZM7.99995 1.45417C6.60823 1.45576 5.27396 2.00932 4.28986 2.99342C3.30577 3.97752 2.7522 5.31179 2.75062 6.70351C2.75062 8.04351 4.01262 10.5215 6.30328 13.6808C6.49775 13.9487 6.75286 14.1667 7.04776 14.317C7.34265 14.4673 7.66895 14.5457 7.99995 14.5457C8.33095 14.5457 8.65724 14.4673 8.95214 14.317C9.24704 14.1667 9.50215 13.9487 9.69662 13.6808C11.9873 10.5215 13.2493 8.04351 13.2493 6.70351C13.2477 5.31179 12.6941 3.97752 11.71 2.99342C10.7259 2.00932 9.39167 1.45576 7.99995 1.45417Z"
                fill="currentColor"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_151">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
        );
      case "star":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M2.79619 8.51841L2.7962 8.51842L2.79695 8.51505C2.85505 8.25548 2.82633 7.98109 2.76079 7.75102C2.69542 7.52156 2.57518 7.27222 2.38664 7.08313L0.933783 5.62602C0.551893 5.24301 0.523233 4.96289 0.565884 4.82101C0.614235 4.67888 0.796912 4.47088 1.32934 4.38001C1.32963 4.37996 1.32991 4.37991 1.33019 4.37987L3.19393 4.06834L3.19393 4.06837L3.19979 4.06732C3.43984 4.02452 3.66643 3.90731 3.84454 3.77638C4.02252 3.64554 4.20383 3.46298 4.31651 3.24234L4.31654 3.24235L4.3192 3.23701L5.34628 1.17081C5.34649 1.17041 5.34669 1.17 5.34689 1.1696C5.60603 0.655655 5.86583 0.55 6.00299 0.55C6.14015 0.55 6.39995 0.655656 6.65909 1.16961C6.65929 1.17001 6.65949 1.17041 6.6597 1.17081L7.68678 3.23701L7.68707 3.23758C7.82762 3.5195 8.08279 3.73868 8.31308 3.87407L8.38656 3.91727L8.46967 3.9362L8.59183 3.39994L8.46969 3.93621L8.46974 3.93622L8.46992 3.93626L8.4706 3.93641L8.47323 3.93701L8.4834 3.93932L8.52212 3.94811L8.6628 3.97989C8.78075 4.00644 8.94206 4.04257 9.11532 4.08079C9.45612 4.15597 9.86071 4.24319 10.0634 4.27869L10.0634 4.2787L10.0667 4.27926L10.6698 4.38107C10.67 4.38109 10.6701 4.38112 10.6702 4.38114C11.203 4.47197 11.3857 4.68003 11.4341 4.8222C11.4768 4.96408 11.4481 5.2442 11.0662 5.62721L11.0654 5.62802L9.61934 7.08433C9.61926 7.08441 9.61918 7.08448 9.61911 7.08456C9.4305 7.27382 9.30757 7.52081 9.24088 7.75385C9.17472 7.98507 9.14749 8.26017 9.21034 8.522L9.62211 10.3236L9.62243 10.325C9.78121 11.0114 9.62281 11.268 9.53313 11.3368C9.47321 11.3774 9.40227 11.3981 9.33022 11.3962L9.32275 11.396H9.31527C9.14205 11.396 8.88106 11.3286 8.53775 11.1252C8.53764 11.1251 8.53753 11.1251 8.53742 11.125L6.78665 10.0823L6.78666 10.0823L6.78423 10.0808C6.5414 9.93788 6.25619 9.88338 6.00299 9.88338C5.74979 9.88338 5.46458 9.93788 5.22175 10.0808L5.22175 10.0808L5.21933 10.0823L3.47043 11.1239C3.46997 11.1242 3.46951 11.1245 3.46905 11.1247C3.09861 11.3423 2.96081 11.4206 2.84105 11.4445C2.78907 11.4549 2.69716 11.4675 2.43605 11.3127C2.43006 11.3068 2.40269 11.2749 2.37844 11.173C2.34677 11.0399 2.33915 10.8594 2.35307 10.6548C2.36663 10.4557 2.39843 10.2624 2.42781 10.1163C2.44234 10.0441 2.45588 9.98535 2.46555 9.94556C2.47037 9.92571 2.4742 9.9107 2.47667 9.90121L2.47929 9.89126L2.47957 9.89021L2.47963 9.89L2.47967 9.88983L2.47974 9.88961L2.47974 9.88959L2.48267 9.87896L2.48529 9.8676L2.79619 8.51841Z"
              stroke="currentColor"
              stroke-width="1.1"
            />
          </svg>
        );
      case "star2":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
          >
            <path
              d="M2.78366 10.3833C3.07532 10.675 3.24199 11.2583 3.15032 11.6667L2.71699 13.5417C2.71699 13.5417 2.08364 15.8333 3.00032 16.3767C3.91701 16.92 4.30032 16.66 5.22532 16.1183L7.66699 14.6683C8.05032 14.4433 8.68366 14.4433 9.06699 14.6683L11.5087 16.1183C12.0587 16.4433 12.5587 16.6017 12.9837 16.6017C13.2513 16.6089 13.5142 16.5301 13.7337 16.3767C14.2503 16.0017 14.4003 15.2183 14.1587 14.1767L13.5837 11.6683C13.4837 11.26 13.6503 10.685 13.9503 10.385L15.967 8.36C16.6003 7.72667 16.8503 7.05167 16.667 6.46833C16.4753 5.885 15.8837 5.485 15.0003 5.335L14.1587 5.19333C13.6337 5.10167 11.9753 4.725 11.9753 4.725C11.7337 4.58333 11.5087 4.375 11.4003 4.15833L9.96699 1.28333C9.55032 0.458333 8.98366 0 8.36699 0C7.75032 0 7.18366 0.458333 6.76699 1.28333L5.33366 4.15833C5.15866 4.5 4.70032 4.83333 4.32532 4.9L1.72532 5.33333C0.841989 5.48333 0.250322 5.88333 0.0586553 6.46667C-0.124678 7.05 0.125322 7.725 0.758655 8.35833L2.78366 10.3833Z"
              fill="#3F3F3F"
            />
          </svg>
        );
      case "bookmark":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M16.82 2H7.18001C5.05001 2 3.32001 3.74 3.32001 5.86V19.95C3.32001 21.75 4.61001 22.51 6.19001 21.64L11.07 18.93C11.59 18.64 12.43 18.64 12.94 18.93L17.82 21.64C19.4 22.52 20.69 21.76 20.69 19.95V5.86C20.68 3.74 18.95 2 16.82 2Z"
              stroke="#E1E1E1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.82 2H7.18001C5.05001 2 3.32001 3.74 3.32001 5.86V19.95C3.32001 21.75 4.61001 22.51 6.19001 21.64L11.07 18.93C11.59 18.64 12.43 18.64 12.94 18.93L17.82 21.64C19.4 22.52 20.69 21.76 20.69 19.95V5.86C20.68 3.74 18.95 2 16.82 2Z"
              stroke="#E1E1E1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.25 8.05005C11.0257 8.70006 12.9743 8.70006 14.75 8.05005"
              stroke="#E1E1E1"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        );
      case "arrowLeft":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="14"
            viewBox="0 0 8 14"
            fill="none"
          >
            <path
              d="M6.37686 13L1.4375 8.06061C0.854167 7.47728 0.854167 6.52274 1.4375 5.9394L6.37686 1"
              stroke="#E1E1E1"
              stroke-width="2"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        );
      case "clock":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M8 0C3.592 0 0 3.592 0 8C0 12.408 3.592 16 8 16C12.408 16 16 12.408 16 8C16 3.592 12.408 0 8 0ZM11.48 10.856C11.368 11.048 11.168 11.152 10.96 11.152C10.856 11.152 10.752 11.128 10.656 11.064L8.176 9.584C7.56 9.216 7.104 8.408 7.104 7.696V4.416C7.104 4.088 7.376 3.816 7.704 3.816C8.032 3.816 8.304 4.088 8.304 4.416V7.696C8.304 7.984 8.544 8.408 8.792 8.552L11.272 10.032C11.56 10.2 11.656 10.568 11.48 10.856Z"
              fill="#3F3F3F"
            />
          </svg>
        );
      case "cloud":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="15"
            viewBox="0 0 18 15"
            fill="none"
          >
            <path
              d="M17.7628 8.21342C17.5289 7.43956 17.1419 6.76468 16.629 6.21578C15.9721 5.46889 15.0993 4.95599 14.1185 4.73103C13.6236 2.48143 12.2378 0.861716 10.2672 0.258824C8.12555 -0.407057 5.64199 0.240827 4.08527 1.86954C2.71751 3.30028 2.2676 5.27093 2.7985 7.36757C0.998822 7.80849 0.107981 9.31122 0.00899838 10.742C-8.38041e-09 10.841 0 10.9309 0 11.0209C0 12.7126 1.1068 14.6113 3.57236 14.7912H12.9127C14.1905 14.7912 15.4142 14.3143 16.3501 13.4595C17.8168 12.1727 18.3567 10.1661 17.7628 8.21342Z"
              fill="#3F3F3F"
            />
          </svg>
        );

      default:
        //msg
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="24"
            viewBox="0 0 23 24"
            fill="none"
          >
            <path
              d="M14.1368 23.0126C12.7279 23.0126 10.7339 22.0216 9.15787 17.2815L8.29815 14.7025L5.71916 13.8429C0.991003 12.2668 0 10.2729 0 8.86395C0 7.46699 0.991003 5.46111 5.71916 3.87311L15.8561 0.494152C18.3873 -0.353573 20.5007 -0.102838 21.8021 1.18666C23.1035 2.47616 23.3543 4.60144 22.5066 7.13268L19.1276 17.2696C17.5396 22.0216 15.5457 23.0126 14.1368 23.0126ZM6.28033 5.5805C2.96107 6.6909 1.77903 8.00428 1.77903 8.86395C1.77903 9.72365 2.96107 11.037 6.28033 12.1355L9.2892 13.1384C9.55188 13.222 9.7668 13.4369 9.85038 13.6996L10.8533 16.7084C11.9518 20.0277 13.2771 21.2097 14.1368 21.2097C14.9964 21.2097 16.3098 20.0277 17.4202 16.7084L20.7992 6.57151C21.4081 4.73278 21.3006 3.22836 20.5245 2.45228C19.7485 1.67619 18.244 1.58067 16.4173 2.1896L6.28033 5.5805Z"
              fill="white"
            />
            <path
              d="M9.22925 14.38C9.00237 14.38 8.77552 14.2964 8.59642 14.1173C8.25017 13.7711 8.25017 13.198 8.59642 12.8517L12.8709 8.56532C13.2171 8.21907 13.7903 8.21907 14.1365 8.56532C14.4828 8.91158 14.4828 9.48469 14.1365 9.83094L9.86206 14.1173C9.69491 14.2964 9.45611 14.38 9.22925 14.38Z"
              fill="white"
            />
          </svg>
        );
    }
  };
  return renderContent();
};
