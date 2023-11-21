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
    "revision": "73b7277b4c397f887db8e2af0dfc11eb"
  },
  {
    "url": "assets/css/0.styles.1f3981f7.css",
    "revision": "050a5359ba7491a9e9aefc19d78c7947"
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
    "url": "assets/js/1.aadb11db.js",
    "revision": "71bbdbd08d6531a18cd7ffcf784f296b"
  },
  {
    "url": "assets/js/10.f4d9f0d2.js",
    "revision": "d502d1dd3159763c761b17efc3afe959"
  },
  {
    "url": "assets/js/100.08f89149.js",
    "revision": "8f31f6538ae4fe9f0ee6f81cac10581a"
  },
  {
    "url": "assets/js/101.79cfa4bf.js",
    "revision": "c3bbb3b0aa43b469936042765bb2c94f"
  },
  {
    "url": "assets/js/102.508f3d86.js",
    "revision": "435133525628f655c435e5a18618b2ce"
  },
  {
    "url": "assets/js/103.888e2b12.js",
    "revision": "883d8bd516db232ca814a027394e7c25"
  },
  {
    "url": "assets/js/104.ac4ac3d5.js",
    "revision": "c70c58a0bffb621743789fb1d8082350"
  },
  {
    "url": "assets/js/105.a0c1b58e.js",
    "revision": "56d98ce29ca7dce98e1d6257f194cef1"
  },
  {
    "url": "assets/js/106.08a15d07.js",
    "revision": "cb4f972a94345df4de0e689b2a93ca48"
  },
  {
    "url": "assets/js/107.ce17752b.js",
    "revision": "2da5b8461836171857f9a6316d5bba23"
  },
  {
    "url": "assets/js/108.085ed7cd.js",
    "revision": "b1f89274618f403ea9886c2b7e8a4a27"
  },
  {
    "url": "assets/js/109.c6fe7902.js",
    "revision": "a914dd4694aff166979cf4f6bb1b50ea"
  },
  {
    "url": "assets/js/11.2965c8d6.js",
    "revision": "7a188d7eee0c5623a36c8df3014e8cf3"
  },
  {
    "url": "assets/js/110.515f9b38.js",
    "revision": "68b373de083a398c22fb53784b98d9bb"
  },
  {
    "url": "assets/js/111.be76f04e.js",
    "revision": "d38ba871c72547be3c0624e02dccc0c1"
  },
  {
    "url": "assets/js/112.189826a5.js",
    "revision": "51d2d7243db5297be50f5c66888b7085"
  },
  {
    "url": "assets/js/113.40441def.js",
    "revision": "7a56a8a658e91b71a99f10ccff2f5121"
  },
  {
    "url": "assets/js/114.6626692a.js",
    "revision": "38db13b2c8497b8e44fc026c6befc1aa"
  },
  {
    "url": "assets/js/115.b5953e05.js",
    "revision": "62ba7c692ee8858f8cadd8c482e6bce0"
  },
  {
    "url": "assets/js/116.4df11523.js",
    "revision": "40fb5209747cb4192c3a17a1855f0162"
  },
  {
    "url": "assets/js/117.9d888ee6.js",
    "revision": "d1e70e91ffc779b4955c568f69d50e47"
  },
  {
    "url": "assets/js/118.aad715ab.js",
    "revision": "bf2443612bbf27981f17a8e1568f5fa4"
  },
  {
    "url": "assets/js/119.048ead5a.js",
    "revision": "95448cde850fdddc95a36343c027d727"
  },
  {
    "url": "assets/js/12.a8cffb7f.js",
    "revision": "b01d624979c8a688072a11889bdb6ac7"
  },
  {
    "url": "assets/js/120.4ad6f5cd.js",
    "revision": "fd1dea0d374b3796bc1b8c43a5e0d539"
  },
  {
    "url": "assets/js/121.04f7af0d.js",
    "revision": "7b1416d26204182c0875cdc92b2687e1"
  },
  {
    "url": "assets/js/122.4a47ec83.js",
    "revision": "a775911fa0f3a10661c3e44830b3bc6d"
  },
  {
    "url": "assets/js/123.c7859f28.js",
    "revision": "a4c86a105d8d267b4054e0404bab8eb9"
  },
  {
    "url": "assets/js/124.333896f8.js",
    "revision": "4663f8df2844c7ef3994ca021add2145"
  },
  {
    "url": "assets/js/125.1674873e.js",
    "revision": "7107b66843257380c3bfd134f60296ee"
  },
  {
    "url": "assets/js/126.cecdc7d2.js",
    "revision": "ffa0b749aa7a2e7029a927aa6b9831f6"
  },
  {
    "url": "assets/js/127.1249ef57.js",
    "revision": "c289849edb6bf55da101e47e269e953c"
  },
  {
    "url": "assets/js/128.ad49d708.js",
    "revision": "e1318cd6c4c4d016e838b04f56b0e4a6"
  },
  {
    "url": "assets/js/129.bb9239f8.js",
    "revision": "8a59d01c8562445943718708f18a3c77"
  },
  {
    "url": "assets/js/13.a2e424d0.js",
    "revision": "d1b85cc5ee9d4a4705fad5756382d0cb"
  },
  {
    "url": "assets/js/130.143ecb91.js",
    "revision": "bf85d962e63f85134f9e211749b4d46f"
  },
  {
    "url": "assets/js/131.b4231cc6.js",
    "revision": "22ee1258c82bebddcac3d40a93a8632e"
  },
  {
    "url": "assets/js/132.a0952314.js",
    "revision": "b5a8b7908d6d47d599444ec8d53f51c5"
  },
  {
    "url": "assets/js/133.3ee8aa41.js",
    "revision": "af7da9db888cdd92d1c69188b11ac501"
  },
  {
    "url": "assets/js/134.a9c7cc81.js",
    "revision": "51c3666dbfdd38a750417c00f0040993"
  },
  {
    "url": "assets/js/135.ff395bac.js",
    "revision": "a9f5d2f2acaad3f40eb59f6e046ee7ce"
  },
  {
    "url": "assets/js/136.aa38d4d8.js",
    "revision": "39b799cd2b684894b1d9c1b3c1ee0f09"
  },
  {
    "url": "assets/js/137.211725c3.js",
    "revision": "f643810617ab1da442eb6e370e963d71"
  },
  {
    "url": "assets/js/138.88ffc283.js",
    "revision": "f0a774f3b6e7acc96f93a5fc4a74d209"
  },
  {
    "url": "assets/js/139.334e0805.js",
    "revision": "a1f436229326f2d0776e2b6262faab3c"
  },
  {
    "url": "assets/js/14.da6ceef8.js",
    "revision": "1ca5130944b503643ddd447bd92baf2e"
  },
  {
    "url": "assets/js/140.5349317b.js",
    "revision": "abd3dc85e2db77cf609506e4876fde52"
  },
  {
    "url": "assets/js/141.c565cfb0.js",
    "revision": "14113bf33b9d671ecb9bdb31b9f765c0"
  },
  {
    "url": "assets/js/142.696ed2b9.js",
    "revision": "1b7879faa473ffdb783d1b5040ec52b9"
  },
  {
    "url": "assets/js/143.bbe1ae4a.js",
    "revision": "79116b40f328028a6d20ae6c3a79a711"
  },
  {
    "url": "assets/js/144.9122febe.js",
    "revision": "c62e127daa43314ca304a1f791f24f7b"
  },
  {
    "url": "assets/js/145.2d6e9d44.js",
    "revision": "fbe478da09b770d0cb3be6c14f91a226"
  },
  {
    "url": "assets/js/146.b6701413.js",
    "revision": "0c01b7e51c24e071bc0dbb0e90993ea1"
  },
  {
    "url": "assets/js/147.608d9d4e.js",
    "revision": "3c0bdbb7d1af95c9008c74c79d816fd3"
  },
  {
    "url": "assets/js/148.c558f604.js",
    "revision": "187443d7cbdd1a3bc4b397b6fd71306b"
  },
  {
    "url": "assets/js/149.c2466786.js",
    "revision": "87b3b1f50b2a58136b56faad9c21cc70"
  },
  {
    "url": "assets/js/15.904f4d77.js",
    "revision": "3cc58778208442aa22c35f255dbcb9d7"
  },
  {
    "url": "assets/js/150.f1d4b47b.js",
    "revision": "8521f83d1d777b4eb9f512666799fbf3"
  },
  {
    "url": "assets/js/151.020e887e.js",
    "revision": "56cb7442258e4c5e7ebdd1bbc37ecb47"
  },
  {
    "url": "assets/js/152.9b071d63.js",
    "revision": "c0418dd12361d271bc33ced00ac42f2f"
  },
  {
    "url": "assets/js/153.13af424b.js",
    "revision": "1bfb3d405f3cb5d772e8a33514892825"
  },
  {
    "url": "assets/js/154.60077046.js",
    "revision": "13ff31e351ae75abc566ea77a393e77f"
  },
  {
    "url": "assets/js/155.3515082f.js",
    "revision": "e4f07a6249837340cba52db6c3afeee8"
  },
  {
    "url": "assets/js/156.845ab581.js",
    "revision": "1c2174225e7c9a2d3f6ee87b5216b11f"
  },
  {
    "url": "assets/js/157.f8c0e2e8.js",
    "revision": "2a5d43cea1f5c538961c83329e7966c5"
  },
  {
    "url": "assets/js/158.4ca431a7.js",
    "revision": "b3431eb2b47e9276346207f8608d43d8"
  },
  {
    "url": "assets/js/159.c58f1b0d.js",
    "revision": "b7c64d0266a00026fb250b56a4fbb93d"
  },
  {
    "url": "assets/js/16.fca1429a.js",
    "revision": "d9f5cb0c9279357111f7fa7d1a3b4847"
  },
  {
    "url": "assets/js/160.ec4621cd.js",
    "revision": "35a61f19df8a9af31eb2bf85e420c548"
  },
  {
    "url": "assets/js/161.beff055f.js",
    "revision": "811d18617729dbaa302482ede5506f88"
  },
  {
    "url": "assets/js/162.fa5d17a5.js",
    "revision": "8f23604b8c0e40e61fb7bb5cb5634081"
  },
  {
    "url": "assets/js/163.e4aad874.js",
    "revision": "08621fd728092435da88614a1274f416"
  },
  {
    "url": "assets/js/164.3b6d088e.js",
    "revision": "fe6fbfef3eac8a5a1e38dd9002451ae9"
  },
  {
    "url": "assets/js/165.5c19d96d.js",
    "revision": "65904a6f96a5dbbca2fed9418f3eba66"
  },
  {
    "url": "assets/js/166.008223a8.js",
    "revision": "3f1566b9041710d0b5d5fff4ce3e4c6a"
  },
  {
    "url": "assets/js/167.f13266a3.js",
    "revision": "1b5eda8b5c66f1225f7df16f3a6c76b2"
  },
  {
    "url": "assets/js/168.61710ac2.js",
    "revision": "59676feadf1dc627d5b40f2f7d84edb1"
  },
  {
    "url": "assets/js/169.97162d79.js",
    "revision": "7eaad7bc3ad3ab0ff1d0dc0fa9a4cf1f"
  },
  {
    "url": "assets/js/17.ccaf5777.js",
    "revision": "dac468766d57092685e5c66bad133c90"
  },
  {
    "url": "assets/js/170.422301e0.js",
    "revision": "3ec4c786fb6ae29a0bda22bbdafe0d77"
  },
  {
    "url": "assets/js/171.61497532.js",
    "revision": "5dbc2ceb62ad425988d7cb99003e2979"
  },
  {
    "url": "assets/js/172.412990ba.js",
    "revision": "06bcff783c1bab0b2586f3277cdb5881"
  },
  {
    "url": "assets/js/173.381da621.js",
    "revision": "841465c42d3643d8d18a25769026b400"
  },
  {
    "url": "assets/js/174.cb45d140.js",
    "revision": "cb219c6ac303f3629fce057885a40ba7"
  },
  {
    "url": "assets/js/175.8fe7d257.js",
    "revision": "d4d4c9a8be81d28c444e531c80f54121"
  },
  {
    "url": "assets/js/176.2df20a61.js",
    "revision": "5c99579c0d15f7ee7c6fc8432572258c"
  },
  {
    "url": "assets/js/177.62541845.js",
    "revision": "f5e5a870cf6588186697f997a0379f73"
  },
  {
    "url": "assets/js/178.54cc4381.js",
    "revision": "fb7d5b85f7bd09f251a378eaae221f61"
  },
  {
    "url": "assets/js/179.49a14267.js",
    "revision": "c05bcedb8c62b139f40e0fcd0b999f35"
  },
  {
    "url": "assets/js/18.37590552.js",
    "revision": "9d0e1322668ee79af4dce9c0f56fc02a"
  },
  {
    "url": "assets/js/180.e2588fe6.js",
    "revision": "a317272e06c03f10d9ef3c7a7f6c5650"
  },
  {
    "url": "assets/js/181.847d926b.js",
    "revision": "4c6cfb56e2eb605846080445d6750ad1"
  },
  {
    "url": "assets/js/182.9bce33f2.js",
    "revision": "3a16169a800865d946c159f639c8d25d"
  },
  {
    "url": "assets/js/183.3f7dd4e8.js",
    "revision": "e84959222da09d8ed61b1455e085d82e"
  },
  {
    "url": "assets/js/184.faf26c1f.js",
    "revision": "9d982dde6a8fc82568a0f1b586a888be"
  },
  {
    "url": "assets/js/185.6157860f.js",
    "revision": "c008689d0c997fd6beb9fdc9578b83d0"
  },
  {
    "url": "assets/js/186.6c7a61ff.js",
    "revision": "ac001a610a3d42f45e6385befef18a1c"
  },
  {
    "url": "assets/js/187.21239735.js",
    "revision": "ab64a1b9f3ff01d3ac3059ad70902c53"
  },
  {
    "url": "assets/js/188.a01cc4c3.js",
    "revision": "8916c54c5fd10097277428f2014d23bd"
  },
  {
    "url": "assets/js/189.e81bd329.js",
    "revision": "1a677b4d5a0bdc279443eb33bc31e782"
  },
  {
    "url": "assets/js/19.073735c8.js",
    "revision": "6121e404dd9f25ab5754231068abcce9"
  },
  {
    "url": "assets/js/190.f746a0e8.js",
    "revision": "b048d783f92c5b708ea90718ed5e0019"
  },
  {
    "url": "assets/js/191.8846583b.js",
    "revision": "4a343d780071d89e70256b4256494bf0"
  },
  {
    "url": "assets/js/192.82425fb9.js",
    "revision": "b6b39e502af99131a82f5f4850e6a2ea"
  },
  {
    "url": "assets/js/193.9f23abfe.js",
    "revision": "37153e0ed42951b4b7392da598910f27"
  },
  {
    "url": "assets/js/194.f07b12f8.js",
    "revision": "d8e3c9e791e039b5e63eebb5cc21b08b"
  },
  {
    "url": "assets/js/195.e304ad0c.js",
    "revision": "95bb2386f2a7dcdcc664523f97ea1d2f"
  },
  {
    "url": "assets/js/196.f051476e.js",
    "revision": "e35f20f791a9bf29706faa3bc23b714e"
  },
  {
    "url": "assets/js/197.4d022d04.js",
    "revision": "cf308d7bc5f01f6859008de60c0c21dc"
  },
  {
    "url": "assets/js/198.e6a4e149.js",
    "revision": "d5a4211b27c08e1e148b465a66749283"
  },
  {
    "url": "assets/js/199.402b7c48.js",
    "revision": "c70d3a0e4a7b50eed3b6d173210651ec"
  },
  {
    "url": "assets/js/2.e823a4d1.js",
    "revision": "156e3f2264cbf6479f6098f517d22fd6"
  },
  {
    "url": "assets/js/20.0c798595.js",
    "revision": "97683f321a05b46166db00a112f59075"
  },
  {
    "url": "assets/js/200.6236368d.js",
    "revision": "1d20ee5f250b61646cdd4363909e1b6c"
  },
  {
    "url": "assets/js/201.96077827.js",
    "revision": "3f5ffe4df56ed63201b5f05cf422f1e1"
  },
  {
    "url": "assets/js/202.49180cd5.js",
    "revision": "a7ab58b70cab50dfbc10f46889c082d9"
  },
  {
    "url": "assets/js/203.56c2ca87.js",
    "revision": "fe2141ee7ff28a47bfd7cc1324d4a7d6"
  },
  {
    "url": "assets/js/204.9d6b9773.js",
    "revision": "7f1acd7acd59f6f39a69645a56226eaa"
  },
  {
    "url": "assets/js/205.e6a9b954.js",
    "revision": "4884c90f144fc54aa41de35a497243c3"
  },
  {
    "url": "assets/js/206.0036a291.js",
    "revision": "0c9767bd3d3f8a0271b9f4a1679c9d38"
  },
  {
    "url": "assets/js/207.1ff10c35.js",
    "revision": "2dc9827d21448a3ca0dda7c4133947fb"
  },
  {
    "url": "assets/js/208.3941c7e1.js",
    "revision": "fc72a4c37da2170925d4ba84ecb9136d"
  },
  {
    "url": "assets/js/209.e06d39df.js",
    "revision": "593878c13e090abc55b1a2f1740f2f35"
  },
  {
    "url": "assets/js/21.fd29235f.js",
    "revision": "5415c26478a7b04deb95ca21796520a5"
  },
  {
    "url": "assets/js/210.32e522f3.js",
    "revision": "29e11cb6bcb457536d0300a7c1dfb543"
  },
  {
    "url": "assets/js/211.800f8d01.js",
    "revision": "8f192d4038e8d315b4eba8ed668f971c"
  },
  {
    "url": "assets/js/212.02536985.js",
    "revision": "2da176125c6717ba6c5cf56d0bad4fb6"
  },
  {
    "url": "assets/js/213.2a0996ca.js",
    "revision": "87a9d829c51b08025991c78b4f9f8b8e"
  },
  {
    "url": "assets/js/214.26b5e6b9.js",
    "revision": "3ab19ab4716061f786701eeb9da590d2"
  },
  {
    "url": "assets/js/215.8b6c6f78.js",
    "revision": "9f0124a42b739ac1725340eb7d2b0bd0"
  },
  {
    "url": "assets/js/216.4bb33ed2.js",
    "revision": "284920b6bf0cd16cd09d9e8afcf833c5"
  },
  {
    "url": "assets/js/217.dfd95d27.js",
    "revision": "dc16d1795a001c5bc56de81830f0bc03"
  },
  {
    "url": "assets/js/218.63130976.js",
    "revision": "2167bc8c153d554cfe31b47314d37ff1"
  },
  {
    "url": "assets/js/219.980bdf13.js",
    "revision": "b5ad26f76df14b3c38d56f4e2683d80a"
  },
  {
    "url": "assets/js/22.9b4a0a73.js",
    "revision": "b345908734981da52cd3fdf563effee9"
  },
  {
    "url": "assets/js/220.5770215b.js",
    "revision": "7b429273eca18e5e37ee4892a237630f"
  },
  {
    "url": "assets/js/221.7dca1654.js",
    "revision": "7b97e20054847ce5ef0ed28c6a5c9889"
  },
  {
    "url": "assets/js/222.d948ba00.js",
    "revision": "76498a067132af95b2ead6e0485ca10e"
  },
  {
    "url": "assets/js/223.db9bdf15.js",
    "revision": "eba7bc6ac242518d32c63226606dbecd"
  },
  {
    "url": "assets/js/224.698926b7.js",
    "revision": "7d0ce1395c72aaf133cf644bb3f33ec0"
  },
  {
    "url": "assets/js/225.a2654aa3.js",
    "revision": "9a22a90c7fb368149b2e2029d486f75b"
  },
  {
    "url": "assets/js/226.a6e06262.js",
    "revision": "6b09b29ba3c05bb99ccc17dee03134cf"
  },
  {
    "url": "assets/js/227.1ec83eb9.js",
    "revision": "99a7d5578cc8405359467dc8693f08df"
  },
  {
    "url": "assets/js/228.1449037d.js",
    "revision": "3ead7da44e76dc50f5fb98927cd16bf8"
  },
  {
    "url": "assets/js/229.e40c9f2b.js",
    "revision": "c53735c2a227c3491e37707a6d8056ee"
  },
  {
    "url": "assets/js/23.48be6ae1.js",
    "revision": "a0150e6d60ecc4d19fa696566098e0cd"
  },
  {
    "url": "assets/js/230.77287f0e.js",
    "revision": "b9247416bbf91e1d34607c84c8da1cf4"
  },
  {
    "url": "assets/js/231.85984006.js",
    "revision": "3e2b154f3e747a58c1d174d52b2c32fa"
  },
  {
    "url": "assets/js/232.437fb63e.js",
    "revision": "322b82f9d3197817982a6554a5c04a86"
  },
  {
    "url": "assets/js/233.d2ac2a0a.js",
    "revision": "9145e26083cfeb58340e0f1b48792784"
  },
  {
    "url": "assets/js/234.5b641b72.js",
    "revision": "452afadf9f82b8a47733c38fcba346c6"
  },
  {
    "url": "assets/js/235.98fab7b7.js",
    "revision": "c56a374b904551ea3f13684fca6b7cb5"
  },
  {
    "url": "assets/js/236.f3eaf28d.js",
    "revision": "1e21d26fbc0fd41711a50ff6aa0b97e3"
  },
  {
    "url": "assets/js/237.1285a3b7.js",
    "revision": "73b7491538fe0bc657d4627d595f04a1"
  },
  {
    "url": "assets/js/238.d39af321.js",
    "revision": "e618752ed976e9e5efaf16f3c9d543e6"
  },
  {
    "url": "assets/js/239.0d2b5bce.js",
    "revision": "3ff36a748bce294f8b71e545754a7afa"
  },
  {
    "url": "assets/js/24.830502d6.js",
    "revision": "1e6289352350f99bb5f50bf067919a0d"
  },
  {
    "url": "assets/js/240.9a8cc9c8.js",
    "revision": "d98b72b5516e6a9815ec4fbef34f0021"
  },
  {
    "url": "assets/js/241.c5cfd7af.js",
    "revision": "7a3329bf465a8b70496b56f855f8b689"
  },
  {
    "url": "assets/js/242.f5691397.js",
    "revision": "cb5801989a67949148ca045e06a6936e"
  },
  {
    "url": "assets/js/243.87b0aa64.js",
    "revision": "8dae586d352428b41418951c82d3aded"
  },
  {
    "url": "assets/js/244.4ea49f5e.js",
    "revision": "a1bf46f5e825c5a7432c428c1b885439"
  },
  {
    "url": "assets/js/245.b638c9d2.js",
    "revision": "ee599052c7bc2760263019f874e64560"
  },
  {
    "url": "assets/js/246.f28ec8cb.js",
    "revision": "0ab6efeeb478e9941a7d351f4acf7c7f"
  },
  {
    "url": "assets/js/247.c32e3522.js",
    "revision": "ff96ee3fc9b19cd28b6cf3a1e2410c42"
  },
  {
    "url": "assets/js/248.c519cb03.js",
    "revision": "5ab774312dbf52ea1bd5ab01c1d63ca1"
  },
  {
    "url": "assets/js/249.eb94238b.js",
    "revision": "da99a09401cefdda51adbf1332a5d63e"
  },
  {
    "url": "assets/js/25.e9359e42.js",
    "revision": "1b4270f6adae04a565004c70b523a905"
  },
  {
    "url": "assets/js/250.c02e631f.js",
    "revision": "a63ee840e5c6a4f88b4a4ad28739898a"
  },
  {
    "url": "assets/js/251.1b576d8b.js",
    "revision": "0872b2a8f5c9bd22c11415027f108ae0"
  },
  {
    "url": "assets/js/252.ffa7b8de.js",
    "revision": "32745d7615a3d251bab05fd3f9762121"
  },
  {
    "url": "assets/js/253.62f120ac.js",
    "revision": "c6755a202553827c436ef058a72c8316"
  },
  {
    "url": "assets/js/254.2f362aec.js",
    "revision": "5892a3b7c51d71d18f78a6920cebeedf"
  },
  {
    "url": "assets/js/255.72f2b334.js",
    "revision": "b0dc0bced76100ba77bdcb4e776507fd"
  },
  {
    "url": "assets/js/256.0a1c901f.js",
    "revision": "2d4cc77c4e90e7354bf42ef4b4cd142b"
  },
  {
    "url": "assets/js/257.3077ab69.js",
    "revision": "8960c35aef11ba12f856eddfb5f5ea57"
  },
  {
    "url": "assets/js/258.fe94e123.js",
    "revision": "cca6b3cf5ef80bbcaf0da65ab1e10b2d"
  },
  {
    "url": "assets/js/259.262094c4.js",
    "revision": "6cc32254afefd70458950d01327003e4"
  },
  {
    "url": "assets/js/26.1758ca98.js",
    "revision": "8331972fbb7faf01c1c98865453719ae"
  },
  {
    "url": "assets/js/260.81c88e86.js",
    "revision": "445dcf8ec6c7725ec85106e6ca3cfbb0"
  },
  {
    "url": "assets/js/261.7213c627.js",
    "revision": "4fe6bad00acc309134dfc7f39602aad7"
  },
  {
    "url": "assets/js/262.e4c375a8.js",
    "revision": "22a3c664c08ffc0404ad4a241709da5c"
  },
  {
    "url": "assets/js/263.c82ebff5.js",
    "revision": "3d881e237b5eac923caf874f32d76637"
  },
  {
    "url": "assets/js/264.9bacfef9.js",
    "revision": "7cbcbc2b4ccaaa7974e80637f9aa8330"
  },
  {
    "url": "assets/js/265.6d0950e6.js",
    "revision": "663ec5ab2e4958340eb72b5b478b08f4"
  },
  {
    "url": "assets/js/266.af9714b5.js",
    "revision": "c9bb91b3ae236bcc07b24859e05e46bd"
  },
  {
    "url": "assets/js/267.f6af4b77.js",
    "revision": "7b37fcd3b32b987d2d6bc8102c2f14a5"
  },
  {
    "url": "assets/js/268.8c2cb8bf.js",
    "revision": "4f34e5c433a2f70bcb26b8cf0ad82453"
  },
  {
    "url": "assets/js/269.662b93e4.js",
    "revision": "647e532d283c6fe21984127f0266419e"
  },
  {
    "url": "assets/js/27.ddc6b10a.js",
    "revision": "c879517ed094c84ef68bdc84fe92511a"
  },
  {
    "url": "assets/js/270.6ce388cd.js",
    "revision": "1cb40132ccfae93719dfc4ecf09faa7b"
  },
  {
    "url": "assets/js/271.7cebf924.js",
    "revision": "0193ae5575fff2db0f1e10deca2c7527"
  },
  {
    "url": "assets/js/272.cae0e3fb.js",
    "revision": "515bb277398614f034e16387d4d24c6f"
  },
  {
    "url": "assets/js/273.ddf1446e.js",
    "revision": "005d9c477c67a13f3435b68c034d9e44"
  },
  {
    "url": "assets/js/274.0f159ff7.js",
    "revision": "e22307d3348e966a730351952629e400"
  },
  {
    "url": "assets/js/28.07f0a2ac.js",
    "revision": "d121f4aff27f0291545b7d760eaa61dc"
  },
  {
    "url": "assets/js/29.da89515e.js",
    "revision": "07100875ce341f1f3683b9cbcbb8727a"
  },
  {
    "url": "assets/js/3.01f970a1.js",
    "revision": "009cd4643967d4c1bc84a90d6fc3cd7e"
  },
  {
    "url": "assets/js/30.c6793445.js",
    "revision": "b9c1e64af792dcbde17afb2d5c756438"
  },
  {
    "url": "assets/js/31.b5d47bb2.js",
    "revision": "b20e5c9492ddb5b68eabf192656bea3f"
  },
  {
    "url": "assets/js/32.e98132d3.js",
    "revision": "fdb5d2f55c62fd2e355ab49a6f17f1d8"
  },
  {
    "url": "assets/js/33.6a6b8ff3.js",
    "revision": "265cfff17ad1efbeea6fa07cd2b4ddb8"
  },
  {
    "url": "assets/js/34.4e1ff7f6.js",
    "revision": "1d549aadfdfb8c49b4f4d7bcb8e3bafd"
  },
  {
    "url": "assets/js/35.d25c9952.js",
    "revision": "4e17016d62a3e98a0419de7dabaed131"
  },
  {
    "url": "assets/js/36.6607b87f.js",
    "revision": "894c8eb8e02f36804a0b8cf2fb075592"
  },
  {
    "url": "assets/js/37.d02a4ce5.js",
    "revision": "bfddc8be62f6c86eb3fbdb14d6b68dd5"
  },
  {
    "url": "assets/js/38.2609144c.js",
    "revision": "8a180ade6b2209e862790ecf0361141b"
  },
  {
    "url": "assets/js/39.54f18076.js",
    "revision": "b6b5c2b5524d8eb4a5a54aa4c247012a"
  },
  {
    "url": "assets/js/4.f6705ec9.js",
    "revision": "1bae4c7bd77f14bcb5e495c8c2aac291"
  },
  {
    "url": "assets/js/40.112b3cd4.js",
    "revision": "c11b60828bb901a434acc0c67dbd2446"
  },
  {
    "url": "assets/js/41.569fc607.js",
    "revision": "1e58a95c4b092e4d55bd5ca529aecee2"
  },
  {
    "url": "assets/js/42.d9ff8564.js",
    "revision": "c0a7168c7bef338f3de9266e9e6e4f92"
  },
  {
    "url": "assets/js/43.e7fcaba1.js",
    "revision": "23c342de74bfd57accc68fe434f3926e"
  },
  {
    "url": "assets/js/44.ed81d3e1.js",
    "revision": "e937254e690339a05273249667e0b8c7"
  },
  {
    "url": "assets/js/45.18a1a000.js",
    "revision": "4a8975272b158192946a32baebd4459a"
  },
  {
    "url": "assets/js/46.e3380b5e.js",
    "revision": "4f8b5cd8b1119ac6826b99bb22fd9076"
  },
  {
    "url": "assets/js/47.10337e19.js",
    "revision": "b1a047362c5b9abef6babc78bddb879f"
  },
  {
    "url": "assets/js/48.edb334c8.js",
    "revision": "d67f44d7b2b6b57587111d515fad8986"
  },
  {
    "url": "assets/js/49.e6de575f.js",
    "revision": "6883dd7223e104b74e3253c898d9ef86"
  },
  {
    "url": "assets/js/50.e1698b1e.js",
    "revision": "8baf64ad787ed6678c08d21599b1b1a8"
  },
  {
    "url": "assets/js/51.5bb7242c.js",
    "revision": "d8d9c55c50155479fe06bd8407d48996"
  },
  {
    "url": "assets/js/52.2ea3633a.js",
    "revision": "f8f826db2fe64afdc922c33107c4b1a4"
  },
  {
    "url": "assets/js/53.2f3f5bac.js",
    "revision": "993930a4e3a2bfe215e507bab8f2faf7"
  },
  {
    "url": "assets/js/54.a435e34d.js",
    "revision": "38b581e81fe4801478c5ca6a8a1441d5"
  },
  {
    "url": "assets/js/55.b5d5bd76.js",
    "revision": "405d73a3e1ee5c45dce989fa03606b6b"
  },
  {
    "url": "assets/js/56.0c265b98.js",
    "revision": "7658c54fb39e16a42d750c58f958cc94"
  },
  {
    "url": "assets/js/57.06113d79.js",
    "revision": "8bbeda1f2455b958bed6902c4e830bf1"
  },
  {
    "url": "assets/js/58.5ef48145.js",
    "revision": "65120681f68d4e70e33ae15a578809eb"
  },
  {
    "url": "assets/js/59.337e3c94.js",
    "revision": "3b1c114643b0a1f0b6cebbc7deccb131"
  },
  {
    "url": "assets/js/6.cdf7ffc7.js",
    "revision": "2a669ed901d0b5db8cc2f727b7596396"
  },
  {
    "url": "assets/js/60.5632847a.js",
    "revision": "48a81d1b62c33bf7475cae7489830aeb"
  },
  {
    "url": "assets/js/61.1ae3bb0b.js",
    "revision": "08b42d71e6952d31ddadf3d784eb60a4"
  },
  {
    "url": "assets/js/62.83fd8cbe.js",
    "revision": "798ded3860536ab07d8279a150787e13"
  },
  {
    "url": "assets/js/63.ec975281.js",
    "revision": "9538653c03962d23873ace986414c552"
  },
  {
    "url": "assets/js/64.93c76f2c.js",
    "revision": "6dd92a46286d21269da8fa8b9a35282e"
  },
  {
    "url": "assets/js/65.7e930ace.js",
    "revision": "e6e2f7b5cde5357f0b7fd9b04158e96d"
  },
  {
    "url": "assets/js/66.299aef20.js",
    "revision": "0f1f4367cea2d13251c4b62a996c512e"
  },
  {
    "url": "assets/js/67.fa4f87fd.js",
    "revision": "d7dc1b0b297c1eeacf37a5b664104d15"
  },
  {
    "url": "assets/js/68.f336db63.js",
    "revision": "4ad5e2dfe272e020328c42818df19554"
  },
  {
    "url": "assets/js/69.5c129c03.js",
    "revision": "f3af31b80754807ebce64059136f43e7"
  },
  {
    "url": "assets/js/7.2b74f89e.js",
    "revision": "10acf2f5e22144e1460597b179ddc65f"
  },
  {
    "url": "assets/js/70.ef98e0f6.js",
    "revision": "60d90d6d24eee433bb4893525abbd8ee"
  },
  {
    "url": "assets/js/71.585dab5f.js",
    "revision": "1db887554946e51ff3a03ceb821abd54"
  },
  {
    "url": "assets/js/72.4c5c19af.js",
    "revision": "8ffa2c40d30935557442c58248327f41"
  },
  {
    "url": "assets/js/73.0c92ff5b.js",
    "revision": "f546a7f3025c502ba7f8f29c4c15587a"
  },
  {
    "url": "assets/js/74.33f1bf00.js",
    "revision": "8f892dd5cec4b5c77af5d9d1f6d0b942"
  },
  {
    "url": "assets/js/75.209aa285.js",
    "revision": "33967cc889ff2d18b4d7a7bd9f775e40"
  },
  {
    "url": "assets/js/76.a0dfb62e.js",
    "revision": "6fa13308c3238c63c24bbaa353a6f205"
  },
  {
    "url": "assets/js/77.b159b33e.js",
    "revision": "683e02e083cff93722e02838f8ea8a7a"
  },
  {
    "url": "assets/js/78.c99a107d.js",
    "revision": "45f3f00e867ac406e52659dd6d6db268"
  },
  {
    "url": "assets/js/79.28deabda.js",
    "revision": "e5c751c6bd34c92f5d096a2a766dd741"
  },
  {
    "url": "assets/js/8.01debc54.js",
    "revision": "a391a2f510fb707b992518dfe3fccf44"
  },
  {
    "url": "assets/js/80.61f315ef.js",
    "revision": "8cf4434abe5526ffcda32e1465188820"
  },
  {
    "url": "assets/js/81.ee051365.js",
    "revision": "934913f762a69f51081e6edd78f18a54"
  },
  {
    "url": "assets/js/82.b6f1b44e.js",
    "revision": "74b35cba0f0329d92ce3e479b493d578"
  },
  {
    "url": "assets/js/83.d4b38c09.js",
    "revision": "8f6e5a1c0fe7c3d9dd63c67695c02fad"
  },
  {
    "url": "assets/js/84.89eddd29.js",
    "revision": "0b3fe2751b2480aabf5906263178449d"
  },
  {
    "url": "assets/js/85.9b3bdbeb.js",
    "revision": "bd6ff443f3374ba7df345bf7805360d1"
  },
  {
    "url": "assets/js/86.acddc8ce.js",
    "revision": "1aec652e966fc7171a37b77d6693ab96"
  },
  {
    "url": "assets/js/87.9d2cd54c.js",
    "revision": "3b5633b59eb195e7d7a88b8c1cbc5249"
  },
  {
    "url": "assets/js/88.c82907a8.js",
    "revision": "733048c05153a86cc6ec99d82ee16669"
  },
  {
    "url": "assets/js/89.507388dc.js",
    "revision": "0e18b4a99663a2e85bc79d9e15d80ea1"
  },
  {
    "url": "assets/js/9.47b292f2.js",
    "revision": "7ddda13c2662a55db5cee3b87fa99415"
  },
  {
    "url": "assets/js/90.6e0cb5d2.js",
    "revision": "7ebf785c5b8bec2e108fed63b58d098f"
  },
  {
    "url": "assets/js/91.efc1d4d3.js",
    "revision": "9fdd21e50a2ee01be50cf36b18b32e9f"
  },
  {
    "url": "assets/js/92.e0d0f62e.js",
    "revision": "7d843189f713b2ac370d15bf66269f17"
  },
  {
    "url": "assets/js/93.dde27b50.js",
    "revision": "8dafd1c6683b25c59fa87ce1b5ba2095"
  },
  {
    "url": "assets/js/94.206f5812.js",
    "revision": "fa77477922f4b4b8b1043e8f809ea585"
  },
  {
    "url": "assets/js/95.488db6fb.js",
    "revision": "d6a8306480f978e91f9295ffcdc308aa"
  },
  {
    "url": "assets/js/96.fcab667e.js",
    "revision": "70dbff2d6ef9c25b2bb521a7660cde2d"
  },
  {
    "url": "assets/js/97.16db3bac.js",
    "revision": "4f32e52b4f98ee15994f891a82c2983d"
  },
  {
    "url": "assets/js/98.a8c106b1.js",
    "revision": "282a62e5f4a27a54097536d60407a3ab"
  },
  {
    "url": "assets/js/99.1b031e49.js",
    "revision": "f7bf7c108e583df8b3a031d45672ddda"
  },
  {
    "url": "assets/js/app.b16457f1.js",
    "revision": "2326ec9491b460c0e34461e6989a8852"
  },
  {
    "url": "categories/index.html",
    "revision": "f0d666a5794cb8d181eabcee5d81715a"
  },
  {
    "url": "cs/algorithm/analysis.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/algorithm/data-structure.html",
    "revision": "da889590d4cf70d6eb18272e642e859a"
  },
  {
    "url": "cs/algorithm/find.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/algorithm/index.html",
    "revision": "63a6685d49e128ee6c8b8ecd746dcaec"
  },
  {
    "url": "cs/algorithm/other.html",
    "revision": "910a0cbbf90a5e6cccd6e65a67bf5f3c"
  },
  {
    "url": "cs/algorithm/sort.html",
    "revision": "44e42619055bd2f1852f380761f6f4a9"
  },
  {
    "url": "cs/algorithm/stack-queue.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/algorithm/union-set.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/archit/cache.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/archit/cluster.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/archit/distributed.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/archit/index.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/archit/msg-queue.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/archit/sys-design.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/compile/index.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/cpp/associative-container.html",
    "revision": "9422660218a730661c47b4770864b57e"
  },
  {
    "url": "cs/cpp/class.html",
    "revision": "2031e5178367ff53eb3cc52886f974d0"
  },
  {
    "url": "cs/cpp/copy-control.html",
    "revision": "99872000feadca9ae42b6f7eeb28e4cb"
  },
  {
    "url": "cs/cpp/dynamic-memory.html",
    "revision": "807ca7e91c404307d19ef6223ced41cd"
  },
  {
    "url": "cs/cpp/expr.html",
    "revision": "835736d188509cb72c713d5e12f40f6d"
  },
  {
    "url": "cs/cpp/function.html",
    "revision": "0f584e38b2942bdfa866130f02c53c56"
  },
  {
    "url": "cs/cpp/index.html",
    "revision": "63a6685d49e128ee6c8b8ecd746dcaec"
  },
  {
    "url": "cs/cpp/IO.html",
    "revision": "8301f0dd47470892bc68859975b50021"
  },
  {
    "url": "cs/cpp/sentence.html",
    "revision": "535432ac2aa9273c44932cfbb9135115"
  },
  {
    "url": "cs/cpp/sequential-container.html",
    "revision": "a6e93733d1138030d92de82967c001e7"
  },
  {
    "url": "cs/cpp/var-len-sequence.html",
    "revision": "62911252f35c14e0b16dcb1526332004"
  },
  {
    "url": "cs/cpp/var-types.html",
    "revision": "b94fe99fc6e255a04fe3d403fb8096af"
  },
  {
    "url": "cs/database/index.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/database/leetcode-database.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/database/MySQL.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/database/principle.html",
    "revision": "4db96e49bafb83fc8ed74d70baafd465"
  },
  {
    "url": "cs/database/Redis.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/database/SQL.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/design/abserver.html",
    "revision": "62a73149b9ff264f38343a74a3975533"
  },
  {
    "url": "cs/design/abstract-factory.html",
    "revision": "2b7490cf55412860f3463c6e0d46ad59"
  },
  {
    "url": "cs/design/adapter.html",
    "revision": "42db8ac7ecaeaec538fc12e6e5f8f632"
  },
  {
    "url": "cs/design/agent.html",
    "revision": "1603176fa2df948eb8a331629e286d57"
  },
  {
    "url": "cs/design/appearance.html",
    "revision": "9fd13753527f46ff32ee966322867b9b"
  },
  {
    "url": "cs/design/bridging.html",
    "revision": "1eb3c8203a50310d41b8efb7d267d03c"
  },
  {
    "url": "cs/design/combination.html",
    "revision": "32076ae0e28777b89485b447a1b704a5"
  },
  {
    "url": "cs/design/command.html",
    "revision": "d991d9a31f8f2f1961fd89929b32bd53"
  },
  {
    "url": "cs/design/decoration.html",
    "revision": "832ba52e5ed9b5ad518e8690b4d91a30"
  },
  {
    "url": "cs/design/design-pattern.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/design/duty-chain.html",
    "revision": "56492cb63537869e1abe423c73448964"
  },
  {
    "url": "cs/design/factory-method.html",
    "revision": "1a8c794390afe6e2aa52bab0d6641d11"
  },
  {
    "url": "cs/design/flyweight.html",
    "revision": "b887a4df4cebec5a71fee9848dd0761b"
  },
  {
    "url": "cs/design/generator.html",
    "revision": "696efb108b34a938f42c93c2d92dd95d"
  },
  {
    "url": "cs/design/index.html",
    "revision": "d65654c141c0674c540fc02982c715e8"
  },
  {
    "url": "cs/design/interpreter.html",
    "revision": "243ec00e50006881c62ca9faa0ea9008"
  },
  {
    "url": "cs/design/iterator.html",
    "revision": "92de181f286d1ce12d2f5ce75ddced2e"
  },
  {
    "url": "cs/design/mediator.html",
    "revision": "b8644561c5e511b2a1f2395fd72c9ae2"
  },
  {
    "url": "cs/design/memo.html",
    "revision": "b82d85751b75ce2d1eebf7bee5a770df"
  },
  {
    "url": "cs/design/null-object.html",
    "revision": "c81134060c8d21febc3a60da00314675"
  },
  {
    "url": "cs/design/oriente-object.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/design/prototype.html",
    "revision": "e4610fbc88876f6d27a914d2241b74ae"
  },
  {
    "url": "cs/design/simple-factory.html",
    "revision": "b8bf9f7e51d4f126c403a775728d4c95"
  },
  {
    "url": "cs/design/singleton.html",
    "revision": "f377dd822c351f7a56a5ccf58f83ea71"
  },
  {
    "url": "cs/design/state.html",
    "revision": "e9601c4cb7ed2cb956995f7962c5e73a"
  },
  {
    "url": "cs/design/strategy.html",
    "revision": "f3693b27c466312f0aec6d96c3512909"
  },
  {
    "url": "cs/design/temp-method.html",
    "revision": "481c20ccd9ed5f526ad5e346fecad566"
  },
  {
    "url": "cs/design/visitor.html",
    "revision": "b38e2f86df7e203202fe584098571d2a"
  },
  {
    "url": "cs/framework/front-end.html",
    "revision": "c74576b9e2f2491298ae6c0cd4b75f7d"
  },
  {
    "url": "cs/framework/index.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/framework/vue-a.html",
    "revision": "a5516db83b60a03eb8f9f4d0666f3ae8"
  },
  {
    "url": "cs/framework/vue-b.html",
    "revision": "9f58138d5bcc5a96c6b77069cb2b2066"
  },
  {
    "url": "cs/framework/vue-c.html",
    "revision": "4c03574edae923d972593a4a782e9fda"
  },
  {
    "url": "cs/framework/vue3-reactivity.html",
    "revision": "67ba0cacd94ed5b4e366d8bdea7fa315"
  },
  {
    "url": "cs/framework/webpack.html",
    "revision": "d1d73c0ad63db6e8f52b9f8f883339d7"
  },
  {
    "url": "cs/index.html",
    "revision": "0a19ef791be2bbcb793d7b72f9ee628e"
  },
  {
    "url": "cs/java/basic.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/java/concurrenry.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/java/container.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/java/index.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/java/JavaIO.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/java/virtual-marchine.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/Lang/CSS.html",
    "revision": "f0612ec9ff1fe86a0fc59d791e95b180"
  },
  {
    "url": "cs/Lang/English.html",
    "revision": "b6a2b12c9fedb6dc963735a3017e373e"
  },
  {
    "url": "cs/Lang/ES6.html",
    "revision": "716ff212b62046c746cc4ca09cdcf66d"
  },
  {
    "url": "cs/Lang/html.html",
    "revision": "f3694b34a6f0604bd2909853b59c48dd"
  },
  {
    "url": "cs/Lang/index.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/Lang/JavaScript.html",
    "revision": "9d2515c5bba53001c587dc14d8d97eee"
  },
  {
    "url": "cs/Lang/JSTricks.html",
    "revision": "c266de89a6338b3064009f44ce0aafaf"
  },
  {
    "url": "cs/Lang/python.html",
    "revision": "62912f55b6482ff8c9c5e461cf5b0231"
  },
  {
    "url": "cs/Lang/regex.html",
    "revision": "b4ceaf5f9e4a8c4f8d7f2a03153f9bc2"
  },
  {
    "url": "cs/Lang/use_css.html",
    "revision": "629a9f658bbf8c6429cd0631625422df"
  },
  {
    "url": "cs/leetcode/array.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/leetcode/bin-search.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/leetcode/bit-operator.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/leetcode/bound-check.html",
    "revision": "7aad4ecb45783bf6a430bf3955173dce"
  },
  {
    "url": "cs/leetcode/divide-conquer.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/leetcode/double-pointer.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/leetcode/dynamic.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/leetcode/find.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/leetcode/graph.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/leetcode/greedy.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/leetcode/hash-table.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/leetcode/index.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/leetcode/lcd-3.html",
    "revision": "42c1e164d01378ab97d736adb6359e45"
  },
  {
    "url": "cs/leetcode/list.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/leetcode/math.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/leetcode/ncode4.html",
    "revision": "464c93cd4d5016d6eb1c60f5f604aef3"
  },
  {
    "url": "cs/leetcode/ncode5.html",
    "revision": "404c68f7511607b8cb40313a840fa9ed"
  },
  {
    "url": "cs/leetcode/p0.html",
    "revision": "0f6a1d4a1e621b425807f1a8a087bd80"
  },
  {
    "url": "cs/leetcode/p1.html",
    "revision": "c248fb53520b956aa312ac6579f12aba"
  },
  {
    "url": "cs/leetcode/p10.html",
    "revision": "49c20ef142b42d1d855ae7dfdafd5b1e"
  },
  {
    "url": "cs/leetcode/p11.html",
    "revision": "d61fbd66128fe27e58d4ec687002246d"
  },
  {
    "url": "cs/leetcode/p12.html",
    "revision": "02a8f1c29ee433ddd542a376a28b8c28"
  },
  {
    "url": "cs/leetcode/p13.html",
    "revision": "79fdd9077683e0dd5b2c2950755b3de1"
  },
  {
    "url": "cs/leetcode/p14.html",
    "revision": "0790aaf485d63fa47fbeeb8edd28a4eb"
  },
  {
    "url": "cs/leetcode/p15.html",
    "revision": "c66ace5d9098f611185b4f541f069f5d"
  },
  {
    "url": "cs/leetcode/p16.html",
    "revision": "6d97ee0e1f6a66544d809436c33ab43c"
  },
  {
    "url": "cs/leetcode/p17.html",
    "revision": "8b1bac35df4b9708470b26a6abd387cb"
  },
  {
    "url": "cs/leetcode/p18.html",
    "revision": "b313e983b0cc0b5eb7c803d45e141466"
  },
  {
    "url": "cs/leetcode/p19.html",
    "revision": "0082c9bdf9089c4206d58cf442b9cefc"
  },
  {
    "url": "cs/leetcode/p2.html",
    "revision": "93ed115e368894a45fc3b173fdd05e94"
  },
  {
    "url": "cs/leetcode/p20.html",
    "revision": "e97715f2e5e7f10194974100595e549b"
  },
  {
    "url": "cs/leetcode/p21.html",
    "revision": "c994aa297e266c5c5e2852c837bfc3c8"
  },
  {
    "url": "cs/leetcode/p22.html",
    "revision": "f953b267143665ddd69edc319daa2f9b"
  },
  {
    "url": "cs/leetcode/p23.html",
    "revision": "30cdb05f66eb39bb5468fafe4a6da62d"
  },
  {
    "url": "cs/leetcode/p24.html",
    "revision": "39d9dda18db8059051dfb8144be16a3f"
  },
  {
    "url": "cs/leetcode/p25.html",
    "revision": "5a8df13cec85159d7f9bc103a5bb26db"
  },
  {
    "url": "cs/leetcode/p26.html",
    "revision": "803bc4eeb1fea62ec0281c3b4703df26"
  },
  {
    "url": "cs/leetcode/p27.html",
    "revision": "1194afd2e9300c3725cf7dd1dc439d78"
  },
  {
    "url": "cs/leetcode/p28.html",
    "revision": "8814a1acfa92d51bae5171c9395c0aac"
  },
  {
    "url": "cs/leetcode/p29.html",
    "revision": "55bbd6d468bfa20b11b6fa061c7489a7"
  },
  {
    "url": "cs/leetcode/p3.html",
    "revision": "9fdb22883cd8da95782a86ed9d09e6b3"
  },
  {
    "url": "cs/leetcode/p30.html",
    "revision": "71ccde7e000ac5e88b13cf13499fc865"
  },
  {
    "url": "cs/leetcode/p31.html",
    "revision": "d83b37cd317bb348ec70a9b885ecf045"
  },
  {
    "url": "cs/leetcode/p32.html",
    "revision": "27a4cbf3401167ea86f9dbff841a5d89"
  },
  {
    "url": "cs/leetcode/p33.html",
    "revision": "998a425d2d06bdc306c04573c6154110"
  },
  {
    "url": "cs/leetcode/p34.html",
    "revision": "0b52d8dcd54ef9f0a7272c571f112320"
  },
  {
    "url": "cs/leetcode/p35.html",
    "revision": "3d320297edfa0e32ce02499007fa9f16"
  },
  {
    "url": "cs/leetcode/p36.html",
    "revision": "9861ba8476fe025f18d1458a0a09f5d5"
  },
  {
    "url": "cs/leetcode/p37.html",
    "revision": "cf2597cecbeea47e399cf039fee3806b"
  },
  {
    "url": "cs/leetcode/p38.html",
    "revision": "661357416de75ca6a83ce1be02fba702"
  },
  {
    "url": "cs/leetcode/p39.html",
    "revision": "41cccb60f2115651a97dfec7f754a179"
  },
  {
    "url": "cs/leetcode/p4.html",
    "revision": "65328affbb75844cbc353ed7936f8100"
  },
  {
    "url": "cs/leetcode/p40.html",
    "revision": "6736f5376e969764ef71a5f12cb480e0"
  },
  {
    "url": "cs/leetcode/p41.html",
    "revision": "8f82d5464b68b1449afcb24b68dc31b3"
  },
  {
    "url": "cs/leetcode/p42.html",
    "revision": "1eec800e80ccb845df2c8beb80bf9300"
  },
  {
    "url": "cs/leetcode/p43.html",
    "revision": "71dd90186897813a3e3238fb73843a49"
  },
  {
    "url": "cs/leetcode/p44.html",
    "revision": "3ae0f6ee2bf0c93fb1f974bb3a8f5424"
  },
  {
    "url": "cs/leetcode/p45.html",
    "revision": "c1a12f1a86726db99738db4dd7ce993b"
  },
  {
    "url": "cs/leetcode/p46.html",
    "revision": "b6fca214cae6d84a25f10ee2dacaf3f4"
  },
  {
    "url": "cs/leetcode/p47.html",
    "revision": "b70fddb9f17ec2a26976904db0c5fbf7"
  },
  {
    "url": "cs/leetcode/p48.html",
    "revision": "3f55ff48d1fe502bcd70d81fc858e8a8"
  },
  {
    "url": "cs/leetcode/p49.html",
    "revision": "e82b7fbe590feb75c1bf47fc8b2affb7"
  },
  {
    "url": "cs/leetcode/p5.html",
    "revision": "90c579cc905bbeab5edd79a1f4db17f4"
  },
  {
    "url": "cs/leetcode/p50.html",
    "revision": "d168848d015a2b69a513f1dab81e2b17"
  },
  {
    "url": "cs/leetcode/p51.html",
    "revision": "217928b6301eed3bae5a3e24594f5603"
  },
  {
    "url": "cs/leetcode/p52.html",
    "revision": "164999981a86d52a1aefb155b5f6afd3"
  },
  {
    "url": "cs/leetcode/p53.html",
    "revision": "7e48f878b0042e501f2d06331476fc19"
  },
  {
    "url": "cs/leetcode/p54.html",
    "revision": "61c52b63e51691563f80dc37b9dac54f"
  },
  {
    "url": "cs/leetcode/p55.html",
    "revision": "6edf91b37c81a2afed076b2b61bc4ad2"
  },
  {
    "url": "cs/leetcode/p56.html",
    "revision": "5785e0e2e804a797163901d8f40c19b8"
  },
  {
    "url": "cs/leetcode/p57.html",
    "revision": "4d908f022226e7be29d8739412b0434d"
  },
  {
    "url": "cs/leetcode/p58.html",
    "revision": "4070d8aa71ce2d56746723e2965568b8"
  },
  {
    "url": "cs/leetcode/p59.html",
    "revision": "5855ce27d0c795cc942037b33d1f0c2b"
  },
  {
    "url": "cs/leetcode/p6.html",
    "revision": "d27b73f341c7a69d0abd0666205aae9e"
  },
  {
    "url": "cs/leetcode/p60.html",
    "revision": "074bee6266f8532487237d98e7ae01e5"
  },
  {
    "url": "cs/leetcode/p61.html",
    "revision": "5e255be5f000816f1d691a81d6d123ba"
  },
  {
    "url": "cs/leetcode/p62.html",
    "revision": "106fbdeff1017e790661a37a0806df88"
  },
  {
    "url": "cs/leetcode/p63.html",
    "revision": "52a6264c40ddb724d320b40be8f10172"
  },
  {
    "url": "cs/leetcode/p64.html",
    "revision": "23e2dd49b01d60156001d2f645c5de45"
  },
  {
    "url": "cs/leetcode/p65.html",
    "revision": "8d17f5f0f6d64d8248ed1293b65ccecf"
  },
  {
    "url": "cs/leetcode/p66.html",
    "revision": "6db3f96353bae5cb05a6e4ed4c0eabf0"
  },
  {
    "url": "cs/leetcode/p67.html",
    "revision": "683a9e0e21f87eb96466e39fbe16e17b"
  },
  {
    "url": "cs/leetcode/p68.html",
    "revision": "c05ff5a5440c5cb7232b4ce251b24d30"
  },
  {
    "url": "cs/leetcode/p69.html",
    "revision": "67fcac824547882781427903b3f576e8"
  },
  {
    "url": "cs/leetcode/p7.html",
    "revision": "62608bf1707aa90b5fa560958b60e7b1"
  },
  {
    "url": "cs/leetcode/p70.html",
    "revision": "2493bcb28c6bffd9cdab6bb5d2c7b8d9"
  },
  {
    "url": "cs/leetcode/p71.html",
    "revision": "8b8934316bd6f9be217db56bdb54dc21"
  },
  {
    "url": "cs/leetcode/p72.html",
    "revision": "61bf7144f5f2ee4db6f8ca9a4ebc3cad"
  },
  {
    "url": "cs/leetcode/p73.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/leetcode/p74.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/leetcode/p75.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/leetcode/p76.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/leetcode/p77.html",
    "revision": "9861ba8476fe025f18d1458a0a09f5d5"
  },
  {
    "url": "cs/leetcode/p78.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/leetcode/p79.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/leetcode/p8.html",
    "revision": "c86183a2024ac8077405df2038bb12cd"
  },
  {
    "url": "cs/leetcode/p80.html",
    "revision": "1c63f1e325b024817f4dfe380f752cd1"
  },
  {
    "url": "cs/leetcode/p81.html",
    "revision": "63a6685d49e128ee6c8b8ecd746dcaec"
  },
  {
    "url": "cs/leetcode/p82.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/leetcode/p9.html",
    "revision": "e543dcca0c8ee7b30faf4a1f13d9c0b1"
  },
  {
    "url": "cs/leetcode/sort.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/leetcode/stack-queue.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/leetcode/string.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/leetcode/tree.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/linux/common-command.html",
    "revision": "f787276c2e2ac74628ef23709aca60ec"
  },
  {
    "url": "cs/linux/index.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/linux/Linux.html",
    "revision": "0122523b49724eb01c0e23fea2e396a7"
  },
  {
    "url": "cs/linux/process.html",
    "revision": "a7985de275e911482c0cb3290bce9640"
  },
  {
    "url": "cs/network/application.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/network/conclude.html",
    "revision": "d55ce49c71abf0ef083885081a1258bf"
  },
  {
    "url": "cs/network/HTTP.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/network/index.html",
    "revision": "63a6685d49e128ee6c8b8ecd746dcaec"
  },
  {
    "url": "cs/network/link.html",
    "revision": "ad8e1b1608ebbfc63e31f511e3f7c609"
  },
  {
    "url": "cs/network/network.html",
    "revision": "447047225235bc31a81d31371796bf98"
  },
  {
    "url": "cs/network/physical.html",
    "revision": "96d358f25759839ee5386fb180f2a086"
  },
  {
    "url": "cs/network/Socket.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/network/summary.html",
    "revision": "5b80c3555f0ceceb6fd4fe01dddcc0f2"
  },
  {
    "url": "cs/network/transport.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/Osystem/concept.html",
    "revision": "0a0b3f29acd911c927d11d0e38faab66"
  },
  {
    "url": "cs/Osystem/conclude.html",
    "revision": "845f661d22427ede2a74ad3a39744502"
  },
  {
    "url": "cs/Osystem/deadlock.html",
    "revision": "cba9daf33501f178270709a6a75e6fd4"
  },
  {
    "url": "cs/Osystem/device-mgmt.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/Osystem/index.html",
    "revision": "63a6685d49e128ee6c8b8ecd746dcaec"
  },
  {
    "url": "cs/Osystem/memory-mgmt.html",
    "revision": "44dfe808ebe87cd1ddb7fe4af6a858a1"
  },
  {
    "url": "cs/Osystem/process-mgmt.html",
    "revision": "86e0fbb067a885e88585b2d2e324ba89"
  },
  {
    "url": "cs/tools/build-tools.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/tools/code-readability.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/tools/code-style.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/tools/Docker.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/tools/Git.html",
    "revision": "5d59e875b61a1413f001575883818204"
  },
  {
    "url": "cs/tools/index.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/tools/regular-expr.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/web/attack-tech.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "cs/web/browser.html",
    "revision": "8f360264cd9c60e333872f55f1885426"
  },
  {
    "url": "cs/web/guide.html",
    "revision": "f0612ec9ff1fe86a0fc59d791e95b180"
  },
  {
    "url": "cs/web/index.html",
    "revision": "9dd4807d8a9929e029f4f4188843825c"
  },
  {
    "url": "cs/web/performance.html",
    "revision": "415679e999f838b539569edffab93eaa"
  },
  {
    "url": "cs/web/resource.html",
    "revision": "2c2fdf5efeeff9dc85309ce8618539c6"
  },
  {
    "url": "cs/web/web.html",
    "revision": "b4ce9f091850448170395ec2e536f543"
  },
  {
    "url": "daily-life/phone-lost.html",
    "revision": "6ddb7c139e03660138684b86d1b5679f"
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
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "language/english/adjective.html",
    "revision": "5485500024a5c79a640719785d6ae481"
  },
  {
    "url": "language/english/adverb.html",
    "revision": "76a97747103b1ecc3eccf76f2e09ac19"
  },
  {
    "url": "language/english/determiner.html",
    "revision": "64cd377138bef6f8a9cac0ea9b5cf4b1"
  },
  {
    "url": "language/english/differ.html",
    "revision": "bf7b450a0b143fe6e7a6c11f1ae3e236"
  },
  {
    "url": "language/english/index.html",
    "revision": "b6a2b12c9fedb6dc963735a3017e373e"
  },
  {
    "url": "language/english/modal.html",
    "revision": "2aa0beb636df5aa3f89de24152ed358b"
  },
  {
    "url": "language/english/mood.html",
    "revision": "d892bd6bab0e8f352cf2cac6bbbfdc34"
  },
  {
    "url": "language/english/non-predicate.html",
    "revision": "16d91ff173ad14b7eb91afe7b149c5b7"
  },
  {
    "url": "language/english/nouns.html",
    "revision": "de75dd8da9e9b44f66d18521e21dc069"
  },
  {
    "url": "language/english/phonetic.html",
    "revision": "8d2757fd721a10db3f351d993db5de36"
  },
  {
    "url": "language/english/preposition.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "language/english/pronoun.html",
    "revision": "4ad341e460c8f4ef724c5a7187386d6b"
  },
  {
    "url": "language/english/sentence.html",
    "revision": "e320adba32c460ab201e94253b259e01"
  },
  {
    "url": "language/english/tense.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "language/english/verb.html",
    "revision": "2895f5ec1eadb751cf256979a08407df"
  },
  {
    "url": "language/english/word5000.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "language/index.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "tag/index.html",
    "revision": "58dc2da4858236ed6f48c713985bcfd4"
  },
  {
    "url": "timeline/index.html",
    "revision": "2811de997fd431100925816152090b65"
  },
  {
    "url": "tools/chatgpt.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "tools/gpost.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "tools/hash.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "tools/index.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
  },
  {
    "url": "tools/test1234567890.html",
    "revision": "6ca8d73d2ea193569ae0d457e16fa1b5"
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
