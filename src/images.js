import C from "./constants";
const images = [
  {
    src: "https://fastly.picsum.photos/id/637/1200/600.jpg?hmac=iGqNGLJ-IxB82ZpQQ7p6xDDELvgB5vb2rMfu1WZznIU",
    width: 6,
    height: 3,
    pos: { x: -6, y: 2.5, z: -C.GALLERY.DEPTH / 2 + 0.1 },
    rotationY: 0,
    framePos: { x: -6, y: 2.5, z: -C.GALLERY.DEPTH / 2 + 0.05 },
  },
  {
    src: "https://fastly.picsum.photos/id/110/1600/1200.jpg?hmac=H52onTYJcETlHNE3XnLvUkOGa7kX0GCQc9wMex1Sn84",
    width: 4,
    height: 3,
    pos: {
      x: 0.5,
      y: 2.5,
      z: -C.GALLERY.DEPTH / 2 + 0.1,
    },

    rotationY: 0,
    framePos: {
      x: 0.5,
      y: 2.5,
      z: -C.GALLERY.DEPTH / 2 + 0.05,
    },
  },
  {
    src: "https://fastly.picsum.photos/id/548/536/354.jpg?hmac=qL2PIA_0CTKlOdmLWdeM-fnQ7RDbSEMTknPlBdUtW0U",
    width: 4,
    height: 3,
    pos: { x: 6, y: 2.5, z: -C.GALLERY.DEPTH / 2 + 0.1 },
    rotationY: 0,
    framePos: { x: 6, y: 2.5, z: -C.GALLERY.DEPTH / 2 + 0.05 },
  },
  {
    src: "https://fastly.picsum.photos/id/687/1200/800.jpg?hmac=Vto-68OrH7qpqCQGcTqqIA_pjDAMnu5nETDF3ivic-s",
    width: 6,
    height: 3,
    pos: { x: -C.GALLERY.WIDTH / 2 + 0.1, y: 2.5, z: -10 },
    rotationY: Math.PI / 2,
    framePos: { x: -C.GALLERY.WIDTH / 2 + 0.05, y: 2.5, z: -10 },
  },
  {
    src: "https://fastly.picsum.photos/id/155/800/600.jpg?hmac=tLO8ANtKQFijBtfOCI3hvQDQSuOXePfFX3ULb7NFg0A",
    width: 4,
    height: 3,
    pos: { x: -C.GALLERY.WIDTH / 2 + 0.1, y: 2.5, z: 0 },
    rotationY: Math.PI / 2,
    framePos: { x: -C.GALLERY.WIDTH / 2 + 0.05, y: 2.5, z: 0 },
  },
  {
    src: "https://fastly.picsum.photos/id/168/1200/800.jpg?hmac=cni43zBas2Ebdrry5rh98f3CpJAnuptB1UURGvNRU6Q",
    width: 4,
    height: 3,
    pos: { x: -C.GALLERY.WIDTH / 2 + 0.1, y: 2.5, z: 10 },
    rotationY: Math.PI / 2,
    framePos: { x: -C.GALLERY.WIDTH / 2 + 0.05, y: 2.5, z: 10 },
  },
  {
    src: "https://fastly.picsum.photos/id/399/1200/900.jpg?hmac=iAJ0hFXi9nXZ3wJv7zsTFLUdwW0i4gW9p_-vYN0M3aU",
    width: 4,
    height: 3,
    pos: { x: C.GALLERY.WIDTH / 2 - 0.1, y: 2.5, z: -10 },
    rotationY: -Math.PI / 2,
    framePos: { x: C.GALLERY.WIDTH / 2 - 0.05, y: 2.5, z: -10 },
  },
  {
    src: "https://fastly.picsum.photos/id/908/800/600.jpg?hmac=uYWc8QleZdW5f4Q3jNSdpMG6_YuCJEKjfRi_N02SygQ",
    width: 4,
    height: 3,
    pos: { x: C.GALLERY.WIDTH / 2 - 0.1, y: 2.5, z: 0 },
    rotationY: -Math.PI / 2,
    framePos: { x: C.GALLERY.WIDTH / 2 - 0.05, y: 2.5, z: 0 },
  },
  {
    src: "https://fastly.picsum.photos/id/120/1200/800.jpg?hmac=xJvmnYbGPusGauQ1wHAeq-rmF_c-jEUmraVSRH4h16s",
    width: 4,
    height: 3,
    pos: { x: C.GALLERY.WIDTH / 2 - 0.1, y: 2.5, z: 10 },
    rotationY: -Math.PI / 2,
    framePos: { x: C.GALLERY.WIDTH / 2 - 0.05, y: 2.5, z: 10 },
  },
];

export default images;
