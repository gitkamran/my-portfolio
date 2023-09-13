import PortfolioBox from "@/components/portfolio-box/PortfolioBox"

const Portfolio = () => {

  return (
    <div id='portfolio' className='snap-start w-full min-h-screen flex flex-col gap-4 items-center justify-center bg-indigo-100 pt-12'>
      <div className='flex flex-col gap-4 w-[95%] lg:w-[80%] bg-indigo-200/30 shadow-md rounded-md px-2 py-4 md:p-4'>
        <h1 className='border-r-4 md:border-r-8 pr-2 border-r-gray-400 text-lg md:text-2xl font-extrabold text-gray-600'>چنتا از نمونه کار هام</h1>
        <div className="flex flex-col gap-4 w-full">

          <PortfolioBox
            // newupdate.ir
            src="/assets/images/portfolio/logo-portfolio.svg"
            alt='وب اپلیکیشن خرید فایل'
            title="وب اپلیکیشن خرید فایل - نمونه کار"
            desc="وب اپلیکیشن خرید و دانلود فایل، امکان ثبت نام با ایمیل، بازیابی کلمه عبور، حساب کاربران با امکان ارسال دیدگاه برای محصولات و بخش وبلاگ و تایید توسط مدیر سایت، اضافه کردن چند محصول به سبد خرید و پرداخت از طریق درگاه پرداخت، اضافه کردن محصول به قسمت علاقه مندی ها، مشاهده فایل های خریداری شده، سفاراشات انجام شده، محصولات مورد علاقه و دیدگاه ها در قسمت حساب کاربری.
              داشبورد مدیر سایت با امکان ایجاد اسلایدر، بنر، دسته بندی محصول، ساخت محصول و ایجاد مقاله، آپلود عکس، ویرایش و حذف موارد یاد شده، همچنین مشاهده کاربران ثبت نام شده، ویرایش و حذف کاربران، مشاهده فایل های خریداری شده و همچنین سفارشات پرداخت شده یا پرداخت نشده و ...
              وب اپلیکیشن داری سئو، سرچ محصول و مقاله ها، فیلتر محصولات و همچنین کاملا ریسپانسیو می باشد."
            tools="next js, node js, express, mongo db, tailwind css"
            link="https://newupdate.ir"
          />
          <PortfolioBox
            // music100.ir
            src="/assets/images/portfolio/logo-music100.svg"
            alt='موزیکصد | وبسایت دانلود آهنگ های ایرانی'
            title="موزیکصد | وبسایت دانلود آهنگ های ایرانی"
            desc="وبسایت موزیکصد | دانلود جدیدترین آهنگ های ایرانی با لینک مستقیم دانلود و همچنین پخش آنلاین آهنگ. طراحی شده با cms وردپرس دارای پوسته اختصاصی شده music100، بخش های دسته بندی آهنگ ها، لیست هنرمندان، جستجو خواننده یا آهنگ مورد نظر، دارای سئو و همچنین ریسپانسیو شده جهت نمایش در تمامی پلتفرم ها."
            tools="php, wordpress, yoast seo, wp rocket"
            link="https://music100.ir"
          />
          <PortfolioBox
            // hilite.ir
            src="/assets/images/portfolio/logo-hilite.svg"
            alt='هایلایت | پلتفرم تبلیغات آنلاین صنعت و ساختمان'
            title="هایلایت | پلتفرم تبلیغات آنلاین صنعت و ساختمان"
            desc="وبسایت موزیکصد | دانلود جدیدترین آهنگ های ایرانی با لینک مستقیم دانلود و همچنین پخش آنلاین آهنگ. طراحی شده با cms وردپرس دارای پوسته اختصاصی شده music100، بخش های دسته بندی آهنگ ها، لیست هنرمندان، جستجو خواننده یا آهنگ مورد نظر، دارای سئو و همچنین ریسپانسیو شده جهت نمایش در تمامی پلتفرم ها."
            tools="php, wordpress, yoast seo, elementor, slider revolution"
            link="https://hilite.ir"
          />
          <PortfolioBox
            // efbi.ir
            src="/assets/images/portfolio/logo-efbi.png"
            alt='رولپلاک اف بی | تولید کننده نسل جدید رولپلاک'
            title="رولپلاک اف بی | تولید کننده نسل جدید رولپلاک"
            desc="وبسایت موزیکصد | دانلود جدیدترین آهنگ های ایرانی با لینک مستقیم دانلود و همچنین پخش آنلاین آهنگ. طراحی شده با cms وردپرس دارای پوسته اختصاصی شده music100، بخش های دسته بندی آهنگ ها، لیست هنرمندان، جستجو خواننده یا آهنگ مورد نظر، دارای سئو و همچنین ریسپانسیو شده جهت نمایش در تمامی پلتفرم ها."
            tools="php, wordpress, yoast seo, wp bakery, slider revolution"
            link="https://efbi.ir"
          />
        </div>
      </div>
    </div>
  )
}

export default Portfolio