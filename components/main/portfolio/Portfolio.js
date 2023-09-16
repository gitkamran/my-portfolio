import PortfolioBox from "@/components/main/portfolio/portfolio-box/PortfolioBox"
import Image from "next/image"
import UiComponent from "./ui-component/UiComponent"

const Portfolio = () => {

  return (
    <div id='portfolio' className='snap-start w-full min-h-screen flex flex-col gap-4 items-center justify-center bg-indigo-100 py-12 overscroll-none'>
      <div className='flex flex-col gap-4 w-[95%] lg:w-[80%] bg-indigo-200/30 shadow-md rounded-md px-2 py-4 md:p-4'>
        <h1 className='border-r-4 md:border-r-8 pr-2 border-r-gray-400 text-lg md:text-2xl font-extrabold text-gray-600'>چنتا از نمونه کار هام</h1>
        <div className="flex flex-col gap-4 w-full">
          <div className="flex flex-col gap-4 w-full">
            <h2 className="text-lg text-gray-500 font-bold border-t border-t-indigo-400 pt-2">وب اپلیکیشن</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PortfolioBox
                // newupdate.ir
                bgImage="bg-white"
                src="/assets/images/portfolio/logo-portfolio.svg"
                alt='وب اپلیکیشن خرید فایل'
                title="وب اپلیکیشن خرید فایل - نمونه کار"
                desc="وب اپلیکیشن خرید و دانلود فایل، امکان ثبت نام با ایمیل، بازیابی کلمه عبور، حساب کاربران با امکان ارسال دیدگاه برای محصولات و بخش وبلاگ و تایید توسط مدیر سایت، اضافه کردن چند محصول به سبد خرید و پرداخت از طریق درگاه پرداخت، اضافه کردن محصول به قسمت علاقه مندی ها، مشاهده فایل های خریداری شده، سفاراشات انجام شده، محصولات مورد علاقه و دیدگاه ها در قسمت حساب کاربری.
              داشبورد مدیر سایت با امکان ایجاد اسلایدر، بنر، دسته بندی محصول، ساخت محصول و ایجاد مقاله، آپلود عکس، ویرایش و حذف موارد یاد شده، همچنین مشاهده کاربران ثبت نام شده، ویرایش و حذف کاربران، مشاهده فایل های خریداری شده و همچنین سفارشات پرداخت شده یا پرداخت نشده و ...
              وب اپلیکیشن داری سئو، سرچ محصول و مقاله ها، فیلتر محصولات و همچنین کاملا ریسپانسیو می باشد."
                tools="next js, node js, express, mongo db, tailwind css"
                link="https://newupdate.ir"
              />
            </div>
            <h2 className="text-lg text-gray-500 font-bold border-t border-t-indigo-400 pt-2">وب سایت</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PortfolioBox
                // music100.ir
                bgImage="bg-white"
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
                bgImage="bg-white"
                alt='هایلایت | پلتفرم تبلیغات آنلاین صنعت و ساختمان'
                title="هایلایت | پلتفرم تبلیغات آنلاین صنعت و ساختمان"
                desc="هایلایت پلتفرم تبلیغات آنلاین صنعت و ساختمان ایران در بخش وبلاگ و معرفی سایت از CMS وردپرس استفاده شده است، همچنین دارای ریسپانسیو کامل جهت نمایش در تمامی پلتفرم ها می باشد. سئو شده توسط افزونه یواست سئو می باشد."
                tools="php, wordpress, yoast seo, elementor, slider revolution"
                link="https://hilite.ir"
              />
              <PortfolioBox
                // efbi.ir
                bgImage="bg-rose-700"
                src="/assets/images/portfolio/logo-efbi.png"
                alt='رولپلاک اف بی | تولید کننده نسل جدید رولپلاک'
                title="رولپلاک اف بی | تولید کننده نسل جدید رولپلاک"
                tools="php, wordpress, yoast seo, wp bakery, slider revolution"
                link="https://efbi.ir"
              />
            </div>
          </div>
          <h2 className="text-lg text-gray-500 font-bold border-t border-t-indigo-400 pt-2">طراحی لوگو</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
            <div className="flex flex-col gap-2 bg-indigo-300 rounded-md p-4">
              <div className="overflow-hidden bg-white rounded-md p-1">
                <Image
                  src="/assets/images/portfolio/logo-hilite.svg"
                  alt='هایلایت | پلتفرم تبلیغات آنلاین صنعت و ساختمان'
                  width={400}
                  height={400}
                  priority
                  className="w-auto h-auto rounded-md shadow-transparent"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <h2 className="text-gray-600">طراحی لوگو هایلایت</h2>
                <p className="text-xs text-gray-500">هایلایت پلتفرم تبلیغات آنلاین صنعت و ساختمان ایران می باشد.</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 bg-indigo-300 rounded-md p-4">
              <div className="overflow-hidden bg-neutral-600 rounded-md p-1">
                <Image
                  src="/assets/images/portfolio/logo-hamideyvazi.svg"
                  alt='حمید عیوضی | مدرس ارز های دیجیتال'
                  width={400}
                  height={400}
                  priority
                  className="w-auto h-auto rounded-md shadow-transparent"
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <h2 className="text-gray-600">طراحی لوگو حمید عیوضی</h2>
                <p className="text-xs text-gray-500">حمید عیوضی مدرس دوره های ارز دیجیتال</p>
              </div>
            </div>
            <div className="flex flex-col gap-2 bg-indigo-300 rounded-md p-4">
              <div className="overflow-hidden bg-white rounded-md p-1">
                <Image
                  src="/assets/images/portfolio/logo-cafeparrot.png"
                  alt='کافه پاروت | خرید آنلاین لوازم نگهداری حیوانات خانگی'
                  width={400}
                  height={400}
                  priority
                  className='w-auto h-auto rounded-md'
                />
              </div>
              <div className="w-full flex flex-col gap-2">
                <h2 className="text-gray-600">طراحی لوگو کافه پاروت</h2>
                <p className="text-xs text-gray-500">کافه پاروت خرید آنلاین لوازم نگهداری حیوانات خانگی</p>
              </div>
            </div>
          </div>
          <h2 className="text-lg text-gray-500 font-bold border-t border-t-indigo-400 pt-2">طراحی UI</h2>
          <div className="flex flex-col md:flex-row md:items-center gap-2">
            <h2 className="text-gray-600">طراحی UI پلتفرم تبلیغات آنلاین صنعت و ساختمان <a href="https://panel.hilite.ir/register" target="_blank" className="text-blue-500 underline underline-offset-4">هایلات</a></h2>
            <p className="bg-indigo-300/50 p-2 rounded-md text-sm text-gray-600 w-fit">برای مشاهده روی عکس کلیک کنید</p>
          </div>
          <div>
            <UiComponent />
          </div>
        </div>
      </div>
    </div >
  )
}

export default Portfolio