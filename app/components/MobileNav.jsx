import Link from "next/link";
import { usePathname } from "next/navigation";

function MobileNav() {
  const pathname = usePathname();
  return (
    <div className="flex rounded-l-md fixed bottom-0 right-0 bg-[#33333377] shadow shadow-[#00000033] md:hidden ">
      <div className="flex flex-col gap-8 justify-evenly mx-4 my-4 ">
        <Link href="/">
          <div
            dangerouslySetInnerHTML={{
              __html: `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.25 12.0001L11.204 3.04507C11.644 2.60607 12.356 2.60607 12.795 3.04507L21.75 12.0001M4.5 9.75007V19.8751C4.5 20.4961 5.004 21.0001 5.625 21.0001H9.75V16.1251C9.75 15.5041 10.254 15.0001 10.875 15.0001H13.125C13.746 15.0001 14.25 15.5041 14.25 16.1251V21.0001H18.375C18.996 21.0001 19.5 20.4961 19.5 19.8751V9.75007M8.25 21.0001H16.5" stroke=${
        pathname === "/" ? "#0892FF" : "white"
      } stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      
    `,
            }}
          />
        </Link>

        <Link href="/pages/Service">
          <div
            dangerouslySetInnerHTML={{
              __html: `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.419 15.17L17.249 21C17.749 21.484 18.4192 21.7521 19.1151 21.7465C19.811 21.7408 20.4767 21.4619 20.9688 20.9698C21.4609 20.4777 21.7398 19.812 21.7455 19.1161C21.7511 18.4202 21.483 17.75 20.999 17.25L15.122 11.373M11.419 15.17L13.915 12.14C14.232 11.756 14.655 11.514 15.123 11.374C15.673 11.21 16.286 11.186 16.866 11.234C17.6478 11.3011 18.4336 11.1627 19.1454 10.8323C19.8572 10.502 20.4702 9.99124 20.9237 9.35081C21.3771 8.71037 21.6552 7.9625 21.7303 7.1814C21.8055 6.4003 21.6751 5.61313 21.352 4.898L18.076 8.175C17.5279 8.04826 17.0264 7.77016 16.6286 7.37238C16.2309 6.97459 15.9528 6.4731 15.826 5.925L19.102 2.649C18.3869 2.32596 17.5997 2.19554 16.8186 2.27068C16.0375 2.34582 15.2896 2.62391 14.6492 3.07735C14.0088 3.53079 13.4981 4.14381 13.1677 4.8556C12.8374 5.56738 12.6989 6.35317 12.766 7.135C12.857 8.211 12.695 9.399 11.862 10.085L11.76 10.17M11.419 15.17L6.76402 20.823C6.53841 21.098 6.25772 21.3227 5.94002 21.4827C5.62231 21.6427 5.27463 21.7344 4.91935 21.7518C4.56407 21.7693 4.20907 21.7122 3.87719 21.5842C3.54531 21.4562 3.24391 21.2602 2.99239 21.0086C2.74086 20.7571 2.54479 20.4557 2.41679 20.1238C2.28878 19.792 2.23169 19.4369 2.24917 19.0817C2.26666 18.7264 2.35834 18.3787 2.51832 18.061C2.67829 17.7433 2.90301 17.4626 3.17802 17.237L10.015 11.607L5.90802 7.5H4.49902L2.24902 3.75L3.74902 2.25L7.49902 4.5V5.909L11.759 10.169L10.014 11.606M18.374 18.375L15.749 15.75M4.86602 19.125H4.87402V19.133H4.86602V19.125Z" stroke=${
        pathname === "/pages/Service" ? "#0892FF" : "white"
      }  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      
    `,
            }}
          />
        </Link>

        <Link href="/pages/Product">
          <div
            dangerouslySetInnerHTML={{
              __html: `
     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M13.5016 21V13.5C13.5016 13.3011 13.5806 13.1103 13.7212 12.9697C13.8619 12.829 14.0527 12.75 14.2516 12.75H17.2516C17.4505 12.75 17.6413 12.829 17.7819 12.9697C17.9226 13.1103 18.0016 13.3011 18.0016 13.5V21M13.5016 21H2.36158M13.5016 21H18.0016M18.0016 21H21.6416M20.2516 21V9.349M20.2516 9.349C19.6517 9.6951 18.9505 9.82304 18.267 9.71113C17.5835 9.59922 16.9598 9.25435 16.5016 8.735C15.9516 9.357 15.1476 9.75 14.2516 9.75C13.8259 9.75041 13.4049 9.66 13.0169 9.48479C12.6289 9.30959 12.2828 9.05363 12.0016 8.734C11.4516 9.357 10.6476 9.75 9.75158 9.75C9.32585 9.75041 8.90494 9.66 8.51694 9.48479C8.12894 9.30959 7.78278 9.05363 7.50158 8.734C7.0435 9.25351 6.41982 9.59858 5.73632 9.71067C5.05283 9.82276 4.3516 9.69498 3.75158 9.349M20.2516 9.349C20.6502 9.11891 20.9905 8.80019 21.2462 8.41751C21.5019 8.03484 21.6661 7.59846 21.7261 7.14215C21.7862 6.68584 21.7404 6.22184 21.5924 5.78605C21.4444 5.35026 21.1981 4.95436 20.8726 4.629L19.6826 3.44C19.4015 3.15862 19.0203 3.00035 18.6226 3H5.37958C4.98203 3.00008 4.60078 3.15798 4.31958 3.439L3.13058 4.629C2.80581 4.95474 2.56019 5.3507 2.41265 5.78637C2.2651 6.22204 2.21957 6.68577 2.27957 7.14182C2.33957 7.59786 2.5035 8.03403 2.75871 8.41671C3.01393 8.79939 3.35361 9.11835 3.75158 9.349M3.75158 21V9.349M6.75158 18H10.5016C10.7005 18 10.8913 17.921 11.0319 17.7803C11.1726 17.6397 11.2516 17.4489 11.2516 17.25V13.5C11.2516 13.3011 11.1726 13.1103 11.0319 12.9697C10.8913 12.829 10.7005 12.75 10.5016 12.75H6.75158C6.55267 12.75 6.3619 12.829 6.22125 12.9697C6.0806 13.1103 6.00158 13.3011 6.00158 13.5V17.25C6.00158 17.664 6.33758 18 6.75158 18Z" stroke=${
       pathname === "/pages/Product" ? "#0892FF" : "white"
     }  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
     </svg>
     
    `,
            }}
          />
        </Link>

        <Link href="/pages/News">
          <div
            dangerouslySetInnerHTML={{
              __html: `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 7.5H13.5M12 10.5H13.5M6 13.5H13.5M6 16.5H13.5M16.5 7.5H19.875C20.496 7.5 21 8.004 21 8.625V18C21 18.5967 20.7629 19.169 20.341 19.591C19.919 20.0129 19.3467 20.25 18.75 20.25M16.5 7.5V18C16.5 18.5967 16.7371 19.169 17.159 19.591C17.581 20.0129 18.1533 20.25 18.75 20.25M16.5 7.5V4.875C16.5 4.254 15.996 3.75 15.375 3.75H4.125C3.504 3.75 3 4.254 3 4.875V18C3 18.5967 3.23705 19.169 3.65901 19.591C4.08097 20.0129 4.65326 20.25 5.25 20.25H18.75M6 7.5H9V10.5H6V7.5Z" stroke=${
        pathname === "/pages/News" ? "#0892FF" : "white"
      }  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      
    `,
            }}
          />
        </Link>

        <Link href="/pages/Career">
          <div
            dangerouslySetInnerHTML={{
              __html: `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.2501 14.15V18.4C20.2501 19.494 19.4631 20.436 18.3781 20.58C16.2911 20.857 14.1621 21 12.0001 21C9.83806 21 7.70906 20.857 5.62206 20.58C4.53706 20.436 3.75006 19.494 3.75006 18.4V14.15M20.2501 14.15C20.4875 13.9436 20.6775 13.6883 20.807 13.4016C20.9364 13.1149 21.0023 12.8036 21.0001 12.489V8.706C21.0001 7.625 20.2321 6.691 19.1631 6.531C18.0304 6.36142 16.892 6.23234 15.7501 6.144M20.2501 14.15C20.0561 14.315 19.8301 14.445 19.5771 14.53C17.1333 15.3408 14.5748 15.7528 12.0001 15.75C9.35206 15.75 6.80506 15.321 4.42306 14.53C4.17631 14.4479 3.94778 14.3189 3.75006 14.15M3.75006 14.15C3.5126 13.9436 3.32262 13.6883 3.19315 13.4016C3.06369 13.1149 2.99782 12.8036 3.00006 12.489V8.706C3.00006 7.625 3.76806 6.691 4.83706 6.531C5.96975 6.36142 7.10814 6.23233 8.25006 6.144M15.7501 6.144V5.25C15.7501 4.65326 15.513 4.08097 15.091 3.65901C14.6691 3.23705 14.0968 3 13.5001 3H10.5001C9.90332 3 9.33102 3.23705 8.90907 3.65901C8.48711 4.08097 8.25006 4.65326 8.25006 5.25V6.144M15.7501 6.144C13.2538 5.95108 10.7463 5.95108 8.25006 6.144M12.0001 12.75H12.0081V12.758H12.0001V12.75Z" stroke=${
        pathname === "/pages/Career" ? "#0892FF" : "white"
      }  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      
    `,
            }}
          />
        </Link>

        <Link href="/pages/About">
          {" "}
          <div
            dangerouslySetInnerHTML={{
              __html: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.25 11.25L11.291 11.23C11.4192 11.1659 11.5631 11.14 11.7057 11.1552C11.8482 11.1703 11.9834 11.2261 12.0952 11.3157C12.2071 11.4054 12.2909 11.5252 12.3368 11.661C12.3826 11.7968 12.3886 11.9429 12.354 12.082L11.646 14.918C11.6111 15.0572 11.6169 15.2034 11.6627 15.3394C11.7084 15.4754 11.7922 15.5954 11.9041 15.6852C12.016 15.775 12.1513 15.8308 12.294 15.846C12.4367 15.8612 12.5807 15.8352 12.709 15.771L12.75 15.75M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12ZM12 8.25H12.008V8.258H12V8.25Z" stroke=${
      pathname === "/pages/About" ? "#0892FF" : "white"
    }  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    
      
    `,
            }}
          />
        </Link>
      </div>
    </div>
  );
}

export default MobileNav;
