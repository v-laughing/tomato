/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8bf5ee241d867e0f15841eb604f50153"
  },
  {
    "url": "assets/css/0.styles.950824b2.css",
    "revision": "66253171d8c0d733d21b848c8fd0bbb4"
  },
  {
    "url": "assets/img/011f3ef6-d824-4d43-8b2c-36dab8eaaa72-1.c2350789.png",
    "revision": "c23507898b611f04e4fa110e1108144d"
  },
  {
    "url": "assets/img/014fbc4d-d873-4a12-b160-867ddaed9807.c601d088.jpg",
    "revision": "c601d0884193d6b443a2113f1b8945d1"
  },
  {
    "url": "assets/img/02943a90-7dd4-4e9a-9325-f8217d3cc54d.4bf96136.jpg",
    "revision": "4bf961363fe7d22178b75446aa2b79ff"
  },
  {
    "url": "assets/img/02a1fbfd-7a9d-4114-95df-ca2445587a1f.d385f99b.jpg",
    "revision": "d385f99bcd6464fb14db0597e4d3914e"
  },
  {
    "url": "assets/img/047faac4-a368-4565-8331-2b66253080d3.ffd1805f.jpg",
    "revision": "ffd1805fccc9c3c5b9d08e561d7629af"
  },
  {
    "url": "assets/img/051e436c-0e46-4c59-8f67-52d89d656182.fd84f9ff.png",
    "revision": "fd84f9ffcb35287d0856421ba840e032"
  },
  {
    "url": "assets/img/067b310c-6877-40fe-9dcf-10654e737485.9ae6ee6a.jpg",
    "revision": "9ae6ee6a0db4c54ed7a653b9bceed817"
  },
  {
    "url": "assets/img/094e3ac8-e080-4e94-9f0a-64c25abc695e.1a81aa18.gif",
    "revision": "1a81aa184600e7e3f40057a7a0a52a5b"
  },
  {
    "url": "assets/img/0ad9f7ba-f408-4999-a77a-9b73562c9088.b16b0904.gif",
    "revision": "b16b0904f6dc2fbf3aa84ee43a3deaf0"
  },
  {
    "url": "assets/img/0c6f9930-8704-4a54-af23-19f9ca3e48b0.211d2a6b.jpg",
    "revision": "211d2a6bc9ff701b2028293d360285ee"
  },
  {
    "url": "assets/img/0dae7e93-cfd1-4bd3-97e8-325b032b716f-1572687622947.800c015f.gif",
    "revision": "800c015fdcbe7d0e5a1d2b7f06d3783d"
  },
  {
    "url": "assets/img/0dae7e93-cfd1-4bd3-97e8-325b032b716f.800c015f.gif",
    "revision": "800c015fdcbe7d0e5a1d2b7f06d3783d"
  },
  {
    "url": "assets/img/0dbc4f7d-05c9-4aae-8065-7b7ea7e9709e.cad84e73.gif",
    "revision": "cad84e7372e38e6a909fc698ebedc243"
  },
  {
    "url": "assets/img/0dd2d40a-5b2b-4d45-b176-e75a4cd4bdbf.19e71ada.png",
    "revision": "19e71ada3eedf86aad65a7e134f519b7"
  },
  {
    "url": "assets/img/0f399a9f-1351-4b2d-b8a4-2ebe82b1a703.0c614d2e.jpg",
    "revision": "0c614d2e0551b71c20950b2243a6601f"
  },
  {
    "url": "assets/img/0f8d178b-52d8-491b-9dfd-41e05a952578.931aeb85.gif",
    "revision": "931aeb85e586be282460e416933e04fb"
  },
  {
    "url": "assets/img/101550414151983.a9116fc2.gif",
    "revision": "a9116fc2718b3e760e04b0153dc58961"
  },
  {
    "url": "assets/img/11-1.034d4aa8.png",
    "revision": "034d4aa879e4a8cf155cf0c2c25646f3"
  },
  {
    "url": "assets/img/11-2.217f5403.png",
    "revision": "217f5403733382f932ad376b53aaaa4b"
  },
  {
    "url": "assets/img/11-3.da3a962a.png",
    "revision": "da3a962a17cd26954b001c27fcc51a1b"
  },
  {
    "url": "assets/img/11-4.58108010.png",
    "revision": "58108010bccb3caee94040cbbc1a95e5"
  },
  {
    "url": "assets/img/11-5.d77d7078.png",
    "revision": "d77d7078e6321503f5c55d3e8d96ae3e"
  },
  {
    "url": "assets/img/11-6.457453be.png",
    "revision": "457453be745c2d5bb4031ef4c6bdae6d"
  },
  {
    "url": "assets/img/11-7.0120b253.png",
    "revision": "0120b253e7da69da5ca31cf06aae5008"
  },
  {
    "url": "assets/img/11-8.947628e0.png",
    "revision": "947628e0940046e05c16fae19c992d10"
  },
  {
    "url": "assets/img/111521118015898.83662c9b.gif",
    "revision": "83662c9b61e6591c371f27a838c00e1d"
  },
  {
    "url": "assets/img/111521118445538.508122a2.gif",
    "revision": "508122a2f5cf603358d0e13e519c3727"
  },
  {
    "url": "assets/img/111521118483039.b379b76c.gif",
    "revision": "b379b76cd0a2e12c44e45d66f9f640cd"
  },
  {
    "url": "assets/img/111521118640738.c149bfd1.gif",
    "revision": "c149bfd1560369635d47650d3dfabb09"
  },
  {
    "url": "assets/img/111521119203347.2817dccb.gif",
    "revision": "2817dccb8da5a59439f58e211ae7c17b"
  },
  {
    "url": "assets/img/111521119368714.4306b9b7.gif",
    "revision": "4306b9b7a8de676392ea00b780f819d8"
  },
  {
    "url": "assets/img/111550414182638.e9760400.gif",
    "revision": "e97604005bbe893e3e3367c8feab047f"
  },
  {
    "url": "assets/img/11b27de5-5a9d-45e4-95cc-417fa3ad1d38.2fe1d3f2.jpg",
    "revision": "2fe1d3f22c8f0a728598697286eaa14c"
  },
  {
    "url": "assets/img/12-1.2c1101ff.png",
    "revision": "2c1101ff2b4d3a7e0491a248c17f7ed5"
  },
  {
    "url": "assets/img/12-2.f60c8bb0.png",
    "revision": "f60c8bb0a393f390fb5fe787fadaf8dd"
  },
  {
    "url": "assets/img/12-3.8ce100bc.png",
    "revision": "8ce100bce6b03d02cab470724c98a6d6"
  },
  {
    "url": "assets/img/12-4.b8481c6e.png",
    "revision": "b8481c6ecaa92a9f556c3f94ea35bea4"
  },
  {
    "url": "assets/img/12-5.fc69ff8f.png",
    "revision": "fc69ff8f021f5769cfadfe8ca79e9bb2"
  },
  {
    "url": "assets/img/12-6.494017d6.png",
    "revision": "494017d66193d9c5e6ace076ac6aa3f2"
  },
  {
    "url": "assets/img/12-7.a764cd24.png",
    "revision": "a764cd244dddab5988d7d0ce81e3535c"
  },
  {
    "url": "assets/img/12-8.9a0979de.png",
    "revision": "9a0979ded7db7f2d1802d30459d82c70"
  },
  {
    "url": "assets/img/1202b2d6-9469-4251-bd47-ca6034fb6116.bd994a00.png",
    "revision": "bd994a00ff32e89dd98eeae5d3198c78"
  },
  {
    "url": "assets/img/14389ea4-8d96-4e96-9f76-564ca3324c1e.a9a348f7.png",
    "revision": "a9a348f7c52bcb6ba046e8b8c6442e04"
  },
  {
    "url": "assets/img/1492928416812_4.cada9038.png",
    "revision": "cada9038fe8d2e6951fce3ca32a25b12"
  },
  {
    "url": "assets/img/1492929000361_5.6ed5242e.png",
    "revision": "6ed5242ecfce91bc0611babacf774291"
  },
  {
    "url": "assets/img/1492929553651_7.80f8b28f.png",
    "revision": "80f8b28f3f9540e7b8afe6fa783f90d7"
  },
  {
    "url": "assets/img/1556770b-8c01-4681-af10-46f1df69202c.b216f659.jpg",
    "revision": "b216f659f1ac02ff8636c04b55db0977"
  },
  {
    "url": "assets/img/15851555-5abc-497d-ad34-efed10f43a6b.15cb81ce.png",
    "revision": "15cb81cec6c768a3f8c4f547a94a1adf"
  },
  {
    "url": "assets/img/1a9977e4-2f5c-49a6-aec9-f3027c9f46a7.7514c8bb.png",
    "revision": "7514c8bb695f36fbeb177ae5df7495c1"
  },
  {
    "url": "assets/img/2_14_microkernelArchitecture.72331340.jpg",
    "revision": "72331340b1279112eabbbff91a9e8508"
  },
  {
    "url": "assets/img/2-1.9743052d.png",
    "revision": "9743052d2eb5fa5f4cfdd437462e9b16"
  },
  {
    "url": "assets/img/2-2.0080f210.png",
    "revision": "0080f210be9a6dd5190b635f8895e07f"
  },
  {
    "url": "assets/img/22fda4ae-4dd5-489d-ab10-9ebfdad22ae0.9761f39b.jpg",
    "revision": "9761f39b4c3313112dacf09fa609c075"
  },
  {
    "url": "assets/img/23219e4c-9fc0-4051-b33a-2bd95bf054ab.8598acb7.jpg",
    "revision": "8598acb77cb95719bd01a51fe70dbcb2"
  },
  {
    "url": "assets/img/23b9d625-ef28-42b5-bb22-d7aedd007e16.123293dc.jpg",
    "revision": "123293dc12a8fce90c3432c8dc2d378a"
  },
  {
    "url": "assets/img/23ba890e-e11c-45e2-a20c-64d217f83430.75d54050.png",
    "revision": "75d540501b4979121d3834bca9bad183"
  },
  {
    "url": "assets/img/2719067e-b299-4639-9065-bed6729dbf0b.d7dc0987.png",
    "revision": "d7dc0987f82effcd38d61764fad8b1a2"
  },
  {
    "url": "assets/img/278fe431-af88-4a95-a895-9c3b80117de3.ec2c338f.jpg",
    "revision": "ec2c338fe1833becd6fe602d0508141d"
  },
  {
    "url": "assets/img/2a1f8b0f-1dd7-4409-b177-a381c58066ad.3047ff24.png",
    "revision": "3047ff2476ad98bb808191d79ba4e8b0"
  },
  {
    "url": "assets/img/2b8bfd57-b4d1-4a75-bfb0-bcf1fba4014a.7b05951a.png",
    "revision": "7b05951ab9cf32bc92c4881f96547d99"
  },
  {
    "url": "assets/img/2bcc58ad-bf7f-485c-89b5-e7cafc211ce2.b76d9a55.jpg",
    "revision": "b76d9a55a18c76ae345902a7ea501381"
  },
  {
    "url": "assets/img/3-1.24de7795.png",
    "revision": "24de779561a6413fe9d16561caadff83"
  },
  {
    "url": "assets/img/3-2.15d95cb5.png",
    "revision": "15d95cb57fa588e7389a4053a54ef9e6"
  },
  {
    "url": "assets/img/3-3.125d03a1.png",
    "revision": "125d03a1866910072500e1074a33a533"
  },
  {
    "url": "assets/img/3-4.84327ab3.png",
    "revision": "84327ab327c0d07eca39d5d5d1148f71"
  },
  {
    "url": "assets/img/3-5.e776868c.png",
    "revision": "e776868c576c2736dade7f4b8f9d3d93"
  },
  {
    "url": "assets/img/3-6.5cbf58e2.png",
    "revision": "5cbf58e2d3c7f0662d0ed6d01b97bc62"
  },
  {
    "url": "assets/img/3-7.658eb0c6.png",
    "revision": "658eb0c65a5a2b8daf0518b284244654"
  },
  {
    "url": "assets/img/3-9.437a8447.png",
    "revision": "437a8447f104d2158b5ec694fa3283f1"
  },
  {
    "url": "assets/img/31b7e8de-ed11-4f69-b5fd-ba454120ac31.23df9ef5.jpg",
    "revision": "23df9ef5103e92fa7110d148ffeed177"
  },
  {
    "url": "assets/img/31d9adce-2af8-4754-8386-0aabb4e500b0.4beb6ffc.png",
    "revision": "4beb6ffc1608f22e830923f56a5eb715"
  },
  {
    "url": "assets/img/335fe19c-4a76-45ab-9320-88c90d6a0d7e.a38ff8ca.png",
    "revision": "a38ff8caa212b9ded22d0d642bad7fc1"
  },
  {
    "url": "assets/img/35253fa4-f60a-4e3b-aaec-8fc835aabdac.f96238de.gif",
    "revision": "f96238de82b08c2f0779641ee275ed91"
  },
  {
    "url": "assets/img/35a8c711-0dc0-4613-95f3-be96c6c6e104.792eec1b.gif",
    "revision": "792eec1bf5a2e627ef3ae67406fa6a8e"
  },
  {
    "url": "assets/img/379444c9-f1d1-45cd-b7aa-b0c18427d388.fd31fa30.jpg",
    "revision": "fd31fa30daacbcbb415b35795f70ce6e"
  },
  {
    "url": "assets/img/390c913b-5f31-444f-bbdb-2b88b688e7ce.50af6e00.jpg",
    "revision": "50af6e009784845b2cb645b1ab0b8336"
  },
  {
    "url": "assets/img/3d5b828e-5c4d-48d8-a440-281e4a8e1c92.2ba9f19f.png",
    "revision": "2ba9f19fdc1ceda5ec7d33f528533b13"
  },
  {
    "url": "assets/img/3ea280b5-be7d-471b-ac76-ff020384357c.aaa9b59f.gif",
    "revision": "aaa9b59f2d5f8f9c638bfcf96d5f3654"
  },
  {
    "url": "assets/img/4-1.1bc75b80.png",
    "revision": "1bc75b80e6cc21a0ae749754bb8bf9e8"
  },
  {
    "url": "assets/img/4-2.477265a3.png",
    "revision": "477265a3d6eec7e020dc51a97907fe28"
  },
  {
    "url": "assets/img/4-3.3092780f.png",
    "revision": "3092780f7643eadc12383695880f1642"
  },
  {
    "url": "assets/img/437cb54c-5970-4ba9-b2ef-2541f7d6c81e.eafe6372.gif",
    "revision": "eafe6372da8beae23965e0350f68d5ec"
  },
  {
    "url": "assets/img/43d323ac-9f07-4e4a-a315-4eaf8c38766c.b101e8a3.jpg",
    "revision": "b101e8a3bf1d1a97a0dad9e8b3319ff4"
  },
  {
    "url": "assets/img/44d33643-1004-43a3-b99a-4d688a08d0a1.47cf56eb.png",
    "revision": "47cf56eb40f7d6b51702db8017b6ff50"
  },
  {
    "url": "assets/img/476329d4-e2ef-4f7b-8ac9-a52a6f784600.2876029c.png",
    "revision": "2876029ca807bde0916b436215f43eb1"
  },
  {
    "url": "assets/img/47d98583-8bb0-45cc-812d-47eefa0a4a40.aa1fc122.jpg",
    "revision": "aa1fc12212b7e6d3585b3b057fdafa31"
  },
  {
    "url": "assets/img/49d2adc1-b28a-44bf-babb-d44993f4a2e3.90c8c1c7.gif",
    "revision": "90c8c1c7d3aed5e0874bc09d4cce3453"
  },
  {
    "url": "assets/img/4ab87717-e264-4232-825d-8aaf08f14e8b.00498410.jpg",
    "revision": "00498410aa268dec6416e00683d3d32d"
  },
  {
    "url": "assets/img/4c457532-550b-4eca-b881-037b84b4934b.acd43cda.jpg",
    "revision": "acd43cdabc8146741ef85338e51b0b9b"
  },
  {
    "url": "assets/img/4cf711a8-7ab2-4152-b85c-d5c226733807.fb25bb47.png",
    "revision": "fb25bb47be56baf5eda32b9a50cdd358"
  },
  {
    "url": "assets/img/5-1.08d322a1.png",
    "revision": "08d322a1463d832440786602c53232be"
  },
  {
    "url": "assets/img/5-2.ecaa5ce1.png",
    "revision": "ecaa5ce156842d99e81771d3accfe924"
  },
  {
    "url": "assets/img/5-3.e01b75cc.png",
    "revision": "e01b75cc72121940313e0aba326694aa"
  },
  {
    "url": "assets/img/50831a6f-2777-46ea-a571-29f23c85cc21.f19d985f.jpg",
    "revision": "f19d985f9b2d5a63d11cd6fc9066ea9f"
  },
  {
    "url": "assets/img/51e2ed95-65b8-4ae9-8af3-65602d452a25.cc8e319f.jpg",
    "revision": "cc8e319fdb5ba49d1f64998e85ba9dda"
  },
  {
    "url": "assets/img/55dc4e84-573d-4c13-a765-52ed1dd251f9.fe9d48e9.png",
    "revision": "fe9d48e93a18fb595ccc4e13b7a6c96c"
  },
  {
    "url": "assets/img/5f5c22d5-9c0e-49e1-b5b0-6cc7032724d4.b29547de.png",
    "revision": "b29547dee410c901c718fb1a0733cef6"
  },
  {
    "url": "assets/img/6-1.e61c2dda.png",
    "revision": "e61c2dda7761e67bc6d75c2143b5d05e"
  },
  {
    "url": "assets/img/6-2.a2e38545.png",
    "revision": "a2e385459253b732e21d81c01d1b05fc"
  },
  {
    "url": "assets/img/6019b2db-bc3e-4408-b6d8-96025f4481d6.526a760a.png",
    "revision": "526a760a355ca94a1263dbb99e5899fb"
  },
  {
    "url": "assets/img/60c4a44c-7829-4242-b3a1-26c3b513aaf0.231a6b0f.gif",
    "revision": "231a6b0fe52ab24fcd061cf570fe50c1"
  },
  {
    "url": "assets/img/62e77997-6957-4b68-8d12-bfd609bb2c68.61cc0271.jpg",
    "revision": "61cc02718498f89439d43de60650edda"
  },
  {
    "url": "assets/img/63c8ffea-a9f2-4ebe-97d1-d71be71246f9.fc127e60.jpg",
    "revision": "fc127e60a05e87f50e469cd6fe7d9159"
  },
  {
    "url": "assets/img/643b6f18-f933-4ac5-aa7a-e304dbd7fe49.91f19b25.gif",
    "revision": "91f19b25dfad8c40f58e7f0ad120d3f2"
  },
  {
    "url": "assets/img/66192382-558b-4b05-a35d-ac4a2b1a9811.8f9e192a.jpg",
    "revision": "8f9e192a3088a3191940f352bec05910"
  },
  {
    "url": "assets/img/6980aef0-debe-4b4b-8da5-8b1befbc1408.3a357aa5.gif",
    "revision": "3a357aa51f518a79f740282e310a623d"
  },
  {
    "url": "assets/img/6b833bc2-517a-4270-8a5e-0a5f6df8cd96.0d43ee1e.png",
    "revision": "0d43ee1e640714393d8b0581cfd99c00"
  },
  {
    "url": "assets/img/7002c01b-1ed5-475a-9e5f-5fc8a4cdbcc0.4fc3f365.jpg",
    "revision": "4fc3f36584574dc3ccaa6cdd5d4a8248"
  },
  {
    "url": "assets/img/7008dc2b-6f13-4174-a516-28b2d75b0152.0778eb2b.gif",
    "revision": "0778eb2b5a4731a8b6f764b78fc0b960"
  },
  {
    "url": "assets/img/71550414107576.c5716777.gif",
    "revision": "c571677785e2d616c058eff45bb3eccb"
  },
  {
    "url": "assets/img/7818c574-97a8-48db-8e62-8bfb030b02ba.82e9bae7.png",
    "revision": "82e9bae7b79ab5a331263707f302ab24"
  },
  {
    "url": "assets/img/79c6f036-bde6-4393-85a3-ef36a0327bd2.4f4a453c.png",
    "revision": "4f4a453c33acb49bfccd18d101bce4a8"
  },
  {
    "url": "assets/img/7a29acce-f243-4914-9f00-f2988c528412.4072191d.jpg",
    "revision": "4072191d63b7caddf998cb2fe821db27"
  },
  {
    "url": "assets/img/7a85e285-e152-4116-b6dc-3fab27ba9437.61e72571.jpg",
    "revision": "61e72571f50fe64d2b175e563a958b90"
  },
  {
    "url": "assets/img/7b281b1e-0595-402b-ae35-8c91084c33c1.b474cff8.png",
    "revision": "b474cff84a3523ae4fac997c7daeefc3"
  },
  {
    "url": "assets/img/7b3efa99-d306-4982-8cfb-e7153c33aab4.07a03d4d.png",
    "revision": "07a03d4da61ff30b82bcff25256c3c23"
  },
  {
    "url": "assets/img/7bd202a7-93d4-4f3a-a878-af68ae25539a.cc646fa6.png",
    "revision": "cc646fa6b311a937a1c795d0f5100dd9"
  },
  {
    "url": "assets/img/7c54de21-e2ff-402e-bc42-4037de1c1592.77db1027.png",
    "revision": "77db1027e909ec6163894226247da7a9"
  },
  {
    "url": "assets/img/8-1.d9a7e4d7.png",
    "revision": "d9a7e4d7f5d104297caba941001205bd"
  },
  {
    "url": "assets/img/8-2.b9ca27fd.png",
    "revision": "b9ca27fd9836ff74c494e3b5c47430e8"
  },
  {
    "url": "assets/img/8-4.ffa93066.png",
    "revision": "ffa9306652bb68067144574352f5ad4b"
  },
  {
    "url": "assets/img/8-5.13a44fc3.png",
    "revision": "13a44fc3c04809e103f72876ad97bcb8"
  },
  {
    "url": "assets/img/8006a450-6c2f-498c-a928-c927f758b1d0.d6129289.png",
    "revision": "d61292895db07e1bc0ccf8eb6cc1d0fb"
  },
  {
    "url": "assets/img/807f4258-dba8-4c54-9c3c-a707c7ccffa2.cc337f66.jpg",
    "revision": "cc337f668beb09747c5b0f19b5aff345"
  },
  {
    "url": "assets/img/81538cd5-1bcf-4e31-86e5-e198df1e013b.1de539c4.jpg",
    "revision": "1de539c45e97c39d6369985f5c07d36c"
  },
  {
    "url": "assets/img/83d466bd-946b-4430-854a-cf7b0696d4c8.5792e8b9.jpg",
    "revision": "5792e8b969ac843ac1b04017cd0bfce2"
  },
  {
    "url": "assets/img/8441b2c4-dca7-4d6b-8efb-f22efccaf331.c3a0c699.png",
    "revision": "c3a0c699a59b8418037eb040ee8a1430"
  },
  {
    "url": "assets/img/8442519f-0b4d-48f4-8229-56f984363c69.8b780e78.png",
    "revision": "8b780e78a0af2dc2c728245a69cc590c"
  },
  {
    "url": "assets/img/84a5b15a-86c5-4d8e-9439-d9fd5a4699a1.47d5395e.jpg",
    "revision": "47d5395e871ace9d9acd0eec67911ac9"
  },
  {
    "url": "assets/img/85c05fb1-5546-4c50-9221-21f231cdc8c5.b6dcbf8d.jpg",
    "revision": "b6dcbf8d4b16bc4f6d9b63e20cb473d9"
  },
  {
    "url": "assets/img/86e6a91d-a285-447a-9345-c5484b8d0c47.2e9e39c4.png",
    "revision": "2e9e39c426a74a61ce17a52fe7bd7d07"
  },
  {
    "url": "assets/img/89292ae1-5f13-44dc-b508-3f035e80bf89.7d175ab5.png",
    "revision": "7d175ab52123e7f573febb1db5dacd2b"
  },
  {
    "url": "assets/img/8996a537-7c4a-4ec8-a3b7-7ef1798eae26.fa3d063c.png",
    "revision": "fa3d063cb9699fa357de03acee03389d"
  },
  {
    "url": "assets/img/8edc5164-810b-4cc5-bda8-2a2c98556377.b7fd8ffa.jpg",
    "revision": "b7fd8ffaf037c109953da10910425a03"
  },
  {
    "url": "assets/img/9-10.121b9e3d.png",
    "revision": "121b9e3d94126ae88f2a949b937fc0b0"
  },
  {
    "url": "assets/img/9-11.31201e0a.png",
    "revision": "31201e0a0018dd7dd529340c40e95e1e"
  },
  {
    "url": "assets/img/9-12.777f19a1.png",
    "revision": "777f19a1fb9a3c74f5f5c632cd759c60"
  },
  {
    "url": "assets/img/9-13.73e7f89a.png",
    "revision": "73e7f89acd57bfb4c5f3824bf2d67530"
  },
  {
    "url": "assets/img/9-14.567fec29.png",
    "revision": "567fec29a82388b07baec4b6742ab86c"
  },
  {
    "url": "assets/img/9-15.a4bf5b4b.png",
    "revision": "a4bf5b4bfbfe8673993919a22df26d83"
  },
  {
    "url": "assets/img/9-16.3cd336c3.png",
    "revision": "3cd336c3be38ed1d0c151f84c2d93fd1"
  },
  {
    "url": "assets/img/9-17.fe82c291.png",
    "revision": "fe82c2912ad71fe8e57ce4489b1307e2"
  },
  {
    "url": "assets/img/9-18.d0ad15af.png",
    "revision": "d0ad15afc0b72b8c8cf9a929405909e7"
  },
  {
    "url": "assets/img/9-19.bb3490af.png",
    "revision": "bb3490afff56f3d9cfec3746bc9a3a78"
  },
  {
    "url": "assets/img/9-2.e19666a3.png",
    "revision": "e19666a3752baa752db8e3a05811c259"
  },
  {
    "url": "assets/img/9-20.ba054928.png",
    "revision": "ba05492884b7ac0e33edac82e4fdd69e"
  },
  {
    "url": "assets/img/9-21.656e8a34.png",
    "revision": "656e8a3403a77d97d22b611ade27b01f"
  },
  {
    "url": "assets/img/9-3.a7726e82.png",
    "revision": "a7726e82355930297609b4364472a8ae"
  },
  {
    "url": "assets/img/9-4.1c68220f.png",
    "revision": "1c68220f2cbc749461ac5730793947c4"
  },
  {
    "url": "assets/img/9-5.88de5545.png",
    "revision": "88de55458ef2bfe9825100cf981f6a2c"
  },
  {
    "url": "assets/img/9-6.8b2e9e3d.png",
    "revision": "8b2e9e3da250c33331eb8e71081c4994"
  },
  {
    "url": "assets/img/9-7.631e184f.png",
    "revision": "631e184f1bd45e939816b5a203eed9b7"
  },
  {
    "url": "assets/img/9-8.d416885d.png",
    "revision": "d416885dfaaf473517b74250e9768c71"
  },
  {
    "url": "assets/img/9-9.2c3a9130.png",
    "revision": "2c3a913000b2d366d9aa3c2e4ded1abe"
  },
  {
    "url": "assets/img/91550414131331.e60d9756.gif",
    "revision": "e60d9756f05d881d5d33906655fc0ed5"
  },
  {
    "url": "assets/img/924914c0-660c-4e4a-bbc0-1df1146e7516.ca65b368.jpg",
    "revision": "ca65b368fa76427863580bb17a1158dc"
  },
  {
    "url": "assets/img/95080fae-de40-463d-a76e-783a0c677fec.7c2c842a.gif",
    "revision": "7c2c842a66aa96edb8121dc0df53cea7"
  },
  {
    "url": "assets/img/95903878-725b-4ed9-bded-bc4aae0792a9.09890279.jpg",
    "revision": "09890279d02597c9f902030483eb7a02"
  },
  {
    "url": "assets/img/9709694b-db05-4cce-8d2f-1c8b09f4d921.4606122a.png",
    "revision": "4606122a15881481de12a694053deee2"
  },
  {
    "url": "assets/img/9b679ff5-94c6-48a7-b9b7-2ea868e828ed.bf0c6b39.png",
    "revision": "bf0c6b39f7784ee5016c6efee912e3dd"
  },
  {
    "url": "assets/img/9b838aee-0996-44a5-9b0f-3d1e3e2f5100.caeb1541.png",
    "revision": "caeb1541230c140c1a57d9b06ddf8b38"
  },
  {
    "url": "assets/img/9bbddeeb-e939-41f0-8e8e-2b1a0aa7e0a7.992c8043.png",
    "revision": "992c80433fe0f5b553a4bea464ab6057"
  },
  {
    "url": "assets/img/9c422923-1447-4a3b-a4e1-97e663738187.214860dd.jpg",
    "revision": "214860dd7369d03709b08969a1d41432"
  },
  {
    "url": "assets/img/9cd0ae20-4fb5-4017-a000-f7d3a0eb3529.27d73d89.png",
    "revision": "27d73d89815b310aacdb11e2317112ed"
  },
  {
    "url": "assets/img/9d1deeba-4ae1-41dc-98f4-47d85b9831bc.6d9db2f8.gif",
    "revision": "6d9db2f8df9c41e3c24d77d2ce8f0789"
  },
  {
    "url": "assets/img/9daa3616-00a4-48c4-9146-792dc8499be3.dc6e1905.jpg",
    "revision": "dc6e1905e372da6b3b295fe190dd8beb"
  },
  {
    "url": "assets/img/a3253deb-8d21-40a1-aae4-7d178e4aa319.b57e32c7.jpg",
    "revision": "b57e32c7e2d015b1e0e8e48b0167d739"
  },
  {
    "url": "assets/img/a42ad3a7-3574-4c48-a783-ed3d08a0688a.bfd432ca.jpg",
    "revision": "bfd432ca24fc04f5f7588cc330c20ef8"
  },
  {
    "url": "assets/img/a9077f06-7584-4f2b-8c20-3a8e46928820.2d5e2e03.jpg",
    "revision": "2d5e2e03d640eebdc1743aa8af7164d3"
  },
  {
    "url": "assets/img/ac6a794b-68c0-486c-902f-8d988eee5766.6507f605.png",
    "revision": "6507f60556a8b83d59228226ecad9853"
  },
  {
    "url": "assets/img/ad5cc8fc-d59b-45ce-8899-63a18320d97e.98408b96.gif",
    "revision": "98408b9669398d14763f02560200ce10"
  },
  {
    "url": "assets/img/adj-comp-unrulely.bc625d9b.jpg",
    "revision": "bc625d9b817adb32671afee387b5b44d"
  },
  {
    "url": "assets/img/adj-pos.6f60bf12.jpg",
    "revision": "6f60bf1213e9334b9d7a6f2b35a43f18"
  },
  {
    "url": "assets/img/af198da1-2480-4043-b07f-a3b91a88b815.1f88a047.png",
    "revision": "1f88a04756c0032ce3c9e8273b58429e"
  },
  {
    "url": "assets/img/b0611f89-1e5f-4494-a795-3544bf65042a.fcec1186.gif",
    "revision": "fcec11861486522e3dad8d8dc9d3f136"
  },
  {
    "url": "assets/img/b1fa0453-a4b0-4eae-a352-48acca8fff74.a5a1315f.png",
    "revision": "a5a1315fdf2207fa36571800622d12d4"
  },
  {
    "url": "assets/img/b396d726-b75f-4a32-89a2-03a7b6e19f6f.62b33b5e.jpg",
    "revision": "62b33b5eca6ad5d414fe8c642f867976"
  },
  {
    "url": "assets/img/b54eeb16-0b0e-484c-be62-306f57c40d77.2b0195fb.jpg",
    "revision": "2b0195fb258589a724391840bb727cda"
  },
  {
    "url": "assets/img/b8922f8c-95e6-4187-be85-572a509afb71.e462b600.png",
    "revision": "e462b600f152792c306e4711adacf32b"
  },
  {
    "url": "assets/img/b903fda8-07d0-46a7-91a7-e803892895cf.7a662579.gif",
    "revision": "7a662579a815828a7e175142e178d328"
  },
  {
    "url": "assets/img/b988877c-0f0a-4593-916d-de2081320628.68e019e5.jpg",
    "revision": "68e019e5f0f58169d13298a2659a77db"
  },
  {
    "url": "assets/img/b9d79a5a-e7af-499b-b989-f10483e71b8b.36485444.jpg",
    "revision": "364854448051cb9e983847d9624cb3fa"
  },
  {
    "url": "assets/img/baaa681f-7c52-4198-a5ae-303b9386cf47.cd136380.png",
    "revision": "cd1363804a4c1a590dafd3c2577b75b9"
  },
  {
    "url": "assets/img/bb6a49be-00f2-4f27-a0ce-4ed764bc605c.9a7eeb4b.png",
    "revision": "9a7eeb4b33c0a5e2c9b2fb06ad0d121b"
  },
  {
    "url": "assets/img/bc6be2d0-ed5e-4def-89e5-3ada9afa811a.3dd297f2.gif",
    "revision": "3dd297f2808b0759c08f524ec6f170bb"
  },
  {
    "url": "assets/img/be5c2c61-86d2-4dba-a289-b48ea23219de.123be26b.jpg",
    "revision": "123be26b3b71f23def2d5350d2c9b53a"
  },
  {
    "url": "assets/img/be608a77-7b7f-4f8e-87cc-f2237270bf69.3b662049.png",
    "revision": "3b662049f6ad09720f65c117d275caae"
  },
  {
    "url": "assets/img/bf667594-bb4b-4634-bf9b-0596a45415ba.55baa72f.jpg",
    "revision": "55baa72ff5a4049fa3e2727606e41726"
  },
  {
    "url": "assets/img/bfea8772-d01b-4a51-8adc-edfd7d3dce84.b9c52d74.jpg",
    "revision": "b9c52d7413bf137f1728e9a63489362c"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/img/browser_parse_html.a4a99b39.png",
    "revision": "a4a99b39482c51213380a22373f467d0"
  },
  {
    "url": "assets/img/browser_parse_rendertree.b8b35e2b.png",
    "revision": "b8b35e2bcd6a5fb65c9277bbde01fb37"
  },
  {
    "url": "assets/img/BSD_disk.34444dfd.png",
    "revision": "34444dfd6081914f90150a249aa85e8e"
  },
  {
    "url": "assets/img/btree.6c3c1bb9.png",
    "revision": "6c3c1bb99e9357c0e3227934b583f18c"
  },
  {
    "url": "assets/img/c0874e0a-dba3-467e-9c86-dd9313e0843e.f550b50e.jpg",
    "revision": "f550b50e2a2deab1b79b23f421f2e9b7"
  },
  {
    "url": "assets/img/c0a9fa91-da2e-4892-8c9f-80206a6f7047.b2e3b1fb.png",
    "revision": "b2e3b1fbee3782d44692ed61238caa81"
  },
  {
    "url": "assets/img/c13e2a3d-b01c-4a08-a69b-db2c4e821e09.25e7840e.png",
    "revision": "25e7840e8f8de83e657ac5103741a31f"
  },
  {
    "url": "assets/img/c269e362-1128-4212-9cf3-d4c12b363b2f.81d0ed34.gif",
    "revision": "81d0ed342a1fe627e279efa8693bba94"
  },
  {
    "url": "assets/img/c2ca8dd2-8d00-4a3e-bece-db7849ac9cfd.ee8c750b.gif",
    "revision": "ee8c750b9d2b81ab0a0b99f2b78959b0"
  },
  {
    "url": "assets/img/c3369072-c740-43b0-b276-202bd1d3960d.172deddf.jpg",
    "revision": "172deddfdfd7d9cb32dd2619395f5a3f"
  },
  {
    "url": "assets/img/c34f4503-f62c-4043-9dc6-3e03288657df.97c84f0d.jpg",
    "revision": "97c84f0d61c70f80098feac4131bbab3"
  },
  {
    "url": "assets/img/c44a0342-f405-4f17-b750-e27cf4aadde2.e30c8c71.png",
    "revision": "e30c8c71803b133bed8a4725d2bd9da0"
  },
  {
    "url": "assets/img/c4859290-e27d-4f12-becf-e2a5c1f3a275.ec1283b2.gif",
    "revision": "ec1283b2ab45512b0dd5f6874406187c"
  },
  {
    "url": "assets/img/c625baa0-dde6-449e-93df-c3a67f2f430f.45b5d841.jpg",
    "revision": "45b5d841a796745554f8a83964ff94c0"
  },
  {
    "url": "assets/img/c9cfd600-bc91-4f3a-9f99-b42f88a5bb24.f12aeac2.jpg",
    "revision": "f12aeac29005498dcfaca8c9b1812600"
  },
  {
    "url": "assets/img/cbf50eb8-22b4-4528-a2e7-d187143d57f7.b108df16.png",
    "revision": "b108df167c7cb60ed2917ad3a0e62f37"
  },
  {
    "url": "assets/img/cf4386a1-58c9-4eca-a17f-e12b1e9770eb.11cef3a7.png",
    "revision": "11cef3a715cf5826320dc509a2ae3c0a"
  },
  {
    "url": "assets/img/d156bcda-ac8d-4324-95e0-0c8df41567c9.3f9e35f2.gif",
    "revision": "3f9e35f284216fcab8b5dfc25a8a3710"
  },
  {
    "url": "assets/img/d27c99f0-7881-4f2d-9675-c75cbdee3acd.3190051f.jpg",
    "revision": "3190051fe890050d039f6230ca797fb1"
  },
  {
    "url": "assets/img/d2ae9932-e2b1-4191-8ee9-e573f36d3895.9703e915.png",
    "revision": "9703e915dd52060a89a01a455faa7e5b"
  },
  {
    "url": "assets/img/db5e376d-0b3e-490e-a43a-3231914b6668.4de001bc.png",
    "revision": "4de001bc1fa5061c6cddc6f70420bdef"
  },
  {
    "url": "assets/img/db5f30a7-8bfa-4ecc-ab5d-747c77818964.e4125e56.gif",
    "revision": "e4125e56fc4da0c96db857fc4ebc9e5e"
  },
  {
    "url": "assets/img/dd563037-fcaa-4bd8-83b6-b39d93a12c77.bf2827bc.jpg",
    "revision": "bf2827bca492f32d1b6a9e9f4f22510f"
  },
  {
    "url": "assets/img/dns.3f60e2b9.jpg",
    "revision": "3f60e2b9e392884a913801ed7cf4f84f"
  },
  {
    "url": "assets/img/docker-filesystems-busyboxrw.7e83ec9b.png",
    "revision": "7e83ec9b275f1b8648338f5d16d41a45"
  },
  {
    "url": "assets/img/e130e5b8-b19a-4f1e-b860-223040525cf6.264739fc.jpg",
    "revision": "264739fc0a32ffc6d67d75e202590cb0"
  },
  {
    "url": "assets/img/e69537d2-a016-4676-b169-9ea17eeb9037.82d1f1b1.gif",
    "revision": "82d1f1b18201036f9573f17c1666e40c"
  },
  {
    "url": "assets/img/e92d0ebc-7d46-413b-aec1-34a39602f787.c4ffddc0.png",
    "revision": "c4ffddc0126f19d53517240449f63f32"
  },
  {
    "url": "assets/img/e98deb5a-d5d4-4294-aa9b-9220d4483403.86f9e225.jpg",
    "revision": "86f9e2255f3fef2d645f0463d4869d75"
  },
  {
    "url": "assets/img/e98e9d20-206b-4533-bacf-3448d0096f38.b278d7e2.png",
    "revision": "b278d7e2d0343ddf7989c3d2b216bedf"
  },
  {
    "url": "assets/img/ed5522bb-3a60-481c-8654-43e7195a48fe.f1d9d5d8.png",
    "revision": "f1d9d5d842333deaf021088187799c9a"
  },
  {
    "url": "assets/img/ef25ff7c-0f63-420d-8b30-eafbeea35d11.17851455.gif",
    "revision": "1785145538c5aa8422b7edb31602140d"
  },
  {
    "url": "assets/img/f1912ba6-6402-4321-9aa8-13d32fd121d1.a6da67f7.jpg",
    "revision": "a6da67f7c81aa694387e3061c3a34bfe"
  },
  {
    "url": "assets/img/f61b5419-c94a-4df1-8d4d-aed9ae8cc6d5.d386ee48.png",
    "revision": "d386ee4801e75e52204c52477df4b2d5"
  },
  {
    "url": "assets/img/f7c1fea2-c1e7-4d31-94b5-0d9df85e093c.a96df49f.gif",
    "revision": "a96df49f4f3c3da742d2bf6172cbf511"
  },
  {
    "url": "assets/img/f9978fa6-9f49-4a0f-8540-02d269ac448f.202678c6.png",
    "revision": "202678c69db1e18da6f343bc4c844e14"
  },
  {
    "url": "assets/img/f99ee771-c56f-47fb-9148-c0036695b5fe.c9af962c.jpg",
    "revision": "c9af962cce82b1688975969d37b10f6c"
  },
  {
    "url": "assets/img/fb44307f-8e98-4ff7-a918-31dacfa564b4.4a00728b.jpg",
    "revision": "4a00728bf98524731bec77f8cce5fd33"
  },
  {
    "url": "assets/img/fcc941ec-134b-4dcd-bc86-1702fd305300.ababe5c1.gif",
    "revision": "ababe5c10ce5c1db688dd9ce264acb3a"
  },
  {
    "url": "assets/img/flex-item.e88d6f97.jpg",
    "revision": "e88d6f976ee5b0ea0ff2e5da8d392035"
  },
  {
    "url": "assets/img/flex-wrap.08ef17b5.jpg",
    "revision": "08ef17b543a5a55dcd77b9091407a132"
  },
  {
    "url": "assets/img/flex0.6a95a7f0.jpg",
    "revision": "6a95a7f098e4364dc0084e6a5e5fa0db"
  },
  {
    "url": "assets/img/git-areas.6f7a9afa.png",
    "revision": "6f7a9afa9058dfeea8e33240b34b1355"
  },
  {
    "url": "assets/img/git-branch-merge.d8736122.png",
    "revision": "d8736122dd3d558b7465777b6dab88ca"
  },
  {
    "url": "assets/img/git-branch.3554acad.png",
    "revision": "3554acad6793f5269b4c651589aeed1d"
  },
  {
    "url": "assets/img/git-rebase.02d28458.png",
    "revision": "02d28458acae2eb95486fea610ee90b5"
  },
  {
    "url": "assets/img/git-reset-checkout.0c12d0a8.png",
    "revision": "0c12d0a8890d9cc8ba387e8bf33b6516"
  },
  {
    "url": "assets/img/grid-align.8843c2d8.jpg",
    "revision": "8843c2d87579b401bc9b897a6c76a707"
  },
  {
    "url": "assets/img/grid.5a6926f9.jpg",
    "revision": "5a6926f963b24d0928ff3c83f3a1f6b8"
  },
  {
    "url": "assets/img/GUID_Partition_Table_Scheme.svg.3206264f.png",
    "revision": "3206264fe6c6c261e8fc0c6008627f5f"
  },
  {
    "url": "assets/img/How-HTTPS-Works.2de21035.png",
    "revision": "2de21035db40e031598347202665b0ce"
  },
  {
    "url": "assets/img/html-parase.3eb44c71.png",
    "revision": "3eb44c711f810178213693b8a7980299"
  },
  {
    "url": "assets/img/HTTP_RequestMessageExample.a7d09052.png",
    "revision": "a7d09052baf0c53c029c3dd961111505"
  },
  {
    "url": "assets/img/HTTP_ResponseMessageExample.41b72360.png",
    "revision": "41b723609ccd64ed3f9f54d73ea179c8"
  },
  {
    "url": "assets/img/http-tls.b17df166.jpg",
    "revision": "b17df166cf51ab0a294c481569ec222b"
  },
  {
    "url": "assets/img/image-20191130164425351.8f94bb44.png",
    "revision": "8f94bb4427691a32e80cd3b9d60bb53c"
  },
  {
    "url": "assets/img/image-20191207210437023.1e7c216d.png",
    "revision": "1e7c216d3e8426ecbf0f37771b09aa17"
  },
  {
    "url": "assets/img/image-20191207214442687.2c9f6cf1.png",
    "revision": "2c9f6cf11138ddbc880cb89fba923e00"
  },
  {
    "url": "assets/img/image-20191207220440451.14bbbcce.png",
    "revision": "14bbbcce145e1c13ecd086fee2276f13"
  },
  {
    "url": "assets/img/image-20191207220831843.4e6ea415.png",
    "revision": "4e6ea4157f795d2583d72e359b832618"
  },
  {
    "url": "assets/img/image-20191207221313819.26a06bad.png",
    "revision": "26a06bad226961e1214aff908ebe01db"
  },
  {
    "url": "assets/img/image-20191207221744244.476d0dbe.png",
    "revision": "476d0dbe15e4718b9fd37f33f50a580a"
  },
  {
    "url": "assets/img/image-20191207221920368.6722915a.png",
    "revision": "6722915af752f61aed709ed72474841e"
  },
  {
    "url": "assets/img/image-20191207222102010.81bbed7c.png",
    "revision": "81bbed7cb2b8fea3834125f60cd39a9e"
  },
  {
    "url": "assets/img/image-20191207222134306.d2cb7642.png",
    "revision": "d2cb764243b85e14fdea0bec365a8c12"
  },
  {
    "url": "assets/img/image-20191207222237925.c4e06159.png",
    "revision": "c4e061594813f3bd58e8575da1baf133"
  },
  {
    "url": "assets/img/image-20191208171445674.aa5f9eac.png",
    "revision": "aa5f9eac7569ffa7b0bff1a097f4e662"
  },
  {
    "url": "assets/img/image-20191208204118932.11e20472.png",
    "revision": "11e2047273f53486938adf904e3cceeb"
  },
  {
    "url": "assets/img/image-20191208220948084.4332dea8.png",
    "revision": "4332dea86a15b2707603c6870c6f05a9"
  },
  {
    "url": "assets/img/image-20191208224757855.3f69eed5.png",
    "revision": "3f69eed5ffbf88f9f371e0e6de674a14"
  },
  {
    "url": "assets/img/image-20191208225301973.2e140dd0.png",
    "revision": "2e140dd0af081f337f95e0a46c31a138"
  },
  {
    "url": "assets/img/image-20191208232221265.062048a6.png",
    "revision": "062048a6c1947e278e8bac4e827d4a47"
  },
  {
    "url": "assets/img/image-20191208233940066.1ee90493.png",
    "revision": "1ee90493632945815cd2150128be3e66"
  },
  {
    "url": "assets/img/image-20191208234948205.473084c1.png",
    "revision": "473084c1faee614f19b67354121dcf53"
  },
  {
    "url": "assets/img/image-20191208235258643.5b31cf98.png",
    "revision": "5b31cf98e9534a2793fd1f72fe7d9421"
  },
  {
    "url": "assets/img/image-20191209001038024.033c979e.png",
    "revision": "033c979e94277df59d4cf291fd7ab001"
  },
  {
    "url": "assets/img/image-20191209002818626.b78e18af.png",
    "revision": "b78e18afc6a1fa81ff096f56f967a8af"
  },
  {
    "url": "assets/img/image-20191209003453268.a76d2392.png",
    "revision": "a76d2392e1c2331273e557a279e9043e"
  },
  {
    "url": "assets/img/image-20191210004132894.90a7dba7.png",
    "revision": "90a7dba781754b861bdb745287fb181e"
  },
  {
    "url": "assets/img/image-20191212011250613.70ddce92.png",
    "revision": "70ddce92d6d6893339adaf72f2bf91d4"
  },
  {
    "url": "assets/img/image-20191212011410374.cd8d4c18.png",
    "revision": "cd8d4c18c4b50684888c464ae503ebaa"
  },
  {
    "url": "assets/img/image-20191212011747967.44efc7a1.png",
    "revision": "44efc7a1e8cda842239fea2530bc8a53"
  },
  {
    "url": "assets/img/inode_with_signatures.6a497c68.jpg",
    "revision": "6a497c680ed6df8b77c83b76e8772675"
  },
  {
    "url": "assets/img/js_load.909c198b.png",
    "revision": "909c198b7ef020ad8529cfa97f4ffd6f"
  },
  {
    "url": "assets/img/js-event-task.65dc91d8.png",
    "revision": "65dc91d8398830e9ee94df8cca81066a"
  },
  {
    "url": "assets/img/js-extend.cff66ffb.jpg",
    "revision": "cff66ffb4b8b87fc5291e24499392ff5"
  },
  {
    "url": "assets/img/js-proto-layout.77f750f2.png",
    "revision": "77f750f2d8db3ea5120daae3c3d8eb56"
  },
  {
    "url": "assets/img/js-task.4195df67.png",
    "revision": "4195df679aa0dc3f2f7f8b5e023cdf30"
  },
  {
    "url": "assets/img/linux-filesystem.bee94538.png",
    "revision": "bee94538cf084ef7522069597a772def"
  },
  {
    "url": "assets/img/margin.e44310b4.png",
    "revision": "e44310b4ba9321ff29f9f348207805a5"
  },
  {
    "url": "assets/img/master-slave-proxy.077ac719.png",
    "revision": "077ac71910b1c1e212ab8b92df465c6e"
  },
  {
    "url": "assets/img/master-slave.c5e66808.png",
    "revision": "c5e66808c1b34395e8a06b25f5ded53c"
  },
  {
    "url": "assets/img/modal-list.331afd6e.jpg",
    "revision": "331afd6efb03b280c099f0cc7203a3d5"
  },
  {
    "url": "assets/img/mood-form.8ee865b6.jpg",
    "revision": "8ee865b6cec44ec2bee304c0512fff56"
  },
  {
    "url": "assets/img/mvc.fdbaa388.png",
    "revision": "fdbaa38859afead9a8680a6810627d1f"
  },
  {
    "url": "assets/img/mvvm.b1973f93.png",
    "revision": "b1973f93adba97ef8f84be2922b712a4"
  },
  {
    "url": "assets/img/Network_GBN-action.172d0530.png",
    "revision": "172d053019aa7d71b0b5c156c18d7eb5"
  },
  {
    "url": "assets/img/network-of-networks.10dfc657.gif",
    "revision": "10dfc6578d149003adc0f091cb087e08"
  },
  {
    "url": "assets/img/nginx2flask.123d611c.jpg",
    "revision": "123d611cd739011e5c26d1e8f72c7d66"
  },
  {
    "url": "assets/img/noun-kind1.49518467.jpg",
    "revision": "4951846798f636b61e007884e2ffeec6"
  },
  {
    "url": "assets/img/noun-kind2.64106fe0.jpg",
    "revision": "64106fe0764296e73322fc8a9dae0d43"
  },
  {
    "url": "assets/img/noun-the-pos.b0df7d0c.jpg",
    "revision": "b0df7d0c23b3a4edd8642a8754d9033c"
  },
  {
    "url": "assets/img/oddevenlist.353f6608.png",
    "revision": "353f660862dbe6be9a1e5f350da375fb"
  },
  {
    "url": "assets/img/Partition2.269e111e.png",
    "revision": "269e111effc46cb5dd73135670394834"
  },
  {
    "url": "assets/img/PPjwP.118d84b4.png",
    "revision": "118d84b4bc7e732e5592961c122c25da"
  },
  {
    "url": "assets/img/preposition.25033d22.jpg",
    "revision": "25033d22a63875c90bb7a506c1b949fa"
  },
  {
    "url": "assets/img/ProcessRelated.a1d8e2a1.png",
    "revision": "a1d8e2a1982774ca8f6c4ef4f80a3c97"
  },
  {
    "url": "assets/img/ProcessState.36bc1559.png",
    "revision": "36bc1559611b05e9549101ed5fd512ab"
  },
  {
    "url": "assets/img/program-link.829f7b1c.jpg",
    "revision": "829f7b1c4af131f6b5488d14884a5220"
  },
  {
    "url": "assets/img/program-works.7eaa3861.jpg",
    "revision": "7eaa38613e33e5b97de0a77c8b3007aa"
  },
  {
    "url": "assets/img/prototype1.8c492365.png",
    "revision": "8c492365707ecf63c2ed663ec7d2b26c"
  },
  {
    "url": "assets/img/pygc1.0d507109.jpg",
    "revision": "0d5071093adaa02bc03fa3dfd91aa5bc"
  },
  {
    "url": "assets/img/pygc2.d7314ead.jpg",
    "revision": "d7314ead6b303f08a91687577c045585"
  },
  {
    "url": "assets/img/pygc3.510f4d2d.jpg",
    "revision": "510f4d2d37aabdbc8978d9e47630237d"
  },
  {
    "url": "assets/img/pygc4.6fd40c05.jpg",
    "revision": "6fd40c055a6633c654acaf05f472c1b2"
  },
  {
    "url": "assets/img/reverseLink.b5068ec1.png",
    "revision": "b5068ec1a7088c2c8b60812bf95d9264"
  },
  {
    "url": "assets/img/sentence-negative.084fdb16.jpg",
    "revision": "084fdb16f7e8c39bd45e5a66f27f1e98"
  },
  {
    "url": "assets/img/shared_ptr.395148b6.jpg",
    "revision": "395148b6daddc13a006bf53fac3f2186"
  },
  {
    "url": "assets/img/skiplist.01da932c.png",
    "revision": "01da932c2fc6f96c4433affe516ea566"
  },
  {
    "url": "assets/img/sortcolors.2ea3ac45.png",
    "revision": "2ea3ac45dbc284022183402e3562b454"
  },
  {
    "url": "assets/img/sql-ranking.7342fcbb.jpg",
    "revision": "7342fcbb9b53fec8785d65907336131a"
  },
  {
    "url": "assets/img/steps.0a91c6d3.jpg",
    "revision": "0a91c6d34132239201585c4713382f95"
  },
  {
    "url": "assets/img/style.82ae1c6c.png",
    "revision": "82ae1c6c40206b16144c1d94106522cb"
  },
  {
    "url": "assets/img/sun.896a044e.png",
    "revision": "896a044ebadc680c899613f7ce3d4057"
  },
  {
    "url": "assets/img/tense-list.c71873f6.jpg",
    "revision": "c71873f6cdd398458f2587be0597cf8b"
  },
  {
    "url": "assets/img/tGPV0.4cf15f1e.png",
    "revision": "4cf15f1ee5f507f7a4beda2b8703d7ff"
  },
  {
    "url": "assets/img/to-aspect.4d982cd4.jpg",
    "revision": "4d982cd468f7222c7e811251fca9544b"
  },
  {
    "url": "assets/img/transform.5e4c54c0.jpg",
    "revision": "5e4c54c024387f4c6517dc20600591fc"
  },
  {
    "url": "assets/img/u4E0B_u8F7D.b26ab2b1.png",
    "revision": "b26ab2b1961d3d5ec274e95d21b85700"
  },
  {
    "url": "assets/img/uglynum.ab587460.png",
    "revision": "ab5874600f058b00adb89332e2cdf9e6"
  },
  {
    "url": "assets/img/verb-auxility.de176f8c.jpg",
    "revision": "de176f8c8a654101fb68db294af0096d"
  },
  {
    "url": "assets/img/view-model.0c8d5132.png",
    "revision": "0c8d513270ba7f1be355b8a8f18a6865"
  },
  {
    "url": "assets/img/vue-array-bind.5dbf0e84.jpg",
    "revision": "5dbf0e84abaa4a79fa2f05dafa61bd27"
  },
  {
    "url": "assets/img/vue-binding.5de7af21.png",
    "revision": "5de7af21d4c2de951720c006f84b98fc"
  },
  {
    "url": "assets/img/vue-computed.e7e4816e.jpg",
    "revision": "e7e4816e8f87d60d8fe5ab56cc48f109"
  },
  {
    "url": "assets/img/vue-data-bind.1ff4e0c7.jpg",
    "revision": "1ff4e0c7fc11396a483bc2a59fb447bb"
  },
  {
    "url": "assets/img/vue-lifecycle.564f2064.png",
    "revision": "564f2064aa6e63ee05ec67aba85d663b"
  },
  {
    "url": "assets/img/vue-make-path.3aefef41.jpg",
    "revision": "3aefef4173ad5dbf66936773e17c712f"
  },
  {
    "url": "assets/img/vue3-effect-deps.e578e356.jpeg",
    "revision": "e578e356834f65260ef12396d6dcd429"
  },
  {
    "url": "assets/img/vue3-obj-collect.adb97d04.jpeg",
    "revision": "adb97d0473db1934c9b160aae2cc51e0"
  },
  {
    "url": "assets/img/web-page-fid.1d38500e.svg",
    "revision": "1d38500ea37cf1190208bf129b7e65de"
  },
  {
    "url": "assets/img/web-page-lcp.cdda224f.png",
    "revision": "cdda224f1c0f68858373a5a75d8debe0"
  },
  {
    "url": "assets/img/web-page-timing.1016c5e3.png",
    "revision": "1016c5e393de57b7d8e5f8fc6be19cc2"
  },
  {
    "url": "assets/js/1.f4c0c26a.js",
    "revision": "1d46b4f970fe597e8a81c28cc77e9353"
  },
  {
    "url": "assets/js/10.4a4cb25f.js",
    "revision": "e8d86ffa7be98dcf152807653def2878"
  },
  {
    "url": "assets/js/100.eaa49fd0.js",
    "revision": "cfbf046f749b5cccb93ceff595461cb8"
  },
  {
    "url": "assets/js/101.611cb9fe.js",
    "revision": "8ed8dcb85eba467f082f5b7126fad43e"
  },
  {
    "url": "assets/js/102.ec6af650.js",
    "revision": "7761e82f2f11f7c072cf140ab262fd27"
  },
  {
    "url": "assets/js/103.745f733c.js",
    "revision": "efce6de2f399b4df5a42fd3ac1e15e86"
  },
  {
    "url": "assets/js/104.a1432c72.js",
    "revision": "3ca0cff6f22fe05c0b07b429344c7103"
  },
  {
    "url": "assets/js/105.6660eb97.js",
    "revision": "1f4be40f414889ae2db6e3c84a6f9b55"
  },
  {
    "url": "assets/js/106.cb84a2e2.js",
    "revision": "b37e1a617bb62874a5f0acf1eaaca8ba"
  },
  {
    "url": "assets/js/107.219a4d52.js",
    "revision": "5f5b9dfcc3a17e2a273f6e86d080819f"
  },
  {
    "url": "assets/js/108.7cd01923.js",
    "revision": "a293596c99a1e81f2630e57e24f113ec"
  },
  {
    "url": "assets/js/109.cdc1e806.js",
    "revision": "ee1ee9ac4d70494e2bce7f3bf7188989"
  },
  {
    "url": "assets/js/11.a41c72f4.js",
    "revision": "bd6bda3fba764f2fca20e36d3c440f2c"
  },
  {
    "url": "assets/js/110.a29c8953.js",
    "revision": "3d3712c86542c6203ee5812d7675abf9"
  },
  {
    "url": "assets/js/111.ed663231.js",
    "revision": "fe4c9bac2d650e298cde588aacf7d7f0"
  },
  {
    "url": "assets/js/112.8fb64614.js",
    "revision": "dc3748142a0cde30d39072ede828b148"
  },
  {
    "url": "assets/js/113.aafaf349.js",
    "revision": "85af5625c5d69feba6ef29db5bb8335f"
  },
  {
    "url": "assets/js/114.9335ca63.js",
    "revision": "63953c79c22ec4165cc0e77b1ca1856a"
  },
  {
    "url": "assets/js/115.fe30eba0.js",
    "revision": "a9ac168c200b78e2c6524c84cef1d822"
  },
  {
    "url": "assets/js/116.16029257.js",
    "revision": "ec864dd7fa140e7ebffbbb40c8cb7b51"
  },
  {
    "url": "assets/js/117.ecb4e547.js",
    "revision": "10b87648df34999caf274051054d5ea6"
  },
  {
    "url": "assets/js/118.af1e0f53.js",
    "revision": "b97c3bb751c14a93dc2f9a8bea8acc64"
  },
  {
    "url": "assets/js/119.8c09bac7.js",
    "revision": "1432266f817c39fe49dc388129a9f790"
  },
  {
    "url": "assets/js/12.e7dba5e3.js",
    "revision": "4534327a0766250eaf1366049986a6cc"
  },
  {
    "url": "assets/js/120.1c94b94b.js",
    "revision": "051246d11cfc6c4e2289f5efb1ef596a"
  },
  {
    "url": "assets/js/121.708af928.js",
    "revision": "29b63aaecd1ff4d5a296b9b2487da7a6"
  },
  {
    "url": "assets/js/122.ebb15605.js",
    "revision": "3cb0bfc67199ec869f1d51154aa1980b"
  },
  {
    "url": "assets/js/123.13c4905b.js",
    "revision": "6486209e28b8e0caa9aecf94139a451d"
  },
  {
    "url": "assets/js/124.cb61dcbf.js",
    "revision": "4b9b23f7b47a90708c8bc45f7ab3335f"
  },
  {
    "url": "assets/js/125.5f82f1dc.js",
    "revision": "50f308fbdbde3f7cb67e97801e7f3131"
  },
  {
    "url": "assets/js/126.41b09af2.js",
    "revision": "25a119499b1d12de6fac6c797d7fa2a6"
  },
  {
    "url": "assets/js/127.018784a2.js",
    "revision": "3b03764a4f5118a042516858d998c510"
  },
  {
    "url": "assets/js/128.c29d8092.js",
    "revision": "fc999f306d39e7533981e99259c90d86"
  },
  {
    "url": "assets/js/129.a486b9b7.js",
    "revision": "a3bfda85979b70060aede0108ca098f7"
  },
  {
    "url": "assets/js/13.89791d9d.js",
    "revision": "1188e334b8c14fbce887bb346e5a885d"
  },
  {
    "url": "assets/js/130.27a683ba.js",
    "revision": "5fb352c4201527465e19c03228ec8184"
  },
  {
    "url": "assets/js/131.f9d0578f.js",
    "revision": "37d98386caa6ede5b25be60e38b18ad4"
  },
  {
    "url": "assets/js/132.cac6d671.js",
    "revision": "c8c26ae0a13b703efed9dffb533a37e2"
  },
  {
    "url": "assets/js/133.0d668d1e.js",
    "revision": "e2fea9a70774ee42ed209fd2ed16c4e0"
  },
  {
    "url": "assets/js/134.4f111333.js",
    "revision": "dc8d0122bd7a5bd60efd978ce504dba2"
  },
  {
    "url": "assets/js/135.015e5765.js",
    "revision": "8a2c50c4b492e6b3348d3c2c62778c08"
  },
  {
    "url": "assets/js/136.65e3c8cc.js",
    "revision": "4a4dc215617852a9a17c5563f25e4ff0"
  },
  {
    "url": "assets/js/137.b7d2c4bf.js",
    "revision": "a8d0983ba47a632944756fbc712774d3"
  },
  {
    "url": "assets/js/138.43cc10ab.js",
    "revision": "ce97a4b549206b881fb5d2a0742832bf"
  },
  {
    "url": "assets/js/139.9613342d.js",
    "revision": "46a31cf8e4222f994cf6a45f760eafbc"
  },
  {
    "url": "assets/js/14.a2acf878.js",
    "revision": "a076f61166a616c48f4559ef614f3f6a"
  },
  {
    "url": "assets/js/140.67580f3b.js",
    "revision": "3fed7379fa1f1d136e0a50e4f7d079a5"
  },
  {
    "url": "assets/js/141.545afbae.js",
    "revision": "7bdd8d64101380b7ec4bf4db28ba74c8"
  },
  {
    "url": "assets/js/142.eb54f9a5.js",
    "revision": "ef012dfc2fb5acb665f44ac9c2d99c79"
  },
  {
    "url": "assets/js/143.8cab51d9.js",
    "revision": "109319007d4e31bb2ae401e4020d5396"
  },
  {
    "url": "assets/js/144.4e6f6398.js",
    "revision": "d3eab6e3748ca913a51b8051367d9b37"
  },
  {
    "url": "assets/js/145.907f0268.js",
    "revision": "f543d16370b76e46731503622a69f716"
  },
  {
    "url": "assets/js/146.7fab5f26.js",
    "revision": "82b2109735b50802c599940725f097ae"
  },
  {
    "url": "assets/js/147.a469efdf.js",
    "revision": "b4a6523200929aaf43a9af07a3fe49ba"
  },
  {
    "url": "assets/js/148.28af8bd6.js",
    "revision": "67f149e311fb5d7314a72b70dc1f1360"
  },
  {
    "url": "assets/js/149.033e0414.js",
    "revision": "a99c02c4d5574c457229c88f7a9d413d"
  },
  {
    "url": "assets/js/15.bf97ea6d.js",
    "revision": "d97d7d85cc4e12147f9d3d5f32394429"
  },
  {
    "url": "assets/js/150.01d20020.js",
    "revision": "a895df65c2380162656c48f57ce50853"
  },
  {
    "url": "assets/js/151.536ae15a.js",
    "revision": "3146d5d06552c480d7bad38da5047cca"
  },
  {
    "url": "assets/js/152.332e9ccc.js",
    "revision": "64b6632923f116e1c36ad9d3e7b38f7c"
  },
  {
    "url": "assets/js/153.78eba772.js",
    "revision": "8bb498f78871e8ab21f4f1af84bb6699"
  },
  {
    "url": "assets/js/154.d0af9332.js",
    "revision": "33f3a147c6d62bd185d343576fdf01f2"
  },
  {
    "url": "assets/js/155.33cc7780.js",
    "revision": "1c039b95765a17ef05234ee6a5ce20b8"
  },
  {
    "url": "assets/js/156.463be084.js",
    "revision": "df7175174aa606d40d79084b611b7931"
  },
  {
    "url": "assets/js/157.9f04e007.js",
    "revision": "ac7f21f9cb9fb6b3688791c913ecf28c"
  },
  {
    "url": "assets/js/158.71d8e86a.js",
    "revision": "f3f8d31d03808e38cdaa2050b67fe456"
  },
  {
    "url": "assets/js/159.d2fbc09d.js",
    "revision": "f3e2d617aae72a953c8174f621e47656"
  },
  {
    "url": "assets/js/16.7fb26dfc.js",
    "revision": "abf0a58a5f58f465c61037f6373dbaab"
  },
  {
    "url": "assets/js/160.d1f52a27.js",
    "revision": "2125193710fe1469c67fadf1cd9be67a"
  },
  {
    "url": "assets/js/161.5e1fa31f.js",
    "revision": "cccf99af19ea694a0d54d813c10659f7"
  },
  {
    "url": "assets/js/162.ff917a75.js",
    "revision": "0a9c75038b10d35f2faba55d857c2f85"
  },
  {
    "url": "assets/js/163.e04a846e.js",
    "revision": "17042cafe555c59f9da18c1d9012e349"
  },
  {
    "url": "assets/js/164.fce3320f.js",
    "revision": "00f2e6cee02311b0aa5d471c23a73415"
  },
  {
    "url": "assets/js/165.54afb516.js",
    "revision": "b30045b069de8566f15ae057db18f325"
  },
  {
    "url": "assets/js/166.f60f03aa.js",
    "revision": "4b66ce70c5b456524d19c44a1755e209"
  },
  {
    "url": "assets/js/167.4d95333a.js",
    "revision": "dc3eaf30b6c19f71c243c3dc9b1413e5"
  },
  {
    "url": "assets/js/168.d3b6dfd5.js",
    "revision": "d4035653c3c992e3c0158a2ba34fc781"
  },
  {
    "url": "assets/js/169.b6e8bad7.js",
    "revision": "04ebe4074e219196047706b18e98cf82"
  },
  {
    "url": "assets/js/17.eb3dbaa4.js",
    "revision": "18a094e80dc383c1d240ea1019379e01"
  },
  {
    "url": "assets/js/170.6db056ab.js",
    "revision": "a28caf7172e237e4056c337a7fc9a6d6"
  },
  {
    "url": "assets/js/171.b05462cb.js",
    "revision": "484ae93167f3f4e4af5fcac16fad3db9"
  },
  {
    "url": "assets/js/172.02527882.js",
    "revision": "d24afac7d551c847f4bf29dccc14a0a7"
  },
  {
    "url": "assets/js/173.e7a7e206.js",
    "revision": "7f71d974860d25cb38fea998a1ef0236"
  },
  {
    "url": "assets/js/174.fb4850e3.js",
    "revision": "3e054b3cc11e19d80bf947e4dffd0a5d"
  },
  {
    "url": "assets/js/175.69b07ff3.js",
    "revision": "15a31bf1b9cf116bb12180cd6663bad0"
  },
  {
    "url": "assets/js/176.fb1068ba.js",
    "revision": "2c868159bafc642999f993466ba2ad2c"
  },
  {
    "url": "assets/js/177.af587eba.js",
    "revision": "25f48521934001af7bca70af2baabe58"
  },
  {
    "url": "assets/js/178.49efe089.js",
    "revision": "68b1fd7a11365220fc87ba61d839ec42"
  },
  {
    "url": "assets/js/179.422c5f22.js",
    "revision": "e2323da49a1b60b5659e06b38d17d2e8"
  },
  {
    "url": "assets/js/18.4725f7d8.js",
    "revision": "352f3fb9da4d80e470ba5715d5404dbe"
  },
  {
    "url": "assets/js/180.2b4cdfed.js",
    "revision": "d6777d1591cc956c2439a1e649d95061"
  },
  {
    "url": "assets/js/181.3ab4426f.js",
    "revision": "27bb001b0ba41f7a21c6bc06505dc947"
  },
  {
    "url": "assets/js/182.211f2416.js",
    "revision": "762033a965ff91dda85996e6d91f7fbb"
  },
  {
    "url": "assets/js/183.5f395429.js",
    "revision": "e2898b2040bfcd3a7a624f51ac93eb5b"
  },
  {
    "url": "assets/js/184.4e78188e.js",
    "revision": "2cfbc74ca0540968a266c01ad698cc97"
  },
  {
    "url": "assets/js/185.e223668d.js",
    "revision": "92a629c44ed91afdd74b488cbe7f7ced"
  },
  {
    "url": "assets/js/186.6cb31351.js",
    "revision": "4e22097e1f8576f34795a0b814fa39d4"
  },
  {
    "url": "assets/js/187.279ea484.js",
    "revision": "60eaa26b375f284b04ac929451b96d2b"
  },
  {
    "url": "assets/js/188.779abe9f.js",
    "revision": "53897f1b1ac072c84191adc14da976ad"
  },
  {
    "url": "assets/js/189.f2517961.js",
    "revision": "1aa5d99930179aeac6c1eccf914693b9"
  },
  {
    "url": "assets/js/19.5f40399c.js",
    "revision": "f224b9b74669f3256d3dabd1f80fa65f"
  },
  {
    "url": "assets/js/190.bed5678e.js",
    "revision": "fee586186c6d9e0c44ef158ad547636f"
  },
  {
    "url": "assets/js/191.4a45bff1.js",
    "revision": "aad78c1b6a05ff62643f468167caffe2"
  },
  {
    "url": "assets/js/192.29302a5c.js",
    "revision": "16b61de62e2861defa558d8f52134f56"
  },
  {
    "url": "assets/js/193.735b7a6c.js",
    "revision": "a5ecdde1ab32bf1586d6e332c48e06a5"
  },
  {
    "url": "assets/js/194.eec2bf84.js",
    "revision": "5dc69e4e79345ec12d4a2cb81d914e54"
  },
  {
    "url": "assets/js/195.736f837e.js",
    "revision": "01caa41ee236f0647582ff7b7083dd5d"
  },
  {
    "url": "assets/js/196.07044678.js",
    "revision": "627bc277e2268620d987b5a3fbbbfb53"
  },
  {
    "url": "assets/js/197.2ec62b4c.js",
    "revision": "c597a0cdbcb5284cedb8c4d4904d1d8a"
  },
  {
    "url": "assets/js/198.b1fcd3a4.js",
    "revision": "83256d45e426868a61130fe2791e63e3"
  },
  {
    "url": "assets/js/199.4526dd55.js",
    "revision": "41be7ca7dc4e193dbe3f0f5bb7429795"
  },
  {
    "url": "assets/js/2.faf27c35.js",
    "revision": "ae61581674717981e5005ff91d3af3e5"
  },
  {
    "url": "assets/js/20.457f3c2a.js",
    "revision": "b1741c4ab653bae009f514884df49ca0"
  },
  {
    "url": "assets/js/200.40703576.js",
    "revision": "487cd961e602256e8e877a57d72cbc20"
  },
  {
    "url": "assets/js/201.ac2dc4f9.js",
    "revision": "769ded349e937a200f5152ab1840fd27"
  },
  {
    "url": "assets/js/202.79e0e62e.js",
    "revision": "edd442000fd56dce533ef3462affc9ba"
  },
  {
    "url": "assets/js/203.c9e0148f.js",
    "revision": "dccb4d5b07ec4256129d014d5fd0aca8"
  },
  {
    "url": "assets/js/204.954e2a32.js",
    "revision": "90d506f01bd166257b3379212170e9ac"
  },
  {
    "url": "assets/js/205.1ef0732d.js",
    "revision": "f8faa2c31145a440e287dda0b176f654"
  },
  {
    "url": "assets/js/206.5a2bfcdf.js",
    "revision": "6d512975f3c14249084194c846e2297e"
  },
  {
    "url": "assets/js/207.4a6e50a9.js",
    "revision": "d7f8db1d09229e27e5d1d6d9780b7e8a"
  },
  {
    "url": "assets/js/208.49a59b74.js",
    "revision": "641567bc95bdb348604ef6a8797d4a0b"
  },
  {
    "url": "assets/js/209.56c908ac.js",
    "revision": "a7fafb977a33a913b3527e1d424624bf"
  },
  {
    "url": "assets/js/21.0c7e8fe5.js",
    "revision": "71f24a55618dfe6bf75acf60be99d6bd"
  },
  {
    "url": "assets/js/210.af78fb26.js",
    "revision": "5b89af66813a72cdab09649411d3e54e"
  },
  {
    "url": "assets/js/211.aec3d32d.js",
    "revision": "6f07698b9180b6dd24953d5606d97e09"
  },
  {
    "url": "assets/js/212.74e1ee12.js",
    "revision": "7f39e6bbc57aa0ec9890a541de025efe"
  },
  {
    "url": "assets/js/213.10dd9677.js",
    "revision": "4c111d39399194e189fd22aefb888cac"
  },
  {
    "url": "assets/js/214.bf9a7f8f.js",
    "revision": "426c39e77846558922b6c510cfc179c3"
  },
  {
    "url": "assets/js/215.c7919d30.js",
    "revision": "a6b95a78073dfdeba267e715ca2c5448"
  },
  {
    "url": "assets/js/216.1d595ce7.js",
    "revision": "3210abf835106397b89b916a269ae817"
  },
  {
    "url": "assets/js/217.e9559cf4.js",
    "revision": "2edaa76e7d39c6a5b03c9c362a43eb89"
  },
  {
    "url": "assets/js/218.4d25ab26.js",
    "revision": "f9e17ec0ee0bd23adfa0306e49009302"
  },
  {
    "url": "assets/js/219.acb21b75.js",
    "revision": "20bb4be86e8616bb70497bb537b8a61f"
  },
  {
    "url": "assets/js/22.2c1d4647.js",
    "revision": "ff221b511a34ea8e1569f69fb9de472d"
  },
  {
    "url": "assets/js/220.73413812.js",
    "revision": "fbba672f89a7b10ec3f47dc5984ef925"
  },
  {
    "url": "assets/js/221.e19a1e93.js",
    "revision": "7c2e12adf01c5031de014b95a57bbad2"
  },
  {
    "url": "assets/js/222.4a38c39e.js",
    "revision": "d4fdb9f1216c5287dbad368ba8c7c8e9"
  },
  {
    "url": "assets/js/223.5afcc858.js",
    "revision": "3578d3d1c6842f838f355530ecf13183"
  },
  {
    "url": "assets/js/224.9d854c13.js",
    "revision": "e65284030994049b6c1c3fea24de678b"
  },
  {
    "url": "assets/js/225.25880b8e.js",
    "revision": "34ea51cff8a77bc794b049159bba1344"
  },
  {
    "url": "assets/js/226.0d90f780.js",
    "revision": "b76d5196a4eb53440341483b91e10fc5"
  },
  {
    "url": "assets/js/227.37441e09.js",
    "revision": "a75c9e48b82c35854f747017757ac609"
  },
  {
    "url": "assets/js/228.f3413919.js",
    "revision": "a079079020cb10c190fd396e1b9f15f9"
  },
  {
    "url": "assets/js/229.3faa84db.js",
    "revision": "601b6a83ef651bc4eac139eb88e5e355"
  },
  {
    "url": "assets/js/23.c3725b07.js",
    "revision": "fa65b2493c3ef3186a782884b52e4b87"
  },
  {
    "url": "assets/js/230.29415a98.js",
    "revision": "4a944abef490e10d11eb91d3ac7c0da7"
  },
  {
    "url": "assets/js/231.5ad1b043.js",
    "revision": "9a9d5c61c3d320e6b57518cc45133b44"
  },
  {
    "url": "assets/js/232.ce49c21f.js",
    "revision": "6d697f1a94bef49355f70812bc7564c3"
  },
  {
    "url": "assets/js/233.2c4f8cd0.js",
    "revision": "c1edfa157d93b528952a565cfe6b24c9"
  },
  {
    "url": "assets/js/234.ed220e92.js",
    "revision": "dde7990e920737ff62abdc8f85182383"
  },
  {
    "url": "assets/js/235.f1ce054c.js",
    "revision": "0ad2a00f60b73092565747d7dc51fe63"
  },
  {
    "url": "assets/js/236.9785a5c8.js",
    "revision": "6b8257eb0413adf4d06af77ac787d852"
  },
  {
    "url": "assets/js/237.776a127c.js",
    "revision": "1a26351ee11a124ed6b8465907afe80c"
  },
  {
    "url": "assets/js/238.a696c3dc.js",
    "revision": "54540ace6e41c405d25d56137afd7a98"
  },
  {
    "url": "assets/js/239.db26e26a.js",
    "revision": "b0c76171c9c6f526520f7d3365534fa9"
  },
  {
    "url": "assets/js/24.d3cebbb5.js",
    "revision": "bfbf138d03166c9e4599fbd6799b4053"
  },
  {
    "url": "assets/js/240.ad84e918.js",
    "revision": "70cf9d823e21084a24e5cddd499b0865"
  },
  {
    "url": "assets/js/241.68c539ed.js",
    "revision": "ba0a4266af31052b1888b331dbea5743"
  },
  {
    "url": "assets/js/242.30028e05.js",
    "revision": "a16a7de89cec78d9afa05a71d50d7dd5"
  },
  {
    "url": "assets/js/243.40e15fb3.js",
    "revision": "44368da22f86751244593373f959614c"
  },
  {
    "url": "assets/js/244.edf7cc0c.js",
    "revision": "48462f31e628b7502bc449029690dd36"
  },
  {
    "url": "assets/js/245.c02957b5.js",
    "revision": "22a93f753ba67383120b52d1194616a6"
  },
  {
    "url": "assets/js/246.2620616c.js",
    "revision": "743f2c7475ba93237659d71ad7772838"
  },
  {
    "url": "assets/js/247.ec4c2b35.js",
    "revision": "aad4afa2a99099cfa425757666928117"
  },
  {
    "url": "assets/js/248.42b8ec41.js",
    "revision": "e7f58ef0cc666759d267a8281fea07ef"
  },
  {
    "url": "assets/js/249.7b7c1015.js",
    "revision": "cfac4d410d3c177922ce4aec05408014"
  },
  {
    "url": "assets/js/25.c18b359b.js",
    "revision": "6fbb590d183fb3b2b8589894064b0ba9"
  },
  {
    "url": "assets/js/250.3e2a415e.js",
    "revision": "16333b1f8eb9620f002949807a66d4e6"
  },
  {
    "url": "assets/js/251.718e2d91.js",
    "revision": "8f06effcb95c55e5e4a0dae5c2735743"
  },
  {
    "url": "assets/js/252.544e982d.js",
    "revision": "47e0dcde546ab1509184d90ad601d358"
  },
  {
    "url": "assets/js/253.2b876a80.js",
    "revision": "63697a2832358c6a81c3c78663dff6e0"
  },
  {
    "url": "assets/js/254.87e91294.js",
    "revision": "62ef424bf72c5fbc8e34c5e864444ef1"
  },
  {
    "url": "assets/js/255.f6f023d3.js",
    "revision": "b6d55fd93d4881a20b62b6f47afd8888"
  },
  {
    "url": "assets/js/256.780e374f.js",
    "revision": "9c24de06bd94943567ca5697ae96bb8d"
  },
  {
    "url": "assets/js/257.49c8c9f6.js",
    "revision": "3e9ce3534577bc7f4f5e12dc6ec2fb17"
  },
  {
    "url": "assets/js/258.a84bce90.js",
    "revision": "700c7a2ff500610aa757a98294c5a409"
  },
  {
    "url": "assets/js/259.a3a99b43.js",
    "revision": "545a5ec67febd579fe473429d4b83d8c"
  },
  {
    "url": "assets/js/26.84c76978.js",
    "revision": "69487718117d1befad1e38402c76c5e1"
  },
  {
    "url": "assets/js/260.8e0f7c13.js",
    "revision": "b2ede9e59ecd473d739aaa8104c0236f"
  },
  {
    "url": "assets/js/261.f003c923.js",
    "revision": "4316bb21039457f074d105434915671c"
  },
  {
    "url": "assets/js/262.77e79826.js",
    "revision": "258d4ecb9633895c0907d3458d08bac5"
  },
  {
    "url": "assets/js/263.ddc483a5.js",
    "revision": "488f4a265897754e3701b859b67fb3d0"
  },
  {
    "url": "assets/js/264.31ad9f1d.js",
    "revision": "2c47b8605339d015634c0670649d28fc"
  },
  {
    "url": "assets/js/265.91089037.js",
    "revision": "8b7cc4187a6955c703011ec3abe8c13a"
  },
  {
    "url": "assets/js/266.44602dd4.js",
    "revision": "cab54fa5014ae240e3b61e4d7b76f20f"
  },
  {
    "url": "assets/js/267.ac9481f7.js",
    "revision": "91a7f491b524b960e6cce191e913d435"
  },
  {
    "url": "assets/js/268.a2c2f1d1.js",
    "revision": "40974d3048f96e7d44379a34fc808656"
  },
  {
    "url": "assets/js/27.f03cd069.js",
    "revision": "a5e85d8aee54f3685624390a9ae9487f"
  },
  {
    "url": "assets/js/28.8607861a.js",
    "revision": "bb3128e751275201151c1271d3c5346c"
  },
  {
    "url": "assets/js/29.3a2ef0b9.js",
    "revision": "391ab6c5e9c54dfc5f02a8c29dde50b3"
  },
  {
    "url": "assets/js/3.4c283562.js",
    "revision": "3c86788cdd80f8ec30f53e2241941a79"
  },
  {
    "url": "assets/js/30.bbb4215e.js",
    "revision": "7d1c53e467a97d66ae6df893a8956d73"
  },
  {
    "url": "assets/js/31.0ff1f0c9.js",
    "revision": "a3891179e71a7a10cb38b86b7d3e6290"
  },
  {
    "url": "assets/js/32.f3c96dfe.js",
    "revision": "a67e3f0b4b1fa4ed6ee266f1b184206c"
  },
  {
    "url": "assets/js/33.8c397be8.js",
    "revision": "72f57f59584dc648c48e71e2c4668a30"
  },
  {
    "url": "assets/js/34.cdefcec5.js",
    "revision": "c2abf40f20200887c068260c472cc997"
  },
  {
    "url": "assets/js/35.07d01d78.js",
    "revision": "e7f33325b41db8c89467ba5bcf9ce2f2"
  },
  {
    "url": "assets/js/36.40bfead1.js",
    "revision": "65f20d42a9b92842abf7aba5c392b629"
  },
  {
    "url": "assets/js/37.ec77b2ac.js",
    "revision": "e3de02f8b5379da212a4b2dc92482b08"
  },
  {
    "url": "assets/js/38.a1c6d0ff.js",
    "revision": "591c5fb10f4d9edd0662280fbef9f392"
  },
  {
    "url": "assets/js/39.da0866d5.js",
    "revision": "2c4fd423bafbfaf8f772f9d3973b8cfe"
  },
  {
    "url": "assets/js/40.f330ab7d.js",
    "revision": "7429315e752fe966693153d55f58492f"
  },
  {
    "url": "assets/js/41.bb2420d6.js",
    "revision": "ed441faea74c61d7720bf7a2f684fa7f"
  },
  {
    "url": "assets/js/42.bad6b969.js",
    "revision": "9499bf28439467ef2c794f28c3c3ecc7"
  },
  {
    "url": "assets/js/43.e39f0b9d.js",
    "revision": "85d253ae0932f53297de6ebe1402d535"
  },
  {
    "url": "assets/js/44.03894f6b.js",
    "revision": "826078670b0e191c48af1ee1304efea6"
  },
  {
    "url": "assets/js/45.59ea93e8.js",
    "revision": "3bfac01e1d92b7babf9cb5f883d60252"
  },
  {
    "url": "assets/js/46.0db035f8.js",
    "revision": "222d41db2c1af7f8ca6cf0c0dc575d8e"
  },
  {
    "url": "assets/js/47.80dda758.js",
    "revision": "5e07d004972597ce9d470123e0d74c1b"
  },
  {
    "url": "assets/js/48.a1f13037.js",
    "revision": "1c9d7368f72d0824ac3b94d76e87c98d"
  },
  {
    "url": "assets/js/49.486f3844.js",
    "revision": "f1bacfe9e1a74102ed06c048f64bcdde"
  },
  {
    "url": "assets/js/5.e54aafbe.js",
    "revision": "71782e34d0735dab8eea2732e9f6f278"
  },
  {
    "url": "assets/js/50.9ed5f871.js",
    "revision": "979d33a27477700c308206599a48ae6b"
  },
  {
    "url": "assets/js/51.bd1fac64.js",
    "revision": "5a91e9dfa6eb8ab29be83c4cf5f9b69f"
  },
  {
    "url": "assets/js/52.8a966f95.js",
    "revision": "aa59996c5033bb7b29bcf56a5571d3b0"
  },
  {
    "url": "assets/js/53.0e7e7cd2.js",
    "revision": "d4c9b915c683a516522695b22ac54c57"
  },
  {
    "url": "assets/js/54.6e779ad0.js",
    "revision": "f75893aad27db55866d7895624b97de3"
  },
  {
    "url": "assets/js/55.f0aefa0a.js",
    "revision": "9f7ce413225494a73f9ce1b270237b98"
  },
  {
    "url": "assets/js/56.c2a98f44.js",
    "revision": "9166bdf984a5de52fe2b49b855fd2663"
  },
  {
    "url": "assets/js/57.ed0f7e23.js",
    "revision": "733945b0a96798a6a9964c8829feff5b"
  },
  {
    "url": "assets/js/58.11783c32.js",
    "revision": "08d9fa16a1fd5c9bad3487cd8fe36d76"
  },
  {
    "url": "assets/js/59.c6aefb8e.js",
    "revision": "b9d88c8f703a0a6a6d02cf793e5730be"
  },
  {
    "url": "assets/js/6.ea926c96.js",
    "revision": "4aa83f83149280f0a562ff527e81b741"
  },
  {
    "url": "assets/js/60.d0c64502.js",
    "revision": "7ba3e695f9908471d359dfcd598ec3d5"
  },
  {
    "url": "assets/js/61.d6563fa1.js",
    "revision": "60c243673173053b16ee892abb899be2"
  },
  {
    "url": "assets/js/62.c2fb6022.js",
    "revision": "64acdccccac49c3791b717b429af191e"
  },
  {
    "url": "assets/js/63.3d8ec94d.js",
    "revision": "b78b2f807e010646078442fd17d85220"
  },
  {
    "url": "assets/js/64.28437d2e.js",
    "revision": "a7330ca1533a6d007f4563ee5074394f"
  },
  {
    "url": "assets/js/65.571a5ef9.js",
    "revision": "a288b747bf8902814589412915e2a157"
  },
  {
    "url": "assets/js/66.9df0942d.js",
    "revision": "7fc4aebbe5c544f70c37cf54ea27f56a"
  },
  {
    "url": "assets/js/67.1240970c.js",
    "revision": "deb5e7de304b1ed2d1a587877f22588e"
  },
  {
    "url": "assets/js/68.0f570012.js",
    "revision": "24ff6ce9b3fd648ab749ed066c6c4fcc"
  },
  {
    "url": "assets/js/69.a60e2e5c.js",
    "revision": "e98ea510f57da9b0e518fb0b1a8416bf"
  },
  {
    "url": "assets/js/7.d55ef5ab.js",
    "revision": "ebcd79a0628c961d953a9f7ddfb27ee6"
  },
  {
    "url": "assets/js/70.60d7b8da.js",
    "revision": "32274fc259d67809716675bf3e3bcd55"
  },
  {
    "url": "assets/js/71.4f7e71f2.js",
    "revision": "f847d53839ee55cb05c9932c763b9d64"
  },
  {
    "url": "assets/js/72.c10b25ae.js",
    "revision": "49e60797a9a3ac9831fbafced1fc6b57"
  },
  {
    "url": "assets/js/73.b52f17a2.js",
    "revision": "0b8bbef43d9e6d3712327bbe55f1ea59"
  },
  {
    "url": "assets/js/74.c11ca5b1.js",
    "revision": "4a02888638ea35a7e4f2054332b0bd43"
  },
  {
    "url": "assets/js/75.3fcbccb6.js",
    "revision": "6574fbe5d0d026154d7de0fad1a66782"
  },
  {
    "url": "assets/js/76.5165601c.js",
    "revision": "504166db6c2fafe888c0c07c2277bb0e"
  },
  {
    "url": "assets/js/77.a7f60ccb.js",
    "revision": "905db481be9eb171b168ff92ddbd31c7"
  },
  {
    "url": "assets/js/78.ad3ff953.js",
    "revision": "a822f33c6c0b4b6705f7f4f3052596d0"
  },
  {
    "url": "assets/js/79.d7e0eb6d.js",
    "revision": "491c9b5edece0503708067409aad2176"
  },
  {
    "url": "assets/js/8.48263f89.js",
    "revision": "a6e54d680cd5050c188b72b781c06875"
  },
  {
    "url": "assets/js/80.5834ce1b.js",
    "revision": "c9266fb91a4f66790ec0fad5796e6237"
  },
  {
    "url": "assets/js/81.a566603d.js",
    "revision": "1839c443029df02d2504b696b2a1d50f"
  },
  {
    "url": "assets/js/82.5d68d660.js",
    "revision": "911821fdbd18916383cbd0f955157ff4"
  },
  {
    "url": "assets/js/83.f4b99c4a.js",
    "revision": "63234ba704f6fce3c71a1498b69b35f5"
  },
  {
    "url": "assets/js/84.41993d8f.js",
    "revision": "004f2a1afc09c5bf10386f127fe47f9f"
  },
  {
    "url": "assets/js/85.a45922c0.js",
    "revision": "17c0a0324e9f1136d8532967093ece33"
  },
  {
    "url": "assets/js/86.e86dc23d.js",
    "revision": "a82e690ef207bf29424bdab101e59091"
  },
  {
    "url": "assets/js/87.8f9d8445.js",
    "revision": "0e7b3f0fd75dc8f6039a9fea00b26288"
  },
  {
    "url": "assets/js/88.04f13e78.js",
    "revision": "e3459c4cb29f7080bebecbb2c70594a6"
  },
  {
    "url": "assets/js/89.076860fa.js",
    "revision": "b0b5f446340af03b9260df72ed8aeb2f"
  },
  {
    "url": "assets/js/9.1af3b9ab.js",
    "revision": "338172e8a1b2831ab0f493595b09515d"
  },
  {
    "url": "assets/js/90.ee549dec.js",
    "revision": "a67f8d7a6f180af7605892f9ca075bdf"
  },
  {
    "url": "assets/js/91.ae1b76e1.js",
    "revision": "6c965aa01a9b53ea4c2d8f0b80e69e22"
  },
  {
    "url": "assets/js/92.ebbdd16b.js",
    "revision": "6b1e011473ac37ec87fab43a214eae11"
  },
  {
    "url": "assets/js/93.0dd1a8c2.js",
    "revision": "fd661ce81aed198d515d671fd8375675"
  },
  {
    "url": "assets/js/94.ed0c243b.js",
    "revision": "262dbe37ea0e30a0a0773cbf89af4b20"
  },
  {
    "url": "assets/js/95.bce90ee9.js",
    "revision": "aa0db53946a4f28f8180c3e9cc489a36"
  },
  {
    "url": "assets/js/96.43fe1725.js",
    "revision": "194fb70d585ca2a2f33f8f7a234629ab"
  },
  {
    "url": "assets/js/97.4a4f0a71.js",
    "revision": "f6b3255b5eecc144d9c526b4e4e893c5"
  },
  {
    "url": "assets/js/98.4e3232bb.js",
    "revision": "c5521ee821e5e706e6059362b55f47e2"
  },
  {
    "url": "assets/js/99.d8d4b825.js",
    "revision": "2366c919fb552362a311fe2599501055"
  },
  {
    "url": "assets/js/app.e785d77d.js",
    "revision": "df661a98acc496d98e2ca239f4b49a8b"
  },
  {
    "url": "categories/index.html",
    "revision": "083a9d5414d367dcb1c2ff08c798fa4b"
  },
  {
    "url": "cs/algorithm/analysis.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/algorithm/data-structure.html",
    "revision": "e8aded5c7dc0b329d0a101c14a1e7a25"
  },
  {
    "url": "cs/algorithm/find.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/algorithm/index.html",
    "revision": "bcb65dc0ae4aa2576868ddbeeb466cdc"
  },
  {
    "url": "cs/algorithm/other.html",
    "revision": "47b0c52349439dd795aeccc8795f319d"
  },
  {
    "url": "cs/algorithm/sort.html",
    "revision": "d9900df1749342f0af9b3870933f08c4"
  },
  {
    "url": "cs/algorithm/stack-queue.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/algorithm/union-set.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/archit/cache.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/archit/cluster.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/archit/distributed.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/archit/index.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/archit/msg-queue.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/archit/sys-design.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/compile/index.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/cpp/associative-container.html",
    "revision": "e694616e804bc31b5105e2b9f5be988c"
  },
  {
    "url": "cs/cpp/class.html",
    "revision": "e482385be7beb6e42d8826d40b9b2661"
  },
  {
    "url": "cs/cpp/copy-control.html",
    "revision": "d89890fd62d157e482237026d7d2d91f"
  },
  {
    "url": "cs/cpp/dynamic-memory.html",
    "revision": "cf5c4fc8a33e9dcd4a8da696af5f9a5e"
  },
  {
    "url": "cs/cpp/expr.html",
    "revision": "5988392650ff8b9148a279e8481359ba"
  },
  {
    "url": "cs/cpp/function.html",
    "revision": "3f67c4bae1cedbf7280e5b5cb7166d69"
  },
  {
    "url": "cs/cpp/index.html",
    "revision": "bcb65dc0ae4aa2576868ddbeeb466cdc"
  },
  {
    "url": "cs/cpp/IO.html",
    "revision": "1ce8a3f997cf7d6ecbffc9dd9e1f4c61"
  },
  {
    "url": "cs/cpp/sentence.html",
    "revision": "f4da7560a6fbbab28cfeb6b7eca85138"
  },
  {
    "url": "cs/cpp/sequential-container.html",
    "revision": "9a028d79134aeda87b73d02bfd389c27"
  },
  {
    "url": "cs/cpp/var-len-sequence.html",
    "revision": "799dc6bd48244651041f6cd33b5bf8d8"
  },
  {
    "url": "cs/cpp/var-types.html",
    "revision": "57b23e09f0f1c30b3638eb26bc5b622c"
  },
  {
    "url": "cs/database/index.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/database/leetcode-database.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/database/MySQL.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/database/principle.html",
    "revision": "f9937c1085443cb7dfd536e61a379fe7"
  },
  {
    "url": "cs/database/Redis.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/database/SQL.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/design/abserver.html",
    "revision": "a09537cf8e155bf2701e199ed6682f78"
  },
  {
    "url": "cs/design/abstract-factory.html",
    "revision": "6920da2b5c19b8a89ff7d7390566dc7d"
  },
  {
    "url": "cs/design/adapter.html",
    "revision": "84f0f035d33172ad05f4a7de947c845a"
  },
  {
    "url": "cs/design/agent.html",
    "revision": "20203ba39966247c77363d154763b23e"
  },
  {
    "url": "cs/design/appearance.html",
    "revision": "42b1bacacdd67b203b99eefd4b7fe73a"
  },
  {
    "url": "cs/design/bridging.html",
    "revision": "ad52fb30063d10e656747d87a76d6db0"
  },
  {
    "url": "cs/design/combination.html",
    "revision": "fe39aff858bd75fdc3a97dc553f4e38b"
  },
  {
    "url": "cs/design/command.html",
    "revision": "8b24004b8756731081f3711c4b562c3a"
  },
  {
    "url": "cs/design/decoration.html",
    "revision": "cb3f48405a4583165990c421609f71f3"
  },
  {
    "url": "cs/design/design-pattern.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/design/duty-chain.html",
    "revision": "0b04524b9642cf7f42e8261aaf1dd79c"
  },
  {
    "url": "cs/design/factory-method.html",
    "revision": "758008dffcf658f1867d6f0a59f35e62"
  },
  {
    "url": "cs/design/flyweight.html",
    "revision": "56b0e5fbdcc6888a52585bd24df43321"
  },
  {
    "url": "cs/design/generator.html",
    "revision": "d74916503a1010e2d176bb9ba61cab51"
  },
  {
    "url": "cs/design/index.html",
    "revision": "9ca1f347cdf8d94c8469ff58e8136aa6"
  },
  {
    "url": "cs/design/interpreter.html",
    "revision": "723975ca4125fea88e138b8c4f86b1ff"
  },
  {
    "url": "cs/design/iterator.html",
    "revision": "d8f6391c440236a43ae6989300090dcd"
  },
  {
    "url": "cs/design/mediator.html",
    "revision": "315151dfe40aee8775f9330f2188b8cc"
  },
  {
    "url": "cs/design/memo.html",
    "revision": "2b28596e590c15cac0810b2af883a101"
  },
  {
    "url": "cs/design/null-object.html",
    "revision": "f49e77e5797f6aa2a05243a111a80266"
  },
  {
    "url": "cs/design/oriente-object.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/design/prototype.html",
    "revision": "43ea77d6da123701dfabce40e9b91181"
  },
  {
    "url": "cs/design/simple-factory.html",
    "revision": "c5c98e0b6681d5069966167ea58f4a07"
  },
  {
    "url": "cs/design/singleton.html",
    "revision": "a98f49e1c399d7323f671106c6c00b42"
  },
  {
    "url": "cs/design/state.html",
    "revision": "d70c071a43b10973d1a1f7cc6e13613c"
  },
  {
    "url": "cs/design/strategy.html",
    "revision": "520b05a9f9351e5ed89f654fa0abea25"
  },
  {
    "url": "cs/design/temp-method.html",
    "revision": "3c5341d0403762a21fd1cb2c7101aab6"
  },
  {
    "url": "cs/design/visitor.html",
    "revision": "61620dd536bd6b84c8ed2b6c3de530df"
  },
  {
    "url": "cs/framework/front-end.html",
    "revision": "642c76a77679f64bc2eada5ef9bee63d"
  },
  {
    "url": "cs/framework/index.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/framework/vue-a.html",
    "revision": "e1235c91d4b5ed268439eab5fe72bdda"
  },
  {
    "url": "cs/framework/vue-b.html",
    "revision": "fe3bd609743aaad930f0b28ee0efbdf9"
  },
  {
    "url": "cs/framework/vue-c.html",
    "revision": "7479cd5976b897f459d8c056645bca0b"
  },
  {
    "url": "cs/framework/vue3-reactivity.html",
    "revision": "07a310c11cb7547e2f652c63e999cb79"
  },
  {
    "url": "cs/framework/webpack.html",
    "revision": "ad776199fe7fe67f930d764c615f5fa8"
  },
  {
    "url": "cs/index.html",
    "revision": "a9e3fb5ee21f21055df2fb18520b93e7"
  },
  {
    "url": "cs/java/basic.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/java/concurrenry.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/java/container.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/java/index.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/java/JavaIO.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/java/virtual-marchine.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/Lang/CSS.html",
    "revision": "5e746ded828001059c51362bb19e362d"
  },
  {
    "url": "cs/Lang/English.html",
    "revision": "31391a0da007f63b16eee32e66f72284"
  },
  {
    "url": "cs/Lang/ES6.html",
    "revision": "d69b55e3e6a64c68b89ae052eb2c08eb"
  },
  {
    "url": "cs/Lang/html.html",
    "revision": "2b327e5416a8361137b10d7a300095a2"
  },
  {
    "url": "cs/Lang/index.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/Lang/JavaScript.html",
    "revision": "82ea5553c39b86673783f7c8665c3e5d"
  },
  {
    "url": "cs/Lang/JSTricks.html",
    "revision": "42a6c1b3316a4287869c4dabfee6c872"
  },
  {
    "url": "cs/Lang/python.html",
    "revision": "86f0083390021ddbea7d01d29ce16c40"
  },
  {
    "url": "cs/Lang/regex.html",
    "revision": "eec3d1da03cbea59e7a069747a574174"
  },
  {
    "url": "cs/Lang/use_css.html",
    "revision": "f3d9227df0ac3a0267e48a5cb349a11b"
  },
  {
    "url": "cs/leetcode/array.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/leetcode/bin-search.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/leetcode/bit-operator.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/leetcode/bound-check.html",
    "revision": "ab5cf68e311cf62d81194ed9d3931bed"
  },
  {
    "url": "cs/leetcode/divide-conquer.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/leetcode/double-pointer.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/leetcode/dynamic.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/leetcode/find.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/leetcode/graph.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/leetcode/greedy.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/leetcode/hash-table.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/leetcode/index.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/leetcode/lcd-3.html",
    "revision": "221de062f24353852d39d1758c534ddb"
  },
  {
    "url": "cs/leetcode/list.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/leetcode/math.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/leetcode/ncode4.html",
    "revision": "be831bb8a9adcc780241dc172766d496"
  },
  {
    "url": "cs/leetcode/ncode5.html",
    "revision": "f169e4c618b461989539a95fc6af9067"
  },
  {
    "url": "cs/leetcode/p0.html",
    "revision": "c65af0e85ae4fefe1c619cc28b406c48"
  },
  {
    "url": "cs/leetcode/p1.html",
    "revision": "d0ac8c2dd33261cdacb32606c2b6d5b4"
  },
  {
    "url": "cs/leetcode/p10.html",
    "revision": "04ba76bcf39aa3e551eed2858931face"
  },
  {
    "url": "cs/leetcode/p11.html",
    "revision": "149682d67022d6e4f3408c3bdd83c29d"
  },
  {
    "url": "cs/leetcode/p12.html",
    "revision": "1ba4f47275d8c04cc715b909b41649db"
  },
  {
    "url": "cs/leetcode/p13.html",
    "revision": "3dd1c9a8d280388b8e584211a9c199a9"
  },
  {
    "url": "cs/leetcode/p14.html",
    "revision": "4aad3102ff6aa1c0dc4d537490ef9d1a"
  },
  {
    "url": "cs/leetcode/p15.html",
    "revision": "9cdbbbcf6c553f7002693a2483372abf"
  },
  {
    "url": "cs/leetcode/p16.html",
    "revision": "40a9722b2a393f342a03d004982b727e"
  },
  {
    "url": "cs/leetcode/p17.html",
    "revision": "e41720821d7d7cba755788317b4bb6ee"
  },
  {
    "url": "cs/leetcode/p18.html",
    "revision": "69d45ebae608f1ebcf4fa750fabbce1d"
  },
  {
    "url": "cs/leetcode/p19.html",
    "revision": "df55806d1ba62c4aace5ab487a5c6f11"
  },
  {
    "url": "cs/leetcode/p2.html",
    "revision": "2dce9ab2542ce931feb0200c9feec68d"
  },
  {
    "url": "cs/leetcode/p20.html",
    "revision": "de106dd4e8350b121a1fc77a7f86eb70"
  },
  {
    "url": "cs/leetcode/p21.html",
    "revision": "226623405424c68af2ececa35ef41909"
  },
  {
    "url": "cs/leetcode/p22.html",
    "revision": "a28ff6fb33cd5620c5456fdcc9fb4a17"
  },
  {
    "url": "cs/leetcode/p23.html",
    "revision": "b8d52ef49328a0081a978b59aa99a23c"
  },
  {
    "url": "cs/leetcode/p24.html",
    "revision": "ce66c520041119034434a5c356866b58"
  },
  {
    "url": "cs/leetcode/p25.html",
    "revision": "b7efc7b7b219247fe64dbb2adfb1f606"
  },
  {
    "url": "cs/leetcode/p26.html",
    "revision": "1e3cb798e39a616b3c401b32c0e3df60"
  },
  {
    "url": "cs/leetcode/p27.html",
    "revision": "31c071730c2b72a529d81f2a3dc968ba"
  },
  {
    "url": "cs/leetcode/p28.html",
    "revision": "df9bede0bf5eb9db2d55c95f5f0b6c2e"
  },
  {
    "url": "cs/leetcode/p29.html",
    "revision": "bcfc3bbabf920829ac7256130b90228f"
  },
  {
    "url": "cs/leetcode/p3.html",
    "revision": "b65573a16dffc0909745aebacbd3af60"
  },
  {
    "url": "cs/leetcode/p30.html",
    "revision": "45a0c99bd5258ee7d87b4a54794aa2dc"
  },
  {
    "url": "cs/leetcode/p31.html",
    "revision": "471ca966c3c063e39f3ac5eacd96aba3"
  },
  {
    "url": "cs/leetcode/p32.html",
    "revision": "6653f2c6847b7c118eae76cb1fa58b10"
  },
  {
    "url": "cs/leetcode/p33.html",
    "revision": "f00b827077a27b42c7ed7dd531cf107f"
  },
  {
    "url": "cs/leetcode/p34.html",
    "revision": "0680cbc33abbc5567f60ae9925787f0a"
  },
  {
    "url": "cs/leetcode/p35.html",
    "revision": "20bca449565398cdda6bb893c6239bcf"
  },
  {
    "url": "cs/leetcode/p36.html",
    "revision": "cb556ffa8617427112c051e1c4b40f9a"
  },
  {
    "url": "cs/leetcode/p37.html",
    "revision": "56dbe0cd5d5a599fbda8f374f281ba12"
  },
  {
    "url": "cs/leetcode/p38.html",
    "revision": "1d19746f000c9094238a8059e863a015"
  },
  {
    "url": "cs/leetcode/p39.html",
    "revision": "65792cc2d4ea619deabf6256d202f13f"
  },
  {
    "url": "cs/leetcode/p4.html",
    "revision": "b9e5af5fc61bc41528a6cedc3f05ac4d"
  },
  {
    "url": "cs/leetcode/p40.html",
    "revision": "12a66e76886c8fa25f4b2bf98a1687bd"
  },
  {
    "url": "cs/leetcode/p41.html",
    "revision": "04d8fc9bb1d0503705100ecaa2e0c7e4"
  },
  {
    "url": "cs/leetcode/p42.html",
    "revision": "faea08b931a5c4ca044915bb41346f89"
  },
  {
    "url": "cs/leetcode/p43.html",
    "revision": "13b7ab853c060f84af1365b5536fc28e"
  },
  {
    "url": "cs/leetcode/p44.html",
    "revision": "1abe2d5170bd3fa4bcc2e9045a2a9369"
  },
  {
    "url": "cs/leetcode/p45.html",
    "revision": "dd476f8e7dc53ae21eeff5a7a4db599a"
  },
  {
    "url": "cs/leetcode/p46.html",
    "revision": "79427b9ccc0e898ee72a2b7e96108d4c"
  },
  {
    "url": "cs/leetcode/p47.html",
    "revision": "fdb1f092ab826ccd1689a33b5ce29a1f"
  },
  {
    "url": "cs/leetcode/p48.html",
    "revision": "b527c84ecf6d7fa46cddb7ecfa598b60"
  },
  {
    "url": "cs/leetcode/p49.html",
    "revision": "4c02b3992dba7ad29f5509b786cde048"
  },
  {
    "url": "cs/leetcode/p5.html",
    "revision": "6fdac5112bd080ac7550ce6d1231aae6"
  },
  {
    "url": "cs/leetcode/p50.html",
    "revision": "7c6097678013359a239bb73c1730dd50"
  },
  {
    "url": "cs/leetcode/p51.html",
    "revision": "6e0be31d9874a0d2bc16b6618d25f166"
  },
  {
    "url": "cs/leetcode/p52.html",
    "revision": "be2f541ba8999c2529b1404e5f27d2a7"
  },
  {
    "url": "cs/leetcode/p53.html",
    "revision": "4b425645ccbd7378f9ec86a43caef330"
  },
  {
    "url": "cs/leetcode/p54.html",
    "revision": "f48305d730cbb3bdb02ed03c8483aab3"
  },
  {
    "url": "cs/leetcode/p55.html",
    "revision": "0ae9a6e33de5873359c88a2c55bcfc03"
  },
  {
    "url": "cs/leetcode/p56.html",
    "revision": "ddb9fca0fb6d18873357d29762b2db80"
  },
  {
    "url": "cs/leetcode/p57.html",
    "revision": "837ac5896af49291d81e6b077d72bcff"
  },
  {
    "url": "cs/leetcode/p58.html",
    "revision": "69651a56ed46606010432a854f6134b5"
  },
  {
    "url": "cs/leetcode/p59.html",
    "revision": "0c7a474d7d75235f325b8c47c95f4f91"
  },
  {
    "url": "cs/leetcode/p6.html",
    "revision": "d7e9a78358f1505ef47a6572617c62e9"
  },
  {
    "url": "cs/leetcode/p60.html",
    "revision": "c461666e3de5c692f94958751f288065"
  },
  {
    "url": "cs/leetcode/p61.html",
    "revision": "90dc6cc83721ecec4c9c2e8628af3562"
  },
  {
    "url": "cs/leetcode/p62.html",
    "revision": "9c2808f15834b9cbb0ac9e33f9c00e7b"
  },
  {
    "url": "cs/leetcode/p63.html",
    "revision": "1f40fe052342efd5f9df1383cfd0950e"
  },
  {
    "url": "cs/leetcode/p64.html",
    "revision": "24ae9baee75ac0687592169379313011"
  },
  {
    "url": "cs/leetcode/p65.html",
    "revision": "d9cbcfe7387bafa218b066a6d75771a5"
  },
  {
    "url": "cs/leetcode/p66.html",
    "revision": "412500b7e3e98b32a08e507f575b5102"
  },
  {
    "url": "cs/leetcode/p67.html",
    "revision": "83889d2595571aceb344ed74c7d5bde0"
  },
  {
    "url": "cs/leetcode/p68.html",
    "revision": "14389a61bb35d444a21968a970b8de3a"
  },
  {
    "url": "cs/leetcode/p69.html",
    "revision": "4dbaa8bec501f519a1fa8f4dc86cb04d"
  },
  {
    "url": "cs/leetcode/p7.html",
    "revision": "8ebee55c1f4fae54bbf1ed8a6ae8c702"
  },
  {
    "url": "cs/leetcode/p70.html",
    "revision": "464055f7fe0b39819e77aee66eab21d3"
  },
  {
    "url": "cs/leetcode/p71.html",
    "revision": "81d4f33f277f056af89442b7db976011"
  },
  {
    "url": "cs/leetcode/p72.html",
    "revision": "c9ea811e6e66bf40002a329e085f4898"
  },
  {
    "url": "cs/leetcode/p73.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/leetcode/p74.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/leetcode/p75.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/leetcode/p76.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/leetcode/p77.html",
    "revision": "cb556ffa8617427112c051e1c4b40f9a"
  },
  {
    "url": "cs/leetcode/p78.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/leetcode/p79.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/leetcode/p8.html",
    "revision": "5f8f6f65c737d9226ca5234922e0e086"
  },
  {
    "url": "cs/leetcode/p80.html",
    "revision": "37be87a8a3b7789b767c6b16b58c9571"
  },
  {
    "url": "cs/leetcode/p81.html",
    "revision": "bcb65dc0ae4aa2576868ddbeeb466cdc"
  },
  {
    "url": "cs/leetcode/p82.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/leetcode/p9.html",
    "revision": "0a8ab9cd67a5a3e512c91af770f634ab"
  },
  {
    "url": "cs/leetcode/sort.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/leetcode/stack-queue.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/leetcode/string.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/leetcode/tree.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/linux/common-command.html",
    "revision": "170d9b4f35850cf28f270cb44b59b234"
  },
  {
    "url": "cs/linux/index.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/linux/Linux.html",
    "revision": "56b34887e4413b3e39625db116e150b5"
  },
  {
    "url": "cs/linux/process.html",
    "revision": "1793a5dbf282be8008af3565288eddd5"
  },
  {
    "url": "cs/network/application.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/network/conclude.html",
    "revision": "4c2068e8d38e0bc50ed32730692b4454"
  },
  {
    "url": "cs/network/HTTP.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/network/index.html",
    "revision": "bcb65dc0ae4aa2576868ddbeeb466cdc"
  },
  {
    "url": "cs/network/link.html",
    "revision": "4454b412f04f02a9cffff3f7d35c1169"
  },
  {
    "url": "cs/network/network.html",
    "revision": "6b57040130555d1755a0f125c8c2f338"
  },
  {
    "url": "cs/network/physical.html",
    "revision": "a73f83169c31b1bc3a7ead2387f13028"
  },
  {
    "url": "cs/network/Socket.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/network/summary.html",
    "revision": "ff4b731f383e366e7fdb39f8cb7c55ff"
  },
  {
    "url": "cs/network/transport.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/Osystem/concept.html",
    "revision": "932744de7f82e82c5d181343fd300eca"
  },
  {
    "url": "cs/Osystem/conclude.html",
    "revision": "9098d61f39a59132163f6cbb17317730"
  },
  {
    "url": "cs/Osystem/deadlock.html",
    "revision": "77e4c58cf22bb11bf982cf1b8bfa1778"
  },
  {
    "url": "cs/Osystem/device-mgmt.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/Osystem/index.html",
    "revision": "bcb65dc0ae4aa2576868ddbeeb466cdc"
  },
  {
    "url": "cs/Osystem/memory-mgmt.html",
    "revision": "adea837c84090fcfb1075594622cacf1"
  },
  {
    "url": "cs/Osystem/process-mgmt.html",
    "revision": "542ce9bcdcd7976dd7cf8ec58f7d3293"
  },
  {
    "url": "cs/tools/build-tools.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/tools/code-readability.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/tools/code-style.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/tools/Docker.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/tools/Git.html",
    "revision": "4caba0a933fba1a9ece9f120ca7fbd89"
  },
  {
    "url": "cs/tools/index.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/tools/regular-expr.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/web/attack-tech.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "cs/web/browser.html",
    "revision": "87ee03b18747ea38511be64829afbe9d"
  },
  {
    "url": "cs/web/guide.html",
    "revision": "5e746ded828001059c51362bb19e362d"
  },
  {
    "url": "cs/web/index.html",
    "revision": "72af70ba5a854652da7c2385ce6110fd"
  },
  {
    "url": "cs/web/performance.html",
    "revision": "848e84099800f67489ffb82cb744e29a"
  },
  {
    "url": "cs/web/resource.html",
    "revision": "8ac70adab9a9bce95f2767a342858bbb"
  },
  {
    "url": "cs/web/web.html",
    "revision": "aa32ca53d244d26b5af03db22289ffab"
  },
  {
    "url": "daily-life/phone-lost.html",
    "revision": "50e49f643258d11d9e40e3b5b4004bf1"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "1b4f635128a82bc4fd9a0c8141d9386e"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "b2f2662e652fc16c402d788b42b29efa"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "85d9f0d2c6d7c2c20a04c5ae95aa1860"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "33db48f5c6c1b732365cab69e3c155b0"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "a2d48fb807fd7c2a6deb2e2170ac76f3"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "2350602bfb8228f4f0361e4f64321c7b"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "2797b3ae848e499c5fe6b0bb9368ed89"
  },
  {
    "url": "index.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "language/english/adjective.html",
    "revision": "e59c34b924ce85f19dc92990f452e6d5"
  },
  {
    "url": "language/english/adverb.html",
    "revision": "4c93c950595b6ee291c745d6c8df3fcf"
  },
  {
    "url": "language/english/determiner.html",
    "revision": "ca0e6bd971cb12f57d5b225026d44edf"
  },
  {
    "url": "language/english/differ.html",
    "revision": "7c17791fc8f3a2dd4242236d77f6bdb5"
  },
  {
    "url": "language/english/index.html",
    "revision": "31391a0da007f63b16eee32e66f72284"
  },
  {
    "url": "language/english/modal.html",
    "revision": "704b18c30613baae2fd35ed344efee34"
  },
  {
    "url": "language/english/mood.html",
    "revision": "6e16380b7ce6b8b7ad7c94aa59e4b60c"
  },
  {
    "url": "language/english/non-predicate.html",
    "revision": "46ca89ed7591c82306c149552040be8d"
  },
  {
    "url": "language/english/nouns.html",
    "revision": "ad0fed68e0f9ede43cb3233b9d08c812"
  },
  {
    "url": "language/english/phonetic.html",
    "revision": "6d95158a937e94121d1ccd3b5ebe4287"
  },
  {
    "url": "language/english/preposition.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "language/english/pronoun.html",
    "revision": "0ebb0fc230848e991714e935d2c7210d"
  },
  {
    "url": "language/english/sentence.html",
    "revision": "8f6229d867686d32a5d6918f45eb1278"
  },
  {
    "url": "language/english/tense.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "language/english/verb.html",
    "revision": "aa7597947572ac62dcaa43bc96fb0f8b"
  },
  {
    "url": "language/english/word5000.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "language/index.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "tag/index.html",
    "revision": "b2920e06477e2b6516b67f54be15e5c1"
  },
  {
    "url": "timeline/index.html",
    "revision": "e2818b411f15baf73ba319f2e25ba0a1"
  },
  {
    "url": "tools/chatgpt.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "tools/hash.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "tools/index.html",
    "revision": "de179f793e537d665821e69d39077636"
  },
  {
    "url": "tools/test1234567890.html",
    "revision": "de179f793e537d665821e69d39077636"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
