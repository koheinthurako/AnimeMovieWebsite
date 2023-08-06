const movieBox = document.querySelector(".movieBox");
const reviewsContainer = document.querySelector(".reviewsContainer");
const search = document.querySelector(".searchBox input");
const adsBox = document.querySelector(".adsBox");

const movies = {
    1: {
        id: 1,
        name: "Your Name",
        photo: "./images/1-yourname.jpg",
        imdb: 8.4,
        detail: "Mitsuha Miyamizu, a high school girl, yearns to live the life of a boy in the bustling city of Tokyo—a dream that stands in stark contrast to her present life in the countryside. Meanwhile in the city, Taki Tachibana lives a busy life as a high school student while juggling his part-time job and hopes for a future in architecture.One day, Mitsuha awakens in a room that is not her own and suddenly finds herself living the dream life in Tokyo—but in Taki's body! Elsewhere, Taki finds himself living Mitsuha's life in the humble countryside. In pursuit of an answer to this strange phenomenon, they begin to search for one another. Kimi no Na wa. revolves around Mitsuha and Taki's actions, which begin to have a dramatic impact on each other's lives, weaving them into a fabric held together by fate and circumstance.",
        detailMyanmar: "ဒီကားကတော့ မသိတဲ့သူမရှိသလောက်ကို ရှားပါလိမ့်မယ်…ကမ္ဘာအနှံ့အောင်မြင်မှုတွေရခဲ့ပြီး Your Name ကြောင့် Anime ပရိသတ် ဖြစ်လာကြတဲ့သူတွေဒုနဲ့ဒေးပါပဲ…ဒါပေမဲ့ အခုထိမကြည့်ရသေးတဲ့သူတွေ ရှိနေနိုင်သေးတာကြောင့် နည်းနည်းလောက် ပြန်ညွှန်းပါရစေ…ဇာတ်လမ်းအစမှာ သဘာဝလွန်ဖြစ်ရပ်ဆန်းနဲ့ စတယ်…တိုကျိုမှာနေတဲ့ အထက်တန်းကျောင်းသားလေးတာချီဘာနာ တကိ နဲ့ အိတိုမိုရိ ဆိုတဲ့ နယ်မြို့လေးက မိယမိဇု မိဆုဟ ဆိုတဲ့ ကောင်မလေးတို့ဟာ ခန္ဓာကိုယ်ချင်းလဲသွားကြသတဲ့... အမှန်က ခန္ဓာကိုယ်လဲတယ်ဆိုတာထက် စိတ်ချင်းလဲသွားတယ်ဆို ပိုမှန်ပါတယ်…ဒါကို သူတို့တွေက အိပ်မက်လို့ ထင်နေကြပေမယ့် တကယ်ဖြစ်နေမှန်းသိတဲ့အခါမှာတော့သူတို့နှစ်ယောက်လုံး ဒီအဖြစ်ဆန်းကြီးကို အဖြေရှာဖို့ ကြိုးစားကြပါတော့တယ်..",
        movieSrc: "./media/1-yourname.mp4"
    },
    2: {
        id: 2,
        name: "Weathering with You",
        photo: "./images/2-weatheringwithyou.jpg",
        imdb: 7.5,
        detail: "Tokyo is currently experiencing rain showers that seem to disrupt the usual pace of everyone living there to no end. Amidst this seemingly eternal downpour arrives the runaway high school student Hodaka Morishima, who struggles to financially support himself—ending up with a job at a small-time publisher. At the same time, the orphaned Hina Amano also strives to find work to sustain herself and her younger brother. Both fates intertwine when Hodaka attempts to rescue Hina from shady men, deciding to run away together. Subsequently, Hodaka discovers that Hina has a strange yet astounding power: the ability to call out the sun whenever she prays for it. With Tokyo's unusual weather in mind, Hodaka sees the potential of this ability. He suggests that Hina should become a sunshine girl—someone who will clear the sky for people when they need it the most. Things begin looking up for them at first. However, it is common knowledge that power always comes with a hefty price...",
        detailMyanmar: "မိုရီရှိမာ ဟိုဒါကာ(Morishima Hodaka) ဆိုတာက သူနေတဲ့ ကျွန်းမြို့လေးကနေ တိုကျိုမြို့ကြီးဆီကို ထွက်ပြေးလာတဲ့ ၁၆ နှစ်အရွယ်အိမ်ပြေးကောင်လေးတစ်ယောက်အာမာနို ဟီနာ(Amano Hina) ကတော့ တိုကျိုမြို့ကြီးမှာ အချိန်ပိုင်းအလုပ်လုပ်ပြီး ဘဝကို ထိန်းကျောင်းနေတဲ့ကောင်မလေးတိုကျိုမြို့ကြီးမှာ အသက်မပြည့်တဲ့ကလေးတွေအတွက် အလုပ်ရဖို့ဆိုတာ အင်မတန်ခဲယဉ်းပါတယ်…ဒီတော့ ဟိုဒါကာ အနေနဲ့ တိုကျိုမြို့ကြီးမှာ ဒုက္ခပင်လယ်ဝေပြီး အခက်ကြုံတော့တာပေါ့ ပေမဲ့ တစ်နေ့မှာ ဟီနာဆိုတဲ့ ကောင်မလေးနဲ့ အမှတ်မထင်တွေ့ဆုံခဲ့အပြီးမှာတော့……အခု ပရိတ်သတ်ကြီး ခံစားကြည့်ရှုရမယ့် “Weathering with you” ဆိုတဲ့ ဇာတ်လမ်းကြီး စတင်ပါတော့တယ်….ရုပ်ရှင်တစ်ကားလုံး စိုစွတ်တဲ့ခံစားချက်တွေရလောက်အောင် ရိုက်ပြထားတယ်...အေးချမ်းတဲ့ မိုးရာသီကို ကြိုက်နှစ်သက်တဲ့သူတွေအတွက်တော့ တကယ်ဖီးလ်လို့ကောင်းတဲ့ဇာတ်ကားပေါ့...အခုချိန်ကလည်း မိုးတွင်းရောက်နေပြီဆိုတော့ မိုးရွာနေတဲ့အချိန် ကော်ဖီလေးတစ်ခွက်နဲ့ ဒီကားလေးကြည့်နေရရင် Perfect ပါပဲ...ဇာတ်ဝင်တေးနဲ့ နောက်ခံတီးလုံးတွေကလည်း ထုံးစံအတိုင်း ရှယ်တွေပါ…နားကြပ်လေးတပ်ကြည့်သင့်",
        movieSrc: "./media/2-weathering.mp4"
    },
    3: {
        id: 3,
        name: "Josee, the Tiger and the Fish",
        photo: "./images/7-joseetigerandthefish.jpg",
        imdb: 7.6,
        detail: "Equipped with his passion for diving and admiration for marine biology, university student Tsuneo Suzukawa tries his best to juggle several part-time jobs to earn enough money to study abroad. But one night, in a fateful accident, he meets a girl in a wheelchair, driving his current path into a detour. The girl, Kumiko—who prefers to be called 'Josee' —initially comes off as rude. Tsuneo, however, is then convinced by Josee's grandmother to take on the paid job to be Josee's caretaker. Despite being annoyed with her bossy demeanor, Tsuneo sees the opportunity to save more funds to support his academic dream. Nonetheless, after putting up with Josee's behavior for some time, Tsuneo tries to quit, only to discover Josee's dreams of traversing the outside world—to experience a life free from her crippling condition. Changing his mind, Tsuneo decides to accompany Josee in exploring the wonders that the world has to offer. Through their time together, the two begin to realize that the traits that bind them may be vital toward fulfilling their respective aspirations.",
        detailMyanmar: "အချစ်ဟာ သိပ်ကို ဆန်းကြယ်လှပါတယ်.တခါတလေ နေ့ခင်းဘက်ကြီး မီးထိုးလိုက်ရှာရင်းတောင် မတွေ့တက်ပေမယ့် တခါတလေမှာတော့အချစ်ဟာ မှာ ဝှီးချဲပေါ်ကနေကိုယ့်ဆီကို ဒိုင်ဗင်ပစ်ပြီးလည်း ရောက်လာတတ်ပါတယ်...မိဘတွေရဲ့ အလိုလိုက်ခြင်းကို ခံထားရတဲ့ ခပ်ဆိုးဆိုးကောင်မလေးနဲ့ခပ်ရိုးရိုးတက္ကသိုလ်ကျောင်းသားလေးတို့ရဲ့ အချစ်ဇာတ်လမ်းကိုAnimeရုပ်ထွက်လှလှလေးနဲ့ ကြည့်ရမှာပါ အိပ်မက်တွေကို လက်တွေ့အကောင်ထည်ဖော်ဖို့အတွက် အလုပ်ကြိုးစားနေတဲ့Suneo ဆိုတဲ့တက္ကသိုလ်ကျောင်းသားလေးဟာတစ်နေ့အလုပ်ကအပြန် ဝှီးချဲပေါ်ကနေသူ့အပေါ်ကိုပြုတ်ကျလာတဲ့ကောင်မလေးနဲ့အမှတ်မထင်တွေ့ဆုံမိရာကနေ အဲ့ကောင်မလေးအိမ်မှာအလုပ်လုပ်ဖို့အကြောင်းဖန်လာပါတော့တယ်အလိုလိုက်ခံထားရလို့ ဆိုးနေတဲ့ကောင်မလေးရဲ့ အနိုင်ကျင့်ဗိုလ်ကျမှုတွေကို Suneo တစ်ယောက်သည်းခံရင်းနဲ့နောက်ဆုံးမှာ အားငယ်စိတ်ကိုဖုံးကွယ်ထားတဲ့ သူမရဲ့ပုံစံအမှန်ကို သိသွားမလားစာအုပ်တွေအရမ်းဖတ်ပြီး ပုံဆွဲတော်တဲ့ Josee နဲ့ ငါးလေးတွေကိုချစ်ပြီး စာတော်တဲ့ Suneo တို့နှစ်ယောက်ကိုနီးစပ်သွားစေတဲ့အရာကရောဘာများဖြစ်မလဲဆိုတာကို ရင်ထဲနွေးထွေးသွားအောင် ရိုက်ကူးပြသထားတဲ့Anime ဇာတ်လမ်းတပုဒ်ဖြစ်တာကြောင့် တင်ဆက်ပေးလိုက်ပါတယ်",
        movieSrc: "./media/3-josee.mp4"
    },
    4: {
        id: 4,
        name: "The Garden of Words",
        photo: "./images/3-gardenofwords.jpg",
        imdb: 7.4,
        detail: "On a rainy morning in Tokyo, Takao Akizuki, an aspiring shoemaker, decides to skip class to sketch designs in a beautiful garden. This is where he meets Yukari Yukino, a beautiful yet mysterious woman, for the very first time. Offering to make her new shoes, Takao continues to meet with Yukari throughout the rainy season, and without even realizing it, the two are able to alleviate the worries hidden in their hearts just by being with each other. However, their personal struggles have not disappeared completely, and as the end of the rainy season approaches, their relationship will be put to the test.",
        detailMyanmar: "ဇာတ်ကားနာမည်လေးက မြန်မာလိုဆို “စကားလုံးတွေ ပွင့်ဖူးတဲ့ပန်းဥယျာဉ်” တဲ့ဇာတ်လမ်းလေးက “မမနဲ့မောင်လေး” ပုံစံ...ရိုးရိုးလေးနဲ့ဆွဲဆောင်မှုရှိတဲ့ ဇာတ်လမ်းလေးဆိုလည်း မမှားဘူး…အေးချမ်းတဲ့ မိုးရာသီနဲ့ ဇာတ်လမ်းဆင်ထားတယ်..ခုလို မိုးရွာနေတုန်းကာလနဲ့ဆိုတော့ ပိုပြီး ဖီးလ်လို့ ကောင်းတာပေါ့...အာကီဇုကီ တာကာအို ဆိုတာက ဖိနပ်လုပ်သမားဖြစ်ချင်တဲ့ ၁၅ နှစ်အရွယ်ကောင်လေး..သူ့စိတ်ထဲ ဖိနပ်တွေဖန်တီးဖို့ပဲ ရှိတယ်..မမ နာမည်က ယူကီနို ယူကာရီ တဲ့.. ၂၇ နှစ်အရွယ် အစ်မကြီးပေါ့…စတွေ့တုန်းကတော့ မသိလိုက်မသိဘာသာနေပေမဲ့ တွေ့ပါများတော့ ရင်းနှီးသွားကြတယ်…နှစ်ယောက်စလုံးက ကိုယ့်အပူနဲ့ကိုယ်ရှိနေကြတဲ့သူတွေ..ရင်းနှီးလာတာနဲ့အမျှ တစ်ယောက်ကိုတစ်ယောက် ဖေးမဖို့ ကူညီပေးဖို့ စူးစမ်းဖို့ လုပ်လာကြတယ် ဇာတ်ကားရဲ့နာမည်အတိုင်းပဲ မိုးလေးတစိမ့်စိမ့်နဲ့ ခံစားကြည့်ရှုကြပါဦး",
        movieSrc: "./media/4-garden.mp4"
    },
    5: {
        id: 5,
        name: "5 Centimeters per Second",
        photo: "./images/4-centimeterpersecond.jpg",
        imdb: 7.5,
        detail: "What happens when two people love each other but just aren't meant to be together? Takaki Toono and Akari Shinohara are childhood friends, but circumstances beyond their control tear them apart. They promise to stay in contact, and although the progression of time widens the distance between them, the chain of memories remains ever-present.        Byousoku 5 Centimeter is a romantic drama that focuses on the mundane and harsh reality of long-distance relationships. Stuck in the past and unable to make any new memories, Takaki and Akari cling to the hope of seeing each other again. They live their everyday lives half-heartedly, both hurting themselves and the people around them.",
        detailMyanmar: "ချယ်ရီပွင့်ဖတ်လေးတွေ အပင်ပေါ်ကနေမြေပြင်အထိ ကြွေကျတဲ့အရှိန်က တစ်စက္ကန့်မှာ ငါးစင်တီမီတာနှုန်း ရှိတယ်တဲ့…မြေပြင်ကနေလွတ်တင်လိုက်တဲ့ အာကာသယာဥ်တစ်စီးကတော့ တစ်နာရီကို မိုင်ပေါင်း တစ်သောင်းရှစ်ထောင်နှုန်းနဲ့ ကမ္ဘာမြေက တဖြည်းဖြည်း ဝေးကွာသွားတယ်ဦးတည်ချက်ရှိတဲ့ လားရာတွေကဘယ်လောက်အချိန်တွေကြာပါစေ...တစ်ချိန်ချိန်မှာ လိုရာခရီးကို ရောက်နိုင်ဦးမှာပဲမဟုတ်လား…ဒါပေမယ့်တစ်ချို့ ဦးတည်ချက်မရေရာပဲ မျှော်လင့်ချက်တစ်ခုတည်းနဲ့...လွတ်တင်မိခဲ့တဲ့ ယာဥ်တွေကတော့ ဘယ်အချိန်မှာ ဘယ်ကိုရောက်နိုင်မလဲ…Massage တွေ ထောင်ချီ အပြန်အလှန်ပို့နေခဲ့ပေမယ့် နှလုံးသားတွေ တစ်စင်တီမီတာလောက်တောင် နီးမလာတဲ့အခါ…အချိန်တွေအကြာကြီးစောင့်ဆိုင်းခဲ့ရပေမယ့် မျှော်လင့်တဲ့သူပြန်မလာတဲ့အခါ…အများကြီးကြိုးစားခဲ့ပေမယ့် ကြိုးစားမှုတွေ အရာမထင်ခဲ့တဲ့အခါတွေမှာရော…ငါတို့… လားရာမရှိတဲ့ မျှော်လင့်ချက်ယာဥ်တွေကိုလွတ်တင်နေမိသလိုပဲမဟုတ်ဘူးလား..တစ်ခါတစ်လေကျရင် လူတွေကကိုယ့်ရဲ့အဝေးကိုမျှော်နေရင်း ဘေးကကိုယ့်ကိုတန်ဖိုးထားတဲ့သူတွေအရာတွေကို သတိမထားမိတတ်ကြဘူးလေတစ်ဖက်ကပြန်တွေးကြည့်ရင်တော့ ချယ်ရီပွင့်ဖတ်လေးတွေက မြေပြင်ကိုပဲ ဦးတည်ပြီးတော့သွားနေတာလားဒါမှမဟုတ် မိခင်အပင်အကိုင်းအခတ်တွေဆီကပဲ တစ်စက္ကန့်မှာ ငါးစင်တီမီတာနှုန်းဝေးကွာခဲ့ကြတာပဲလားဘယ်သူသိနိုင်မလဲ…",
        movieSrc: "./media/5-centimeter.mp4"
    },
    6: {
        id: 6,
        name: "Suzume",
        photo: "./images/5-suzume.jpg",
        imdb: 7.7,
        detail: "On her way to school one day, Suzume Iwato stumbles upon Souta Munakata, a young man searching for abandoned areas. The high school girl directs Souta to a nearby ruin, but out of pure curiosity, she herself decides to head to the same destination.        Once there, Suzume discovers an isolated door with a dreamlike universe lying beyond it—a place that she can see and feel, but not enter. A strange stone rests on the ground nearby, but it turns into a cat-like creature and scurries away when Suzume lifts it. Suddenly afraid, she heads back toward her school, not realizing that her act of leaving the door open will have consequences. With the keystone released, the evil within the other universe can now freely escape and wreak havoc throughout Japan. Intending to correct her dangerous mistake, Suzume joins Souta—whose true goal is to prevent evil from festering—in finding and locking all open doors before the country is destroyed.",
        detailMyanmar: "နိုဝင်ဘာလ၊ ၂၀၂၂မှာ စတင်ပြသခဲ့တဲ့ဒီကားဟာ နာမည်​ကျော်anime films​တွေဖြစ်တဲ့ 5 Centimeters per Second၊ The Garden of Words၊ Your Name၊ Weathering with Youတို့ကိုဖန်တီးသူ ဆရာMakoto Shinkaiရဲ့​နောက်ဆုံးထွက်လက်ရာဖြစ်ပြီး CoMix Wave Films and Story Incက​နေပဲ ထုတ်လုပ်​ပေးတာပါ။ ဝတ္ထုအ​နေနဲ့လည်း ဆရာShinkaiက ရုပ်ရှင်မထွက်မီထုတ်​ဝေခဲ့ပါ​သေးတယ်။ ဒီကားကို၂၀၂၀နှစ်စပိုင်းကတည်းက စဖန်တီးခဲ့ပြီး ၂၀၂၂ ​အောက်တိုဘာမှအပြီးသတ်ခဲ့ပြီး အချိန်၂နှစ်​တောင် ယူခဲ့တာမလို့ ကွာလတီပိုင်းမှာ အ​ကောင်းဆုံးဖြစ်​နေမယ်ဆိုတာကို ​ပြောဖို့​တောင်မလိုဘူးထင်ပါတယ်။ ဇာတ်လမ်းအကျဥ်းကို​ပြောရရင်​တော့ Suzumeဟာ အ​ဒေါ်နဲ့အတူ​နေထိုင်တဲ့ မိဘမဲ့တစ်​​ယောက်ပါ။ သူငယ်စဥ်တုန်းက အ​မေ​သေချိန်မှာ အ​မေကိုလိုက်ရှာရင်း ​လမ်း​ပျောက်သွားခဲ့ဖူးပြီး ဘာ​တွေဖြစ်ပျက်ခဲ့တာလဲဆိုတာကိုမမှတ်မိတဲ့သူလည်းဖြစ်ပါတယ်။ တ​နေ့မှာ​တော့ ​ကျောင်းကိုသွားရင်း လမ်းမှာ လူငယ်တစ်​ယောက်နဲ့ဆုံခဲ့ပြီး လူမရှိတဲ့​နေရာကိုလိုက်ရှာ​နေ​ကြောင်း၊ တံခါးတစ်ချပ်အ​ကြောင်း​​မေးသွားခဲ့ပါတယ်။ ​နောက်​တော့ Suzumeဟာ သိလိုစိတ်ပြင်းလာပြီး အဆိုပါလူငယ်သွား​လောက်တဲ့လူမရှိတဲ့​နေရာ​ဆီကိုလိုက်သွားရင်း တံခါးတစ်ချပ်ကို​တွေ့သွားခဲ့ပါတယ်။ အဆိုပါတံခါးကို Suzumeဟာ ဖွင့်လိုက်တဲ့အခါမှာ​တော့……",
        movieSrc: "./media/6-suzume.mp4"
    },
    7: {
        id: 7,
        name: "A Silent Voice",
        photo: "./images/6-slientvoice.jpg",
        imdb: 8.1,
        detail: "As a wild youth, elementary school student Shouya Ishida sought to beat boredom in the cruelest ways. When the deaf Shouko Nishimiya transfers into his class, Shouya and the rest of his class thoughtlessly bully her for fun. However, when her mother notifies the school, he is singled out and blamed for everything done to her. With Shouko transferring out of the school, Shouya is left at the mercy of his classmates. He is heartlessly ostracized all throughout elementary and middle school, while teachers turn a blind eye.        Now in his third year of high school, Shouya is still plagued by his wrongdoings as a young boy. Sincerely regretting his past actions, he sets out on a journey of redemption: to meet Shouko once more and make amends. Koe no Katachi tells the heartwarming tale of Shouya's reunion with Shouko and his honest attempts to redeem himself, all while being continually haunted by the shadows of his past." ,
        detailMyanmar: "ဒီanimationလေးက 2016ခုနှစ်မှာထွက်ခဲ့တဲ့ ဂျပန်အန်နမဲလေးဖြစ်ပြီး အနိုင်ကျင့်တတ်တဲ့ ကျောင်းသားတစ်ယောက်နဲ့ အပြုံးယဲ့ယဲ့လေးနဲ့ နားမကြားကောင်မလေး‌အပေါ် အခြေတည်ရေးဖွဲ့ထားတဲ့ ဇာတ်အိမ်ရိုးရိုးလေးပါပဲ အပြစ်ရှိခံစားစိတ်က လူတစ်ယောက်အတွက် သေစေနိုင်တဲ့ထိ စိတ်ဒဏ်ရာ ရနိုင်တာကို ရိုက်ကူးထားပြီး မသန်စွမ်းတစ်ယောက်ရဲ့ စိတ်နှလုံးသားနူးညံ့ပုံနဲ့ ဇာတ်လမ်းရိုးရိုးလေးကို မွမ်းမံပြီး လူတိုင်းရဲ့စိတ်နှလုံးကို ဖမ်းဆုပ်နိုင်အောင် တင်ဆက်ပေးထားပါတယ်. သိပ်ကို စိတ်ထဲထိခိုက်စေပြီး မျက်ရည်ကျလောက်တဲ့ထိကို ဆွဲဆောင်နိုင်တဲ့ဇာတ်လမ်း‌တပုဒ်ပါပဲ.. Anime fan တွေလဲ ကြည့်ကိုကြည့်သင့်တဲ့ဇာတ်လမ်းတပုဒ်ဖြစ်သလို dramaသမားတွေလဲ ကြည့်သင့်တာကြောင့် တင်ဆက်ပေးလိုက်ပါတယ်….",
        movieSrc: "media/7-silent.mp4"
    },
    8: {
        id: 8,
        name: "Spirited Away",
        photo: "./images/8-spiriterdaway.jpg",
        imdb: 8.5,
        detail: "Ookami Kodomo no Ame to Yuki won the 2013 Japan Academy Prize for Animation of the Year, the 2012 Mainichi Film Award for Best Animation Film, and the 2013 Animation of the Year award at the Tokyo International Anime Fair. It won two awards at the Oslo Films from the South festival in Norway: the main award, the Silver Mirror, and the audience award. It won an Audience Award at 2013 New York International Children's Film Festival and the 2014 Best Anime Disc award from Home Media Magazine.",
        detailMyanmar: "Ōkami Kodomo no Ame to Yuki လို့ အမည်ရတဲ့ ဒီဇာတ်ကားဟာ 2013 Japan Academy Prize for Animation of the Year, the 2012 Mainichi Film Award for Best Animation Film, the 2013 Animation of the Year Award တွေလက်ခံရရှိခဲ့ရုံသာမက… နော်ဝေနိုင်ငံရဲ့ အဓိကဆုဖြစ်တဲ့ The Silver Mirror နဲ့ The Audience Award တို့အပြင် 2013 New York International Children’s Film Festival မှာလဲ Audience Award ရရှိခဲ့သလို Home Media Magazine ရဲ့ 2014 Best Anime Disc award တို့ကိုပါ ရရှိထားတဲ့ဇာတ်ကားပဲဖြစ်ပါတယ်…ရိုက်ကူးပုံသပ်ရပ်လွန်း.. ဇာတ်အိမ်ကောင်းလွန်းပြီး မိခင်မေတ္တာကိုအသေသပ်ဆုံးတင်ပြသွားတာမို့ ကလေးတွေထက် လူကြီးတွေပါကြည့်သင့်တဲ့ နိုင်ငံတကာအထိထိုးဖောက်အောင်မြင်ခဲ့သော ဇာတ်ကားတစ်ကားလို့ ညွှန်းဆိုပါရစေ..",
        movieSrc: "media/8-spiritedaway.mp4"
    },
    9: {
        id: 9,
        name: "Wolf Children",
        photo: "./images/9-wolfchildren.jpg",
        imdb: 8.6,
        detail: "Stubborn, spoiled, and naïve, 10-year-old Chihiro Ogino is less than pleased when she and her parents discover an abandoned amusement park on the way to their new house. Cautiously venturing inside, she realizes that there is more to this place than meets the eye, as strange things begin to happen once dusk falls. Ghostly apparitions and food that turns her parents into pigs are just the start—Chihiro has unwittingly crossed over into the spirit world. Now trapped, she must summon the courage to live and work amongst spirits, with the help of the enigmatic Haku and the cast of unique characters she meets along the way. Vivid and intriguing, Sen to Chihiro no Kamikakushi tells the story of Chihiro's journey through an unfamiliar world as she strives to save her parents and return home.",
        detailMyanmar: "နာမည်ကြီး anime movie များစွာ ကို ရိုက်ကူးတဲ့director Hayao Miyazaki ရဲ့ ဖန်တီးမှု တစ်ခု ဖြစ်ပါတယ်။Spirited Away ဟာ Studio Ghibli ကို ကြီးမားတဲ့ မှတ်တိုင် စိုက်ထူ နိုင်စေ ခဲ့ပါတယ်။ဘာကြောင့်လဲဆိုတော့ ၂၀၀၁ ခုနှစ်မှာ Walt Disney Pictures ကEnglish adaptationရ ပြီးနောက် ၂၀၀၂ ခုနှစ်မှာGolden Bear နဲ့ Best Animated Feature award တို့ကိုဆွတ်ခူး နိုင်ခဲ့လို့ ပါပဲ။ဒါဟာ English speaking world ရဲ့အပြင်ကဒီလို ဆုမျိုး ကိုရရှိခဲ့တဲ့ တစ်ခုတည်း သော ကာတွန်းရုပ်ရှင်ပါ။နာမည်ကြီးသလောက် ကြည့် ဖို့ထိုက်တန်တဲ့ဒီ anime movie ကို မတော်တဆမကြည့်ရသေးဘူးဆိုရင် ကြည့်ဖြစ်အောင်ကြည့်ကြပါလို့တိုက်တွန်းချင်ပါတယ်။ ဇာတ်လမ်းအကျဉ်းကတော့ ချီဟီရိုဆိုတဲ့ ကလေးမလေးတို့ မိသားစုကနယ်မြို့လေးကို ပြောင်းလာရင်း လမ်းပျောက်ရာကနေ လှိုဏ်ဂူတစ်ခုထဲကို ဝင်ကြည့်ခဲ့တယ်။ဒီလိုနဲ့ပဲ စူးစမ်းရင်း ချီဟီရိုရဲ့ မိဘတွေဟာ လူသူမရှိတဲ့ ဈေးထဲက အစားအစာတွေကို စားပြီး ဝက်တွေ ဖြစ်သွားခဲ့တယ်။တကယ်တော့ သူတို့ဟာ မှော်အစွမ်း လောကထဲကို ရောက်ရှိသွားကြတာပါ။မိဘတွေ ဝက်ဖြစ်သွားပြီး မှော်လောကမှာ ဒုက္ခရောက်နေတဲ့ ချီဟီရိုကို ဟခု ဆိုတဲ့ ကောင်လေးက ကူညီပေးခဲ့တယ်။ဒီလိုနဲ့ပဲ ချီဟီရိုတစ်ယောက် ရောက်ရှိနေတဲ့ လောကကြီးက ဘယ်လိုလဲ ဘာတွေလဲမိဘတွေနဲ့ရော လူ့လောကကို ပြန်နိုင်မှာလား သိရအောင် အဆုံးထိ ကြည့်လိုက်ကြရအောင်….",
        movieSrc: "media/9-wolfchildren.mp4"
    },
    10: {
        id: 10,
        name: "Grave of the Fireflies",
        photo: "./images/10-grave.jpg",
        imdb: 8.5,
        detail: "The story of Seita and Setsuko, two young Japanese siblings, living in the declining days of World War II. When an American firebombing separates the two children from their parents, the two siblings must rely completely on one another while they struggle to fight for their survival.",
        detailMyanmar: "Best animation movie of all time ထဲက Grave of the Fireflies (1988)ဟာဆိုရင်ဖြင့်best animation movie of all timeထဲက တစ်ကားအဖြစ်သတ်မှတ်ခြင်းခံထားရပြီး IMDB.Rating အားဖြင့်လည်းအံသြစရာကောင်းလောက်အောင်8.5ထိရရှိထားတဲ့ animeဖြစ်လို့ကြည့်ဖစ်အောင်ကြည့်ကြပါလို့ တိုက်တွန်းပါရစေ….အညွှန်းပေးရမယ်ဆိုရင်တော့….ဒုတိယကမ္ဘာစစ်ကြီးဖြစ်နေတဲ့အချိန်ဂျပန်နိုင်ငံလည်းနေရာအနှံ့ဗုံးကျဲခံရလို့…ထွက်ပြေးကြရ-ဗုံးကျင်းတွေခိုကြရတဲ့အချိန်မှာ…..ဆဲတိုနဲ့ဆဲဆု တို့မောင်နှမ နဲ့သူတို့အမေလည်း ဗုံးခိုကြရရင်း..သူတို့အမေသေဆုံးသွားခဲ့ပါတယ်…အဖေကလည်းတိုက်ပွဲမှာတိုက်ခိုက်နေရတဲ့အတွက်..အဆက်အသွယ်ကလည်းမရဖြစ်နေပြန်တော့..ခိုကိုးရာမဲ့ မောင်နှမနှစ်ယောက်လည်းအမေ့ညီမ တစ်ဝမ်းကွဲ အဒေါ်အိမ်ကိုမှီခိုဖို့ရောက်လာခဲ့ကြပါတယ်..ရောက်ခါစကတော့ မောင်နှမနှစ်ယောက်ဆီကပါလာတဲ့အစားအသောက်တွေမျက်နှာကြောင့်ကြည်ကြည်ဖြူဖြူဖြစ်ပေမယ့်..အားလုံးကုန်သွားတဲ့အခါမှာတော့ ညိုငြင်စပြုလာပါတော့တယ်..ကြံခိုင်တဲ့အကိုဖြစ်ဆဲတို က အပြောအဆိုမခံချင်တာနဲ့မောင်နှမလေးနှစ်ယောက်အမေချန်ထားခဲ့တဲ့ပိုက်ဆံလေးနဲ့လမ်းဘေးနေရာ တစ်ခုမှာ စားသောက်ခဲ့ကြတယ်..ညမှောင်လာတဲ့အခါ ပိုးစုန်းကြူးလေးတွေဖမ်းပြီးအရင်ကမိသားစု စုံစုံလင်လင်ရှိချိန်တွေပြန်စဉ်းစားကြတယ်..တဖြည်းဖြည်းနဲ့စားစရာတွေမရှိတော့တဲ့အချိန်မှာသူတို့မောင်နှမနှစ်ယောက်ဘာတွေဆက်ဖြစ်ကြမှာလဲ….သူတို့ရဲ့အဖေနဲ့ရော ပြန်လည်ဆုံတွေ့နိုင်မှာလား..ဒီကားလေးကိုဂျပန်လို အဓိပ္ပါယ်ဆိုရင်”ပိုးစုန်းကြူးတို့ရဲ့ ဝိဉာဉ်” လို့ခေါ်ဆိုပါတယ်..ဒီရဲ့အဓိပ္ပါယ်ကရော ဘာကြောင့်ခေါ်တာလဲဆိုတာအပြည့်အဝဆက်သိချင်ရင်တော့ ဒီကားလေးကိုဆက်လက်ကြည့်လိုက်ပါလို့ပြောချင်ပါတယ် Best Animation Movie Of All Timeသတ်မှတ်ခံထားရတဲ့ဒီဇာတ်ကားလေးကိုကြည့်ရင်းနဲ့ ကိုယ်ပါခံစားမိလာပြီး..မျက်ရည်ကျတဲ့အထိပါပဲ",
        movieSrc: "media/10-grave.mp4"
    },
    11: {
        id: 11,
        name: "Whisper of the Heart",
        photo: "./images/11-whisperoftheheart.jpg",
        imdb: 7.8,
        detail: "Based on the manga with the same title, this animated film follows Shizuku, an inquisitive young girl and a voracious reader, who longs to be a writer when she grows up. One day she notices that all of her library books have previously been taken out by one Seiji Amasawa. Amid chasing after a large cat, befriending an eccentric antiques dealer and writing her first novel, Shizuku aims to find this mysterious boy who may well be her soul mate.",
        detailMyanmar: "နာမည်ကြီး ကာတွန်းရုပ်ရှင်Spirited Away ကိုဖန်တီးထားတဲ့ ဒါရိုက်တာကပဲ ဆက်လက်ရိုက်ကူးထားတဲ့ဇာတ်ကားလေးတကားနဲ့ မိတ်ဆက်ပေးပါရစေ တခါက၁၄နှစ်အရွယ်ကျောင်းသူလေးShizuku ဟာ သူ့မိသားစုနဲ့ Tokyo မြို့မှာနေသတဲ့…သူဘဝကလည်းပုံမှန်ကျောင်းသူတယောက်လိုပါပဲ…ဒါပေမယ့် တခုထူးခြားတာက Shizuku ဟာကျောင်းပိတ်ရက် ဆိုတာနဲ့ဒေသခံစာကြည့်တိုက် သွားပြီးရှိသမျှFairy Tale (အကြမ်းဖျင်းအားဖြင့်ကလေးပုံပြင်ပေါ့)စာအုပ်တွေငှားဖတ်လေ့ရှိပြီးသူကိုယ်တိုင်ကလည်းစာရေးသူတယောက်ဖြစ်ချင်တဲ့သူပါ…ဒါမယ့် သူစာအုပ်တွေဖတ်ရင်းဖတ်ရင်း နာမည်တခုနဲ့ ရင်းနှီးလာတယ်…သူငှားဖတ်သမျှစာအုပ်တိုင်းရဲ့ငှားဖတ်သူစာရင်းကဒ်မှာSeiji ဆိုတဲ့ကောင်လေးကသူ့ရှေ့အမြဲရောက်နေတယ်…ဒီတော့ဆယ်ကျော်သက်မိန်းခလေးသဘာဝအတိုင်းမမြင်ဘူးတဲ့ကောင်လေးကိုပဲအထင်ကြီးမိပြီး သံယောဇဉ်တွယ်သွားတယ်တဲ့…ဒီလိုနဲ့တနေ့မှာ Shizuku က သူ့အဖေကိုထမင်းဘူး သွားပို့ပေးရင်းရထားစီးလာရာမှာရထားပေါ်ကိုမှတ်တိုင်တခုမှာကြောင်ကြီးတကောင်ကတက်လာပြီး Shizuku အတွက် အထူးအဆန်းဖြစ်သွားတာပေါ့…ပိုထူးဆန်းတာကကြောင်ကြီးကလူအတိုင်းပဲ သူဆင်းချင်တဲ့မှတ်တိုင်မှာဆင်းသွားတယ်တဲ့…ဒါနဲ့ကြောင်ကြီးကိုစိတ်ဝင်စားလို့ Shizukuကနောက်ကလိုက်ရင်း Alice ကနေ Wonderlandရောက်သလိုဖြစ်သွားမလားဆိုတာ ??စိတ်ဝင်စားဖွယ်ဆက်လက်ရှုစားကြပါသီချင်းတွေကို အတတ်နိုင်ဆုံး ဆီလျော်အောင်ဘာသာပြန်ပေးထားပါတယ်အမှားပါတာရှိ ခွင်.လွတ်ကြပါကုန်Japan Anime  တွေထုံးစံအတိုင်း ဇကားအပြီးမှာတော့မက်ဆေ့ချ်တခုတော့ ရစမြဲမို့ ကြည့်သင့်ပါတယ်ဗျ",
        movieSrc: "media/11-whisperoftheheart.mp4"
    },
    12: {
        id: 12,
        name: "Ponyo",
        photo: "./images/12-ponyo.jpg",
        imdb: 7.6,
        detail: "During a forbidden excursion to see the surface world, a goldfish princess encounters a human boy named Sosuke, who gives her the name Ponyo. Ponyo longs to become human, and as her friendship with Sosuke grows, she becomes more humanlike. Ponyo's father brings her back to their ocean kingdom, but so strong is Ponyo's wish to live on the surface that she breaks free, and in the process, spills a collection of magical elixirs that endanger Sosuke's village.",
        detailMyanmar: "ဒီကားလေးရဲ့ အောင်မြင်မှုတွေကို ပြောရမယ်ဆိုရင်ပရိတ်သတ်တွေကြားမှာ Ponyo Ponyo ဖြစ်ခဲ့ရလောက်အောင် ကျော်ကြားခဲ့တဲ့ဇာတ်ကားလေးဖြစ်လာတဲ့အပြင်8th annual Tokyo Anime ဆုပေးပွဲမှာဆုတွေအများကြီးရစေခဲ့တဲ့ ဇာတ်ကားကောင်းလေးပါ။ဇာတ်လမ်းအကျဉ်းလေးကတော့ သဘောၤသားတစ်ဦးရဲ့အသက်ငါးနှစ်သာရှိတဲ့ သားလေးဟာ သူ့အမေနဲ့အတူပင်လယ်နားက တောင်ကုန်းလေးမှာ နေထိုင်တယ်။တစ်နေ့မှာ မမျှော်လင့်ပဲ ရွှေငါးလေးတစ်ကောင်ကို တွေ့ရှိခဲ့တယ်အဲ့ရွှေငါးလေးဟာ ရိုးရိုးငါးလေးမဟုတ်ပဲငါးတစ်ပိုင်းလူတစ်ပိုင်း ဖြစ်နေတဲ့ ရွှေငါးလေးဖြစ်တယ်ရွှေငါးလေးဟာ ဆိုဆုကီဆိုတဲ့ ကောင်လေးကိုသံယောဇဉ် တွယ်မိပြီး ဆိုဆုကီပေးထားတဲ့ပွန်းညို ဆိုတဲ့ နာမည်လေးနဲ့ လူသားတွေအနားမှာ နေခဲ့တယ်လူသားတွေကို မုန်းတဲ့ ပွန်းညို အဖေကသူ့သမီးလေးကို ဆိုဆုကီ ရှိကနေ နည်းအမျိုးမျိုးနဲ့ ပြန်လည်လုယူခဲ့တယ်ဒါပေမယ့် ပွန်းညိုက မှော်စွမ်းအားတွေရပြီးပြန်လွတ်သွားချိန်မှာ သူ့အစွမ်းတွေကြောင့် ဆိုဆုကီတို့မြို့တစ်မြို့လုံးရေနစ်မြုပ်ခဲ့တယ်သူကတော့ လူသားတစ်ယောက်အဖြစ်ဆိုဆုကီရှိကိုပြန်လာခဲ့တယ် ပွန်းညိုရဲ့မှော်အစွမ်းတွေကြောင့် ကမ္ဘာကြီးပျက်လုနီးပါးဖြစ်နေချိန်မှာငါးနှစ်အရွယ်သာရှိတဲ့ ဖြုစင်တဲ့ သူတို့ရဲ့ အချစ်စစ်နဲ့ကမ္ဘာကြီးကိုဘယ်လိုပြန်တည်ဆောက်သွားမလဲပွန်းညိုဟာ လူသားတွေကိုမုန်းတဲ့ သူ့အဖေ နဲ့ပဲရေအောက်မှာ ငါးအဖြစ်ဆက်နေသွားရမလားလူသားအဖြစ် ဆိုဆုကီအနားမှာနေရမလားဆိုတာဇာတ်ကားလေးကိုကြည့်ကြည့်လိုက်ကြနော်",
        movieSrc: "media/12-ponyo.mp4"
    }
}

const adsContents = {
    1: {
        title: "Thet Zaw Hein ကိုသိလား?"
    },
    2: {
        title: "သဘောကောင်းတဲ့ Web Developer တစ်ယောက်ပါ"
    },
    3: {
        title: "ခုပေါ်လာတာကတော့ ကြော်ညာလေးတွေပါ"
    }
}

const adsAll = Object.values(adsContents);

let box;

const movieStore = Object.values(movies);

for (const movie of movieStore) {
    createMovieCards(movie);
    movieBox.append(box);
};

function deleteReviewBox() {
    reviewsContainer.classList.remove("animateIn");
    reviewsContainer.classList.add("animateOut");
    setTimeout(() => {
        this.parentElement.parentElement.parentElement.remove();
        movieBox.classList.remove("blur");
    }, 200);
}

function movieReviewCards(id) {
    let movieRevBox = document.createElement("div");
    movieRevBox.classList.add(".movRevBox");
    const {name, photo, detail, detailMyanmar, movieSrc} = movies[id];
    movieRevBox.innerHTML = `
        <div class="col-11 col-lg-12 d-flex justify-content-center flex-column flex-lg-row align-items-center align-items-lg-stretch mx-auto p-5 gap-4 gap-lg-5 bg-white rounded-4 reviewBox">
            <button class="btn text-danger" id="focusBtn">
                <i class="bi bi-x fs-1 closeSymbol"></i>
            </button>
            <img src="${photo}" alt="" class="w-50 rounded-3">
            <div class="col-12 col-md-11 col-lg-5 d-flex flex-column justify-content-between">
                <div class="texts">
                    <h4 class="fw-bold mb-3">${name}</h4>
                    <p class="text-black-50 small mb-3">${detail}</p>
                    <p class="text-black-50 small mb-5 mb-lg-4">${detailMyanmar}</p>
                    <div class="vdBoxContainer text-center">
                        <video class="videoBox hide mb-4" muted controls oncontextmenu="return false;">
                            <source src="${movieSrc}" type="video/mp4">
                        </video>
                    </div>
                </div>
                <div class="d-flex gap-2 gap-lg-3 flex-column flex-lg-row">
                    <button class="btn w-100 btn-danger text-white trailerBtn">Watch Trailer</button>
                    <button class="btn w-100 btn-dark">Download</button>
                </div>
            </div>
        </div>
    `;

    movieBox.classList.add("blur");
    reviewsContainer.append(movieRevBox);
    reviewsContainer.classList.add("animateIn");
    reviewsContainer.classList.remove("animateOut");

    const closeBtn = document.querySelector(".closeSymbol");
    closeBtn.addEventListener('click', deleteReviewBox);

    const focusBtn = document.getElementById("focusBtn");
    focusBtn.focus();

    let trailerBtn = document.querySelector(".trailerBtn");
    trailerBtn.addEventListener('click', () => {
        let videoBox =  document.querySelector(".videoBox");
        videoBox.classList.remove("hide");
        videoBox.classList.add("show");
    });

}

function createMovieCards(movie) {
    let cardBox = document.createElement("div");
    let card = document.createElement("div");
    cardBox.classList.add("movieCard", "col-10", "col-md-5", "col-lg-3");
    card.classList.add("card", "bg-black", "border-0", "rounded-3", "cardItem", "h-100");
    card.setAttribute("id", movie.id);
    cardBox.setAttribute("data-movie", movie.name);
    card.innerHTML = `
        <div class="card-body d-flex flex-column p-4 rounded-6 justify-content-between">
            <div class="contents">
                <div class="moviePhoto">
                    <img src="${movie.photo}" alt="yourname" class="card-img w-100 mb-4">
                </div>
                <div class="text-white">
                    <h4 class="movie fw-bold">${movie.name}</h4>
                    <p class="detail small text-white-50">IMDb: ${movie.imdb}</p>
                </div>
            </div>
            <div class="buttons d-flex flex-column flex-lg-row justify-content-center gap-2">
                <button class="downloadBtn w-100 btn btn-sm btn-danger text-white px-3">Download</button>
                <button class="reviewBtn w-100 btn btn-sm btn-dark text-white px-3" id="${movie.id}">Review</button>
            </div>
        </div>
    `;

    cardBox.append(card);
    box = cardBox;

    search.addEventListener('input', () => {
        const movieCard = document.querySelectorAll(".movieCard");
        let searchSkills = search.value.trim().toLowerCase();
        movieCard.forEach(box => {
            let movie = box.dataset.movie.toLowerCase();
            if(movie.includes(searchSkills)) {
                box.style.display = "flex";
            } else {
                box.style.display = "none";
            }
        });
    });

};

setTimeout(() => {
    let reviewBtn = document.querySelectorAll(".reviewBtn");
    reviewBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                movieReviewCards(btn.id);
            });
        });
}, 1000);

function closeAds() {
    this.parentElement.remove();
}

function createAds(id) {
    let contentBox = document.createElement('div');
    contentBox.classList.add("contentBox", "bg-light", "text-dark", "d-flex", "align-items-center", "px-3");
    contentBox.innerHTML = `
        <i class="bi bi-info-circle-fill me-2"></i>
        <p class="m-0">${id.title}</p>
        <i class="bi bi-x fs-2 ms-auto closeAdsBtn"></i>
    `;

    contentBox.classList.add("animateIn");
    adsBox.append(contentBox);

    let closeAdsBtn = document.querySelectorAll(".closeAdsBtn");
    closeAdsBtn.forEach(btn => {
        btn.addEventListener('click', closeAds);
    });

}


function startInterval() {
    let i = 0;
    const interval = setInterval(() => {
        createAds(adsAll[i]);
            i++;
            if(i >= adsAll.length) {
                clearInterval(interval);
                i = 0;
            };
        }, 1000);
}

setTimeout(() => {
    startInterval();
}, 10000);