<script setup>
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import siteApi from "../../interceptors/SiteInterceptor";

const { t, locale } = useI18n();

const direction = computed(() => (locale.value === "ar" ? "rtl" : "ltr"));

const name = ref("");
const email = ref("");
const phone = ref("");
const content = ref("");

const subscribe = () => {
    if (email.value) {
        alert(`تم الاشتراك بنجاح باستخدام: ${email.value}`);
        email.value = ""; 
    } else {
        alert("يرجى إدخال بريد إلكتروني صحيح");
    }
};

// submit contact form 
const submitContactForm = async () => {
    if (!name.value || !email.value || !phone.value || !content.value) {
        alert("يرجى تعبئة جميع الحقول المطلوبة");
        return;
    }
    try {
        const payload = {
            name: name.value,
            email: email.value,
            phone: phone.value,
            content: content.value,
            type: "inquiry"
        };
        console.log("Payload:", payload);

        await siteApi.post("/api/contact", payload);
        alert("تم إرسال البيانات بنجاح!");

        // Clear form
        name.value = "";
        email.value = "";
        phone.value = "";
        content.value = "";

    } catch (error) {
        console.error("خطأ أثناء إرسال النموذج:", error);
        alert("حدث خطأ أثناء الإرسال، حاول مرة أخرى لاحقًا.");
    }
}
</script>

<template>
    <section class="bg-white dark:bg-gray-800 font-shamel overflow-hidden" :dir="direction">
        <div class="pt-8 px-4 mx-auto max-w-screen-xl sm:pt-20 lg:px-6">
            <div class="max-w-screen-md mx-auto">
                <h6 class="text-center font-shamel mb-5 text-sm font-bold text-[#38a6de] dark:text-white">
                     {{ t('contact.contactUs') }}
                </h6>

                <h2
                    class="font-shamel text-center mb-6 text-2xl md:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                     {{ t('contact.contactForm') }}
                </h2>
                <p
                    class="font-shamel text-center mb-7 text-lg tracking-tight font-medium text-gray-600 dark:text-white">
                {{ t('contact.weWantToHearFromYou') }}
                </p>
            </div>

            <div class="py-8 px-4 mx-auto max-w-screen-md">
                <form @submit.prevent="submitContactForm" class="space-y-8">
                    <!-- <div class="grid grid-cols-2 gap-4"> -->
                        <div>
                            <label for="name" class="block mb-2 text-sm font-medium text-[#44465f] dark:text-gray-300">
                                 {{ t('contact.fullName') }}
                                <span class="text-[#38a6de] text-[18px]">*</span></label>
                            <input type="name" id="name"
                                v-model="name"
                                class="shadow-sm bg-white border border-gray-300 text-[#44465f] text-sm rounded-lg focus:ring-ornage-500 focus:border-ornage-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-ornage-500 dark:focus:border-ornage-500 dark:shadow-sm-light"
                                :placeholder="t('contact.enterName')" required />
                        </div>
                        <!-- <div>
                            <label for="lastname"
                                class="flex mb-2 text-sm font-medium text-[#44465f] dark:text-gray-300">
                                الاسم الأخير
                                <span class="text-[#38a6de] text-[18px]">*</span></label>
                            <input type="name" id="name"
                                class="shadow-sm bg-white border border-gray-300 text-[#44465f] text-sm rounded-lg focus:ring-ornage-500 focus:border-ornage-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-ornage-500 dark:focus:border-ornage-500 dark:shadow-sm-light"
                                placeholder="أدخل اسمك هنا" required />
                        </div> -->
                    <!-- </div> -->
                    <div>
                        <label for="name" class="block mb-2 text-sm font-medium text-[#44465f] dark:text-gray-300">
                             {{ t('partnersSection.emailText') }}
                            <span class="text-[#38a6de] text-[18px]">*</span></label>
                        <input type="email" id="email"
                            v-model="email"
                            class="shadow-sm mt-0 bg-white border border-gray-300 text-[#44465f] text-sm rounded-lg focus:ring-ornage-500 focus:border-ornage-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-ornage-500 dark:focus:border-ornage-500 dark:shadow-sm-light"
                            placeholder="example@email.com" required />
                    </div>
                    <div>
                        <label for="phone" class="block mb-2 text-sm font-medium text-[#44465f] dark:text-gray-300">
                             {{ t('partnersSection.phoneText') }} <span class="text-[#38a6de] text-[18px]">*</span>
                        </label>
                        <div class="flex items-center gap-2">
                            <input type="tel" id="phone"
                                v-model="phone"
                                class="ltr:text-left rtl:text-right shadow-sm mt-0 bg-white border border-gray-300 text-[#44465f] text-sm rounded-lg focus:ring-ornage-500 focus:border-ornage-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-ornage-500 dark:focus:border-ornage-500 dark:shadow-sm-light"
                                placeholder="000-000-555" required />
                            <select id="country-code"
                                class="shadow-sm bg-white border border-gray-300 text-[#44465f] text-sm rounded-lg focus:ring-ornage-500 focus:border-ornage-500 w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-ornage-500 dark:focus:border-ornage-500 dark:shadow-sm-light">
                                <option value="+93">+93 (أفغانستان)</option>
                                <option value="+355">+355 (ألبانيا)</option>
                                <option value="+213">+213 (الجزائر)</option>
                                <option value="+376">+376 (أندورا)</option>
                                <option value="+244">+244 (أنغولا)</option>
                                <option value="+1">+1 (أنتيغوا وباربودا)</option>
                                <option value="+54">+54 (الأرجنتين)</option>
                                <option value="+374">+374 (أرمينيا)</option>
                                <option value="+61">+61 (أستراليا)</option>
                                <option value="+43">+43 (النمسا)</option>
                                <option value="+994">+994 (أذربيجان)</option>
                                <option value="+1">+1 (باهاماس)</option>
                                <option value="+973">+973 (البحرين)</option>
                                <option value="+880">+880 (بنغلاديش)</option>
                                <option value="+1">+1 (باربادوس)</option>
                                <option value="+375">+375 (بيلاروس)</option>
                                <option value="+32">+32 (بلجيكا)</option>
                                <option value="+501">+501 (بليز)</option>
                                <option value="+229">+229 (بنين)</option>
                                <option value="+975">+975 (بوتان)</option>
                                <option value="+591">+591 (بوليفيا)</option>
                                <option value="+387">+387 (البوسنة والهرسك)</option>
                                <option value="+267">+267 (بوتسوانا)</option>
                                <option value="+55">+55 (البرازيل)</option>
                                <option value="+673">+673 (بروناي)</option>
                                <option value="+359">+359 (بلغاريا)</option>
                                <option value="+226">+226 (بوركينا فاسو)</option>
                                <option value="+257">+257 (بوروندي)</option>
                                <option value="+855">+855 (كمبوديا)</option>
                                <option value="+237">+237 (الكاميرون)</option>
                                <option value="+1">+1 (كندا)</option>
                                <option value="+238">+238 (الرأس الأخضر)</option>
                                <option value="+236">+236 (جمهورية أفريقيا الوسطى)</option>
                                <option value="+235">+235 (تشاد)</option>
                                <option value="+56">+56 (تشيلي)</option>
                                <option value="+86">+86 (الصين)</option>
                                <option value="+57">+57 (كولومبيا)</option>
                                <option value="+269">+269 (جزر القمر)</option>
                                <option value="+242">+242 (الكونغو برازافيل)</option>
                                <option value="+243">+243 (الكونغو كينشاسا)</option>
                                <option value="+506">+506 (كوستاريكا)</option>
                                <option value="+385">+385 (كرواتيا)</option>
                                <option value="+53">+53 (كوبا)</option>
                                <option value="+357">+357 (قبرص)</option>
                                <option value="+420">+420 (جمهورية التشيك)</option>
                                <option value="+45">+45 (الدنمارك)</option>
                                <option value="+253">+253 (جيبوتي)</option>
                                <option value="+1">+1 (دومينيكا)</option>
                                <option value="+1">+1 (جمهورية الدومينيكان)</option>
                                <option value="+593">+593 (الإكوادور)</option>
                                <option value="+20" selected>+20 (مصر)</option>
                                <option value="+503">+503 (السلفادور)</option>
                                <option value="+240">+240 (غينيا الاستوائية)</option>
                                <option value="+291">+291 (إريتريا)</option>
                                <option value="+372">+372 (إستونيا)</option>
                                <option value="+251">+251 (إثيوبيا)</option>
                                <option value="+679">+679 (فيجي)</option>
                                <option value="+358">+358 (فنلندا)</option>
                                <option value="+33">+33 (فرنسا)</option>
                                <option value="+241">+241 (الغابون)</option>
                                <option value="+220">+220 (غامبيا)</option>
                                <option value="+995">+995 (جورجيا)</option>
                                <option value="+49">+49 (ألمانيا)</option>
                                <option value="+233">+233 (غانا)</option>
                                <option value="+30">+30 (اليونان)</option>
                                <option value="+1">+1 (غرينادا)</option>
                                <option value="+502">+502 (غواتيمالا)</option>
                                <option value="+224">+224 (غينيا)</option>
                                <option value="+245">+245 (غينيا بيساو)</option>
                                <option value="+592">+592 (غيانا)</option>
                                <option value="+509">+509 (هايتي)</option>
                                <option value="+504">+504 (هندوراس)</option>
                                <option value="+852">+852 (هونغ كونغ)</option>
                                <option value="+36">+36 (هنغاريا)</option>
                                <option value="+354">+354 (آيسلندا)</option>
                                <option value="+91">+91 (الهند)</option>
                                <option value="+62">+62 (إندونيسيا)</option>
                                <option value="+98">+98 (إيران)</option>
                                <option value="+964">+964 (العراق)</option>
                                <option value="+353">+353 (أيرلندا)</option>
                                <option value="+972">+972 (إسرائيل)</option>
                                <option value="+39">+39 (إيطاليا)</option>
                                <option value="+1">+1 (جامايكا)</option>
                                <option value="+81">+81 (اليابان)</option>
                                <option value="+962">+962 (الأردن)</option>
                                <option value="+7">+7 (كازاخستان)</option>
                                <option value="+254">+254 (كينيا)</option>
                                <option value="+686">+686 (كيريباتي)</option>
                                <option value="+383">+383 (كوسوفو)</option>
                                <option value="+965">+965 (الكويت)</option>
                                <option value="+996">+996 (قيرغيزستان)</option>
                                <option value="+856">+856 (لاوس)</option>
                                <option value="+371">+371 (لاتفيا)</option>
                                <option value="+961">+961 (لبنان)</option>
                                <option value="+266">+266 (ليسوتو)</option>
                                <option value="+231">+231 (ليبيريا)</option>
                                <option value="+218">+218 (ليبيا)</option>
                                <option value="+423">+423 (ليختنشتاين)</option>
                                <option value="+370">+370 (ليتوانيا)</option>
                                <option value="+352">+352 (لوكسمبورغ)</option>
                                <option value="+853">+853 (ماكاو)</option>
                                <option value="+389">+389 (مقدونيا الشمالية)</option>
                                <option value="+261">+261 (مدغشقر)</option>
                                <option value="+265">+265 (مالاوي)</option>
                                <option value="+60">+60 (ماليزيا)</option>
                                <option value="+960">+960 (جزر المالديف)</option>
                                <option value="+223">+223 (مالي)</option>
                                <option value="+356">+356 (مالطا)</option>
                                <option value="+692">+692 (جزر مارشال)</option>
                                <option value="+222">+222 (موريتانيا)</option>
                                <option value="+230">+230 (موريشيوس)</option>
                                <option value="+52">+52 (المكسيك)</option>
                                <option value="+691">+691 (ميكرونيزيا)</option>
                                <option value="+373">+373 (مولدوفا)</option>
                                <option value="+377">+377 (موناكو)</option>
                                <option value="+976">+976 (منغوليا)</option>
                                <option value="+382">+382 (الجبل الأسود)</option>
                                <option value="+212">+212 (المغرب)</option>
                                <option value="+258">+258 (موزمبيق)</option>
                                <option value="+95">+95 (ميانمار)</option>
                                <option value="+264">+264 (ناميبيا)</option>
                                <option value="+674">+674 (ناورو)</option>
                                <option value="+977">+977 (نيبال)</option>
                                <option value="+31">+31 (هولندا)</option>
                                <option value="+64">+64 (نيوزيلندا)</option>
                                <option value="+505">+505 (نيكاراغوا)</option>
                                <option value="+227">+227 (النيجر)</option>
                                <option value="+234">+234 (نيجيريا)</option>
                                <option value="+850">+850 (كوريا الشمالية)</option>
                                <option value="+47">+47 (النرويج)</option>
                                <option value="+968">+968 (عمان)</option>
                                <option value="+92">+92 (باكستان)</option>
                                <option value="+680">+680 (بالاو)</option>
                                <option value="+970">+970 (فلسطين)</option>
                                <option value="+507">+507 (بنما)</option>
                                <option value="+675">+675 (بابوا غينيا الجديدة)</option>
                                <option value="+595">+595 (باراغواي)</option>
                                <option value="+51">+51 (بيرو)</option>
                                <option value="+63">+63 (الفلبين)</option>
                                <option value="+48">+48 (بولندا)</option>
                                <option value="+351">+351 (البرتغال)</option>
                                <option value="+974">+974 (قطر)</option>
                                <option value="+40">+40 (رومانيا)</option>
                                <option value="+7">+7 (روسيا)</option>
                                <option value="+250">+250 (رواندا)</option>
                                <option value="+1">+1 (سانت كيتس ونيفيس)</option>
                                <option value="+1">+1 (سانت لوسيا)</option>
                                <option value="+1">+1 (سانت فينسنت والغرينادين)</option>
                                <option value="+685">+685 (ساموا)</option>
                                <option value="+378">+378 (سان مارينو)</option>
                                <option value="+239">+239 (ساو تومي وبرينسيب)</option>
                                <option value="+966">+966 (السعودية)</option>
                                <option value="+221">+221 (السنغال)</option>
                                <option value="+381">+381 (صربيا)</option>
                                <option value="+248">+248 (سيشل)</option>
                                <option value="+232">+232 (سيراليون)</option>
                                <option value="+65">+65 (سنغافورة)</option>
                                <option value="+421">+421 (سلوفاكيا)</option>
                                <option value="+386">+386 (سلوفينيا)</option>
                                <option value="+677">+677 (جزر سليمان)</option>
                                <option value="+252">+252 (الصومال)</option>
                                <option value="+27">+27 (جنوب أفريقيا)</option>
                                <option value="+82">+82 (كوريا الجنوبية)</option>
                                <option value="+211">+211 (جنوب السودان)</option>
                                <option value="+34">+34 (إسبانيا)</option>
                                <option value="+94">+94 (سريلانكا)</option>
                                <option value="+249">+249 (السودان)</option>
                                <option value="+597">+597 (سورينام)</option>
                                <option value="+268">+268 (إسواتيني)</option>
                                <option value="+46">+46 (السويد)</option>
                                <option value="+41">+41 (سويسرا)</option>
                                <option value="+963">+963 (سوريا)</option>
                                <option value="+886">+886 (تايوان)</option>
                                <option value="+992">+992 (طاجيكستان)</option>
                                <option value="+255">+255 (تنزانيا)</option>
                                <option value="+66">+66 (تايلاند)</option>
                                <option value="+228">+228 (توغو)</option>
                                <option value="+676">+676 (تونغا)</option>
                                <option value="+1">+1 (ترينيداد وتوباغو)</option>
                                <option value="+216">+216 (تونس)</option>
                                <option value="+90">+90 (تركيا)</option>
                                <option value="+993">+993 (تركمانستان)</option>
                                <option value="+688">+688 (توفالو)</option>
                                <option value="+256">+256 (أوغندا)</option>
                                <option value="+380">+380 (أوكرانيا)</option>
                                <option value="+971">+971 (الإمارات)</option>
                                <option value="+44">+44 (المملكة المتحدة)</option>
                                <option value="+1">+1 (الولايات المتحدة)</option>
                                <option value="+598">+598 (أوروغواي)</option>
                                <option value="+998">+998 (أوزبكستان)</option>
                                <option value="+678">+678 (فانواتو)</option>
                                <option value="+39">+39 (الفاتيكان)</option>
                                <option value="+58">+58 (فنزويلا)</option>
                                <option value="+84">+84 (فيتنام)</option>
                                <option value="+967">+967 (اليمن)</option>
                                <option value="+260">+260 (زامبيا)</option>
                                <option value="+263">+263 (زيمبابوي)</option>
                            </select>
                        </div>
                    </div>

                    <div class="sm:col-span-2">
                        <label for="phone" class="block mb-2 text-sm font-medium text-[#44465f] dark:text-gray-300">
                             {{ t('contact.content') }} <span class="text-[#38a6de] text-[18px]">*</span>
                        </label>
                        <textarea id="message" rows="6"
                            v-model="content"
                            class="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-ornage-500 focus:border-ornage-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-ornage-500 dark:focus:border-ornage-500"
                            :placeholder="t('contact.writeMessage')"></textarea>
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="flex items-center h-5">
                            <input id="terms" aria-describedby="terms" type="checkbox"
                                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-ornage-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-ornage-600 dark:ring-offset-gray-800"
                                required="" />
                        </div>
                        <div class="ml-3 text-sm">
                            <label for="terms" class="font-light text-gray-500 dark:text-gray-300">{{ t('contact.agree') }}<a
                                    class="font-medium text-ornage-600 hover:underline dark:text-ornage-500" href="#">
                                     {{ t('contact.privacyPolicy') }}</a></label>
                        </div>
                    </div>
                    <button type="submit"
                        class="py-3 px-5 text-sm font-medium !w-full text-center text-white rounded-lg bg-[#38a6de] sm:w-fit hover:bg-ornage-800 focus:ring-4 focus:outline-none focus:ring-ornage-300 dark:bg-ornage-600 dark:hover:bg-ornage-700 dark:focus:ring-ornage-800">
                         {{ t('contact.send') }}
                    </button>
                </form>
            </div>

            <div class="bg-[#F3F4F6] dark:bg-[#111827] py-12 mb-[100px] px-4 sm:px-6 lg:px-8 font-shamel">
                <div class=" mx-auto text-center flex justify-between flex-col md:flex-row">
                    <!-- العنوان الرئيسي -->

                    <div class="text-right flex flex-col justify-center">
                        <h2 class="text-3xl font-bold dark:text-white mb-2">
                            {{ t('contact.joinCommunity') }}
                        </h2>
                        <!-- الوصف -->
                        <p class="text-lg text-gray-600 mb-6">
                            {{ t('contact.stayUpdated') }}
                        </p>
                        <!-- النموذج -->
                    </div>
                    <div>
                        <form @submit.prevent="subscribe" class="flex justify-center items-start gap-4 mb-1">
                            <input v-model="email" type="email" :placeholder="t('contact.enterEmail')"  
                                class="w-full max-w-md px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                                required />
                            <button type="submit"
                                class="min-w-[130px] py-3 bg-[#38a6de] text-white font-medium rounded-lg
                                 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                                 {{ t('contact.subscribeNow') }}
                            </button>
                        </form>
                        <p class=" text-[#38a6de] hover:underline mt-4">
                            {{ t('contact.privacy') }}
                            <!-- <span class="underline">{{ t('contact.policy') }}.</span> -->
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

