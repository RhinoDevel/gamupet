
// (c) Marcel Timm, RhinoDevel, 2021

/** To be run during page load to augment global gamupet object with new
 *  property called c, which is an object to hold constants.
 */
(function() // IIFE
{
    'use strict';

    var o = {};

    o.freq = 60.0; // Hz

    o.fullscreen = true;

    o.dim = {};

    o.dim.screen = { width: 320, height: 200 }; // Commodore screen dimensions.

    o.dim.char = { width: 8, height: 8 }; // Commodore character dimensions.

    o.pix = {};
    o.pix.on = { r: 0, g: 255, b: 0, a: 255 }; // Pixel values for ON.
    o.pix.off = { r: 0, g: 0, b: 0, a: 255 }; // Pixel values for OFF. 

    o.chars = [ // TODO: Replace this random data with actual character set!
        0xbe, 0x49, 0x92, 0x86, 0x73, 0x5a, 0x38, 0xd9, 0xdd, 0x2c, 0x8b, 0x33,
        0xc6, 0x87, 0x94, 0xe1, 0xed, 0xcb, 0xf0, 0xe8, 0x22, 0x26, 0x93, 0xc4,
        0xc3, 0x3e, 0xf6, 0xd5, 0xf6, 0x21, 0xfa, 0xea, 0xc6, 0x9e, 0xe8, 0xd1,
        0x48, 0xdb, 0xb8, 0x88, 0xa5, 0x6a, 0x60, 0x04, 0xf5, 0x35, 0x36, 0x5c,
        0x2a, 0x02, 0x06, 0xde, 0x40, 0x72, 0x0b, 0xe7, 0xc7, 0xe5, 0xa0, 0xbb,
        0xa4, 0xb6, 0x01, 0xa1, 0x97, 0x2a, 0x59, 0x47, 0x38, 0xe3, 0x23, 0xd5,
        0x0d, 0x96, 0xac, 0x05, 0xc9, 0x14, 0x36, 0x65, 0x4f, 0xe0, 0x67, 0x07,
        0x70, 0x0b, 0xfc, 0x70, 0x90, 0xb8, 0x5f, 0x00, 0x7e, 0x3b, 0xd9, 0x4d,
        0x1e, 0x8a, 0xfc, 0xb9, 0x90, 0x65, 0xf7, 0x5b, 0x6d, 0x62, 0x84, 0x68,
        0x4d, 0xa5, 0x6b, 0x13, 0x10, 0x44, 0xc1, 0x88, 0x1c, 0x39, 0xc8, 0xb4,
        0x8d, 0x4d, 0x21, 0x22, 0xe7, 0xd1, 0x0e, 0x9c, 0xb7, 0xee, 0x30, 0x54,
        0xd0, 0x40, 0x4d, 0xc7, 0x8f, 0xf9, 0x05, 0xe7, 0x05, 0xf8, 0xd8, 0x16,
        0x96, 0x65, 0x0b, 0x56, 0x49, 0x93, 0xaf, 0x3a, 0x36, 0x27, 0x3c, 0x6f,
        0x8f, 0x39, 0x38, 0x13, 0xfe, 0x51, 0x20, 0x0a, 0x35, 0x52, 0xf6, 0x73,
        0xfa, 0x6e, 0x66, 0xd5, 0x4c, 0x94, 0x70, 0xde, 0x55, 0x08, 0x83, 0xa1,
        0xff, 0xbc, 0x75, 0x1c, 0x4d, 0x34, 0xd1, 0xeb, 0x6d, 0x80, 0x0e, 0xaa,
        0x07, 0xbf, 0x10, 0x9e, 0x0c, 0xb5, 0x72, 0x3f, 0xa0, 0xf8, 0x1c, 0x04,
        0xe3, 0x58, 0x5b, 0xd3, 0x45, 0xdf, 0xb6, 0xb3, 0xcd, 0x41, 0x27, 0x21,
        0x2a, 0x36, 0x8b, 0xfb, 0xdb, 0x04, 0x69, 0xd3, 0x91, 0x55, 0x1b, 0xe2,
        0xd2, 0x98, 0x6b, 0x8f, 0xb7, 0xb8, 0x32, 0x5b, 0x42, 0x75, 0x0d, 0xc2,
        0xe0, 0x6f, 0x72, 0xea, 0xf9, 0xc1, 0x8b, 0xac, 0x61, 0xee, 0x63, 0x64,
        0x1d, 0x24, 0xf3, 0x58, 0xf8, 0x0b, 0x58, 0x90, 0xea, 0x6f, 0x5f, 0x61,
        0x71, 0x16, 0x33, 0x2a, 0x64, 0x9d, 0x28, 0x1f, 0xa4, 0xfe, 0x3f, 0x5b,
        0x4b, 0x52, 0xaa, 0x87, 0xd0, 0x25, 0x5a, 0xca, 0xcc, 0x6f, 0x22, 0x79,
        0x6b, 0xe2, 0x1b, 0xf0, 0x89, 0x14, 0xa4, 0x94, 0x97, 0x1b, 0xfe, 0x99,
        0xd5, 0x48, 0xe2, 0xf7, 0x03, 0xdb, 0xc6, 0xcc, 0x4b, 0x85, 0xf2, 0x0e,
        0x59, 0x26, 0xc9, 0x51, 0x4a, 0x7f, 0x2e, 0x57, 0xee, 0xaf, 0x62, 0x24,
        0x14, 0x3b, 0x46, 0x74, 0x57, 0x04, 0x58, 0x37, 0x81, 0xba, 0xc0, 0xe8,
        0x7f, 0x8c, 0x4d, 0xad, 0x1b, 0x94, 0x03, 0x39, 0x1c, 0xdf, 0xe8, 0x6b,
        0xe6, 0x67, 0xc9, 0xcc, 0x2c, 0xb5, 0xfd, 0x7b, 0xc7, 0x65, 0xdf, 0x96,
        0x22, 0xe9, 0x25, 0xeb, 0x45, 0xa3, 0x2a, 0x7b, 0xef, 0x20, 0x28, 0x31,
        0xc3, 0x56, 0x96, 0xea, 0xe5, 0xe0, 0x12, 0xa3, 0x55, 0x55, 0xd6, 0xcf,
        0xcb, 0x0a, 0xc5, 0x86, 0x86, 0x2f, 0x8a, 0x65, 0x3c, 0xf4, 0xec, 0xe7,
        0xfe, 0xc4, 0x7d, 0xbd, 0x37, 0xdc, 0xb9, 0x49, 0x35, 0x7e, 0xdb, 0xdb,
        0xbb, 0x03, 0x1f, 0x1a, 0x61, 0xdc, 0x65, 0x53, 0x23, 0xd1, 0x1a, 0x84,
        0x13, 0x0b, 0x94, 0xfa, 0x34, 0x3f, 0xb7, 0x73, 0x1e, 0x89, 0x54, 0x14,
        0x9e, 0xe0, 0x5a, 0x94, 0x42, 0x3e, 0x81, 0x5c, 0x52, 0xd9, 0x45, 0x1c,
        0xf4, 0xc2, 0x99, 0xf7, 0x68, 0xa4, 0xea, 0x8d, 0x7f, 0xbd, 0xc2, 0x71,
        0x81, 0xe6, 0x94, 0xbe, 0x24, 0xdc, 0x6b, 0x1a, 0x8c, 0xb9, 0xda, 0xab,
        0xea, 0x8e, 0x2e, 0x80, 0x84, 0x0b, 0x79, 0xd2, 0x2a, 0xe2, 0xed, 0x5d,
        0xdc, 0x2e, 0x22, 0x5b, 0x8d, 0x89, 0xe7, 0x3b, 0xa8, 0x64, 0x80, 0x3d,
        0x93, 0xe7, 0xa2, 0xba, 0xc0, 0xb1, 0x98, 0x2a, 0x1e, 0xee, 0xb0, 0x01,
        0x44, 0x3b, 0x79, 0xe2, 0xb4, 0x64, 0x1c, 0x78, 0x0d, 0xfc, 0xdf, 0x9b,
        0x74, 0xbd, 0x97, 0x31, 0xf6, 0x84, 0xa2, 0x25, 0xf9, 0x5d, 0x4b, 0x63,
        0x0a, 0xe1, 0x27, 0xf5, 0x0e, 0xfc, 0xe9, 0xf7, 0x06, 0x18, 0x3b, 0xf5,
        0xab, 0x8a, 0xd2, 0x02, 0x85, 0x8c, 0xf3, 0x53, 0xc2, 0x78, 0x1d, 0x93,
        0x93, 0x8e, 0x04, 0xd9, 0x9b, 0x0d, 0xa2, 0x60, 0xaf, 0x03, 0xa2, 0xea,
        0x2a, 0x5b, 0x29, 0xdc, 0x90, 0x29, 0x27, 0x2b, 0xd9, 0x4f, 0x50, 0x42,
        0xc7, 0x70, 0x00, 0xce, 0x42, 0x2e, 0x70, 0x3a, 0x44, 0xfe, 0x01, 0xd6,
        0xe1, 0xa4, 0x92, 0x7c, 0xff, 0x73, 0x31, 0x1d, 0xab, 0x15, 0x15, 0x13,
        0x75, 0x4c, 0xf1, 0xf4, 0x3b, 0xe0, 0x25, 0x0e, 0x64, 0xe8, 0xdd, 0x57,
        0x08, 0xbd, 0x79, 0xd5, 0x0b, 0xfc, 0x26, 0xc6, 0xd5, 0x53, 0xd4, 0xec,
        0xdd, 0x61, 0x4b, 0x95, 0x84, 0x3f, 0xf0, 0x84, 0xc7, 0x13, 0x9c, 0x19,
        0x42, 0xbe, 0x33, 0x7b, 0xff, 0xe8, 0x03, 0x45, 0xdc, 0x79, 0x76, 0x75,
        0xc7, 0x9f, 0x0d, 0xc1, 0x27, 0xfd, 0x81, 0x00, 0x82, 0x0b, 0x13, 0xcc,
        0x7a, 0x16, 0x64, 0x92, 0x20, 0x1c, 0xea, 0x83, 0x6a, 0xd3, 0x97, 0x7c,
        0x2c, 0x8a, 0x37, 0x1b, 0xf0, 0x78, 0xa0, 0xdf, 0x15, 0xef, 0xf9, 0x28,
        0xda, 0xe0, 0x05, 0xfe, 0x8f, 0xa9, 0x0d, 0x08, 0x94, 0xf3, 0x03, 0x22,
        0xa4, 0x84, 0x6b, 0x39, 0xe3, 0x72, 0xef, 0x82, 0x84, 0xce, 0xb1, 0x2a,
        0xe9, 0x93, 0xac, 0xda, 0x3a, 0xea, 0xc4, 0xdf, 0xbe, 0x3e, 0xfe, 0xa4,
        0xf9, 0x9b, 0x8c, 0xd4, 0x40, 0x78, 0x1f, 0xa3, 0xbe, 0xaa, 0xc9, 0xa1,
        0xfa, 0xfa, 0x58, 0x12, 0x29, 0x00, 0xda, 0xd2, 0xcb, 0xa9, 0xb0, 0x7f,
        0xef, 0x54, 0xc7, 0xab, 0x05, 0xa9, 0xe6, 0x3b, 0xca, 0x36, 0xae, 0xce,
        0xf2, 0xcb, 0x7c, 0xba, 0x37, 0x43, 0x23, 0x73, 0xb4, 0xb4, 0x27, 0x0d,
        0xc5, 0x6e, 0x92, 0xda, 0x2c, 0x36, 0x7c, 0xba, 0xa3, 0x27, 0x41, 0x88,
        0x3c, 0x12, 0x6e, 0x96, 0x0c, 0x9f, 0x0c, 0x9a, 0x32, 0xc3, 0xca, 0x67,
        0x6f, 0x7c, 0x18, 0xad, 0x25, 0xbb, 0x44, 0xc0, 0x01, 0xa9, 0x36, 0xfc,
        0xcf, 0x23, 0x29, 0x1a, 0x47, 0x87, 0xf1, 0xbb, 0xed, 0xc1, 0x76, 0x4d,
        0x3f, 0x9f, 0x17, 0xa8, 0x34, 0xd1, 0xa6, 0x4c, 0xfd, 0xfa, 0x1c, 0xcd,
        0x1f, 0x45, 0xa0, 0x88, 0x79, 0x80, 0xb0, 0xa2, 0xe9, 0x8d, 0x2f, 0x43,
        0x55, 0xb9, 0x3c, 0xa8, 0x5a, 0x98, 0x60, 0xba, 0x56, 0xb9, 0x37, 0x79,
        0xda, 0x55, 0x33, 0xe4, 0xc9, 0xfa, 0x4b, 0x3a, 0x95, 0x06, 0xf1, 0xc2,
        0x1a, 0x91, 0x93, 0x84, 0x62, 0xa1, 0x20, 0x53, 0x89, 0x59, 0x21, 0x8a,
        0x7c, 0x8a, 0xd3, 0x67, 0x41, 0x30, 0x4e, 0x57, 0x03, 0xc5, 0xf9, 0x64,
        0x63, 0x49, 0x8b, 0x66, 0xc0, 0xab, 0x26, 0x24, 0xb1, 0xc4, 0x41, 0xfa,
        0x67, 0xcb, 0x5d, 0x87, 0x51, 0xf4, 0x17, 0xcb, 0x38, 0x6d, 0x70, 0xb6,
        0xe3, 0x5c, 0x78, 0x15, 0xe8, 0x7b, 0x48, 0xf3, 0xbc, 0x44, 0x09, 0x5c,
        0x1e, 0xc4, 0xda, 0x7f, 0x59, 0xbc, 0x1a, 0x67, 0xe0, 0x93, 0x1e, 0x7e,
        0x15, 0xf4, 0xba, 0x92, 0x89, 0x93, 0x34, 0x73, 0x38, 0xbb, 0xf4, 0x14,
        0x28, 0xa9, 0x6b, 0xc9, 0xbe, 0xe0, 0x1f, 0x69, 0x33, 0xc1, 0x25, 0x3d,
        0xa0, 0xce, 0x8d, 0x11, 0xeb, 0x67, 0x35, 0x30, 0x34, 0x08, 0xc1, 0xba,
        0x3c, 0xa9, 0x40, 0x86, 0x2b, 0x4f, 0x1e, 0xa9, 0x3c, 0x4e, 0xc7, 0xfa,
        0x0f, 0x8c, 0x09, 0x00, 0xd0, 0x1e, 0xbe, 0x47, 0x34, 0xcc, 0xc5, 0x38,
        0xa9, 0xd1, 0xe9, 0xff, 0x80, 0x9a, 0x8a, 0xe7, 0x7e, 0x93, 0xfe, 0x29,
        0xd1, 0x1d, 0xe3, 0x29, 0xc4, 0x1c, 0x7d, 0x2f, 0x14, 0x43, 0xa1, 0x88,
        0x52, 0x41, 0x66, 0x04, 0x13, 0x6b, 0xcd, 0xaa, 0x74, 0x6c, 0xe3, 0x1a,
        0x61, 0x01, 0xa5, 0x06, 0x2e, 0x7a, 0xb3, 0xed, 0x23, 0x91, 0x94, 0x50,
        0x52, 0x98, 0x35, 0xbf, 0x71, 0x0e, 0x11, 0xee, 0x59, 0x77, 0x7f, 0x62,
        0x92, 0xd5, 0xf7, 0xb7, 0xfb, 0x85, 0x7f, 0xda, 0x2d, 0x3d, 0x4b, 0x9e,
        0x3d, 0x75, 0x7d, 0x7d, 0xe2, 0xa9, 0x00, 0x78, 0xf7, 0x54, 0xbc, 0x44,
        0xc3, 0xd8, 0xc0, 0x95, 0x7f, 0x6c, 0xd5, 0xd1, 0x17, 0x71, 0x93, 0xe8,
        0x2e, 0x05, 0x4f, 0xf0, 0x30, 0xed, 0x1d, 0x53, 0xc1, 0x68, 0x41, 0x42,
        0x6d, 0x84, 0x23, 0x95, 0x60, 0xc9, 0x8c, 0x75, 0xac, 0xc0, 0xb8, 0x7a,
        0xa7, 0xd8, 0x18, 0x1b, 0x77, 0x54, 0x18, 0x9f, 0xa5, 0x20, 0xb0, 0xa4,
        0x46, 0x37, 0x8e, 0xc2, 0x2f, 0x09, 0x7e, 0x58, 0x65, 0x85, 0x6c, 0x83,
        0x72, 0x3e, 0xa2, 0xab, 0x4e, 0x0c, 0xaa, 0x27, 0xb1, 0x81, 0xa2, 0x90,
        0x81, 0xbc, 0x94, 0x70, 0xcf, 0x67, 0x3f, 0xd2, 0x5a, 0x61, 0x2a, 0x3a,
        0x43, 0xae, 0x84, 0x52, 0xd5, 0x5d, 0xac, 0xdc, 0x32, 0xe2, 0xcd, 0x7f,
        0xb8, 0xbc, 0x2c, 0xb7, 0x45, 0xd3, 0x6a, 0x11, 0xea, 0xf5, 0x33, 0xdb,
        0x57, 0xc4, 0xe8, 0x1a, 0xa9, 0xa5, 0x79, 0x0b, 0x21, 0x7c, 0xea, 0x0e,
        0x44, 0xa4, 0xc4, 0xac, 0x9e, 0xa1, 0x85, 0xf5, 0xa8, 0x06, 0x20, 0xc6,
        0xbe, 0x68, 0x81, 0x4f, 0x2e, 0xe4, 0xef, 0x76, 0x49, 0xb3, 0xd1, 0xbb,
        0x37, 0xca, 0x54, 0x1f, 0x47, 0x3f, 0x97, 0x50, 0xa7, 0x7d, 0x11, 0xa4,
        0x1b, 0x03, 0x84, 0x47, 0xc4, 0xbf, 0x73, 0xc1, 0x37, 0x26, 0x77, 0xab,
        0x5d, 0xf7, 0x3e, 0xe3, 0x41, 0x8a, 0x8e, 0x41, 0x01, 0x5c, 0x9b, 0x0a,
        0xf3, 0xcd, 0xd6, 0x08, 0x1d, 0x59, 0xe6, 0x9f, 0x77, 0x81, 0xaa, 0xde,
        0x6c, 0x65, 0x8e, 0x2b, 0xfb, 0xa7, 0x75, 0x64, 0x05, 0x85, 0xe0, 0x0c,
        0x13, 0xfb, 0x14, 0x87, 0xdd, 0x1a, 0x87, 0xd4, 0x8d, 0xd8, 0x81, 0x73,
        0xff, 0x6a, 0x0e, 0xd6, 0xe7, 0xd0, 0x2a, 0xf5, 0x5b, 0x67, 0xfb, 0x6d,
        0xf2, 0x2f, 0x47, 0x9d, 0xae, 0xdf, 0x75, 0x0f, 0xf6, 0xa5, 0x4b, 0x0e,
        0xf6, 0x15, 0xc5, 0x4d, 0xfd, 0xd1, 0xcf, 0x51, 0xf4, 0x28, 0x1e, 0xbf,
        0x4c, 0x61, 0x54, 0xc6, 0x67, 0x0e, 0xd9, 0x31, 0x5a, 0xf7, 0x04, 0xd4,
        0x6c, 0x77, 0x83, 0xe1, 0x33, 0x82, 0xa2, 0xa6, 0x65, 0x2f, 0x31, 0x4e,
        0x2e, 0x05, 0x36, 0xae, 0xca, 0xb2, 0x43, 0xaa, 0x72, 0x08, 0x36, 0x51,
        0xfd, 0x48, 0xe2, 0xe1, 0x36, 0x91, 0xae, 0x07, 0x80, 0xb1, 0x9b, 0xa3,
        0x6f, 0x16, 0xb9, 0xc8, 0x94, 0x20, 0xa2, 0x83, 0xc2, 0x22, 0xa4, 0x08,
        0xb6, 0x2c, 0x69, 0x8c, 0x9f, 0x16, 0x52, 0x67, 0x59, 0x7c, 0xa6, 0x80,
        0x6e, 0x36, 0x74, 0x00, 0xba, 0xd2, 0xf3, 0xed, 0x99, 0xe8, 0xed, 0x27,
        0xe6, 0xca, 0x4e, 0xaa, 0xb0, 0xe4, 0x4b, 0x29, 0xa8, 0xa1, 0x92, 0xad,
        0x46, 0x64, 0xd0, 0x9d, 0x63, 0x1d, 0xa6, 0x6b, 0x9c, 0x8f, 0xa2, 0x5b,
        0x5c, 0xcf, 0xb5, 0x5b, 0x5c, 0xa6, 0x77, 0x91, 0xe8, 0x09, 0x61, 0x35,
        0x09, 0xc7, 0xc8, 0x01, 0xe1, 0x6c, 0x3e, 0x19, 0x13, 0xe1, 0x4d, 0x4f,
        0x1e, 0x8e, 0x2e, 0xb5, 0xfa, 0x16, 0xc6, 0xe6, 0x0a, 0x8f, 0x04, 0x30,
        0xd6, 0x11, 0x60, 0x4b, 0xc6, 0x14, 0xa0, 0x6e, 0x54, 0xb9, 0x61, 0x9c,
        0x8e, 0x75, 0x8b, 0x7e, 0x24, 0x20, 0x96, 0xe7, 0x7c, 0x91, 0x32, 0xb1,
        0xf5, 0x4c, 0x1f, 0xac, 0x62, 0x8a, 0x3f, 0xe5, 0xe9, 0xd6, 0x88, 0xce,
        0xe0, 0xe7, 0x5c, 0x12, 0xfb, 0x6c, 0xf3, 0xd3, 0x7d, 0xf7, 0x3e, 0xed,
        0x30, 0x52, 0xcf, 0x42, 0x68, 0xc4, 0x36, 0x96, 0x79, 0x4a, 0x8f, 0x1c,
        0x64, 0xee, 0x88, 0x23, 0x98, 0xe2, 0xb5, 0x19, 0xc8, 0x2a, 0x95, 0xd8,
        0x48, 0x7f, 0xad, 0xe8, 0x1f, 0x71, 0xf9, 0xd5, 0xe6, 0x20, 0x51, 0x37,
        0x70, 0x94, 0x9f, 0x4c, 0xf1, 0x2e, 0x81, 0xa5, 0xf7, 0xa4, 0xdd, 0x81,
        0xb4, 0x3d, 0x90, 0xa3, 0xc3, 0xf3, 0x8d, 0x9e, 0xc0, 0xda, 0xc0, 0xe9,
        0x32, 0x46, 0x90, 0xff, 0xec, 0x76, 0x81, 0xb2, 0x01, 0xa0, 0x4c, 0x64,
        0x39, 0xc2, 0x27, 0xfb, 0x31, 0xe7, 0x89, 0x17, 0x02, 0x42, 0xc5, 0x3a,
        0x22, 0xc2, 0x17, 0x13, 0x91, 0x57, 0x12, 0x2c, 0x23, 0xf9, 0xa8, 0x03,
        0xfd, 0x29, 0x45, 0x29, 0x27, 0xbc, 0x38, 0xad, 0xe1, 0x35, 0x63, 0xd1,
        0xbf, 0x49, 0x11, 0xbe, 0x05, 0xfb, 0xfb, 0x8e, 0xe6, 0x67, 0x61, 0x49,
        0xee, 0x2c, 0xeb, 0x65, 0x3d, 0xc3, 0x45, 0x7f, 0xe4, 0x01, 0x2b, 0x3c,
        0xc6, 0xe5, 0xfc, 0xfc, 0xf4, 0x86, 0xe4, 0xef, 0x32, 0xd2, 0x41, 0x92,
        0x49, 0xdd, 0xf2, 0x3c, 0xf7, 0x5e, 0xd3, 0xd9, 0xeb, 0xc9, 0xa2, 0x0c,
        0x5a, 0x45, 0x02, 0x81, 0x41, 0x83, 0x6e, 0xf0, 0xdc, 0x31, 0xfd, 0x71,
        0x93, 0x3d, 0x58, 0xb6, 0xf5, 0x2d, 0xc2, 0x85, 0xff, 0xae, 0x7a, 0x4f,
        0x00, 0xb6, 0x95, 0x1a, 0x23, 0x34, 0xe0, 0xa1, 0x2f, 0xf5, 0x84, 0x92,
        0xf0, 0xec, 0x0a, 0x24, 0x9d, 0x18, 0xcb, 0xf0, 0x73, 0x7a, 0xec, 0x2a,
        0x09, 0xb2, 0x35, 0x35, 0x7b, 0x1a, 0x77, 0x71, 0x19, 0x02, 0xf1, 0xcc,
        0xf1, 0x06, 0xa4, 0x84, 0xbc, 0x35, 0xd5, 0xd6, 0x0a, 0x2f, 0xbc, 0xe4,
        0x53, 0x7a, 0xec, 0x79, 0xef, 0x3b, 0x94, 0x69, 0xee, 0x77, 0x76, 0xb1,
        0xfc, 0xb4, 0x14, 0x2e, 0xb6, 0xf2, 0x08, 0x8d, 0x6d, 0xb1, 0xbc, 0x96,
        0x57, 0x2d, 0x88, 0x5b, 0x00, 0x0f, 0xb4, 0x24, 0x2b, 0x9c, 0x21, 0x18,
        0xec, 0x32, 0xe8, 0x57, 0x55, 0x9f, 0xbe, 0x23, 0xac, 0x9b, 0xf0, 0x51,
        0xd2, 0x5e, 0x2d, 0xd6, 0x9e, 0x39, 0x6b, 0x53, 0xbd, 0xe3, 0x38, 0x09,
        0x9a, 0x24, 0x19, 0x66, 0xc2, 0xbd, 0xc5, 0x9f, 0x47, 0xc9, 0xbd, 0x67,
        0x4f, 0x7d, 0x58, 0x7f, 0x2f, 0x6d, 0x26, 0x87, 0x9f, 0x18, 0x53, 0x91,
        0x58, 0xe8, 0x77, 0xa6, 0x55, 0x3f, 0x16, 0x63, 0xa0, 0x9a, 0x0d, 0x64,
        0xee, 0xa1, 0xa1, 0x29, 0x2f, 0x6a, 0x7e, 0xc3, 0x15, 0x4e, 0x34, 0xdf,
        0xf2, 0xfd, 0xc5, 0x47, 0x3f, 0xfc, 0xd3, 0x48, 0x6c, 0xa7, 0xdf, 0xf5,
        0xd5, 0x01, 0x0d, 0x77, 0xc8, 0x44, 0x9a, 0xe7, 0xd3, 0xb0, 0x74, 0x7c,
        0xbb, 0x77, 0xcb, 0xef, 0x54, 0x3e, 0x96, 0x2b, 0x3d, 0x10, 0x23, 0xb9,
        0x35, 0x34, 0x17, 0xca, 0x60, 0x30, 0x4b, 0x2b, 0x57, 0x9c, 0xde, 0xd1,
        0x1f, 0xee, 0xd3, 0xec, 0x14, 0x7e, 0x11, 0x67, 0x87, 0x33, 0xe2, 0xad,
        0x55, 0x59, 0xf1, 0xd7, 0x67, 0xa7, 0x41, 0x10, 0xbe, 0x82, 0x4c, 0xf2,
        0x77, 0x93, 0xa7, 0x21, 0x44, 0xb0, 0x5d, 0x2e, 0xac, 0x88, 0x49, 0xd3,
        0x4b, 0xb8, 0x7a, 0x8c, 0x50, 0x03, 0x52, 0x7e, 0xe0, 0x93, 0x69, 0x2a,
        0x35, 0xf3, 0x54, 0xb7, 0x88, 0x41, 0xf4, 0x41, 0xc0, 0x59, 0x14, 0xe0,
        0x49, 0x20, 0x33, 0x3e, 0x25, 0xb2, 0xef, 0x10, 0x7c, 0xba, 0xe6, 0x30,
        0x1f, 0xb4, 0xa8, 0xc0, 0x5f, 0x57, 0x32, 0x1e, 0xed, 0x30, 0x68, 0x93,
        0x81, 0xf7, 0xb6, 0x4f, 0xf3, 0xec, 0x12, 0x24, 0xc7, 0xfe, 0x07, 0xb5,
        0x0c, 0x50, 0xfe, 0x28, 0xd0, 0x3f, 0xd9, 0x27, 0xc1, 0x1e, 0xad, 0xd4,
        0x19, 0x46, 0x5e, 0x8c, 0x6c, 0x30, 0xef, 0x39, 0xb0, 0x0f, 0x31, 0x8d,
        0xb9, 0x19, 0xda, 0x60, 0x78, 0xe6, 0x37, 0x7d, 0x57, 0xdc, 0xee, 0xbb,
        0x31, 0x59, 0x9d, 0x82, 0xe0, 0x15, 0xa9, 0x99
    ];
    //
    // Each array entry holds 8 bit, each bit is a character's pixel:
    //
    o.charCount = 8 * o.chars.length; // Count of bits of all characters.
    o.charCount = o.charCount / o.dim.char.width; // Count of rows of all chars.
    o.charCount = o.charCount / o.dim.char.height;  // Count of characters.

    gamupet.c = o;
}());
