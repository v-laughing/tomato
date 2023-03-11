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
    "revision": "45c29bf77a5b4a828a2b2dd24667ff78"
  },
  {
    "url": "assets/css/0.styles.230eb3a1.css",
    "revision": "6af0aafa7920d6c125bd8fe0f7bed0ad"
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
    "url": "assets/js/1.50310eaf.js",
    "revision": "e73d29337490fc732df07a86fec59eab"
  },
  {
    "url": "assets/js/10.98bfbf92.js",
    "revision": "5a21fb5a5a801084a698267df0f1637e"
  },
  {
    "url": "assets/js/100.033b48fb.js",
    "revision": "c46dc2d8f9903168f3161eb98e2944d4"
  },
  {
    "url": "assets/js/101.36e7ac93.js",
    "revision": "765d8497fbbcd9a5406906d872712852"
  },
  {
    "url": "assets/js/102.09573957.js",
    "revision": "08d46b809b2d1f7d30beb0e7b66d60fe"
  },
  {
    "url": "assets/js/103.2687f0d0.js",
    "revision": "adc21df58aa2f18fcf8712f666140888"
  },
  {
    "url": "assets/js/104.4c5ffdf6.js",
    "revision": "01672d64e50a53919d632cb7208e6da4"
  },
  {
    "url": "assets/js/105.e95075fa.js",
    "revision": "70161288aa638d6fed586e9b3b1c54e2"
  },
  {
    "url": "assets/js/106.bc7c3c82.js",
    "revision": "6d0e3d5f3ef380db96d4ea5fc6daadd8"
  },
  {
    "url": "assets/js/107.a4d7cf6b.js",
    "revision": "a65e021d715508cd8b6cedeb184b2e11"
  },
  {
    "url": "assets/js/108.2b77c093.js",
    "revision": "a889c860e0f55fdcb0f9cbd18bee5d24"
  },
  {
    "url": "assets/js/109.f0ba7fce.js",
    "revision": "2d8fc628e93dd2f9e21cc8cf7f91d84c"
  },
  {
    "url": "assets/js/11.6be05a6a.js",
    "revision": "28bc5fe626d6ddec70538e7c3d0124d4"
  },
  {
    "url": "assets/js/110.ea048fbd.js",
    "revision": "ccc4555e615f6c65112d7d0333a50120"
  },
  {
    "url": "assets/js/111.802ddcd5.js",
    "revision": "cc3e122fa1f0e4fe228b9802ef21b2bd"
  },
  {
    "url": "assets/js/112.282917f0.js",
    "revision": "0d4ff6e94c13528bf6b931e6e3ea068d"
  },
  {
    "url": "assets/js/113.f7a6f246.js",
    "revision": "dfa7adb0700c88078cc06c64d936dcf3"
  },
  {
    "url": "assets/js/114.89e17fb2.js",
    "revision": "60f3676ebf471c83ffc7205d0d9c806d"
  },
  {
    "url": "assets/js/115.3e4c3c91.js",
    "revision": "2d0857b47e8c68a62aec44fad0e50b44"
  },
  {
    "url": "assets/js/116.5b614edc.js",
    "revision": "c5d0e2e2a913fe4c603931c5512508b0"
  },
  {
    "url": "assets/js/117.d2f8af19.js",
    "revision": "088450ed6ffccee07cbb20a17f6e0b23"
  },
  {
    "url": "assets/js/118.42f619fb.js",
    "revision": "9e215f419433e3d8efd2e9ccb52bc0a7"
  },
  {
    "url": "assets/js/119.d97caddc.js",
    "revision": "8fa4a6a11d642120cbf3748839de5459"
  },
  {
    "url": "assets/js/12.64e67962.js",
    "revision": "eb555a4d3a05df50243a5589fcacc3a4"
  },
  {
    "url": "assets/js/120.9f6f5860.js",
    "revision": "c22bbbcc40110777867b213e1c5dc89e"
  },
  {
    "url": "assets/js/121.0a620390.js",
    "revision": "1673ad45632482437e2755ef1f462df0"
  },
  {
    "url": "assets/js/122.4aa9a13d.js",
    "revision": "de3490c774fe894b02d2742e9dddbbbe"
  },
  {
    "url": "assets/js/123.a8aa7082.js",
    "revision": "1ec14c6539a8d4f5ccf2a150247a349a"
  },
  {
    "url": "assets/js/124.242e11af.js",
    "revision": "9427bb891e94923cfda9706d798641d7"
  },
  {
    "url": "assets/js/125.7cce7b96.js",
    "revision": "ffaeaa4588fcc554a690876311ebc9f0"
  },
  {
    "url": "assets/js/126.e6195848.js",
    "revision": "f0b975c27c821877f36cee3e8748bb05"
  },
  {
    "url": "assets/js/127.e093578b.js",
    "revision": "48fa16de2589accb717efc66c9054eb4"
  },
  {
    "url": "assets/js/128.b6d375e5.js",
    "revision": "a4bf466ee129a739d0dc7377567960b2"
  },
  {
    "url": "assets/js/129.9ed22001.js",
    "revision": "08d76f1c9b90f08e71e2ded996b2d9d1"
  },
  {
    "url": "assets/js/13.2b279c3a.js",
    "revision": "952e7cde58deb8b3fd0f81668e2b398c"
  },
  {
    "url": "assets/js/130.6fb8fb21.js",
    "revision": "12c8aab86df9a89e62d8a0fe8d48dd95"
  },
  {
    "url": "assets/js/131.fbaa198b.js",
    "revision": "22ce00eb11b7bfa23d3b44996ab2119b"
  },
  {
    "url": "assets/js/132.bc582675.js",
    "revision": "23f720fdf2a989c41e06e4b8dae17a24"
  },
  {
    "url": "assets/js/133.5cf86ec7.js",
    "revision": "adf8251c35a6b60facd8eae3512e4db9"
  },
  {
    "url": "assets/js/134.7d552845.js",
    "revision": "08d0d06d42f196601c771f6042f898bc"
  },
  {
    "url": "assets/js/135.533bf97d.js",
    "revision": "5947fb8677a19de5b61412e963ba2a2b"
  },
  {
    "url": "assets/js/136.7147ff25.js",
    "revision": "bd0d3bf4882a6c6ffb3c8fcb70aea195"
  },
  {
    "url": "assets/js/137.1219d545.js",
    "revision": "1b936ae6ff0f8bf97ede6ee5b6c441f9"
  },
  {
    "url": "assets/js/138.2e05eca0.js",
    "revision": "8bb82e4bb55f4ced421cf3fca658ea14"
  },
  {
    "url": "assets/js/139.db4cb912.js",
    "revision": "803cb58d99dbcc9d144d749f9c690374"
  },
  {
    "url": "assets/js/14.57489cbc.js",
    "revision": "bc2f980fa0c65f87af189bf9720da0d3"
  },
  {
    "url": "assets/js/140.209e435c.js",
    "revision": "9e485a8606aa978a77c98770e8b684e9"
  },
  {
    "url": "assets/js/141.0e68ca48.js",
    "revision": "30892affded01d2813593de8336e5a3c"
  },
  {
    "url": "assets/js/142.7a86d874.js",
    "revision": "95c433108bcd219e8565e49c5f34f129"
  },
  {
    "url": "assets/js/143.5c43008f.js",
    "revision": "30b2485ac22bd8fcb5cc053d16d79362"
  },
  {
    "url": "assets/js/144.8b403583.js",
    "revision": "9beab8596aeb5fc8fb5f12398481840e"
  },
  {
    "url": "assets/js/145.a1d2f311.js",
    "revision": "f1860ba28bdb85c1d7400e77c18d4f9d"
  },
  {
    "url": "assets/js/146.5fb6c208.js",
    "revision": "eaa73117e5a9b4a99abf7a4e9fcf9f4e"
  },
  {
    "url": "assets/js/147.3d3fb840.js",
    "revision": "633b5119799f4702917a6e235998493e"
  },
  {
    "url": "assets/js/148.aaf710bc.js",
    "revision": "0cfd8b15dda2d0afcf59ef1e87103aa4"
  },
  {
    "url": "assets/js/149.9a75739d.js",
    "revision": "62828d9c4926e1c3debf59be0743fb61"
  },
  {
    "url": "assets/js/15.6794d654.js",
    "revision": "4fabee3c8b17a7718effc8193f70ae71"
  },
  {
    "url": "assets/js/150.93f3090b.js",
    "revision": "c36c11845c37c2781d42ef454c112d88"
  },
  {
    "url": "assets/js/151.73191bbf.js",
    "revision": "d8025cb5a7a5dcdae60e41a7def76be1"
  },
  {
    "url": "assets/js/152.a9d6c7fb.js",
    "revision": "3c6fc78cc739e429b188d9ba6625f1ca"
  },
  {
    "url": "assets/js/153.b49f01f1.js",
    "revision": "4e008164694f90b17f8996ca16a9c540"
  },
  {
    "url": "assets/js/154.639f0b18.js",
    "revision": "1e88433c4ffee7ddcbb7feba0569e31a"
  },
  {
    "url": "assets/js/155.26b98a0f.js",
    "revision": "6342e20ea327e04ac71113b25b45945d"
  },
  {
    "url": "assets/js/156.fd2a2e90.js",
    "revision": "63c8e51b64ad4c8efcd79396e56892cd"
  },
  {
    "url": "assets/js/157.7b536ae3.js",
    "revision": "f5705d6a78f1230098aec2a87e5798c8"
  },
  {
    "url": "assets/js/158.17ec61a6.js",
    "revision": "8cb156771dd76db56db94717c0bd1d4c"
  },
  {
    "url": "assets/js/159.7fcae829.js",
    "revision": "46b5791448a85c3a28c4187f2d0a258d"
  },
  {
    "url": "assets/js/16.7bd79a25.js",
    "revision": "da3377943d6f3ccc962f1b7b9c2d85ec"
  },
  {
    "url": "assets/js/160.b73557fc.js",
    "revision": "ea27183e903e56f8542def342121bb4d"
  },
  {
    "url": "assets/js/161.e9835a29.js",
    "revision": "9e27ca9dead5ebd0b2b209e0265a689f"
  },
  {
    "url": "assets/js/162.9a0885bd.js",
    "revision": "38036fada7d3e9c131292217a7ed7031"
  },
  {
    "url": "assets/js/163.c971b171.js",
    "revision": "0a54ef14b208655a0983bcc303074a8d"
  },
  {
    "url": "assets/js/164.556b9d0e.js",
    "revision": "f72ae105573c112627f849585e4fdf90"
  },
  {
    "url": "assets/js/165.b0ccfd4d.js",
    "revision": "2a681086f06a321925bbc7ad6f0eef68"
  },
  {
    "url": "assets/js/166.e81da9f1.js",
    "revision": "b4fdd8f4ce7f8b3f365614debdef45d0"
  },
  {
    "url": "assets/js/167.4beac015.js",
    "revision": "caa600893210d6843823a396744d6b54"
  },
  {
    "url": "assets/js/168.490abc64.js",
    "revision": "3cae18435fea1fbcc2d1004873640829"
  },
  {
    "url": "assets/js/169.c13ab55e.js",
    "revision": "7dd6e7dcc7afded248cfd7149c169d26"
  },
  {
    "url": "assets/js/17.14659096.js",
    "revision": "7013562259cfb3c7ab2e3c12b1c80bf0"
  },
  {
    "url": "assets/js/170.1f58c387.js",
    "revision": "589c784b41a9c0d6fdd1909cf4bb1eed"
  },
  {
    "url": "assets/js/171.6d1d3f8b.js",
    "revision": "e57730dff607e42348aafbe689079b69"
  },
  {
    "url": "assets/js/172.25d955be.js",
    "revision": "8ad221cfa55f7ce45a1ad2caae5f0244"
  },
  {
    "url": "assets/js/173.71d56984.js",
    "revision": "15735b113b6abe43ae112cf6087f54bc"
  },
  {
    "url": "assets/js/174.8e180036.js",
    "revision": "4006adbb69e28a314c4b0fafda7cb0ea"
  },
  {
    "url": "assets/js/175.24c75dfe.js",
    "revision": "84d539f93171a6eb2851ebda5909b7d9"
  },
  {
    "url": "assets/js/176.42d5fee8.js",
    "revision": "3565f845b22f2dbf73daf13778b1b7b9"
  },
  {
    "url": "assets/js/177.cee1f3eb.js",
    "revision": "b3afed76a1d665e7a398a550af849320"
  },
  {
    "url": "assets/js/178.4513f8a7.js",
    "revision": "c0ce763aa10880aa97d1f37bca59eaa6"
  },
  {
    "url": "assets/js/179.c17d0763.js",
    "revision": "4a673d0e90bf1851a0e23d6c0683c657"
  },
  {
    "url": "assets/js/18.c8e2c08d.js",
    "revision": "a0c9fe6d4166e9eed50a5bbf093cd3f4"
  },
  {
    "url": "assets/js/180.a0745ecd.js",
    "revision": "92adf0f172f45c532a733c7de4c89f9b"
  },
  {
    "url": "assets/js/181.a7edb0f0.js",
    "revision": "08bfa8242150221c39c72b48d5d9afce"
  },
  {
    "url": "assets/js/182.8c6a4546.js",
    "revision": "dc2245f56c19823af660fb5693dd4135"
  },
  {
    "url": "assets/js/183.25a85bfb.js",
    "revision": "45b07b5d279f21bcd4efea2119b698aa"
  },
  {
    "url": "assets/js/184.57b26d64.js",
    "revision": "c41142ab1b7d0441d92baebf0468ad94"
  },
  {
    "url": "assets/js/185.db6f3725.js",
    "revision": "e166b914727d9a44b3c065f68899ffa2"
  },
  {
    "url": "assets/js/186.633117fa.js",
    "revision": "46a533794476eae98aa0a39196bbe2c8"
  },
  {
    "url": "assets/js/187.f892c36c.js",
    "revision": "a3db8610b335713707f0b547a1f17331"
  },
  {
    "url": "assets/js/188.2470c70d.js",
    "revision": "0b7764909f2bd1ebc0812034a094d485"
  },
  {
    "url": "assets/js/189.f4246745.js",
    "revision": "17938bea7375b5616f66e973a955874f"
  },
  {
    "url": "assets/js/19.3fca805f.js",
    "revision": "6a77d86bee575c687d93ca5cc5b04eb0"
  },
  {
    "url": "assets/js/190.b138273e.js",
    "revision": "c477a8fce3056df802396170946d1ac6"
  },
  {
    "url": "assets/js/191.3047c21e.js",
    "revision": "aa4eed96e84282f10fb5377ccdf388a6"
  },
  {
    "url": "assets/js/192.1c96ad85.js",
    "revision": "d2a0d7d77e5fef16316971a4c12dea67"
  },
  {
    "url": "assets/js/193.6050535f.js",
    "revision": "ffb3b85abff877459a974cba79aa37ff"
  },
  {
    "url": "assets/js/194.98532df9.js",
    "revision": "71f810514bd8cd192c1d97a053d5b925"
  },
  {
    "url": "assets/js/195.1b779baf.js",
    "revision": "58524168fd4ea6bb7d796ad079f4bc9c"
  },
  {
    "url": "assets/js/196.b1d9a922.js",
    "revision": "99158eafb5a2a14d4ec2cef64fdbeb52"
  },
  {
    "url": "assets/js/197.21631585.js",
    "revision": "9aae758425dfbf7a7228340ca5a70c7e"
  },
  {
    "url": "assets/js/198.0336fde6.js",
    "revision": "42b1ab4ac859c99048f162f460cc0d99"
  },
  {
    "url": "assets/js/199.5b0378a7.js",
    "revision": "765b872736ec38d51c82dfe31b0db715"
  },
  {
    "url": "assets/js/2.350e0505.js",
    "revision": "ce804155c60fa92d9b30cd40f0eb023d"
  },
  {
    "url": "assets/js/20.eb358ca4.js",
    "revision": "d73551db39f1e6518391c01286b593e8"
  },
  {
    "url": "assets/js/200.8dfbb59e.js",
    "revision": "2ddb21dc72931a62525c78c82d03efda"
  },
  {
    "url": "assets/js/201.4d4a043f.js",
    "revision": "e8d1df65249876f863a4b2ea841f71bd"
  },
  {
    "url": "assets/js/202.da1aca8b.js",
    "revision": "6205d25e90d1020f659a33ffb9c62d7f"
  },
  {
    "url": "assets/js/203.2003369a.js",
    "revision": "f54c1f58efffef4753680bd692b15e4d"
  },
  {
    "url": "assets/js/204.7fa1309a.js",
    "revision": "123d2ca054190b31615774efc9de01ce"
  },
  {
    "url": "assets/js/205.7f679d88.js",
    "revision": "7c16dbc0b3c7cb8324d8b97b8d756793"
  },
  {
    "url": "assets/js/206.e26b98f4.js",
    "revision": "358a59a59ac2be4119f8ec354e0e9973"
  },
  {
    "url": "assets/js/207.6b1c6dbc.js",
    "revision": "81a56a7e39bba052c0dc7267ba0dca00"
  },
  {
    "url": "assets/js/208.d4a1d230.js",
    "revision": "419d41120421f2285d6881f12c537ee2"
  },
  {
    "url": "assets/js/209.42b1ff91.js",
    "revision": "8119172018d8040de6cb731ff85d335e"
  },
  {
    "url": "assets/js/21.ca5d0421.js",
    "revision": "564d9dc9ff938fd38720d450b5f223d1"
  },
  {
    "url": "assets/js/210.7d3ccd34.js",
    "revision": "82b423d32d11ff28e391640d7b5ca0de"
  },
  {
    "url": "assets/js/211.af80ff88.js",
    "revision": "8b3d08cfc03fe353a9bac08f0d1aea62"
  },
  {
    "url": "assets/js/212.e64863f6.js",
    "revision": "62a596498cff9c39f433cd35263fa691"
  },
  {
    "url": "assets/js/213.a1807d03.js",
    "revision": "4db770d4a1fdd4ea8111e932270213eb"
  },
  {
    "url": "assets/js/214.c06ff986.js",
    "revision": "58ce983f9353671a26d71c5fc337e89c"
  },
  {
    "url": "assets/js/215.8b5a477f.js",
    "revision": "95902793bddcfa12f0720ff11b7a83c0"
  },
  {
    "url": "assets/js/216.c2d4f3b7.js",
    "revision": "53d287659458fdf8ebaf7026f9880f62"
  },
  {
    "url": "assets/js/217.8d05efe7.js",
    "revision": "853698759435e3d670809eb1a3231ef1"
  },
  {
    "url": "assets/js/218.89c7841e.js",
    "revision": "592ba05e899a3d0c2e17f6d02edcb161"
  },
  {
    "url": "assets/js/219.ad74b9af.js",
    "revision": "265d8e345e311fe50c8857d4f4aa9022"
  },
  {
    "url": "assets/js/22.7e69a103.js",
    "revision": "38300d9975292323b364214d7727c56e"
  },
  {
    "url": "assets/js/220.e404af92.js",
    "revision": "8c1251da865cac6185ca505d8e13f4b3"
  },
  {
    "url": "assets/js/221.ec57234a.js",
    "revision": "6a69af8b9015352d679460bc1042fd91"
  },
  {
    "url": "assets/js/222.333fdb69.js",
    "revision": "a4621f2e1bda56b97e859908a1575ebb"
  },
  {
    "url": "assets/js/223.543a34ed.js",
    "revision": "fc4eb1b28ec68718cb87b50da73ff042"
  },
  {
    "url": "assets/js/224.e436c752.js",
    "revision": "024af2eb5e69403c26021ec7f483c400"
  },
  {
    "url": "assets/js/225.c39d7a24.js",
    "revision": "6254d79bac8f129492f105eccc8cd3c1"
  },
  {
    "url": "assets/js/226.9122849e.js",
    "revision": "94ccd9c01a93249543652e1719f52672"
  },
  {
    "url": "assets/js/227.b1c6880c.js",
    "revision": "27a169a86ccff89cd2bd891057ded18c"
  },
  {
    "url": "assets/js/228.54bdd21b.js",
    "revision": "76363363a31e8ebd41befc9e4d65a1c6"
  },
  {
    "url": "assets/js/229.5064a0ef.js",
    "revision": "43284943036e46453fb794f7b41f220e"
  },
  {
    "url": "assets/js/23.2a5d63a9.js",
    "revision": "66419f174ced9fc036effcd6ead27198"
  },
  {
    "url": "assets/js/230.faaed3c8.js",
    "revision": "0f050a514743b8f51595591b9eda1802"
  },
  {
    "url": "assets/js/231.92357043.js",
    "revision": "7ab0c5a4c75f8adf6160d325908d586b"
  },
  {
    "url": "assets/js/232.bbe3050d.js",
    "revision": "2f7c7a6b999e6e8c42adc3989bd620d8"
  },
  {
    "url": "assets/js/233.b0ddce51.js",
    "revision": "df0292354b17076492b3e401eca948b5"
  },
  {
    "url": "assets/js/234.344782c8.js",
    "revision": "164e829bfceb2636363073160800fd4a"
  },
  {
    "url": "assets/js/235.693c2116.js",
    "revision": "d0d5223aa447ddef911ef97d83c79379"
  },
  {
    "url": "assets/js/236.6838523e.js",
    "revision": "9014640eca1fe2abc84ea4b9193248e1"
  },
  {
    "url": "assets/js/237.811d5dbb.js",
    "revision": "aef517430e227ae26a13513d35419aae"
  },
  {
    "url": "assets/js/238.9cd07440.js",
    "revision": "de26651307c547fb815ea531794dd5e8"
  },
  {
    "url": "assets/js/239.0bd018c8.js",
    "revision": "478c772fcd0b2b510a42c879728bb227"
  },
  {
    "url": "assets/js/24.6f9b4d50.js",
    "revision": "8fe8c4e2d7313033d2d691a6ddb49ea8"
  },
  {
    "url": "assets/js/240.804e9f96.js",
    "revision": "dbc14d06bf33ba9dd70e10f2c7e6692c"
  },
  {
    "url": "assets/js/241.cf218981.js",
    "revision": "579ed1c7f5d941d8c46a2408b575ed54"
  },
  {
    "url": "assets/js/242.3c283f86.js",
    "revision": "63a7ebf05e284dcf7b93dceb982d1d18"
  },
  {
    "url": "assets/js/243.1781d6c2.js",
    "revision": "c1ba45423d14da853100794a5c5222a8"
  },
  {
    "url": "assets/js/244.9ddf13e1.js",
    "revision": "85d4e1a3ed91536acee61abf0aef2878"
  },
  {
    "url": "assets/js/245.4bf79a37.js",
    "revision": "19d14a0d48174c35485abf7c4aedfa2a"
  },
  {
    "url": "assets/js/246.5fb80ac2.js",
    "revision": "0ac6d2677edda9ab9db0e6db5b11bc81"
  },
  {
    "url": "assets/js/247.1dbf331e.js",
    "revision": "bfbd876da1c6513374cea361a8c1e9c1"
  },
  {
    "url": "assets/js/248.7fdbec39.js",
    "revision": "c97ba0319b2858603176f9d72b9d95d1"
  },
  {
    "url": "assets/js/249.8333a92a.js",
    "revision": "36af9e0ca84e11dcd685c152b875ba78"
  },
  {
    "url": "assets/js/25.337d46b0.js",
    "revision": "bbddeddbd17ce14064a9768294f30780"
  },
  {
    "url": "assets/js/250.3e479628.js",
    "revision": "f078939a58400abad5d656db7062fda9"
  },
  {
    "url": "assets/js/251.270fc833.js",
    "revision": "2df3975f592040ad56391597fd253dc3"
  },
  {
    "url": "assets/js/252.b1b9a7d1.js",
    "revision": "9b6ce994f2f9c01d5daaf985b4ae91a9"
  },
  {
    "url": "assets/js/253.456ceece.js",
    "revision": "cfce2f0b5926535e4d060d4c192afe1c"
  },
  {
    "url": "assets/js/254.4d283c4d.js",
    "revision": "685a4b1747a7236a990a1426657b9420"
  },
  {
    "url": "assets/js/255.12900c0d.js",
    "revision": "5e71b28d0154e4fc111c4381a991f60d"
  },
  {
    "url": "assets/js/256.3a58d24a.js",
    "revision": "82401372082bfb94971f8188831c1c0e"
  },
  {
    "url": "assets/js/257.f7c75631.js",
    "revision": "e57662270fc110ddaa8bf8b0bdd1368b"
  },
  {
    "url": "assets/js/258.70156a25.js",
    "revision": "b3eb27e7509bba0a33e66e1099cfaaee"
  },
  {
    "url": "assets/js/259.2443ec28.js",
    "revision": "89aa00acd56cc22c5630a7f401836884"
  },
  {
    "url": "assets/js/26.7660ec38.js",
    "revision": "b47624940879bff8ae088460ff5c70d3"
  },
  {
    "url": "assets/js/260.0ddeda26.js",
    "revision": "a9a120d1a803f9d9b0555e1f504c0fdc"
  },
  {
    "url": "assets/js/27.c989dcb7.js",
    "revision": "023b97a71f8c73eec54d44c164c8512b"
  },
  {
    "url": "assets/js/28.c5e70adc.js",
    "revision": "92a579f7144f008817146aa2bcaa7114"
  },
  {
    "url": "assets/js/29.c932eb6f.js",
    "revision": "ae17a06c62e1d5331a1434cd5f8b908e"
  },
  {
    "url": "assets/js/30.954c511f.js",
    "revision": "6c45a7ad0b3c53ec6e2a1e12aae2ca82"
  },
  {
    "url": "assets/js/31.0070e4b2.js",
    "revision": "627c044fe37eabd52e04f56d3dcf501e"
  },
  {
    "url": "assets/js/32.faaf8588.js",
    "revision": "fdd92d305ce7eb79f56ea8de7aa4208f"
  },
  {
    "url": "assets/js/33.516b012b.js",
    "revision": "b58958d4cd0670e118d520c67876414e"
  },
  {
    "url": "assets/js/34.8c8dc870.js",
    "revision": "2ee8c974e72c5fedaeba27b5bbb9cd87"
  },
  {
    "url": "assets/js/35.28e1c2a1.js",
    "revision": "e5e6f41e997eb9ff8b4eb08531fa0ce2"
  },
  {
    "url": "assets/js/36.fffe5e42.js",
    "revision": "f0610bd1f2c46259535eca99ac8da06d"
  },
  {
    "url": "assets/js/37.4a602b15.js",
    "revision": "662fa868737718ca35f3f915f7660866"
  },
  {
    "url": "assets/js/38.0bc885ca.js",
    "revision": "6411f6ac626662a4aa5eab1b2e79469e"
  },
  {
    "url": "assets/js/39.876ec1eb.js",
    "revision": "acbf8f4f229d93bef90c083a5c9d2f56"
  },
  {
    "url": "assets/js/4.c5f7436a.js",
    "revision": "5cc933b73073829ece95e2606a6a1a76"
  },
  {
    "url": "assets/js/40.50ef357f.js",
    "revision": "53250a16823b0b69b1e9035de707bcc8"
  },
  {
    "url": "assets/js/41.b4af02c0.js",
    "revision": "ec135900ae8245fc3113990762919ada"
  },
  {
    "url": "assets/js/42.d2b1a727.js",
    "revision": "81ec8fd251913d257bb4b29e7b7fa6a4"
  },
  {
    "url": "assets/js/43.f87d1d99.js",
    "revision": "9c16e78164951f5db32774132a8c9a11"
  },
  {
    "url": "assets/js/44.db69d683.js",
    "revision": "b3bfd7c82661a4f1a84f5b382c750353"
  },
  {
    "url": "assets/js/45.c185bdbf.js",
    "revision": "9477b135faaf849835c488181282f742"
  },
  {
    "url": "assets/js/46.a620e7e4.js",
    "revision": "9468af629ca050860f55a51ced53868f"
  },
  {
    "url": "assets/js/47.3c8c7a17.js",
    "revision": "abe78001940bbe33618c16d469adb5b6"
  },
  {
    "url": "assets/js/48.31aabda0.js",
    "revision": "1dd8094e33d4c06d809416b487409c1c"
  },
  {
    "url": "assets/js/49.232e3a2f.js",
    "revision": "70cd67ebdcf14e822f4b96e913731320"
  },
  {
    "url": "assets/js/5.9d764c17.js",
    "revision": "26d28e5a9d712378eae2b76d8ed4b464"
  },
  {
    "url": "assets/js/50.3e441331.js",
    "revision": "e61d6870f5fd8e9ee6db5055e1df1429"
  },
  {
    "url": "assets/js/51.556fc4f5.js",
    "revision": "96efd5b15ae25032384e4fa37475bed1"
  },
  {
    "url": "assets/js/52.03d05080.js",
    "revision": "b64e49b91173b6317e1833bc70aa3999"
  },
  {
    "url": "assets/js/53.f1e1fe9f.js",
    "revision": "490b5f75fadc89f664bad2dbe5e15919"
  },
  {
    "url": "assets/js/54.ebf052d6.js",
    "revision": "12dc8b6ee014c2d28dd2e0b493ae5ff3"
  },
  {
    "url": "assets/js/55.239941c1.js",
    "revision": "75510179339526b958be9715d9bd4fdd"
  },
  {
    "url": "assets/js/56.d226f3b1.js",
    "revision": "aca39287d5dc10f66c2767573d010c7e"
  },
  {
    "url": "assets/js/57.e9e4ba36.js",
    "revision": "f598df2db38ca628ae3408d87340b3db"
  },
  {
    "url": "assets/js/58.4a1bf170.js",
    "revision": "78274ea35f134837e548dc6e7d4253fb"
  },
  {
    "url": "assets/js/59.b2f28eba.js",
    "revision": "4094dbb0b262145810c58de2703d2f57"
  },
  {
    "url": "assets/js/6.56288f19.js",
    "revision": "2e484f10c840321c37fc2758ff48a9c3"
  },
  {
    "url": "assets/js/60.41e399e1.js",
    "revision": "4b8fb765921f5954b7f72f59b787f8e0"
  },
  {
    "url": "assets/js/61.81d562fb.js",
    "revision": "81f2cff4bb8010d4c98c7fba3af877a6"
  },
  {
    "url": "assets/js/62.987518db.js",
    "revision": "84a0abdf827c563b8b64e3041f479548"
  },
  {
    "url": "assets/js/63.49ddd782.js",
    "revision": "0a606b3834fef4f9baaf5e4027c1e9d2"
  },
  {
    "url": "assets/js/64.2d4314e1.js",
    "revision": "bd93542b6b651ead46d6d79b1fd25925"
  },
  {
    "url": "assets/js/65.2415f4e6.js",
    "revision": "f212f3d96a526ca172f60775caecf6ec"
  },
  {
    "url": "assets/js/66.9993909a.js",
    "revision": "9ef1a475173f21fec1eed9ab60a586f5"
  },
  {
    "url": "assets/js/67.a7ee8760.js",
    "revision": "0afc8503767be4b50a79b6d7ed6ce50a"
  },
  {
    "url": "assets/js/68.aabb6a0e.js",
    "revision": "1697c1de86f54af93622202f1310dfb5"
  },
  {
    "url": "assets/js/69.b4b26d7a.js",
    "revision": "51b2dc6b57a7818ec498a1bba1cfd3c4"
  },
  {
    "url": "assets/js/7.ed12686e.js",
    "revision": "8821906d4e9b8ad18eb6c10c4c5103d4"
  },
  {
    "url": "assets/js/70.feb9144d.js",
    "revision": "6ff757f9bbafac593c24e554871397fd"
  },
  {
    "url": "assets/js/71.78fafb02.js",
    "revision": "66864986b4520bb4bf290ede88586f10"
  },
  {
    "url": "assets/js/72.003a5f68.js",
    "revision": "851918d8758ae8b9e841a3f9fa79b771"
  },
  {
    "url": "assets/js/73.76531754.js",
    "revision": "80b6e23e209515cfadac8311c48df53e"
  },
  {
    "url": "assets/js/74.52d3cfc0.js",
    "revision": "0f3d7045063c9f7f1fcf80d625a64e6e"
  },
  {
    "url": "assets/js/75.4338857c.js",
    "revision": "e86e3ef9f12a505172307a358acdaad4"
  },
  {
    "url": "assets/js/76.c7d75689.js",
    "revision": "b0c5197ee5bca5866e8eccac40ca6850"
  },
  {
    "url": "assets/js/77.8a792aaf.js",
    "revision": "9e495a054b8d4d3d2993a3b524a81c65"
  },
  {
    "url": "assets/js/78.699bd594.js",
    "revision": "1ebeb92d95106f9fd3e82f19fd74715d"
  },
  {
    "url": "assets/js/79.e099b28c.js",
    "revision": "d6e492548122991f10a5dc16d566e1e4"
  },
  {
    "url": "assets/js/8.e072cf01.js",
    "revision": "33ff2b8086ff0c1d95f9245fcb4b6bb2"
  },
  {
    "url": "assets/js/80.6fc084b6.js",
    "revision": "d2620a5984454b992c51d876900d89a6"
  },
  {
    "url": "assets/js/81.03e67aa6.js",
    "revision": "b6a906ce5000a7e8d50d78f4daf078fc"
  },
  {
    "url": "assets/js/82.4c529ef3.js",
    "revision": "58764621e36f192cb7db37af053fa301"
  },
  {
    "url": "assets/js/83.8e45f24c.js",
    "revision": "8d22046afaebb20cb0aa659ca6dbdbb9"
  },
  {
    "url": "assets/js/84.021849bb.js",
    "revision": "e35a74ea7aaa4315a570640bd88f650c"
  },
  {
    "url": "assets/js/85.99d4bd49.js",
    "revision": "4ec5b474acbfff8a7d61c14c6a0b6787"
  },
  {
    "url": "assets/js/86.889b95d7.js",
    "revision": "92a1e0d6ff696de064926aed63df1054"
  },
  {
    "url": "assets/js/87.35b26568.js",
    "revision": "91f460e5700c384c25b6c2c5ffef86e4"
  },
  {
    "url": "assets/js/88.59299840.js",
    "revision": "59342cac68c0b6b508083452caa8d979"
  },
  {
    "url": "assets/js/89.6672719b.js",
    "revision": "520a501c3d844a16291e5c6153ecc42e"
  },
  {
    "url": "assets/js/9.00613853.js",
    "revision": "1a1d9ccfb21d2b0e86ad8ab2e9ba100f"
  },
  {
    "url": "assets/js/90.9d6ba53b.js",
    "revision": "58321b21de79bc8b962ad7b32048374e"
  },
  {
    "url": "assets/js/91.c604a8c6.js",
    "revision": "ae67861bf32134b5aba4f5edbece4c3c"
  },
  {
    "url": "assets/js/92.5a4a2233.js",
    "revision": "c6d0892dc9c42e3444a022cea103031d"
  },
  {
    "url": "assets/js/93.c7b4ca26.js",
    "revision": "c6538a30b3e1b14f04f04e02cc2c6d6b"
  },
  {
    "url": "assets/js/94.df43a8a3.js",
    "revision": "40185f6a2d53a9b7df039b86c09f8d9b"
  },
  {
    "url": "assets/js/95.4a31ba7c.js",
    "revision": "a5fe141b6ce26977a0a47dabe881e968"
  },
  {
    "url": "assets/js/96.839ce045.js",
    "revision": "0aa3ae66aac2342681a3196ddf48f64d"
  },
  {
    "url": "assets/js/97.9a677385.js",
    "revision": "6ec735bea7d91e29341150edf5e6f19d"
  },
  {
    "url": "assets/js/98.d396138a.js",
    "revision": "1b4ab805e2f863999ed1e4d3c6c0dc36"
  },
  {
    "url": "assets/js/99.b262673a.js",
    "revision": "18416819112fcbad3a6c42d86422f0b9"
  },
  {
    "url": "assets/js/app.39c5dd47.js",
    "revision": "fb7513fd5e50ec393c69d2fdad300cca"
  },
  {
    "url": "categories/index.html",
    "revision": "86d5e0a607d3f319c2527d64fde0cf0a"
  },
  {
    "url": "cs/algorithm/analysis.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/algorithm/data-structure.html",
    "revision": "7b2f33d57f1ddbe7cd5be27a5a9ca2b2"
  },
  {
    "url": "cs/algorithm/find.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/algorithm/index.html",
    "revision": "909ffb435915a3b221951383692cf5e3"
  },
  {
    "url": "cs/algorithm/other.html",
    "revision": "84116ba878652cb69d369e50d2cb76cf"
  },
  {
    "url": "cs/algorithm/sort.html",
    "revision": "855c6c48ebb685144ebdb9627812988d"
  },
  {
    "url": "cs/algorithm/stack-queue.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/algorithm/union-set.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/archit/cache.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/archit/cluster.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/archit/distributed.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/archit/index.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/archit/msg-queue.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/archit/sys-design.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/compile/index.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/cpp/associative-container.html",
    "revision": "76fda0947e145bdf03d376203b2342dd"
  },
  {
    "url": "cs/cpp/class.html",
    "revision": "d9f1243e19b3c4d15e4112431b53fc7d"
  },
  {
    "url": "cs/cpp/copy-control.html",
    "revision": "a40483f06f076a19800b3a33cd51c927"
  },
  {
    "url": "cs/cpp/dynamic-memory.html",
    "revision": "19ccee858d7706f5020082de2960c8b2"
  },
  {
    "url": "cs/cpp/expr.html",
    "revision": "e37c8959b301681027c3e51b1a7f58d4"
  },
  {
    "url": "cs/cpp/function.html",
    "revision": "aa56bc103b88560ff68625ce07c07f64"
  },
  {
    "url": "cs/cpp/index.html",
    "revision": "909ffb435915a3b221951383692cf5e3"
  },
  {
    "url": "cs/cpp/IO.html",
    "revision": "ec729565adb1c5125d43a6bc7de16730"
  },
  {
    "url": "cs/cpp/sentence.html",
    "revision": "3bd1d99e37acc5e808068ac40fb387be"
  },
  {
    "url": "cs/cpp/sequential-container.html",
    "revision": "3a2c4e3e1efd3a03d06f9442ad14ce0a"
  },
  {
    "url": "cs/cpp/var-len-sequence.html",
    "revision": "43c7403e347df6fe9c6d032832100783"
  },
  {
    "url": "cs/cpp/var-types.html",
    "revision": "6d898c5abb8e5d6643db7dccef558259"
  },
  {
    "url": "cs/database/index.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/database/leetcode-database.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/database/MySQL.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/database/principle.html",
    "revision": "ad6e69bc399661f76dc85e32b895b7cc"
  },
  {
    "url": "cs/database/Redis.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/database/SQL.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/design/abserver.html",
    "revision": "c78045c9eb444707d447797817697b79"
  },
  {
    "url": "cs/design/abstract-factory.html",
    "revision": "383c26b7d17646779323dc725accab1d"
  },
  {
    "url": "cs/design/adapter.html",
    "revision": "98af20e090214549eae9ad2ed66691eb"
  },
  {
    "url": "cs/design/agent.html",
    "revision": "c80248ff36b3d6a853ba4eb26adf8b03"
  },
  {
    "url": "cs/design/appearance.html",
    "revision": "40563ef6dbee11422c72654aaee54459"
  },
  {
    "url": "cs/design/bridging.html",
    "revision": "655fb8c30d71c002eb6835b0a61bf90f"
  },
  {
    "url": "cs/design/combination.html",
    "revision": "21fb55c4deb344df86b443b65d564fa8"
  },
  {
    "url": "cs/design/command.html",
    "revision": "0a5c1a3cd9a8b7464d666550ca6fd756"
  },
  {
    "url": "cs/design/decoration.html",
    "revision": "abf335a42dbfb69054808ebd14787fa3"
  },
  {
    "url": "cs/design/design-pattern.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/design/duty-chain.html",
    "revision": "756f64d5826cd4a5c68a7d1c9b04fb7d"
  },
  {
    "url": "cs/design/factory-method.html",
    "revision": "9eb1d27246d85df91df1388842e5ee93"
  },
  {
    "url": "cs/design/flyweight.html",
    "revision": "fa76968566f2f4563f54196ce1565419"
  },
  {
    "url": "cs/design/generator.html",
    "revision": "260868c8417d53a14d95395827dbae82"
  },
  {
    "url": "cs/design/index.html",
    "revision": "8d2019f476e1621b332f390abe3b28b3"
  },
  {
    "url": "cs/design/interpreter.html",
    "revision": "5b488bdd81aa7044c63e941a7504efb1"
  },
  {
    "url": "cs/design/iterator.html",
    "revision": "c318d7769ff76b9d9a7ef1475aa9d7d9"
  },
  {
    "url": "cs/design/mediator.html",
    "revision": "85477179c7fdf0903780c5e9d9772fa3"
  },
  {
    "url": "cs/design/memo.html",
    "revision": "a675c6ee3c921506f86a4bfe8f233b62"
  },
  {
    "url": "cs/design/null-object.html",
    "revision": "9fd922c60fb33b216820d41bf1c8e8b5"
  },
  {
    "url": "cs/design/oriente-object.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/design/prototype.html",
    "revision": "dd964c9013eb651db8c5e56b448e30f8"
  },
  {
    "url": "cs/design/simple-factory.html",
    "revision": "7072098b5c8a9c3dbf3e3f66080a8923"
  },
  {
    "url": "cs/design/singleton.html",
    "revision": "6f4b271ae629f4f5068d6e14238800c1"
  },
  {
    "url": "cs/design/state.html",
    "revision": "18f81f15b9efa8dee2cae8c402ea561c"
  },
  {
    "url": "cs/design/strategy.html",
    "revision": "c7e8ae157303513f2333507d3f7fb182"
  },
  {
    "url": "cs/design/temp-method.html",
    "revision": "7a67598cfd938c74306d72f75d7f6073"
  },
  {
    "url": "cs/design/visitor.html",
    "revision": "75936bf546e11319d659b7297459659a"
  },
  {
    "url": "cs/framework/front-end.html",
    "revision": "5aabd77e5af7a5b8b0413bbc10ecf541"
  },
  {
    "url": "cs/framework/index.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/framework/vue-a.html",
    "revision": "03f6f37331c8729ed8dcf5c229ef9c58"
  },
  {
    "url": "cs/framework/vue-b.html",
    "revision": "1e45d4da87390fef8dd1450028f6bdc6"
  },
  {
    "url": "cs/framework/vue-c.html",
    "revision": "b6cc4d4ec6207aedf5808ca0e17d0ac9"
  },
  {
    "url": "cs/framework/vue3-design.html",
    "revision": "873ce7e1e014bd42baec310e1ab21cce"
  },
  {
    "url": "cs/framework/webpack.html",
    "revision": "ce421723db92f3eb3f63d2c85351ccab"
  },
  {
    "url": "cs/index.html",
    "revision": "98e2baf2a4afa13d9a5697e5131d43fb"
  },
  {
    "url": "cs/java/basic.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/java/concurrenry.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/java/container.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/java/index.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/java/JavaIO.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/java/virtual-marchine.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/Lang/CSS.html",
    "revision": "514b8272234468f40640120946ef558d"
  },
  {
    "url": "cs/Lang/English.html",
    "revision": "e60df0947216d63a3e1995d58693d4f9"
  },
  {
    "url": "cs/Lang/ES6.html",
    "revision": "ded41c29ae2b431fd254a5fc97690f85"
  },
  {
    "url": "cs/Lang/html.html",
    "revision": "e7a6aeecb538d58417d10ee6529a2766"
  },
  {
    "url": "cs/Lang/index.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/Lang/JavaScript.html",
    "revision": "82244eaa71fc6689f76d6341bdb35858"
  },
  {
    "url": "cs/Lang/JSTricks.html",
    "revision": "e074c3b4402d710e2a23efb21738b191"
  },
  {
    "url": "cs/Lang/python.html",
    "revision": "a1830f0b8c9f7fabb08c4ffcc7d366a6"
  },
  {
    "url": "cs/Lang/regex.html",
    "revision": "45c3f2ec89ab7aaca917bfcbe41305a2"
  },
  {
    "url": "cs/Lang/use_css.html",
    "revision": "1420cf4ba22c5619730f1c5330f1cd13"
  },
  {
    "url": "cs/leetcode/array.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/leetcode/bin-search.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/leetcode/bit-operator.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/leetcode/bound-check.html",
    "revision": "f58e7eb9361ea9f6b577fabaeac4c39f"
  },
  {
    "url": "cs/leetcode/divide-conquer.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/leetcode/double-pointer.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/leetcode/dynamic.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/leetcode/find.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/leetcode/graph.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/leetcode/greedy.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/leetcode/hash-table.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/leetcode/index.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/leetcode/lcd-3.html",
    "revision": "397bb7cce95a377a9287bd29ced68515"
  },
  {
    "url": "cs/leetcode/list.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/leetcode/math.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/leetcode/ncode4.html",
    "revision": "d16c12b618aa19a35ed6a8533dbb15dc"
  },
  {
    "url": "cs/leetcode/ncode5.html",
    "revision": "843fd90a9350adb3f0e414f7c1fcb208"
  },
  {
    "url": "cs/leetcode/p0.html",
    "revision": "166ccd10067bb296c79170fd8c7bbc0b"
  },
  {
    "url": "cs/leetcode/p1.html",
    "revision": "b7d4acb78ab5955a4e92f090020335ca"
  },
  {
    "url": "cs/leetcode/p10.html",
    "revision": "f4c1c9761068af50f0db54d3f4942ce8"
  },
  {
    "url": "cs/leetcode/p11.html",
    "revision": "329b55079803c17374f931e9be327ca0"
  },
  {
    "url": "cs/leetcode/p12.html",
    "revision": "c73bb04d660e0be38ba0bf68f3987708"
  },
  {
    "url": "cs/leetcode/p13.html",
    "revision": "6c606a3591bc35ce98d9727b54b111c6"
  },
  {
    "url": "cs/leetcode/p14.html",
    "revision": "6e320c7eff7d10b37eaf670757487715"
  },
  {
    "url": "cs/leetcode/p15.html",
    "revision": "7cdf6489af7ab007ae2e83a354211865"
  },
  {
    "url": "cs/leetcode/p16.html",
    "revision": "5ac9c5f8c845b18432348fd3001c991e"
  },
  {
    "url": "cs/leetcode/p17.html",
    "revision": "243292324912cbb7744e71382442855d"
  },
  {
    "url": "cs/leetcode/p18.html",
    "revision": "72a7400d6ed3e9c9f5d1d2cf1016619e"
  },
  {
    "url": "cs/leetcode/p19.html",
    "revision": "6fe17467f897593478dc1ff72cdc641a"
  },
  {
    "url": "cs/leetcode/p2.html",
    "revision": "3dadda2e82d507e92f7ab1e2b520358c"
  },
  {
    "url": "cs/leetcode/p20.html",
    "revision": "6e5b4ef780275267308bff24c37f4356"
  },
  {
    "url": "cs/leetcode/p21.html",
    "revision": "14b168bf207bc8fa6680ecbbeae845a2"
  },
  {
    "url": "cs/leetcode/p22.html",
    "revision": "96f7b7364f1d0c3004cb3c1e1478f298"
  },
  {
    "url": "cs/leetcode/p23.html",
    "revision": "7fcf1ca493ab85b3d26c6485df790e7f"
  },
  {
    "url": "cs/leetcode/p24.html",
    "revision": "8e0fef49b0cec4dea943c07c8151d836"
  },
  {
    "url": "cs/leetcode/p25.html",
    "revision": "66530d099d3c2fa966c258ae4d059ae7"
  },
  {
    "url": "cs/leetcode/p26.html",
    "revision": "bab85a726326acdc056e4a4ce86100cf"
  },
  {
    "url": "cs/leetcode/p27.html",
    "revision": "a1f093233ff0c5ad483a9c177cb51fc4"
  },
  {
    "url": "cs/leetcode/p28.html",
    "revision": "d06a104d159b5977d0e9c6d7904599ff"
  },
  {
    "url": "cs/leetcode/p29.html",
    "revision": "23cee0143ff563a7e7c7a6e56fc16343"
  },
  {
    "url": "cs/leetcode/p3.html",
    "revision": "70f610a4f8502452a4301d0f0109a998"
  },
  {
    "url": "cs/leetcode/p30.html",
    "revision": "7989a9f01c6361e205d2ae843339175b"
  },
  {
    "url": "cs/leetcode/p31.html",
    "revision": "f13989dcc0e9ed0fcd0058165401022e"
  },
  {
    "url": "cs/leetcode/p32.html",
    "revision": "7429411f6f845171539522f84558da7c"
  },
  {
    "url": "cs/leetcode/p33.html",
    "revision": "b61a278dba2f43df552fea5f5a0bbeec"
  },
  {
    "url": "cs/leetcode/p34.html",
    "revision": "420511e91ea68f02d529145809a4a2a8"
  },
  {
    "url": "cs/leetcode/p35.html",
    "revision": "16b496e94f0ecfb6c98171f4d68446ab"
  },
  {
    "url": "cs/leetcode/p36.html",
    "revision": "29597a0684d48cce4fa260dcfc8ddcca"
  },
  {
    "url": "cs/leetcode/p37.html",
    "revision": "3d07316a58e7d0c51a40b37720edcde6"
  },
  {
    "url": "cs/leetcode/p38.html",
    "revision": "ff36e4f9a3b79c0f0c83c4b559d60a9a"
  },
  {
    "url": "cs/leetcode/p39.html",
    "revision": "384d5c829e9d87df41e19f8480177b59"
  },
  {
    "url": "cs/leetcode/p4.html",
    "revision": "6460e74b6606618c9db6eb3b9e78606d"
  },
  {
    "url": "cs/leetcode/p40.html",
    "revision": "03cec9568382525192525157661bb3fc"
  },
  {
    "url": "cs/leetcode/p41.html",
    "revision": "826d1b5ed2202f6f80aca44650df0337"
  },
  {
    "url": "cs/leetcode/p42.html",
    "revision": "f0b654d681143e650ff3615794e0f535"
  },
  {
    "url": "cs/leetcode/p43.html",
    "revision": "59947b733aa3a8b5e885f9b1a400e410"
  },
  {
    "url": "cs/leetcode/p44.html",
    "revision": "0c588f76154e968d195df4cb75ef6d3e"
  },
  {
    "url": "cs/leetcode/p45.html",
    "revision": "05d7af3dc7686ca6ac9e9d3c77bc6cd2"
  },
  {
    "url": "cs/leetcode/p46.html",
    "revision": "c643a717c5042bce7607921840be802b"
  },
  {
    "url": "cs/leetcode/p47.html",
    "revision": "365e448600047e64894bf4f0da956fe1"
  },
  {
    "url": "cs/leetcode/p48.html",
    "revision": "8bbbe47a87bd42812f3a1e81e9e8f8c0"
  },
  {
    "url": "cs/leetcode/p49.html",
    "revision": "d92e677334bdf1fdea956e4dabadd853"
  },
  {
    "url": "cs/leetcode/p5.html",
    "revision": "d862ee0dcbb210e81759983a6582d48a"
  },
  {
    "url": "cs/leetcode/p50.html",
    "revision": "f765a4d93fceb698647722f919fee985"
  },
  {
    "url": "cs/leetcode/p51.html",
    "revision": "e3a8ed19552763e59bfe4ec4c717639d"
  },
  {
    "url": "cs/leetcode/p52.html",
    "revision": "00c9162ea2bc0ac455ed89e42f576d8f"
  },
  {
    "url": "cs/leetcode/p53.html",
    "revision": "039fff2d507ef0c8ce62d6a699b400d6"
  },
  {
    "url": "cs/leetcode/p54.html",
    "revision": "67be701bc9f3b539123edccdbd3b4516"
  },
  {
    "url": "cs/leetcode/p55.html",
    "revision": "929752aa20018bad60263913f6456bd3"
  },
  {
    "url": "cs/leetcode/p56.html",
    "revision": "8e29f502a3fdea5a6cbde592c8655c13"
  },
  {
    "url": "cs/leetcode/p57.html",
    "revision": "57301eaf68ee73d74775d76a623daad4"
  },
  {
    "url": "cs/leetcode/p58.html",
    "revision": "74d08503d0eb6cc0833a1179d5126797"
  },
  {
    "url": "cs/leetcode/p59.html",
    "revision": "198d1a2f8441bfcdcef3b88b58e20021"
  },
  {
    "url": "cs/leetcode/p6.html",
    "revision": "1dd5409651dcb8eaef19c721f15d256e"
  },
  {
    "url": "cs/leetcode/p60.html",
    "revision": "7ed83829b7e47a602dfba3b72d434a03"
  },
  {
    "url": "cs/leetcode/p61.html",
    "revision": "92fc02e868203be69b638d6762c0db28"
  },
  {
    "url": "cs/leetcode/p62.html",
    "revision": "26893f20b1bfead95a2436007b18ab64"
  },
  {
    "url": "cs/leetcode/p63.html",
    "revision": "acbe5c74c656507831d9a5cdf419d8c4"
  },
  {
    "url": "cs/leetcode/p64.html",
    "revision": "ff35d43ff3e565915e973f6a1fc8c3a9"
  },
  {
    "url": "cs/leetcode/p65.html",
    "revision": "5f57b5e85165113fe5dae5391a86af73"
  },
  {
    "url": "cs/leetcode/p66.html",
    "revision": "628d846bb838a6c4aed119a1b09e3eaa"
  },
  {
    "url": "cs/leetcode/p67.html",
    "revision": "ec34c1e0f99aee530f973d86178de72b"
  },
  {
    "url": "cs/leetcode/p68.html",
    "revision": "f0eb18b88b11654ca57ebfd9ab2fd6f0"
  },
  {
    "url": "cs/leetcode/p69.html",
    "revision": "657d7b48fc4afb3079d897de419337be"
  },
  {
    "url": "cs/leetcode/p7.html",
    "revision": "45ed5423a3e3cd298aea9049af20cdb0"
  },
  {
    "url": "cs/leetcode/p70.html",
    "revision": "3e6e338924612fdc3bcac2e3d2fed9c8"
  },
  {
    "url": "cs/leetcode/p71.html",
    "revision": "51fb3b3b977c5d5b92eccfd92955d8d0"
  },
  {
    "url": "cs/leetcode/p72.html",
    "revision": "7b910bdf87d816d695c18cc09a9da348"
  },
  {
    "url": "cs/leetcode/p73.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/leetcode/p74.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/leetcode/p75.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/leetcode/p76.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/leetcode/p77.html",
    "revision": "29597a0684d48cce4fa260dcfc8ddcca"
  },
  {
    "url": "cs/leetcode/p78.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/leetcode/p79.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/leetcode/p8.html",
    "revision": "9c646c2d4c3d400e911be45b11207cba"
  },
  {
    "url": "cs/leetcode/p80.html",
    "revision": "329bbf6d3895e33befb76dc20ba46964"
  },
  {
    "url": "cs/leetcode/p81.html",
    "revision": "909ffb435915a3b221951383692cf5e3"
  },
  {
    "url": "cs/leetcode/p82.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/leetcode/p9.html",
    "revision": "7f7303b62afc7581182a463042c83f89"
  },
  {
    "url": "cs/leetcode/sort.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/leetcode/stack-queue.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/leetcode/string.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/leetcode/tree.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/linux/common-command.html",
    "revision": "f2b590a21f9dac9ba1888bf303d97e6e"
  },
  {
    "url": "cs/linux/index.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/linux/Linux.html",
    "revision": "34166e3e1b6c2fc64c80e79dfea7f1d3"
  },
  {
    "url": "cs/linux/process.html",
    "revision": "a30db215d5cadbed8d1c42dc3b3201c1"
  },
  {
    "url": "cs/network/application.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/network/conclude.html",
    "revision": "73b4c9544356c343aa7755011fe7d8d9"
  },
  {
    "url": "cs/network/HTTP.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/network/index.html",
    "revision": "909ffb435915a3b221951383692cf5e3"
  },
  {
    "url": "cs/network/link.html",
    "revision": "702b026ff777313f665a5de0129f475e"
  },
  {
    "url": "cs/network/network.html",
    "revision": "28dea9e6c35b09f5bea77ec5f2800560"
  },
  {
    "url": "cs/network/physical.html",
    "revision": "9a70f31c39aba59b4ecb1e6e8d5e4925"
  },
  {
    "url": "cs/network/Socket.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/network/summary.html",
    "revision": "6266cbf3a84ee9303dce992ab2fb7826"
  },
  {
    "url": "cs/network/transport.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/Osystem/concept.html",
    "revision": "b5cced4d3b1e72de580d7004d8aa1451"
  },
  {
    "url": "cs/Osystem/conclude.html",
    "revision": "64de4b93805010911a70015a6f493dbf"
  },
  {
    "url": "cs/Osystem/deadlock.html",
    "revision": "40c159617a8b3baf95b07f71d85ebe56"
  },
  {
    "url": "cs/Osystem/device-mgmt.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/Osystem/index.html",
    "revision": "909ffb435915a3b221951383692cf5e3"
  },
  {
    "url": "cs/Osystem/memory-mgmt.html",
    "revision": "a0832b255d2f4615eb7ce61d9cfa138a"
  },
  {
    "url": "cs/Osystem/process-mgmt.html",
    "revision": "7a0219c1c36e73ab475a9b0cae07b98e"
  },
  {
    "url": "cs/tools/build-tools.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/tools/code-readability.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/tools/code-style.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/tools/Docker.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/tools/Git.html",
    "revision": "7f2555511d94bc4b59fa1ab9bb04eb1a"
  },
  {
    "url": "cs/tools/index.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/tools/regular-expr.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/web/attack-tech.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "cs/web/browser.html",
    "revision": "2909cd30047c98ae1b42fdbf9c41b57b"
  },
  {
    "url": "cs/web/guide.html",
    "revision": "514b8272234468f40640120946ef558d"
  },
  {
    "url": "cs/web/index.html",
    "revision": "8794f64c37c21a6db5c6e0c2c52f5fda"
  },
  {
    "url": "cs/web/performance.html",
    "revision": "b392413aeecbf0670357d8cd22bd932a"
  },
  {
    "url": "cs/web/resource.html",
    "revision": "e2b5517644644669e8790f40fb26abf9"
  },
  {
    "url": "cs/web/web.html",
    "revision": "f29689fce0a5abd0f935959b2ea1f836"
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
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "language/english/adjective.html",
    "revision": "74d7df4a019c1129dfd4df785b928403"
  },
  {
    "url": "language/english/adverb.html",
    "revision": "bfeb582318d1cfc18ab0751af1d81dfb"
  },
  {
    "url": "language/english/determiner.html",
    "revision": "f9dc17079f404cdda8d999c0d8c6a7a9"
  },
  {
    "url": "language/english/differ.html",
    "revision": "c6d8c6e12e336273846514eb84170392"
  },
  {
    "url": "language/english/index.html",
    "revision": "e60df0947216d63a3e1995d58693d4f9"
  },
  {
    "url": "language/english/modal.html",
    "revision": "407a69dd7c2c7e0646724dce0c2b00c3"
  },
  {
    "url": "language/english/mood.html",
    "revision": "e63f3ed1556a554fb3b6c6556e00965a"
  },
  {
    "url": "language/english/non-predicate.html",
    "revision": "de62024b0ede18a9e163e08a601622ea"
  },
  {
    "url": "language/english/nouns.html",
    "revision": "f8bf12e3c6b71b6d6ca098273301a47d"
  },
  {
    "url": "language/english/preposition.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "language/english/pronoun.html",
    "revision": "3ff631e9535a6f9fc453c2dae62cff50"
  },
  {
    "url": "language/english/sentence.html",
    "revision": "a5440b85c3be9a40e9938b0adfeeb09a"
  },
  {
    "url": "language/english/tense.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "language/english/verb.html",
    "revision": "9dce6428676bb0b5b188306c2552006f"
  },
  {
    "url": "language/index.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "tag/index.html",
    "revision": "c21d74466bbe4d7c414cc59d976c76f7"
  },
  {
    "url": "timeline/index.html",
    "revision": "5ed3c78ca2f80b09f5992ea50df40aa9"
  },
  {
    "url": "tools/hash.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "tools/index.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
  },
  {
    "url": "tools/nothing-here-but-void.html",
    "revision": "5d148575cef6ee89962736d73849cac3"
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
