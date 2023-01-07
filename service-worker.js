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
    "revision": "31d205edfae5e12265970bc811a08a46"
  },
  {
    "url": "assets/css/0.styles.130693aa.css",
    "revision": "04fbc7ac164baccb1858560487b0a18b"
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
    "url": "assets/img/vue3-obj-effect.55d0254e.jpeg",
    "revision": "55d0254e6067b00fb2230a984a28a6a9"
  },
  {
    "url": "assets/js/1.4917d519.js",
    "revision": "14dcac81db1a7ab4c1e0444324ac5966"
  },
  {
    "url": "assets/js/10.75a23e06.js",
    "revision": "2904fc720078082a6f22c8d3529434fb"
  },
  {
    "url": "assets/js/100.7b5e0a5a.js",
    "revision": "8027a41d9b5880398f4821f6e31ad18c"
  },
  {
    "url": "assets/js/101.c7312c6f.js",
    "revision": "e8d49dc8a64a039f7bbd1873c5e7e54f"
  },
  {
    "url": "assets/js/102.79204301.js",
    "revision": "0be80c472f58e2ce1e59a416a280d387"
  },
  {
    "url": "assets/js/103.3362e344.js",
    "revision": "3d4a3e0124619ff87dec80e2293f5b53"
  },
  {
    "url": "assets/js/104.b0bc5e68.js",
    "revision": "fc9e18b7502072de290ab260e47f1e00"
  },
  {
    "url": "assets/js/105.83fe3c39.js",
    "revision": "dfa7a3a971666b767c55686731aded37"
  },
  {
    "url": "assets/js/106.b565a237.js",
    "revision": "2d53dcc74d275ea24eccdc8c35fb675a"
  },
  {
    "url": "assets/js/107.29506b96.js",
    "revision": "b631bd7f8aaa86f6f08074ba4948121f"
  },
  {
    "url": "assets/js/108.dc2d005d.js",
    "revision": "3811d2fac1665d948b3509942218b13f"
  },
  {
    "url": "assets/js/109.fa35e4d7.js",
    "revision": "81dda48693590b3c6dfc7a740257a695"
  },
  {
    "url": "assets/js/11.b065aa0f.js",
    "revision": "c4cffb6f64a64ea7e88718042c4798fc"
  },
  {
    "url": "assets/js/110.63efc3ba.js",
    "revision": "89c237f9a637bcd258a28a90a889d821"
  },
  {
    "url": "assets/js/111.50c6f413.js",
    "revision": "60d08e995a328d08aa5432a1017fef23"
  },
  {
    "url": "assets/js/112.793b5a42.js",
    "revision": "18951f50a9a067c5c790389d2957c966"
  },
  {
    "url": "assets/js/113.72bf38c4.js",
    "revision": "33f77e018e7cdc141c78b6b5570cab26"
  },
  {
    "url": "assets/js/114.0adcfa60.js",
    "revision": "15d7a52ea54a02dfe3bfb1e30e88faca"
  },
  {
    "url": "assets/js/115.4ac9dac7.js",
    "revision": "f50a93fbdc1388595019a4ec8fffbaaa"
  },
  {
    "url": "assets/js/116.5d487827.js",
    "revision": "250c171553e8b50df5f56c9fae4cc276"
  },
  {
    "url": "assets/js/117.a8602dce.js",
    "revision": "c7f48db0cab4f36986d2a9cada602596"
  },
  {
    "url": "assets/js/118.a565910d.js",
    "revision": "e37c2aa658a7a10db79a138a6d6cf2c8"
  },
  {
    "url": "assets/js/119.791b3951.js",
    "revision": "0b8a4096e78feef9a46afe8ccf33046a"
  },
  {
    "url": "assets/js/12.387582aa.js",
    "revision": "b86f44057d39d58c1c9aea64031d96b5"
  },
  {
    "url": "assets/js/120.7c28a9c5.js",
    "revision": "5e32d6a772590a7806dc2ea16e161263"
  },
  {
    "url": "assets/js/121.458774b9.js",
    "revision": "d1db04e33f6abdc068a4156d0c388a30"
  },
  {
    "url": "assets/js/122.f848530b.js",
    "revision": "adce5437c0e4e3ed51b92b5558f0f7bc"
  },
  {
    "url": "assets/js/123.2a9072ea.js",
    "revision": "101830207091b663006d5571fcff943f"
  },
  {
    "url": "assets/js/124.c50e9246.js",
    "revision": "afb07750c01e83a6ff557ed8618aba62"
  },
  {
    "url": "assets/js/125.fde3ccd1.js",
    "revision": "3a9adad2146023a82b1a725607f11ce6"
  },
  {
    "url": "assets/js/126.4fad12a8.js",
    "revision": "5cf41d347263fdb10b83e8da27ddbb6f"
  },
  {
    "url": "assets/js/127.f7657143.js",
    "revision": "b4edfce04590e159e3a42b5b0ca9c9a0"
  },
  {
    "url": "assets/js/128.f775951c.js",
    "revision": "7a4f5a9ea1494af4f3aa839b54481f9d"
  },
  {
    "url": "assets/js/129.763b7de5.js",
    "revision": "c959ac21e007cb87b82d4ffa6cd4edb9"
  },
  {
    "url": "assets/js/13.94870692.js",
    "revision": "6e0068636c9f4c78ec1df38002c3f556"
  },
  {
    "url": "assets/js/130.53bdd89c.js",
    "revision": "03ca9f18ab1239003bd5ca4d7e4cc1e6"
  },
  {
    "url": "assets/js/131.26b955ec.js",
    "revision": "dfb205006d2a77efbff261b9d40b0feb"
  },
  {
    "url": "assets/js/132.fdb93dfc.js",
    "revision": "c76f325b760e898616bceaa8d04aad57"
  },
  {
    "url": "assets/js/133.9cdfb1b1.js",
    "revision": "b613938aa2c289260dab11c9ca6c6652"
  },
  {
    "url": "assets/js/134.64423892.js",
    "revision": "b11b0b36020182edec95ebe60db41128"
  },
  {
    "url": "assets/js/135.8f85672c.js",
    "revision": "0a4a44d00988777e085a9604067d075e"
  },
  {
    "url": "assets/js/136.cb78f3fe.js",
    "revision": "9462e01157b72d6eb8428f3a455020eb"
  },
  {
    "url": "assets/js/137.ec0235f1.js",
    "revision": "a8d8ee57fba5873dfe8997e49fa6244d"
  },
  {
    "url": "assets/js/138.71d0c50e.js",
    "revision": "e0234b0a7a4f662b4476c8acd398e3b5"
  },
  {
    "url": "assets/js/139.5faee576.js",
    "revision": "bac7c12938347b2291f1a0e0f4130b4e"
  },
  {
    "url": "assets/js/14.64f5c4af.js",
    "revision": "5057517814b8311a5f6c26d3c9f0a601"
  },
  {
    "url": "assets/js/140.cb378948.js",
    "revision": "36b4cf6341b1200c727a1070ad466289"
  },
  {
    "url": "assets/js/141.39ad4b55.js",
    "revision": "6457540278ae77d07db2414d68fe0e7c"
  },
  {
    "url": "assets/js/142.3f54b6ee.js",
    "revision": "4f70cc4ff7a814c2c4d29c7eaf376f58"
  },
  {
    "url": "assets/js/143.75a6890b.js",
    "revision": "125b9fc566f5e106e8e317ecb02e0521"
  },
  {
    "url": "assets/js/144.b4a11165.js",
    "revision": "5c320a23e448481ee91f946bd69a5754"
  },
  {
    "url": "assets/js/145.9bc31e82.js",
    "revision": "e1cc4aa674ae9d450c13441d059c193c"
  },
  {
    "url": "assets/js/146.ded8fba3.js",
    "revision": "55efff751b97aa86f795f76be7454f3a"
  },
  {
    "url": "assets/js/147.941a36a9.js",
    "revision": "91f81e97be337b7c0cdc08b978beb0dd"
  },
  {
    "url": "assets/js/148.a8ad8aa7.js",
    "revision": "b0f2d74eba29a0f55b365abd2e886510"
  },
  {
    "url": "assets/js/149.e470fcb2.js",
    "revision": "575a17fbc56fbb5e1915afbbf495870b"
  },
  {
    "url": "assets/js/15.bb29a118.js",
    "revision": "1c78db255726fc31db25b6636e534871"
  },
  {
    "url": "assets/js/150.073f2444.js",
    "revision": "420c7507d7caa4fa159305cc33ee7557"
  },
  {
    "url": "assets/js/151.21ef2946.js",
    "revision": "b644032ff8cea97fa8dab40fa166c15c"
  },
  {
    "url": "assets/js/152.31e3476c.js",
    "revision": "ce27f1e86ed29be6bd10fd192c73e167"
  },
  {
    "url": "assets/js/153.aa6c2dd8.js",
    "revision": "d20d845aeba98c1c09b8667e796f11d2"
  },
  {
    "url": "assets/js/154.b7bb2eac.js",
    "revision": "d653e3631df200e0de99dd2e38e0bda4"
  },
  {
    "url": "assets/js/155.ab49aba7.js",
    "revision": "5173e4ac3d40d92fc989d8b28b4521be"
  },
  {
    "url": "assets/js/156.1d4ac51a.js",
    "revision": "508d9c5d886738a7b19882d39bd5abf8"
  },
  {
    "url": "assets/js/157.b6921b06.js",
    "revision": "7ba5b91ac2bbf44f81646d4d4e239912"
  },
  {
    "url": "assets/js/158.703ef98d.js",
    "revision": "25539e427c796f038684d3a14f1e8ccd"
  },
  {
    "url": "assets/js/159.27b56e6a.js",
    "revision": "39aeeab813b7410c93cb79bfa3e864d3"
  },
  {
    "url": "assets/js/16.747d5b7e.js",
    "revision": "e57b52382d828d56a2d26bce3a1fa4ba"
  },
  {
    "url": "assets/js/160.408f81ae.js",
    "revision": "df86ae70f20e35da7670e4a709e13e58"
  },
  {
    "url": "assets/js/161.eeacc752.js",
    "revision": "398af22b55704b68193e0cb480b3762f"
  },
  {
    "url": "assets/js/162.3b26749a.js",
    "revision": "fb77474da117080fcbbb5f7dadd51e77"
  },
  {
    "url": "assets/js/163.b8e77ecb.js",
    "revision": "5400f8d5b4094609ca1c7d30cdce1222"
  },
  {
    "url": "assets/js/164.11b828ab.js",
    "revision": "a40b56a8dac742a11c104b7ce15ab6d8"
  },
  {
    "url": "assets/js/165.85959083.js",
    "revision": "3d1b48f6e51e0b9bece1678bc0f566cc"
  },
  {
    "url": "assets/js/166.0867008d.js",
    "revision": "8505ab742bf72bd02f5a2de575141ea0"
  },
  {
    "url": "assets/js/167.55679faf.js",
    "revision": "0564b1ffb8c56807edafd5dcbec5815e"
  },
  {
    "url": "assets/js/168.d7353a23.js",
    "revision": "780ecd161410467e3d49c4cd9f072a1e"
  },
  {
    "url": "assets/js/169.87868390.js",
    "revision": "f4811482774521c5116104554318e908"
  },
  {
    "url": "assets/js/17.0ad3fe17.js",
    "revision": "59bcb9601ad8dede9f71aafacc9fd1e7"
  },
  {
    "url": "assets/js/170.f298062c.js",
    "revision": "749c61c30dd3ccd5e195f58e5aa54cb3"
  },
  {
    "url": "assets/js/171.e01ad691.js",
    "revision": "5d9854c91787e2c2dabac89f1ab5b821"
  },
  {
    "url": "assets/js/172.b12aab79.js",
    "revision": "b2747702addb287138cf9303dd7b7cfc"
  },
  {
    "url": "assets/js/173.0431c905.js",
    "revision": "b680e1521170783247ff833ec79388a1"
  },
  {
    "url": "assets/js/174.a33ee8bc.js",
    "revision": "eec7d778782f0b3fdbf85085ffd96aa0"
  },
  {
    "url": "assets/js/175.69bf0ee5.js",
    "revision": "81b3d9bc850434e0569a9d38e51d5d36"
  },
  {
    "url": "assets/js/176.c82f524e.js",
    "revision": "a86b67b7c45d1f6d5bdfdb80c9ce0982"
  },
  {
    "url": "assets/js/177.90fd81e5.js",
    "revision": "d22cc001a9dc1c842f235ab421e515f6"
  },
  {
    "url": "assets/js/178.6026c420.js",
    "revision": "a0af2e5ff68e788ff371c57ffb339226"
  },
  {
    "url": "assets/js/179.fa6c58ce.js",
    "revision": "99f86e521e6f48bcba405ecac3c1f2dd"
  },
  {
    "url": "assets/js/18.9db53f1e.js",
    "revision": "01ae34cbd3c23492aa7e4f73ce97ece2"
  },
  {
    "url": "assets/js/180.79e2c07d.js",
    "revision": "2d320c8e2265e0325c7a2f017c62ed53"
  },
  {
    "url": "assets/js/181.95d636b4.js",
    "revision": "fc16e6e541bd91465f0a4b1ef286546a"
  },
  {
    "url": "assets/js/182.6bb489df.js",
    "revision": "dd04a9e2e73cf59942c2cd22ba120c5c"
  },
  {
    "url": "assets/js/183.41daaef9.js",
    "revision": "f6fb1ccd08ddd24f155f63a546df5854"
  },
  {
    "url": "assets/js/184.56776b3d.js",
    "revision": "bd771cae75a9ec901f7d74d915f87aae"
  },
  {
    "url": "assets/js/185.db4ede21.js",
    "revision": "dfc21d4f835d227ab953f79f87733239"
  },
  {
    "url": "assets/js/186.aacac903.js",
    "revision": "047af591a54f8de57e60ad4a40bb4459"
  },
  {
    "url": "assets/js/187.d15afb1a.js",
    "revision": "8502d64da9d174b1133fcf0eab938365"
  },
  {
    "url": "assets/js/188.78d62857.js",
    "revision": "c8004574fc96a3f56769ef5e29bf4252"
  },
  {
    "url": "assets/js/189.c32368e8.js",
    "revision": "52c691d42c2427a219e99118564d2d79"
  },
  {
    "url": "assets/js/19.d603fe8e.js",
    "revision": "0b979a711308230ad4ed40ffd34af2e4"
  },
  {
    "url": "assets/js/190.0600b99e.js",
    "revision": "5f747fc4498b62e055edecbd8036a613"
  },
  {
    "url": "assets/js/191.b7b447bf.js",
    "revision": "215f798cb5ea165630a8c4006cb20ef1"
  },
  {
    "url": "assets/js/192.11d6cc6e.js",
    "revision": "7e1d62e7c16fbfc0b38cdae26e694924"
  },
  {
    "url": "assets/js/193.19a2ae9e.js",
    "revision": "4647e05b1726c2d5dcf80531825d4cb8"
  },
  {
    "url": "assets/js/194.9e097e2a.js",
    "revision": "2aca3ebaeb58dc97b63f9471d70b85df"
  },
  {
    "url": "assets/js/195.0f2832a1.js",
    "revision": "e18cff98f9e05421880f941b72cb8d24"
  },
  {
    "url": "assets/js/196.dc5e0afc.js",
    "revision": "3ac7c3f42afbbabfd3a51a6548b0e6f5"
  },
  {
    "url": "assets/js/197.da56d3bb.js",
    "revision": "bf74503c841b01943f19583d8c2073b5"
  },
  {
    "url": "assets/js/198.bae3c9a9.js",
    "revision": "fce5d96f69c7546174da3a0c1ca0800d"
  },
  {
    "url": "assets/js/199.7e50981c.js",
    "revision": "f0110e76253636a553b521ec413f23c4"
  },
  {
    "url": "assets/js/20.f1df3293.js",
    "revision": "cb1f729afaf2b5e993248c85b5b20bc7"
  },
  {
    "url": "assets/js/200.783cfb82.js",
    "revision": "5843d4b3b7f2a2326be7e8dfa572c456"
  },
  {
    "url": "assets/js/201.9c6232b8.js",
    "revision": "0f93043b0ac3c4ea91add14716da131b"
  },
  {
    "url": "assets/js/202.1798c203.js",
    "revision": "201910fc307f626aaa160a672c763401"
  },
  {
    "url": "assets/js/203.8d0842df.js",
    "revision": "9b1c72ea4b9cab8c5c1b603984f00559"
  },
  {
    "url": "assets/js/204.111d2bb5.js",
    "revision": "01bbbeb195f89a0588cbafbb94873149"
  },
  {
    "url": "assets/js/205.d1cdb15a.js",
    "revision": "7cea60f0b7f32886d932c9af2190ee83"
  },
  {
    "url": "assets/js/206.37d9e3fe.js",
    "revision": "0238fa32998e2eea5902e70d80553a67"
  },
  {
    "url": "assets/js/207.98aee462.js",
    "revision": "0fb8c91cf430e71242f424b75c22c2d9"
  },
  {
    "url": "assets/js/208.0d5fe729.js",
    "revision": "a4d867a417a053ad15246ea6f6b05ecd"
  },
  {
    "url": "assets/js/209.52c4f762.js",
    "revision": "35cfafe339b1e6b783199b47c4f222e1"
  },
  {
    "url": "assets/js/21.475f6d0a.js",
    "revision": "d90adcd46cabfb78923dd8b335e79df7"
  },
  {
    "url": "assets/js/210.b80e7b7c.js",
    "revision": "241e2daba8b477e7cec758bf589a18ad"
  },
  {
    "url": "assets/js/211.76190535.js",
    "revision": "f21521482e6c2945b1e603fb1342b91a"
  },
  {
    "url": "assets/js/212.835bbd10.js",
    "revision": "4b3abc8448a5f16af63bb6baf7111e43"
  },
  {
    "url": "assets/js/213.0b4dd21c.js",
    "revision": "27b78123fd913abb3bece1990776b295"
  },
  {
    "url": "assets/js/214.e0467f29.js",
    "revision": "0379fe220d9defbf5249e22c6aaeef5e"
  },
  {
    "url": "assets/js/215.4ddf73ac.js",
    "revision": "99c251005cfcd0972ff18d44c5aa1dc7"
  },
  {
    "url": "assets/js/216.eb76194b.js",
    "revision": "0343959c5e27dacd55154db0e5908451"
  },
  {
    "url": "assets/js/217.63aaad76.js",
    "revision": "9ddf28765c9671d59591f4dce8cb5e74"
  },
  {
    "url": "assets/js/218.e3015d31.js",
    "revision": "50b743c0710fd870494a2b8a8dffef46"
  },
  {
    "url": "assets/js/219.24f8c60e.js",
    "revision": "df88069ffeb932d7eac43e0dd6055c76"
  },
  {
    "url": "assets/js/22.daa62b7f.js",
    "revision": "aa5132f115e835883551abd234276b8f"
  },
  {
    "url": "assets/js/220.a7e95c5d.js",
    "revision": "9b1b73ae01ff9daf8d2a76c47f13e686"
  },
  {
    "url": "assets/js/221.2a3b5e6f.js",
    "revision": "72fac3642ae4262c5a929d88ef4c38ad"
  },
  {
    "url": "assets/js/222.b0ba0cbd.js",
    "revision": "735b969d9917a75e64a132f6e99f01b1"
  },
  {
    "url": "assets/js/223.8b233141.js",
    "revision": "b4bdb0df9902942212ce22ff7b7eb862"
  },
  {
    "url": "assets/js/224.9bc20483.js",
    "revision": "473fa3865bc7ea6a1c1161451afaee01"
  },
  {
    "url": "assets/js/225.d2abead7.js",
    "revision": "7f3d93ea948c5fd90a502d6c559fbbe8"
  },
  {
    "url": "assets/js/226.46851666.js",
    "revision": "1472c2b5454309d4ba363b6ed3a5a4db"
  },
  {
    "url": "assets/js/227.049599d2.js",
    "revision": "0ca7cb5d68b262cee56d465e9b7bc35a"
  },
  {
    "url": "assets/js/228.db95ec5b.js",
    "revision": "192ef1c42fc434422563780050e738ea"
  },
  {
    "url": "assets/js/229.8fbd0c01.js",
    "revision": "750975953a08af35d8357d8a927b9de0"
  },
  {
    "url": "assets/js/23.b2fcbc5f.js",
    "revision": "f32c7cd65ea8820725133acc4030b6c7"
  },
  {
    "url": "assets/js/230.1baa0566.js",
    "revision": "2eafde91c0f5e930a2349410accad734"
  },
  {
    "url": "assets/js/231.3bdef919.js",
    "revision": "4971e89794987f9dc6a1357f1348f8bc"
  },
  {
    "url": "assets/js/232.b30ffb1c.js",
    "revision": "6b88c4b7937c681c5dcd8fd51699bd62"
  },
  {
    "url": "assets/js/233.fa0eec47.js",
    "revision": "4827ab39973eff7ce0a49d9757f6d712"
  },
  {
    "url": "assets/js/234.aaa47f27.js",
    "revision": "0ae8d422e6a50e7a81bb93909fad7adc"
  },
  {
    "url": "assets/js/235.35756427.js",
    "revision": "dd7ce99a009d268ca05d3a35096268ac"
  },
  {
    "url": "assets/js/236.527599db.js",
    "revision": "22170c5ebb5eba6f0d08076c8fd9b500"
  },
  {
    "url": "assets/js/237.1bc0ddf5.js",
    "revision": "1a98450e4d8fba518278fcffba4f1629"
  },
  {
    "url": "assets/js/238.9122555a.js",
    "revision": "93131d93e8e5e34517d6173ac0add3b2"
  },
  {
    "url": "assets/js/239.32f55179.js",
    "revision": "60aba17fed4d6c0b4a2033680a657bca"
  },
  {
    "url": "assets/js/24.80491180.js",
    "revision": "5e0a428829b2db492177f8ccadf86477"
  },
  {
    "url": "assets/js/240.83bcf970.js",
    "revision": "c1cc0ec345900cd6e0e5091febd4feac"
  },
  {
    "url": "assets/js/241.04b13dff.js",
    "revision": "93a569da78650187f84afb92b85984ce"
  },
  {
    "url": "assets/js/242.8d9b1f4e.js",
    "revision": "393db0bf88ba56248021261e99a511be"
  },
  {
    "url": "assets/js/243.c5e9d804.js",
    "revision": "6af067efafe99a7cd9d0787d38cadaa6"
  },
  {
    "url": "assets/js/244.c299d1a8.js",
    "revision": "b11f1256a6aee9dc906037e2c42762a1"
  },
  {
    "url": "assets/js/245.cad48277.js",
    "revision": "c29e83a4a6a64be3f69b4d405411fdec"
  },
  {
    "url": "assets/js/246.a5ebbeec.js",
    "revision": "952e98e5a07045370d95a3eaf48a2f89"
  },
  {
    "url": "assets/js/247.8e98c436.js",
    "revision": "16ca7c951820817f698d79f9484efa2a"
  },
  {
    "url": "assets/js/248.710f6c4a.js",
    "revision": "6215d19ef0a9154beed16ae3e93fc1d2"
  },
  {
    "url": "assets/js/249.c080c94b.js",
    "revision": "fda5124f0aa6ea1b719cf8dea257e8ee"
  },
  {
    "url": "assets/js/25.af918480.js",
    "revision": "40064502dae3ac8aed29345ca8a00097"
  },
  {
    "url": "assets/js/250.744f380b.js",
    "revision": "2efdbfa72d574652c8a2f2bb20b359f1"
  },
  {
    "url": "assets/js/251.d69777fe.js",
    "revision": "c7b6aced8a260ec048b4e64f4775e86f"
  },
  {
    "url": "assets/js/252.ca6f12c5.js",
    "revision": "a2266f825464fca8bd1f3c93c7d45a46"
  },
  {
    "url": "assets/js/253.583c8bdf.js",
    "revision": "fb914067c7b3616983fb1340342c0061"
  },
  {
    "url": "assets/js/254.9e6e6f0a.js",
    "revision": "65ada3229356b46e773fefb1dc0857a1"
  },
  {
    "url": "assets/js/255.ff594cd0.js",
    "revision": "0d996e56734fe6a1823c379b6dafdff6"
  },
  {
    "url": "assets/js/26.30e2cc28.js",
    "revision": "466344eb278a3462d70b62cf69ec5911"
  },
  {
    "url": "assets/js/27.3f96eceb.js",
    "revision": "f8270b0d1c1e1fa920ababa54751b789"
  },
  {
    "url": "assets/js/28.6e730c27.js",
    "revision": "29836b0aa3a181edf8ca33cb2d0071cb"
  },
  {
    "url": "assets/js/29.c7b80e59.js",
    "revision": "9f6d86382883326e3b1ff5640f88948d"
  },
  {
    "url": "assets/js/3.7279e73f.js",
    "revision": "1ef440566308decdc9b67d8a48e1b1b9"
  },
  {
    "url": "assets/js/30.8e9fe402.js",
    "revision": "cba4c7c388b4a9d426b39e8fbd7ab6a3"
  },
  {
    "url": "assets/js/31.9343349e.js",
    "revision": "030e8063e9d1fc89fde9b583b5b6a45d"
  },
  {
    "url": "assets/js/32.9ae5eef6.js",
    "revision": "94a7c8d3a5154a9d2d9afb8ff941e350"
  },
  {
    "url": "assets/js/33.0b32876d.js",
    "revision": "79ed6975cfb1ec8f781716bdab2d6560"
  },
  {
    "url": "assets/js/34.3f09d0ad.js",
    "revision": "4d4a784326aaa4c651599be3a93a38ea"
  },
  {
    "url": "assets/js/35.33e93888.js",
    "revision": "c33e8a95a99485186dba9a12df3671af"
  },
  {
    "url": "assets/js/36.9305ed2d.js",
    "revision": "bb873422eb5e71a22ac41cf42d28f723"
  },
  {
    "url": "assets/js/37.192497b0.js",
    "revision": "8674f5ee8a3f8cb53262c26dc921f865"
  },
  {
    "url": "assets/js/38.f4d7208c.js",
    "revision": "0308e85011f47eda568cb45626098bc0"
  },
  {
    "url": "assets/js/39.f232a55d.js",
    "revision": "b6f76dbb9779108254e1e82dcc2e0f36"
  },
  {
    "url": "assets/js/4.a907f346.js",
    "revision": "bfa2f57f6e720cc493966409228c2eda"
  },
  {
    "url": "assets/js/40.4267c72f.js",
    "revision": "3283ed553d1c6896d2dd850ec2e1b417"
  },
  {
    "url": "assets/js/41.58096db8.js",
    "revision": "943cd39ec9b7ad5e0a7ba700b62e9b47"
  },
  {
    "url": "assets/js/42.95cc461d.js",
    "revision": "f4f6ae1b9c29f7efe6c6502b95f75460"
  },
  {
    "url": "assets/js/43.fd7db1f2.js",
    "revision": "9d8a1edc64c107c4ae87ffb485ea4faf"
  },
  {
    "url": "assets/js/44.36a6eead.js",
    "revision": "ba8b4007045dccf2020f2b84c72e3b9f"
  },
  {
    "url": "assets/js/45.eaa6ad9c.js",
    "revision": "a2d8bf7821bc9bbde3dcadee728733e5"
  },
  {
    "url": "assets/js/46.54ca5c31.js",
    "revision": "a7a45ea5b1cf6246d86783437a521953"
  },
  {
    "url": "assets/js/47.d33145a9.js",
    "revision": "3d26c36e66e7cc6682afb9738ccb10ac"
  },
  {
    "url": "assets/js/48.f3b7d45b.js",
    "revision": "80022127ed3c1f9e2f9d0812670deaaf"
  },
  {
    "url": "assets/js/49.bbbaa25f.js",
    "revision": "3a6b6fc8741d236c80e2cf099129e355"
  },
  {
    "url": "assets/js/5.5dc4bca0.js",
    "revision": "a72b670ade3deaacaa83172f3884ad78"
  },
  {
    "url": "assets/js/50.c3a3e07a.js",
    "revision": "9fa574b0b47eca4f941e7702777607e5"
  },
  {
    "url": "assets/js/51.7af545c2.js",
    "revision": "582d4af35f91650bfe23fb1521c8cbbe"
  },
  {
    "url": "assets/js/52.f9e92ce9.js",
    "revision": "87faddbbc60b2a360b6629ce115bc761"
  },
  {
    "url": "assets/js/53.a41ceeb7.js",
    "revision": "51ba20bd6c60282825d4073075abdb88"
  },
  {
    "url": "assets/js/54.b9b21afe.js",
    "revision": "41df0ccea2e5cffab640d0fa3cd4c656"
  },
  {
    "url": "assets/js/55.18d9272d.js",
    "revision": "49d4a0e7d699d52a3e7d6ba665ec9694"
  },
  {
    "url": "assets/js/56.43a8dd38.js",
    "revision": "88bac917efc96e6486e54e5aa1b88914"
  },
  {
    "url": "assets/js/57.076680d3.js",
    "revision": "1e2e7437dc7b792d92e00a644bfdbd1a"
  },
  {
    "url": "assets/js/58.596f0961.js",
    "revision": "6afec47af18c76ccc76c28090919dc50"
  },
  {
    "url": "assets/js/59.823c5a6f.js",
    "revision": "e9f7d3c3ac98798420aa8c73632723ae"
  },
  {
    "url": "assets/js/6.a7b59516.js",
    "revision": "edae51400c5b6cf6f1147f71c20d7864"
  },
  {
    "url": "assets/js/60.540ccaf8.js",
    "revision": "5bbf6ea7a1a187056dddb1986bf8fc5c"
  },
  {
    "url": "assets/js/61.857259cf.js",
    "revision": "7eb7d5c4cdb14550ecc20bfb53cc9d89"
  },
  {
    "url": "assets/js/62.b276f76d.js",
    "revision": "1f6f6c2d3fa960fa25ebd7bde5d435ec"
  },
  {
    "url": "assets/js/63.5a8f13c8.js",
    "revision": "d172fb9abe909a092ff93356303480c9"
  },
  {
    "url": "assets/js/64.7b4aed8f.js",
    "revision": "509fec4c8fd24a73620d16d6e08f0972"
  },
  {
    "url": "assets/js/65.4fa6ea57.js",
    "revision": "16a467cd0bd4ba4bc0895ac8687f88ce"
  },
  {
    "url": "assets/js/66.03bcad39.js",
    "revision": "e55807bc0a24027f7f08c7c9f8a0c648"
  },
  {
    "url": "assets/js/67.b621fe44.js",
    "revision": "b3f8a3e20985472c17728c03b377cda6"
  },
  {
    "url": "assets/js/68.24ac855d.js",
    "revision": "d9f78d191304a16fd0419b7f25c4f475"
  },
  {
    "url": "assets/js/69.c5e4a033.js",
    "revision": "fc452b2480192e0c74396704c6f3759a"
  },
  {
    "url": "assets/js/7.087c2382.js",
    "revision": "242a83ef37f7d1e7414084ea51e1df94"
  },
  {
    "url": "assets/js/70.5529dfdc.js",
    "revision": "322b113c757560faf26744e7ea52a27d"
  },
  {
    "url": "assets/js/71.a472c5a5.js",
    "revision": "cd7f65c9e3078171150f7badbc768661"
  },
  {
    "url": "assets/js/72.c1c273d0.js",
    "revision": "89a95fb8290e11371f57ff745aa19b80"
  },
  {
    "url": "assets/js/73.b7ffff00.js",
    "revision": "8ef4428cc171e29ee227a2d98d48bb16"
  },
  {
    "url": "assets/js/74.eca57161.js",
    "revision": "ad976ca7424c27c21666623fcc66b868"
  },
  {
    "url": "assets/js/75.2a7a52ee.js",
    "revision": "bcc3848fc317234e9bf0f2588a80e947"
  },
  {
    "url": "assets/js/76.3c963389.js",
    "revision": "67fa4845b0cc4927a20a630236e2b1f8"
  },
  {
    "url": "assets/js/77.67d13901.js",
    "revision": "6b25312eed1db3ecf8d80fe143bc4e87"
  },
  {
    "url": "assets/js/78.6e70de80.js",
    "revision": "3a5855965441d5339f3e55eb9c4e952e"
  },
  {
    "url": "assets/js/79.4dda4ae5.js",
    "revision": "883a7c6b8ef749f6d50bd90606b8adbb"
  },
  {
    "url": "assets/js/8.f2a6334c.js",
    "revision": "0e8ffb42f0dae1b196948edf2c06c930"
  },
  {
    "url": "assets/js/80.c8c04fdf.js",
    "revision": "211ce135c4d17863382800e40432d13d"
  },
  {
    "url": "assets/js/81.e176de07.js",
    "revision": "fad5e374578acff1838df2960cc3ae6f"
  },
  {
    "url": "assets/js/82.b8bf7b49.js",
    "revision": "bca9f3af72c1577a5aea32d5ac6384ff"
  },
  {
    "url": "assets/js/83.a80b0918.js",
    "revision": "674a00e7ca4ae4552f7853941c6ae576"
  },
  {
    "url": "assets/js/84.5a8e19ed.js",
    "revision": "f2d6f885c0d6abbf3eeaf3b39a578e8b"
  },
  {
    "url": "assets/js/85.557cdeac.js",
    "revision": "1efec9bd49fda23d4b908b5a44365c3e"
  },
  {
    "url": "assets/js/86.e5dcc932.js",
    "revision": "a33c2e057b486f45c79ce429883d80bc"
  },
  {
    "url": "assets/js/87.6b849ccf.js",
    "revision": "6fd0077e84171d1bb890ad44b6795dba"
  },
  {
    "url": "assets/js/88.56d8ac21.js",
    "revision": "df1ea57a6f7d0468dbeda3b54ad812df"
  },
  {
    "url": "assets/js/89.d3f06a18.js",
    "revision": "f2123ce8ae9188c5500636a5494d9580"
  },
  {
    "url": "assets/js/9.9ec4bce5.js",
    "revision": "ae4d67195f2fc947af83dbb46feb7b93"
  },
  {
    "url": "assets/js/90.8c05ad1a.js",
    "revision": "3aa3dde61129fb1568e0821deee9c9cb"
  },
  {
    "url": "assets/js/91.90e04b99.js",
    "revision": "bf122d330866fffcaae019d2b4e13505"
  },
  {
    "url": "assets/js/92.ec0d7c68.js",
    "revision": "e0674d812c349ab93b8c46f90774e08b"
  },
  {
    "url": "assets/js/93.5432d309.js",
    "revision": "ab72e4b165968e917a6fab9caae3b361"
  },
  {
    "url": "assets/js/94.aa26a7e0.js",
    "revision": "873b722aafa771c16256e5b820d7e80d"
  },
  {
    "url": "assets/js/95.7edcc3b6.js",
    "revision": "33fd573c86db11d2b427b440f61ccbba"
  },
  {
    "url": "assets/js/96.091874b2.js",
    "revision": "a9f43022362e577d49bf2896e723bb79"
  },
  {
    "url": "assets/js/97.109bcb39.js",
    "revision": "ebc60a2a5ff5f2392be68b6aeeadddf4"
  },
  {
    "url": "assets/js/98.29e4552a.js",
    "revision": "216b6af62400fd7893586b26e76eb670"
  },
  {
    "url": "assets/js/99.305fde20.js",
    "revision": "8bef2a2c836bdabc6d13b168e95de04e"
  },
  {
    "url": "assets/js/app.a8e19d50.js",
    "revision": "e7fb6315c948a8869c1e2a15e1a7db72"
  },
  {
    "url": "categories/index.html",
    "revision": "74d4d9a61c02078db61bbde4f22c5dc2"
  },
  {
    "url": "cs/algorithm/analysis.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/algorithm/data-structure.html",
    "revision": "afe857b9d5035613c67791087784e2db"
  },
  {
    "url": "cs/algorithm/find.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/algorithm/index.html",
    "revision": "4a38aaa5a0f2fd743da9401484e40d69"
  },
  {
    "url": "cs/algorithm/other.html",
    "revision": "9669f04c9c452005b59e12aa28c0f9d0"
  },
  {
    "url": "cs/algorithm/sort.html",
    "revision": "07243eceff3a24f6ab460f488f80a1ba"
  },
  {
    "url": "cs/algorithm/stack-queue.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/algorithm/union-set.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/archit/cache.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/archit/cluster.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/archit/distributed.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/archit/index.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/archit/msg-queue.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/archit/sys-design.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/compile/index.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/cpp/associative-container.html",
    "revision": "1c4269f414da42cd36ffb82fad25cda1"
  },
  {
    "url": "cs/cpp/class.html",
    "revision": "993825cc9f6bcaa8356f7b1a3f59eb4f"
  },
  {
    "url": "cs/cpp/copy-control.html",
    "revision": "26eb26c92a0db6f2d0354133c87c1d91"
  },
  {
    "url": "cs/cpp/dynamic-memory.html",
    "revision": "53859d24d5a89eabf46fe8281dd9d6a7"
  },
  {
    "url": "cs/cpp/expr.html",
    "revision": "7892aa24dbda01feed43cc0ead10f9bc"
  },
  {
    "url": "cs/cpp/function.html",
    "revision": "252c63566b7d17dcd2efdea371201bdd"
  },
  {
    "url": "cs/cpp/index.html",
    "revision": "4a38aaa5a0f2fd743da9401484e40d69"
  },
  {
    "url": "cs/cpp/IO.html",
    "revision": "79e71fdec3ee6d9d59eea9bf9635bcb5"
  },
  {
    "url": "cs/cpp/sentence.html",
    "revision": "00de250af5a215a51c3301e3add58b9b"
  },
  {
    "url": "cs/cpp/sequential-container.html",
    "revision": "4779a37a21fe3bdf37971b66a5aaa4bf"
  },
  {
    "url": "cs/cpp/var-len-sequence.html",
    "revision": "c8739c4f058f24ad5f7bbb00176494c7"
  },
  {
    "url": "cs/cpp/var-types.html",
    "revision": "2e876cf45681db341986d5f39f31d8a9"
  },
  {
    "url": "cs/database/index.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/database/leetcode-database.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/database/MySQL.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/database/principle.html",
    "revision": "737eda34939aee92fc5c4d18a6a7cb0b"
  },
  {
    "url": "cs/database/Redis.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/database/SQL.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/design/abserver.html",
    "revision": "575faf2fe588fe7f4026553cdd84d906"
  },
  {
    "url": "cs/design/abstract-factory.html",
    "revision": "df42b2efcf975478bdb0b1aaf744053a"
  },
  {
    "url": "cs/design/adapter.html",
    "revision": "1debed16e4f85ac8a1e3744ce1bb7b17"
  },
  {
    "url": "cs/design/agent.html",
    "revision": "766b30471e4823cd58bfb1186ccba325"
  },
  {
    "url": "cs/design/appearance.html",
    "revision": "f3ac03530baf1b7391299aa2ea532f1b"
  },
  {
    "url": "cs/design/bridging.html",
    "revision": "3b81d30ea20cd418a11fafe63003b564"
  },
  {
    "url": "cs/design/combination.html",
    "revision": "5610a66ca84c92bb195b2cf85b5a0f00"
  },
  {
    "url": "cs/design/command.html",
    "revision": "e50f10a0bf6452fe7ca3cd26f40dd43d"
  },
  {
    "url": "cs/design/decoration.html",
    "revision": "28c53eb18c66c651009a3bc614f09704"
  },
  {
    "url": "cs/design/design-pattern.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/design/duty-chain.html",
    "revision": "86221ec7ce4ccd1c0878a4edd9b8224a"
  },
  {
    "url": "cs/design/factory-method.html",
    "revision": "e7a557c725e5ab503674341ebf2884d8"
  },
  {
    "url": "cs/design/flyweight.html",
    "revision": "f8b5e50c6f6b9077f17ab2eb61ea0343"
  },
  {
    "url": "cs/design/generator.html",
    "revision": "03991d4962c624a8d084c7c6d821fbd9"
  },
  {
    "url": "cs/design/index.html",
    "revision": "3ebff5448a3b55900fcaeeebd40307b9"
  },
  {
    "url": "cs/design/interpreter.html",
    "revision": "f6768d49c77dd92c2fcd3e0ab5f6ade8"
  },
  {
    "url": "cs/design/iterator.html",
    "revision": "62e5e34a27399f377024371d144843f8"
  },
  {
    "url": "cs/design/mediator.html",
    "revision": "2ca751986aed08009ff3806e01ddc472"
  },
  {
    "url": "cs/design/memo.html",
    "revision": "55ed5aa7c16e907579feaef5b3a32ed8"
  },
  {
    "url": "cs/design/null-object.html",
    "revision": "74af7ac402179ddaa32dad4396165b17"
  },
  {
    "url": "cs/design/oriente-object.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/design/prototype.html",
    "revision": "a93df6dbd29b858c489a5368c25f2691"
  },
  {
    "url": "cs/design/simple-factory.html",
    "revision": "c7564f8acc8e9c9bc7cd78f1f914f46b"
  },
  {
    "url": "cs/design/singleton.html",
    "revision": "a5ea870e93047b4a850befd62351aae6"
  },
  {
    "url": "cs/design/state.html",
    "revision": "64a870bb454a101e8cee4d719e65c636"
  },
  {
    "url": "cs/design/strategy.html",
    "revision": "a131c8bf64ccf422d5e61a0acf904613"
  },
  {
    "url": "cs/design/temp-method.html",
    "revision": "4b3806c9d87e8a39fc0e147112d050c6"
  },
  {
    "url": "cs/design/visitor.html",
    "revision": "b3d8634d2c2a0c44bbaa86d8c159e36b"
  },
  {
    "url": "cs/framework/front-end.html",
    "revision": "5f9c1e0327c2f0b4fcbda7f19bdc954e"
  },
  {
    "url": "cs/framework/index.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/framework/vue-a.html",
    "revision": "99c9898ade6efffc4cb03ac9d2da5d29"
  },
  {
    "url": "cs/framework/vue-b.html",
    "revision": "bfd34e75e5b52d98b5d0cf6be4945e03"
  },
  {
    "url": "cs/framework/vue-c.html",
    "revision": "e575c66ad4ea1de1689051c7f8117c89"
  },
  {
    "url": "cs/framework/vue3-design.html",
    "revision": "ffb5fc5ad8349d8f12fbfda8613ceb90"
  },
  {
    "url": "cs/framework/webpack.html",
    "revision": "3b39242f275c54bbc2c0fe1cdad92510"
  },
  {
    "url": "cs/index.html",
    "revision": "e49c531866f002a53c4e0dc4164fdb11"
  },
  {
    "url": "cs/java/basic.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/java/concurrenry.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/java/container.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/java/index.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/java/JavaIO.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/java/virtual-marchine.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/Lang/CSS.html",
    "revision": "81fb775df3ea2b99b9a7ef0b3f628103"
  },
  {
    "url": "cs/Lang/English.html",
    "revision": "6253444801665d35278331088b7761f2"
  },
  {
    "url": "cs/Lang/ES6.html",
    "revision": "0a3176317ad35b1301b25ff15c6d5731"
  },
  {
    "url": "cs/Lang/html.html",
    "revision": "4a6d356deb1f42b900d38b7ba838ace9"
  },
  {
    "url": "cs/Lang/index.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/Lang/JavaScript.html",
    "revision": "2a873e62b98c65656481285095d048de"
  },
  {
    "url": "cs/Lang/JSTricks.html",
    "revision": "e43b9d5982519e5a8094fff8b1fe67fb"
  },
  {
    "url": "cs/Lang/python.html",
    "revision": "7ed5ae7c071b0d60f0fdf5cfe7c57774"
  },
  {
    "url": "cs/Lang/regex.html",
    "revision": "d05a62017bd87831b06bfc7ebabd7883"
  },
  {
    "url": "cs/Lang/use_css.html",
    "revision": "526be492fc072689fb80b81025f4b3d2"
  },
  {
    "url": "cs/leetcode/array.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/leetcode/bin-search.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/leetcode/bit-operator.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/leetcode/bound-check.html",
    "revision": "90789bb0196087190861168a63e37091"
  },
  {
    "url": "cs/leetcode/divide-conquer.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/leetcode/double-pointer.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/leetcode/dynamic.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/leetcode/find.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/leetcode/graph.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/leetcode/greedy.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/leetcode/hash-table.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/leetcode/index.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/leetcode/lcd-3.html",
    "revision": "d7dc5bfd91dd0bf7006da06a096d38af"
  },
  {
    "url": "cs/leetcode/list.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/leetcode/math.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/leetcode/ncode4.html",
    "revision": "d96c0a5509b01dbe35bd9aebfc815065"
  },
  {
    "url": "cs/leetcode/ncode5.html",
    "revision": "0755255401ed665de0b581b32920a6be"
  },
  {
    "url": "cs/leetcode/p0.html",
    "revision": "4759ff5349031595dffde5c3b98ef892"
  },
  {
    "url": "cs/leetcode/p1.html",
    "revision": "1e2fadec3dabf0437805ebb0ac78c473"
  },
  {
    "url": "cs/leetcode/p10.html",
    "revision": "a7ff4b3b772225cf046132089c17cb89"
  },
  {
    "url": "cs/leetcode/p11.html",
    "revision": "a45c315a0113b3a2d83a9a16441a79af"
  },
  {
    "url": "cs/leetcode/p12.html",
    "revision": "52998acfffdc1f59b57f5bd34caf1a00"
  },
  {
    "url": "cs/leetcode/p13.html",
    "revision": "a8775c621092aabf339281d4dac4118c"
  },
  {
    "url": "cs/leetcode/p14.html",
    "revision": "e4ac9189d092401e936d93491847ae20"
  },
  {
    "url": "cs/leetcode/p15.html",
    "revision": "613ddb29be03dedf492351831cfcf0b5"
  },
  {
    "url": "cs/leetcode/p16.html",
    "revision": "9fcbea5894088a774b38ae571dc84e4a"
  },
  {
    "url": "cs/leetcode/p17.html",
    "revision": "8da33c623f0d41b228cc182a6d92cd14"
  },
  {
    "url": "cs/leetcode/p18.html",
    "revision": "b79f76e6728d30d929051ac97c7a7c29"
  },
  {
    "url": "cs/leetcode/p19.html",
    "revision": "f0ba56f0dd605b969405b02430d9b608"
  },
  {
    "url": "cs/leetcode/p2.html",
    "revision": "e62b4b1296410c739e36378aabbd2783"
  },
  {
    "url": "cs/leetcode/p20.html",
    "revision": "be4594aa0c97fd2aa5bf9a2f88ec4057"
  },
  {
    "url": "cs/leetcode/p21.html",
    "revision": "35017c24a31acfb91792a6947f5d9b22"
  },
  {
    "url": "cs/leetcode/p22.html",
    "revision": "70c322d477572c77277358493f3804fb"
  },
  {
    "url": "cs/leetcode/p23.html",
    "revision": "40c1279fe7b5a3f0d965108241974a5e"
  },
  {
    "url": "cs/leetcode/p24.html",
    "revision": "a7ce73da84dd8804ecf0b976a2adb1c7"
  },
  {
    "url": "cs/leetcode/p25.html",
    "revision": "a7272c2f15eb09e08309cdad56b68e36"
  },
  {
    "url": "cs/leetcode/p26.html",
    "revision": "19b5a3d5cae622a1074380bd18273e91"
  },
  {
    "url": "cs/leetcode/p27.html",
    "revision": "6a2cb536b46c6dfe5e34688ad43d277e"
  },
  {
    "url": "cs/leetcode/p28.html",
    "revision": "39a75b23218cc54fc20caf5ff6de7a24"
  },
  {
    "url": "cs/leetcode/p29.html",
    "revision": "f2949a956d8fbe6f6af6f94928102972"
  },
  {
    "url": "cs/leetcode/p3.html",
    "revision": "8367c269797911fe769f7838d8c1e387"
  },
  {
    "url": "cs/leetcode/p30.html",
    "revision": "858f4626a3622643ca3740511813e02b"
  },
  {
    "url": "cs/leetcode/p31.html",
    "revision": "38f47e3d98416cfa8326f72cdfc14c70"
  },
  {
    "url": "cs/leetcode/p32.html",
    "revision": "f2ebc4a41e41f7ea4e0d4e014c3ff12c"
  },
  {
    "url": "cs/leetcode/p33.html",
    "revision": "f45b6555ffb9d18ddae0010bf16ad0af"
  },
  {
    "url": "cs/leetcode/p34.html",
    "revision": "86998ccc5f98457d0dbc2bf367a9e4ce"
  },
  {
    "url": "cs/leetcode/p35.html",
    "revision": "b89325122ea7500d90c189f8373aff5e"
  },
  {
    "url": "cs/leetcode/p36.html",
    "revision": "8dda5ba62362c403e241ec1e10b6eb8c"
  },
  {
    "url": "cs/leetcode/p37.html",
    "revision": "52e814e8621582d4219701154781f892"
  },
  {
    "url": "cs/leetcode/p38.html",
    "revision": "49bfdbae226d1cd4218df4324f14a107"
  },
  {
    "url": "cs/leetcode/p39.html",
    "revision": "87aa183b7dee19528c9d4acab17932eb"
  },
  {
    "url": "cs/leetcode/p4.html",
    "revision": "cc8a270b98438d4616ee4bf71950ce1d"
  },
  {
    "url": "cs/leetcode/p40.html",
    "revision": "c43de168d248f90b1d96fc1f40c5b328"
  },
  {
    "url": "cs/leetcode/p41.html",
    "revision": "1baa169e15f63f117359085a52aebb43"
  },
  {
    "url": "cs/leetcode/p42.html",
    "revision": "6a4e7b0d55ef24ef644c987838f9310a"
  },
  {
    "url": "cs/leetcode/p43.html",
    "revision": "b25633bfc963e69184ac6a4cc13dba3d"
  },
  {
    "url": "cs/leetcode/p44.html",
    "revision": "d984c0722d2595a913bd0b2c3061e55a"
  },
  {
    "url": "cs/leetcode/p45.html",
    "revision": "42f3299fb148a5253a5771e9b4dff4df"
  },
  {
    "url": "cs/leetcode/p46.html",
    "revision": "ef37f74fcc136242997e76fb8d233c87"
  },
  {
    "url": "cs/leetcode/p47.html",
    "revision": "9a932835305f14d61ffedd5418d559e4"
  },
  {
    "url": "cs/leetcode/p48.html",
    "revision": "4a336d2f64ffc1bcb5ffba0c819a9961"
  },
  {
    "url": "cs/leetcode/p49.html",
    "revision": "98efa111a0a595d7c162907372a219c7"
  },
  {
    "url": "cs/leetcode/p5.html",
    "revision": "ee2f181ac6b5e4387b0e252074796ac8"
  },
  {
    "url": "cs/leetcode/p50.html",
    "revision": "0088523baca3020dfad0560dac43a99d"
  },
  {
    "url": "cs/leetcode/p51.html",
    "revision": "00b98083751d6d3b6c465fbf467f8480"
  },
  {
    "url": "cs/leetcode/p52.html",
    "revision": "93591bba3df47bd531cfa6b656ae2685"
  },
  {
    "url": "cs/leetcode/p53.html",
    "revision": "decc09d5142bbd7b1b4d202729a102a2"
  },
  {
    "url": "cs/leetcode/p54.html",
    "revision": "e3b893282ef3db0f718d0b74ee026de4"
  },
  {
    "url": "cs/leetcode/p55.html",
    "revision": "5a52d609eac1c741ee1a6cb55bd4b637"
  },
  {
    "url": "cs/leetcode/p56.html",
    "revision": "4317279c9557d30bd801496fdd4f252a"
  },
  {
    "url": "cs/leetcode/p57.html",
    "revision": "251efda12061308d943755df75201176"
  },
  {
    "url": "cs/leetcode/p58.html",
    "revision": "cea82d0a5aea2657edacf0d0b2a56de7"
  },
  {
    "url": "cs/leetcode/p59.html",
    "revision": "b5885b1d5ad0454667c3ab01fde4c3c0"
  },
  {
    "url": "cs/leetcode/p6.html",
    "revision": "75aa9097ed6801166fbda22055723e7c"
  },
  {
    "url": "cs/leetcode/p60.html",
    "revision": "caa61a574c50e552f5eb199d2c1ec8f0"
  },
  {
    "url": "cs/leetcode/p61.html",
    "revision": "4a2ab13fd3dffd78a820957aaa919930"
  },
  {
    "url": "cs/leetcode/p62.html",
    "revision": "7bc24b1be8c2e44293250fc87cb6123a"
  },
  {
    "url": "cs/leetcode/p63.html",
    "revision": "e6f359688dcc2ffd16f3b1fad3693d1e"
  },
  {
    "url": "cs/leetcode/p64.html",
    "revision": "909ba3e6f87d2890856bf13eb6088a76"
  },
  {
    "url": "cs/leetcode/p65.html",
    "revision": "ccea8e032e26320dbdda366add03287a"
  },
  {
    "url": "cs/leetcode/p66.html",
    "revision": "c4423e6d8f46e86bba5a69c1f328594c"
  },
  {
    "url": "cs/leetcode/p67.html",
    "revision": "4d8f042e1ee65bd3678186c8ffee5847"
  },
  {
    "url": "cs/leetcode/p68.html",
    "revision": "32a86e60cd9dc8689392de2e53e274d3"
  },
  {
    "url": "cs/leetcode/p69.html",
    "revision": "d20741316980f92c4e331b51b51f635e"
  },
  {
    "url": "cs/leetcode/p7.html",
    "revision": "a2c1e40c7d5bc8ea44571dec1d0a8503"
  },
  {
    "url": "cs/leetcode/p70.html",
    "revision": "f461c258fe5f5f7cf8d49191170a7d7f"
  },
  {
    "url": "cs/leetcode/p71.html",
    "revision": "b3a75c1502b4f09b5bb1f3f5c6714711"
  },
  {
    "url": "cs/leetcode/p72.html",
    "revision": "ffb769d709e4449366b85baa606f788c"
  },
  {
    "url": "cs/leetcode/p73.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/leetcode/p74.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/leetcode/p75.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/leetcode/p76.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/leetcode/p77.html",
    "revision": "8dda5ba62362c403e241ec1e10b6eb8c"
  },
  {
    "url": "cs/leetcode/p78.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/leetcode/p79.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/leetcode/p8.html",
    "revision": "a2cfde82f4484618883751f07cdeea3d"
  },
  {
    "url": "cs/leetcode/p80.html",
    "revision": "13f98836befbe36117b224838fe3d6d9"
  },
  {
    "url": "cs/leetcode/p81.html",
    "revision": "4a38aaa5a0f2fd743da9401484e40d69"
  },
  {
    "url": "cs/leetcode/p82.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/leetcode/p9.html",
    "revision": "0afbdf1769b0dcc39259120dc27aa50e"
  },
  {
    "url": "cs/leetcode/sort.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/leetcode/stack-queue.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/leetcode/string.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/leetcode/tree.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/linux/common-command.html",
    "revision": "84219b63e2cca2d6bee885d5bec29a36"
  },
  {
    "url": "cs/linux/index.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/linux/Linux.html",
    "revision": "8b3b23c6cfe05730a94f007861609b09"
  },
  {
    "url": "cs/linux/process.html",
    "revision": "6a01b820ea5ea959bdc22fa4ea86090f"
  },
  {
    "url": "cs/network/application.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/network/conclude.html",
    "revision": "e483e446c3df88bf69fc51f81dab1c21"
  },
  {
    "url": "cs/network/HTTP.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/network/index.html",
    "revision": "4a38aaa5a0f2fd743da9401484e40d69"
  },
  {
    "url": "cs/network/link.html",
    "revision": "8b7b59748660d2c5432f6540584eae4c"
  },
  {
    "url": "cs/network/network.html",
    "revision": "8ded5ffef9da5845a580fdbd08662ee4"
  },
  {
    "url": "cs/network/physical.html",
    "revision": "295cd51b9d8410d4ade6dc2cf11aa61c"
  },
  {
    "url": "cs/network/Socket.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/network/summary.html",
    "revision": "dc67563fd55bac181e88cf40208ba208"
  },
  {
    "url": "cs/network/transport.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/Osystem/concept.html",
    "revision": "4567e2f2bf076525a5f63b108bc518bd"
  },
  {
    "url": "cs/Osystem/conclude.html",
    "revision": "f9f22cc291f725e9613cce9ad3c01d37"
  },
  {
    "url": "cs/Osystem/deadlock.html",
    "revision": "3416c93ddbc2626e86904ed87de3c962"
  },
  {
    "url": "cs/Osystem/device-mgmt.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/Osystem/index.html",
    "revision": "4a38aaa5a0f2fd743da9401484e40d69"
  },
  {
    "url": "cs/Osystem/memory-mgmt.html",
    "revision": "1990e7142dbe74e848fff5f1de46635e"
  },
  {
    "url": "cs/Osystem/process-mgmt.html",
    "revision": "67896abf3f7c2580bd62f5b0cdd1af0a"
  },
  {
    "url": "cs/tools/build-tools.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/tools/code-readability.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/tools/code-style.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/tools/Docker.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/tools/Git.html",
    "revision": "8b3339abc6b52b1a36d3eb86ccee9737"
  },
  {
    "url": "cs/tools/index.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/tools/regular-expr.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/web/attack-tech.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "cs/web/browser.html",
    "revision": "1321ca7f8342141339551a8b48d22dde"
  },
  {
    "url": "cs/web/guide.html",
    "revision": "81fb775df3ea2b99b9a7ef0b3f628103"
  },
  {
    "url": "cs/web/index.html",
    "revision": "b16ab3724432f61d82fa3c6c23466cb0"
  },
  {
    "url": "cs/web/performance.html",
    "revision": "ccbe0a5a251bcb8e805a0da41cbaee87"
  },
  {
    "url": "cs/web/resource.html",
    "revision": "2a0f1d5913039ed1cd58a548529d5097"
  },
  {
    "url": "cs/web/web.html",
    "revision": "9719acbd54fdbe8a425a07ec3294bddc"
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
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "language/english/adjective.html",
    "revision": "82c075620118c984080450932614cee3"
  },
  {
    "url": "language/english/adverb.html",
    "revision": "f85c30c93a02d1b1abd21a20599d0145"
  },
  {
    "url": "language/english/determiner.html",
    "revision": "16f767235085b2163bd08f2f8c6a9447"
  },
  {
    "url": "language/english/differ.html",
    "revision": "d4e571c138006589c2d6f2a193f3deda"
  },
  {
    "url": "language/english/index.html",
    "revision": "6253444801665d35278331088b7761f2"
  },
  {
    "url": "language/english/modal.html",
    "revision": "798becd71a38fc542b585e92ed1470f9"
  },
  {
    "url": "language/english/mood.html",
    "revision": "bef0a945ba1e8472d9f80be50fa19053"
  },
  {
    "url": "language/english/non-predicate.html",
    "revision": "4931d18ca412808e955b4fba599e3a71"
  },
  {
    "url": "language/english/nouns.html",
    "revision": "382ed11ce18c9510f25a567cc2669893"
  },
  {
    "url": "language/english/preposition.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "language/english/pronoun.html",
    "revision": "b09162b267ad40f2c004849629cb678d"
  },
  {
    "url": "language/english/sentence.html",
    "revision": "ec07ee2242f114d4b285a86c6723ef94"
  },
  {
    "url": "language/english/tense.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "language/english/verb.html",
    "revision": "a9e9f09f92446773fedabfbbfab06be7"
  },
  {
    "url": "language/index.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "tag/index.html",
    "revision": "91eccbfc4f8fed5b1c44e8b804c9bf55"
  },
  {
    "url": "timeline/index.html",
    "revision": "4fe4c0653c22a62ba5ae7c671e75815d"
  },
  {
    "url": "tools/hash.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
  },
  {
    "url": "tools/index.html",
    "revision": "99c716bdbd1fe752b30e6ec047b21bf0"
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
