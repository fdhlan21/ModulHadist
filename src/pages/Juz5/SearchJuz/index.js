import { View, Text, Image, useColorScheme, ScrollView, SafeAreaView, TouchableOpacity, Switch, TextInput } from 'react-native'
import React, {useState, useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../../utils/colors/colors';
import themeContext from '../../../config/themeContext';
import { EventRegister } from 'react-native-event-listeners';
import Search from '../../../assets/svg/Search.svg'
import SearchIcon from '../../../assets/svg/SearchIcon.svg'
import Menu from '../../../assets/svg/menu.svg'
import SearchFilter from '../../../component/SearchFilter';

const SearchJuz = ({navigation}) => {
   

   const theme = useContext(themeContext)
  const [mode, setMode] = useState(false);

  const data1 = [{ name:"Jagalah Allah, Niscaya Allah menjagamu"}];
  const data2 =[{ name:"Jika kamu meminta, maka mintalah kepada Allah"}];
  const data3 =[{ name:"Bertakwalah kamu kepada Allah dimanapun kamu berada"}];
  const data4 =[{ name:"Sertakanlah olehmu kejahatan dengan kebaikannya niscaya ia akan menghapuskannya"}];
  const data5 =[{ name:"Serta pergauilah manusia dengan ahlak yang baik"}];
  const data6 =[{ name:"Barangsiapa yang mati dalam keadaan tidak menyekutukan Allah dengan sesuatu, ia masuk Surga"}];
  const data7 =[{ name:"Barangsiapa yang mati dan ia mengetahui bahwa tidak ada ilah yang berhak diibadahi dengan bernar meilkan Allah, maka ia masuk Surga"}];
  const data8 =[{ name:"Nabi shallallahu ‘alaihi wasallam tidak pernah mencela makanan, apabila ia menyukainya maka beliau memakannya, dan apabila membencinya, maka beliau meninggalkannya"}];
  const data9 =[{ name:"Janganlah kalian makan dengan tangan kiri, karena sesungguhnya setan itu makan dengan tangan kiri"}];
  const data10 =[{ name:"Bersuci adalah bagian dari iman"}];
  const data11 =[{ name:"Ucapkanlah salam maka kalian (akan) selamat"}];
  const data12 =[{ name:"Tidak masuk surga orang yang memutuskan kekerabatan"}];
  const data13 =[{ name:"Tidak disayangi Allah orang yang tidak mau menyayangi manusia"}];
  const data14 =[{ name:"Sebaik-baik manusia di antara kamu adalah orang yang mempelajari Al-Qur'an dan mengajarkannya"}];
  const data15 =[{ name:"Menuntut ilmu itu wajib bagi setiap muslim"}];
  const data16 =[{ name:"Nabi shallallahu ‘alaihi wasallam suka memulai dari yang kanan dalam semua keadaan (yang baik)"}];  
  const data17 =[{ name:"Telah datang seorang laki–laki kepada Rasulullah shallallahu ‘alaihi wasallam"}];
  const data18 =[{name:"Sesungguhnya kesabaran itu pada hentakan pertama (dari musibah)"}];
  const data19 =[{name:"Sesungguhnya Allah ridha kepada hamba-Nya yang makan makanan lalu memuji Allah atasnya, dan minum minuman lalu memuji Allah atasnya"}];
  const data21 =[{name:"Seorang laki-laki yang suka meminta-minta kepada manusia, kelak jika ia datang pada Hari Kiamat, tidak terdapat sepotong dagingpun di wajahnya"}];
  const data22 =[{ name:"Orang muslim adalah orang yang orang-orang muslim lainnya selamat dari lisan dan tangannya"}];
  const data23 =[{ name:"Tidak boleh iri kecuali pada dua hal (yang pertama) seseorang yang diberi Al-Quran oleh Allah lalu ia membacanya pada malam dan siang hari, (yang kedua) seseorang yang diberi Allah harta dan dia menginfakkannya pada malam dan siang hari"}];
  const data24 =[{name:"Jangan Marah dan Jangan Bersedih Allah bersama kita"}];
  const data25 =[{ name:"Barangsiapa yang beriman kepada Allah dan Hari Kiamat, hendaknya berkata baik atau diam"}];
const data26 =[{ name:"Di antara tanda baiknya Islam seseorang ialah meninggalkan apa yang tidak bermanfaat baginya"}];
const data27 =[{ name:"Ciri orang munafik ada tiga"}];
const data28 =[{ name:"Berhati-hatilah engkau dengan prasangka, karena sesungguhnya prasangka itu perkataan paling dusta"}];
const data29 =[{ name:"Bahwasanya Nabi Shallallahu alaihi wa sallam melarang kita bernafas di dalam tempat minum saat sedang minum"}];
const data30 =[{ name:"Barangsiapa yang ingin dilapangkan rezekinya dan diakhirkan ajalnya maka hendaklah ia bersilaturrahmi"}];
const data31 =[{ name:"Rasulullah shallallahu ‘alaihi wasallam adalah orang yang paling baik akhlaknya"}];
const data32 =[{ name:"Sesungguhnya yang terbaik di antara kalian adalah yang paling baik akhlaknya"}];
const data33 =[{ name:"Ridha Allah pada ridha kedua orangtua, dan murka Allah pada murka kedua orangtua"}];
const data34 =[{ name:"Barangsiapa yang Allah kehendaki kebaikan kepadanya, niscaya Allah akan pahamkan dia tentang agama(nya)"}];
const data35 =[{ name:"Barangsiapa yang keluar untuk menuntut ilmu, maka ia termasuk di jalan Allah sampai ia kembali"}];
const data36 =[{ name:"Seorang muslim atas muslim lainnya haram darahnya, hartanya, dan kehormatannya"}];
const data37 =[{ name:"Barangsiapa membaca satu huruf dari kitabullah, maka baginya satu kebaikan, dan kebaikan itu mendapat pahala sepuluh kali lipat"}];
const data38 =[{ name:"Sesungguhnya orang yang tidak mempunyai sedikit pun hafalan Al-Qur’an adalah seperti rumah yang tidak berpenghuni (kosong)"}];
const data39 =[{ name:"Sesungguhnya Allah mengangkat banyak kaum dengan Kitab ini dan menghinakan banyak kaum dengan Kitab ini"}];
const data40 =[{ name:"Perumpamaan orang mukmin yang membaca Al-Qur’an adalah bagaikan buah utrujah, baunya wangi dan rasanya lezat"}];
const data41 =[{ name:"Al-Qur’an itu merupakan hujjah/argumen yang akan membela atau menuntutmu"}];
const data42 =[{ name:"Allah mempunyai sembilan puluh sembilan nama, seratus kurang satu, siapa yg mengihsha'nya (hafal, paham, mengamalkan, dan berdo’a dengannya), maka ia masuk surga"}];
const data43 =[{ name:"Tidak ada seorang pun yang lebih bersabar atas gangguan yang didengarnya daripada Allah, ada manusia mengaku Allah mempunyai anak, namun Allah masih juga memberi mereka kesehatan dan rezeki"}];
const data44 =[{ name:"Jika kalian berdo’a kepada Allah, maka seriuslah dalam berdoa, dan jangan sampai salah seorang di antara kalian berkata: “Jika Engkau berkehendak maka berilah aku”, sebab Allah sama sekali tak ada yang bisa memaksa"}];
const data45 =[{ name:"Tidak beriman salah seorang di antara kamu hingga dia mencintai untuk saudaranya apa yang dia cintai untuk dirinya sendiri"}];
const data46 =[{ name:"Siapa yang mengada-ada dalam urusan (agama) kami ini yang bukan (berasal) darinya, maka dia tertolak"}];
const data47 =[{ name:"Akan merasakan kelezatan iman, orang yang ridha/rela menjadikan Allah sebagai Rabbnya dan Islam sebagai agamanya serta Muhammad sebagai Rasulnya"}];
const data48 =[{ name:"Beramallah kamu sekalian, karena setiap orang dimudahkan terhadap sesuatu yang telah diciptakan untuknya"}];
const data49 =[{ name:"Sesungguhnya kelembutan tidaklah ada pada sesuatu kecuali dia akan menghiasinya, dan tidaklah ia dicabut dari sesuatu melainkan akan memperburuknya"}];
const data50 =[{ name:"Mudahkanlah, jangan mempersulit, berikan kabar gembira, janganlah membuat mereka lari"}];
const data51 =[{ name:"Sesungguhnya sebaik-baik kebajikan adalah seseorang yang menghubungkan tali persaudaraan dengan orang yang dicintai ayahnya"}];
const data52 =[{ name:"Melaknat orang yang beriman seperti halnya membunuhnya"}];
const data53 =[{ name:"Sesungguhnya seorang hamba berbicara dengan satu kalimat, lalu ia terjerumus ke dalam Neraka karenanya sejauh antara timur dan barat"}];
const data54 =[{ name:"Hak seorang muslim atas muslim lainnya ada lima yaitu: menjawab salam, menjenguk orang yang sakit, mengantar jenazah, memenuhi undangan, dan mendo’akannya ketika bersin"}];
const data55 =[{ name:"Apabila kamu berkata kepada temanmu pada hari Jum’at ‘diamlah!’ ketika imam berkhutbah, maka kamu telah melakukan hal yang sia-sia"}];
const data56 =[{ name:"Tidak takutkah orang yang mengangkat kepalanya mendahului imam, bahwa Allah akan mengubah kepalanya menjadi kepala keledai"}];
const data57 =[{ name:"Apabila manusia meninggal dunia maka amalnya terputus kecuali dari tiga perkara, shadaqah jariyah, ilmu yang bermanfaat, dan anak shalih yang mendo'akannya"}];
const data58 =[{ name:"Sedekah itu tidak mengurangi harta. Tidak ada orang yang memberi maaf kepada orang lain, melainkan Allah akan menambah kemuliaannya"}];
const data59 =[{ name:"Tidak akan masuk Surga orang yang tetangganya tidak aman dari kejahatannya"}];
const data60 =[{ name:"Sungguh Allah subhanallahu wa ta’alaa akan berkata pada Hari Kiamat, dimana orang yang saling mencintai karena kebesaran-Ku? Pada hari ini Aku akan menaungi mereka dengan naungan-Ku, dimana hari ini tidak ada naungan kecuali naungan-Ku"}];
const data61 =[{ name:"Tidaklah beriman salah seorang di antara kalian, sehingga aku lebih dicintai olehnya daripada ayahnya, anaknya, dan manusia semuanya"}];
const data62 =[{ name:"Tidaklah seorang muslim menanam satu tanaman kemudian tanaman itu dimakan burung atau manusia atau hewan ternak lainnya, kecuali baginya itu adalah sedekah"}];
const data63 =[{ name:"Tidaklah seorang muslim mendo’akan kebaikan untuk saudaranya yang tidak hadir (tanpa sepengetahuan dia), kecuali malaikat akan mengatakan, “dan untukmu seperti itu"}];
const data64 =[{ name:"Apabila kalian mendengar panggilan adzan maka ucapkan seperti apa yang diucapkan muadzin"}];
const data65 =[{ name:"Barangsiapa mengambil sejengkal tanah saudaranya secara dzalim, niscaya Allah akan menghimpitnya pada Hari Kiamat dengan tujuh lapis bumi"}];
const data66 =[{ name:"Barangsiapa yang menyerupai suatu kaum, maka ia termasuk golongan mereka"}];
const data67 =[{ name:"Sesungguhnya Allah tidak melihat kepada rupa kalian dan tidak pula kepada harta kalian, tetapi Allah melihat hati kalian dan amal kalian"}];
const data68 =[{ name:"Kalian tidak akan masuk surga sebelum beriman dan kalian tidak akan beriman sebelum saling mencintai, maukah aku tunjukkan kepada kalian suatu amalan yang membuat kalian saling mencintai? Yakni sebarkanlah salam di antara kalian"}];
const data69 =[{ name:"Hendaklah yang muda memberi salam kepada yang tua, yang berjalan kepada yang duduk dan (rombongan) yang sedikit kepada (rombongan) yang banyak"}];
const data70 =[{ name:"Janganlah kamu meremehkan suatu kebaikan apa pun itu, walau (sekedar) engkau bertemu saudaramu dengan wajah yang berseri-seri (ceria)"}];
const data71 =[{ name:"Jika seseorang dari kalian buang air kecil, janganlah sekali-kali memegang kemaluannya dengan tangan kanan, jangan bernafas (meniup) dalam bejana, dan jangan cebok dengan tangan kanan"}];
const data72 =[{ name:"Barangsiapa pergi atau pulang dari masjid, maka Allah menyiapkan baginya tempat tinggal di Surga setiap kali ia pergi dan pulang darinya."}];
const data73 =[{ name:"Dari Anas radhiyallahu ‘anhu. Ia berkata, bahwa Rasulullah shallallahu ‘alaihi wasallam pernah bersabda kepadaku, “Hai Anakku, apabila kamu menemui keluargamu, maka ucapkan salam agar berkah Allah turun kepadamu dan seluruh penghuni rumahmu"}];
const data74 =[{ name:"Perumpamaan orang yang mengingat Allah dengan yang tidak mengingat Allah seperti orang yang hidup dengan orang yang mati"}];
const data75 =[{ name:"Orang yang membaca Al-Qur’an dan ia pandai membacanya, maka ia akan bersama para malaikat yang mulia nan baik. Sedangkan orang yang membaca Al-Qur’an dengan terbata-bata dan ia merasa berat, maka ia akan mendapatkan dua pahala"}];
const data76 =[{ name:"Sesungguhnya Allah mempunyai keluarga yang terdiri dari manusia"}];
const data77 =[{ name:"Akan dikatakan kepada shahibul Qur’an, ‘Bacalah dan naiklah dan tartilkanlah sebagaimana kamu dahulu mentartilkannya di dunia, Karena tempatmu di surga ialah pada akhir ayat yang kamu baca"}];
const data78 =[{ name:"Barangsiapa yang mengucapkan Laailaahaillallaah (tidak ada tuhan yang berhak disembah selain Allah) dan mengingkari sesembahan selain Allah, maka terpeliharalah darah dan hartanya, dan hisabnya (terhadap urusan batinnya) terserah kepada Allah"}];
const data79 =[{ name:"Barangsiapa bertemu Allah dalam keadaan tidak menyekutukan-Nya dengan sesuatu, maka dia masuk surga, dan barangsiapa yang bertemu dengan-Nya dalam keadaan menyekutukan-Nya dengan sesuatu, maka ia akan masuk neraka"}];
const data80 =[{ name:"Jauhilah tujuh dosa besar yang membinasakan"}];
const data81 =[{ name:"Islam adalah engkau bersaksi bahwa tidak ada ilah (tuhan yang disembah) selain Allah, dan bahwa Nabi Muhammad adalah utusan Allah, engkau mendirikan shalat, menunaikan zakat, puasa Ramadhan dan pergi haji jika mampu"}];
const data82 =[{ name:"Iman adalah Engkau beriman kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya, rasul-rasul-Nya, hari akhir, dan engkau beriman kepada takdir yang baik maupun yang buruk"}];
const data83 =[{ name:"Ihsan adalah engkau beribadah kepada Allah seakan-akan engkau melihat-Nya, jika engkau tidak melihat-Nya maka Dia melihat engkau"}];
const data84 =[{ name:"Hendaklah kalian berpegang teguh terhadap ajaranku dan ajaran Khulafaurrasyidin yang mendapatkan petunjuk, gigitlah (genggamlah dengan kuat) dengan geraham. Hendaklah kalian menghindari perkara yang diada-adakan, karena semua perkara bid’ah adalah sesat "}];
const data85 =[{ name:"Iman itu memiliki tujuh puluh cabang (riwayat lain tujuh puluh tujuh cabang). Yang paling utama ialah Laa ilaaha illa Allah dan yang terendah ialah membuang duri dari jalan. Dan malu juga merupakan salah satu cabang iman"}];
const data86 =[{ name:"Barangsiapa yang terakhir perkataannya LAA ILAHA ILLALLAH maka niscaya ia masuk surga"}];
const data87 =[{ name:"Barangsiapa yang mau bersumpah maka hendaknya dia bersumpah dengan nama Allah atau dia diam saja"}];
const data88 =[{ name:"Allah telah menentukan takdir bagi semua makhluk lima puluh ribu tahun sebelum Allah menciptakan langit dan bumi.” Rasulullah menambahkan:”Dan arsy Allah itu berada di atas air"}];
const data89 =[{ name:"Apabila ada seseorang yang berkata kepada saudaranya, “Wahai kafir”, maka sungguh ucapan itu akan kembali kepada salah satunya"}];
const data90 =[{ name:"Barangsiapa memerangi kami maka ia tidak termasuk golongan kami, dan barangsiapa berbuat curang terhadap kami maka ia tidak termasuk golongan kami"}];
const data91 =[{ name:"Talqinlah (ajarilah) orang yang mau meninggal dunia dengan kalimat LAA ILAHA ILLALLAH"}];
const data92 =[{ name:"Janganlah kalian mencaci orang yang telah meninggal dunia, karena sesungguhnya mereka telah sampai kepada apa yang mereka kerjakan"}];
const data93 =[{ name:"Senantiasa Jibril berwasiat kepadaku tentang tetangga, sehingga aku mengira bahwa dia akan memberikan warisan untuknya"}];
const data94 =[{ name:"Sesungguhnya semua amalan tergantung niatnya, dan bagi manusia apa yang mereka niatkan"}];
const data95 =[{ name:"Dari Umar bin Abi Salamah berkata, “Semasa aku masih di bawah pengasuhan Rasulullah shallalahu alaihi wa sallam. Tanganku (ketika makan) menjangkau kemana-mana di dalam hidangan"}];
const data96 =[{ name:"Dari Abu Hurairah radhiyallahu 'anhu bahwa Rasulullah shallalahu alaihi wa sallam bersabda, “Neraka itu diliputi dengan sesuatu yang menyenangkan, dan Surga itu diliputi dengan sesuatu yang dibenci"}];
const data97 =[{ name:"Dari Abu Hurairah radhiyallahu 'anhu bahwa Rasulullah shallalahu alaihi wa sallam bersabda, “Dunia itu penjara bagi orang mukmin dan surga bagi orang kafir"}];
const data98 =[{ name:"Dari Aisyah radhiyallahu 'anha bahwa Rasulullah shallalahu alaihi wa sallam bersabda, Amalan yang paling dicintai oleh Allah ta'ala adalah yang berkesinambungan (konsisten) meskipun sedikit"}];
const data99 =[{ name:"Dari Aisyah radhiyallahu 'anha, ia berkata, Adalah Nabi shallalahu alaihi wa sallam berdzikir kepada Allah pada setiap waktunya"}];
const data100 =[{ name:"Dari Abu Hurairah radhiyallahu 'anhu, bahwa Rasulullah shallalahu alaihi wa sallam bersabda, Barangsiapa bersholawat kepadaku satu kali, maka Allah akan bersholawat kepadanya sepuluh kali"}];
const data101=[{ name:"Dari Abu Hurairah radhiyallahu 'anhu, bahwa Rasulullah shallalahu alaihi wa sallam bersabda, Barangsiapa menempuh suatu jalan dalam rangka menuntut ilmu, niscaya Allah akan memudahkan baginya jalan menuju Surga."}];
const data102=[{ name:"Dari Jabir bin Abdillah radhiyallahu 'anhu, ia berkata, “Saya mendengar Nabi shallalahu alaihi wa sallam bersabda, “Setiap hamba akan dibangkitkan (pada hari kiamat) dalam keadaan ia mati di atasnya"}];
const data103=[{ name:"Dari Abu Hurairah radhiyallahu 'anhu, bahwa Rasulullah shallalahu alaihi wa sallam bersabda, “Keadaan yang paling dekat antara seorang hamba dengan Tuhannya adalah ketika sujud, maka perbanyaklah do'a"}];


  const [input, setInput] = useState("");



  return (
    <View style={{flex:1, backgroundColor: theme.backgroundhadist}}>
  



<ScrollView >

<View style={{padding:10,}}>

   
    <TextInput value={input}  onChangeText={(text) => setInput(text)} style={{backgroundColor:theme.nexttouch, borderRadius:10, color:theme.color, fontFamily:'Poppins-Regular', paddingLeft:10}}  placeholder="Jauhilah tujuh dosa besar yang..."  placeholderTextColor={theme.textborder}/>
      


</View>
<TouchableOpacity  onPress={()=> navigation.navigate("HalamanHadist1")}>
<SearchFilter   data={data1} input={input}  setInput={setInput} />
</TouchableOpacity>

<TouchableOpacity   onPress={()=> navigation.navigate("HalamanHadist2")}>
<SearchFilter   data={data2} input={input}  setInput={setInput} />
</TouchableOpacity>


<TouchableOpacity   onPress={()=> navigation.navigate("HalamanHadist3")}>
<SearchFilter data={data3 } input={input}  setInput={setInput} />
</TouchableOpacity>

<TouchableOpacity   onPress={()=> navigation.navigate("HalamanHadist4")}>
<SearchFilter data={data4} input={input}  setInput={setInput} />
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist5")}>
<SearchFilter data={data5} input={input}  setInput={setInput} />
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist6")}>
<SearchFilter data={data6} input={input}  setInput={setInput} />
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist7")}>
<SearchFilter data={data7} input={input}  setInput={setInput} />
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist8")}>
<SearchFilter data={data8} input={input}  setInput={setInput} />
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist9")}>
<SearchFilter data={data9} input={input}  setInput={setInput} />
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist10")}>
<SearchFilter data={data10} input={input}  setInput={setInput} />
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist11")}>
<SearchFilter data={data11} input={input}  setInput={setInput} />
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist12")}>
<SearchFilter data={data12} input={input}  setInput={setInput} />
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist13")}>
<SearchFilter data={data13} input={input}  setInput={setInput} />
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist14")}>
<SearchFilter data={data14} input={input}  setInput={setInput} />
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist15")}>
<SearchFilter data={data15} input={input}  setInput={setInput} />
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist16")}>
<SearchFilter data={data16} input={input}  setInput={setInput} />
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist17")}>
<SearchFilter data={data17} input={input}  setInput={setInput} />
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist18")}>
<SearchFilter data={data18} input={input}  setInput={setInput} />
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist19")}>
<SearchFilter data={data19} input={input}  setInput={setInput} />
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist20")}>
<SearchFilter data={data21} input={input}  setInput={setInput} />
</TouchableOpacity>


<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist21")}>
<SearchFilter data={data22} input={input}  setInput={setInput} />
</TouchableOpacity>


<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist22")}>
<SearchFilter data={data23} input={input}  setInput={setInput} />
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist23")}>
<SearchFilter data={data24} input={input}  setInput={setInput} />
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist24")}>
<SearchFilter data={data25} input={input}  setInput={setInput} />
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist25")}>
<SearchFilter data={data26} input={input}  setInput={setInput} />
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist26")}>
<SearchFilter data={data27} input={input}  setInput={setInput} />
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist27")}>
<SearchFilter data={data28} input={input}  setInput={setInput} />
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist28")}>
<SearchFilter data={data29} input={input}  setInput={setInput} />
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist29")}>
<SearchFilter data={data30} input={input}  setInput={setInput} />
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist30")}>
<SearchFilter data={data31} input={input}  setInput={setInput} />
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist31")}>
<SearchFilter data={data32} input={input}  setInput={setInput} />
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist32")}>
<SearchFilter data={data33} input={input}  setInput={setInput} />
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist33")}>
<SearchFilter data={data34} input={input}  setInput={setInput} />
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist34")}>
<SearchFilter data={data35} input={input}  setInput={setInput} />
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist35")}>
<SearchFilter data={data36} input={input}  setInput={setInput} />
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist36")}>
<SearchFilter data={data37} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist37")}>
<SearchFilter data={data38} input={input}  setInput={setInput} />
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist38")}>
<SearchFilter data={data39} input={input}  setInput={setInput} />
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist39")}>
<SearchFilter data={data40} input={input}  setInput={setInput} />
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist40")}>
<SearchFilter data={data41} input={input}  setInput={setInput} />
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist41")}>
<SearchFilter data={data42} input={input}  setInput={setInput} />
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist42")}>
<SearchFilter data={data43} input={input}  setInput={setInput} />
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist43")}>
<SearchFilter data={data44} input={input}  setInput={setInput} />
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist44")}>
<SearchFilter data={data45} input={input}  setInput={setInput} />
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist45")}>
<SearchFilter data={data46} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist46")}>
<SearchFilter data={data47} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist47")}>
<SearchFilter data={data48} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist48")}>
<SearchFilter data={data49} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist49")}>
<SearchFilter data={data50} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist50")}>
<SearchFilter data={data51} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist51")}>
<SearchFilter data={data52} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist52")}>
<SearchFilter data={data53} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist53")}>
<SearchFilter data={data54} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist54")}>
<SearchFilter data={data55} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist55")}>
<SearchFilter data={data56} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist56")}>
<SearchFilter data={data57} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist57")}>
<SearchFilter data={data58} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist58")}>
<SearchFilter data={data59} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist59")}>
<SearchFilter data={data60} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist60")}>
<SearchFilter data={data61} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist61")}>
<SearchFilter data={data62} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist62")}>
<SearchFilter data={data63} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist63")}>
<SearchFilter data={data64} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist64")}>
<SearchFilter data={data65} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist65")}>
<SearchFilter data={data66} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist66")}>
<SearchFilter data={data67} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist67")}>
<SearchFilter data={data68} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist68")}>
<SearchFilter data={data69} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist69")}>
<SearchFilter data={data70} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist70")}>
<SearchFilter data={data71} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist71")}>
<SearchFilter data={data72} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist72")}>
<SearchFilter data={data73} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist73")}>
<SearchFilter data={data74} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist74")}>
<SearchFilter data={data75} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist75")}>
<SearchFilter data={data76} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist76")}>
<SearchFilter data={data77} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist77")}>
<SearchFilter data={data78} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist78")}>
<SearchFilter data={data79} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist79")}>
<SearchFilter data={data80} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist80")}>
<SearchFilter data={data81} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist81")}>
<SearchFilter data={data82} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist82")}>
<SearchFilter data={data83} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist83")}>
<SearchFilter data={data84} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist84")}>
<SearchFilter data={data85} input={input}  setInput={setInput} />

</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist85")}>
<SearchFilter data={data86} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist86")}>
<SearchFilter data={data87} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist87")}>
<SearchFilter data={data88} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist88")}>
<SearchFilter data={data89} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist89")}>
<SearchFilter data={data90} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist90")}>
<SearchFilter data={data91} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist91")}>
<SearchFilter data={data92} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist92")}>
<SearchFilter data={data93} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist93")}>
<SearchFilter data={data94} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist94")}>
<SearchFilter data={data95} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist95")}>
<SearchFilter data={data96} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist96")}>
<SearchFilter data={data97} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist97")}>
<SearchFilter data={data98} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist98")}>
<SearchFilter data={data99} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist99")}>
<SearchFilter data={data100} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist100")}>
<SearchFilter data={data101} input={input}  setInput={setInput} />
</TouchableOpacity>

<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist101")}>
<SearchFilter data={data102} input={input}  setInput={setInput} />
</TouchableOpacity>
<TouchableOpacity onPress={()=> navigation.navigate("HalamanHadist102")}>
<SearchFilter data={data103} input={input}  setInput={setInput} />
</TouchableOpacity>






</ScrollView>





    </View>
  )
}

export default SearchJuz