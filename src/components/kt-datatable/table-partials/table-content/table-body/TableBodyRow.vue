<template>
  <tbody class="fw-semibold text-gray-800">
    <template v-for="(row, i) in data" :key="i">
      <tr>
        <td v-if="checkboxEnabled">
          <div
            class="form-check form-check-sm form-check-custom form-check-solid"
          >
            <input
              class="form-check-input"
              type="checkbox"
              :value="row[checkboxLabel]"
              v-model="selectedItems"
              @change="onChange"
            />
          </div>
        </td>
        <template v-for="(properties, j) in header" :key="j">
           <td v-if="properties.columnLabel == 'sl'">
              <template v-if="currentLanguage =='en'">
                {{ sLEng[i] }}
              </template>
              <template v-if="currentLanguage =='bn'">
                {{ sLBng[i] }}
              </template>
          </td>
          <td v-else :class="{ 'text-end': j === header.length - 1 }">
            <slot :name="`${properties.columnLabel}`" :row="row">
              {{ row }}
            </slot>
          </td>
         
        </template>
      </tr>
    </template>
  </tbody>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";
import { useI18n } from "vue-i18n";
export default defineComponent({
  name: "table-body-row",
  components: {},
  props: {
    header: { type: Array as () => Array<any>, required: true },
    data: { type: Array as () => Array<any>, required: true },
    currentlySelectedItems: { type: Array, required: false, default: () => [] },
    checkboxEnabled: { type: Boolean, required: false, default: false },
    checkboxLabel: {
      type: String as () => string,
      required: false,
      default: "id",
    },
  },
  emits: ["on-select"],
  setup(props, { emit }) {
    const selectedItems = ref<Array<any>>([]);
    const i18n = useI18n();
    i18n.locale.value = localStorage.getItem("lang")
      ? (localStorage.getItem("lang") as string)
      : "bn";
   const sLEng = ref<Array<any>>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000]);
  
  const sLBng = ref<Array<any>>(['১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯', '১০', '১১', '১২', '১৩', '১৪', '১৫', '১৬', '১৭', '১৮', '১৯', '২০', '২১', '২২', '২৩', '২৪', '২৫', '২৬', '২৭', '২৮', '২৯', '৩০', '৩১', '৩২', '৩৩', '৩৪', '৩৫', '৩৬', '৩৭', '৩৮', '৩৯', '৪০', 
  '৪১', '৪২', '৪৩', '৪৪', '৪৫', '৪৬', '৪৭', '৪৮', '৪৯', '৫০', '৫১', '৫২', '৫৩', '৫৪', '৫৫', '৫৬', '৫৭', '৫৮', '৫৯', '৬০', '৬১', '৬২', '৬৩', '৬৪', '৬৫', '৬৬', '৬৭', '৬৮', '৬৯', '৭০', '৭১', '৭২', '৭৩', '৭৪', '৭৫', '৭৬', '৭৭', '৭৮', '৭৯', '৮০', '৮১', '৮২', '৮৩', '৮৪', '৮৫', 
  '৮৬', '৮৭', '৮৮', '৮৯', '৯০', '৯১', '৯২', '৯৩', '৯৪', '৯৫', '৯৬', '৯৭', '৯৮', '৯৯', '১০০', '১০১', '১০২', '১০৩', '১০৪', '১০৫', '১০৬', '১০৭', '১০৮', '১০৯', '১১০', '১১১', '১১২', '১১৩', '১১৪', '১১৫', '১১৬', '১১৭', '১১৮', '১১৯', '১২০', '১২১', '১২২', '১২৩', '১২৪', '১২৫', '১২৬', 
  '১২৭', '১২৮', '১২৯', '১৩০', '১৩১', '১৩২', '১৩৩', '১৩৪', '১৩৫', '১৩৬', '১৩৭', '১৩৮', '১৩৯', '১৪০', '১৪১', '১৪২', '১৪৩', '১৪৪', '১৪৫', '১৪৬', '১৪৭', '১৪৮', '১৪৯', '১৫০', '১৫১', '১৫২', '১৫৩', '১৫৪', '১৫৫', '১৫৬', '১৫৭', '১৫৮', '১৫৯', '১৬০', '১৬১', '১৬২', '১৬৩', '১৬৪', 
  '১৬৫', '১৬৬', '১৬৭', '১৬৮', '১৬৯', '১৭০', '১৭১', '১৭২', '১৭৩', '১৭৪', '১৭৫', '১৭৬', '১৭৭', '১৭৮', '১৭৯', '১৮০', '১৮১', '১৮২', '১৮৩', '১৮৪', '১৮৫', '১৮৬', '১৮৭', '১৮৮', '১৮৯', '১৯০', '১৯১', '১৯২', '১৯৩', '১৯৪', '১৯৫', '১৯৬', '১৯৭', '১৯৮', '১৯৯', '২০০', '২০১', '২০২', 
  '২০৩', '২০৪', '২০৫', '২০৬', '২০৭', '২০৮', '২০৯', '২১০', '২১১', '২১২', '২১৩', '২১৪', '২১৫', '২১৬', '২১৭', '২১৮', '২১৯', '২২০', '২২১', '২২২', '২২৩', '২২৪', '২২৫', '২২৬', '২২৭', '২২৮', '২২৯', '২৩০', '২৩১', '২৩২', '২৩৩', '২৩৪', '২৩৫', '২৩৬', '২৩৭', '২৩৮', '২৩৯', '২৪০', 
  '২৪১', '২৪২', '২৪৩', '২৪৪', '২৪৫', '২৪৬', '২৪৭', '২৪৮', '২৪৯', '২৫০', '২৫১', '২৫২', '২৫৩', '২৫৪', '২৫৫', '২৫৬', '২৫৭', '২৫৮', '২৫৯', '২৬০', '২৬১', '২৬২', '২৬৩', '২৬৪', '২৬৫', '২৬৬', '২৬৭', '২৬৮', '২৬৯', '২৭০', '২৭১', '২৭২', '২৭৩', '২৭৪', '২৭৫', '২৭৬', '২৭৭',
  '২৭৮', '২৭৯', '২৮০', '২৮১', '২৮২', '২৮৩', '২৮৪', '২৮৫', '২৮৬', '২৮৭', '২৮৮', '২৮৯', '২৯০', '২৯১', '২৯২', '২৯৩', '২৯৪', '২৯৫', '২৯৬', '২৯৭', '২৯৮', '২৯৯', '৩০০', '৩০১', '৩০২', '৩০৩', '৩০৪', '৩০৫', '৩০৬', '৩০৭', '৩০৮', '৩০৯', '৩১০', '৩১১', '৩১২', '৩১৩', '৩১৪', 
  '৩১৫', '৩১৬', '৩১৭', '৩১৮', '৩১৯', '৩২০', '৩২১', '৩২২', '৩২৩', '৩২৪', '৩২৫', '৩২৬', '৩২৭', '৩২৮', '৩২৯', '৩৩০', '৩৩১', '৩৩২', '৩৩৩', '৩৩৪', '৩৩৫', '৩৩৬', '৩৩৭', '৩৩৮', '৩৩৯', '৩৪০', '৩৪১', '৩৪২', '৩৪৩', '৩৪৪', '৩৪৫', '৩৪৬', '৩৪৭', '৩৪৮', '৩৪৯', '৩৫০',
  '৩৫১', '৩৫২', '৩৫৩', '৩৫৪', '৩৫৫', '৩৫৬', '৩৫৭', '৩৫৮', '৩৫৯', '৩৬০', '৩৬১', '৩৬২', '৩৬৩', '৩৬৪', '৩৬৫', '৩৬৬', '৩৬৭', '৩৬৮', '৩৬৯', '৩৭০', '৩৭১', '৩৭২', '৩৭৩', '৩৭৪', '৩৭৫', '৩৭৬', '৩৭৭', '৩৭৮', '৩৭৯', '৩৮০', '৩৮১', '৩৮২', '৩৮৩', '৩৮৪', '৩৮৫', 
  '৩৮৬', '৩৮৭', '৩৮৮', '৩৮৯', '৩৯০', '৩৯১', '৩৯২', '৩৯৩', '৩৯৪', '৩৯৫', '৩৯৬', '৩৯৭', '৩৯৮', '৩৯৯', '৪০০', '৪০১', '৪০২', '৪০৩', '৪০৪', '৪০৫', '৪০৬', '৪০৭', '৪০৮', '৪০৯', '৪১০', '৪১১', '৪১২', '৪১৩', '৪১৪', '৪১৫', '৪১৬', '৪১৭', '৪১৮', '৪১৯', '৪২০', '৪২১', '৪২২', 
  '৪২৩', '৪২৪', '৪২৫', '৪২৬', '৪২৭', '৪২৮', '৪২৯', '৪৩০', '৪৩১', '৪৩২', '৪৩৩', '৪৩৪', '৪৩৫', '৪৩৬', '৪৩৭', '৪৩৮', '৪৩৯', '৪৪০', '৪৪১', '৪৪২', '৪৪৩', '৪৪৪', '৪৪৫', '৪৪৬', '৪৪৭', '৪৪৮', '৪৪৯', '৪৫০', '৪৫১', '৪৫২', '৪৫৩', '৪৫৪', '৪৫৫', '৪৫৬', '৪৫৭', '৪৫৮', '৪৫৯',
  '৪৬০', '৪৬১', '৪৬২', '৪৬৩', '৪৬৪', '৪৬৫', '৪৬৬', '৪৬৭', '৪৬৮', '৪৬৯', '৪৭০', '৪৭১', '৪৭২', '৪৭৩', '৪৭৪', '৪৭৫', '৪৭৬', '৪৭৭', '৪৭৮', '৪৭৯', '৪৮০', '৪৮১', '৪৮২', '৪৮৩', '৪৮৪', '৪৮৫', '৪৮৬', '৪৮৭', '৪৮৮', '৪৮৯', '৪৯০', '৪৯১', '৪৯২', '৪৯৩', '৪৯৪', '৪৯৫', '৪৯৬', 
  '৪৯৭', '৪৯৮', '৪৯৯', '৫০০', '৫০১', '৫০২', '৫০৩', '৫০৪', '৫০৫', '৫০৬', '৫০৭', '৫০৮', '৫০৯', '৫১০', '৫১১', '৫১২', '৫১৩', '৫১৪', '৫১৫', '৫১৬', '৫১৭', '৫১৮', '৫১৯', '৫২০', '৫২১', '৫২২', '৫২৩', '৫২৪', '৫২৫', '৫২৬', '৫২৭', '৫২৮', '৫২৯', '৫৩০', '৫৩১', '৫৩২', '৫৩৩', '৫৩৪', 
  '৫৩৫', '৫৩৬', '৫৩৭', '৫৩৮', '৫৩৯', '৫৪০', '৫৪১', '৫৪২', '৫৪৩', '৫৪৪', '৫৪৫', '৫৪৬', '৫৪৭', '৫৪৮', '৫৪৯', '৫৫০', '৫৫১', '৫৫২', '৫৫৩', '৫৫৪', '৫৫৫', '৫৫৬', '৫৫৭', '৫৫৮', '৫৫৯', '৫৬০', '৫৬১', '৫৬২', '৫৬৩', '৫৬৪', '৫৬৫', '৫৬৬', '৫৬৭', '৫৬৮', '৫৬৯', '৫৭০', '৫৭১', 
  '৫৭২', '৫৭৩', '৫৭৪', '৫৭৫', '৫৭৬', '৫৭৭', '৫৭৮', '৫৭৯', '৫৮০', '৫৮১', '৫৮২', '৫৮৩', '৫৮৪', '৫৮৫', '৫৮৬', '৫৮৭', '৫৮৮', '৫৮৯', '৫৯০', '৫৯১', '৫৯২', '৫৯৩', '৫৯৪', '৫৯৫', '৫৯৬', '৫৯৭', '৫৯৮', '৫৯৯', '৬০০', '৬০১', '৬০২', '৬০৩', '৬০৪', '৬০৫', '৬০৬', '৬০৭', '৬০৮', 
  '৬০৯', '৬১০', '৬১১', '৬১২', '৬১৩', '৬১৪', '৬১৫', '৬১৬', '৬১৭', '৬১৮', '৬১৯', '৬২০', '৬২১', '৬২২', '৬২৩', '৬২৪', '৬২৫', '৬২৬', '৬২৭', '৬২৮', '৬২৯', '৬৩০', '৬৩১', '৬৩২', '৬৩৩', '৬৩৪', '৬৩৫', '৬৩৬', '৬৩৭', '৬৩৮', '৬৩৯', '৬৪০', '৬৪১', '৬৪২', '৬৪৩', '৬৪৪', '৬৪৫',
  '৬৪৬', '৬৪৭', '৬৪৮', '৬৪৯', '৬৫০', '৬৫১', '৬৫২', '৬৫৩', '৬৫৪', '৬৫৫', '৬৫৬', '৬৫৭', '৬৫৮', '৬৫৯', '৬৬০', '৬৬১', '৬৬২', '৬৬৩', '৬৬৪', '৬৬৫', '৬৬৬', '৬৬৭', '৬৬৮', '৬৬৯', '৬৭০', '৬৭১', '৬৭২', '৬৭৩', '৬৭৪', '৬৭৫', '৬৭৬', '৬৭৭', '৬৭৮', '৬৭৯', '৬৮০', '৬৮১', 
  '৬৮২', '৬৮৩', '৬৮৪', '৬৮৫', '৬৮৬', '৬৮৭', '৬৮৮', '৬৮৯', '৬৯০', '৬৯১', '৬৯২', '৬৯৩', '৬৯৪', '৬৯৫', '৬৯৬', '৬৯৭', '৬৯৮', '৬৯৯', '৭০০', '৭০১', '৭০২', '৭০৩', '৭০৪', '৭০৫', '৭০৬', '৭০৭', '৭০৮', '৭০৯', '৭১০', '৭১১', '৭১২', '৭১৩', '৭১৪', '৭১৫', '৭১৬', '৭১৭', '৭১৮', '৭১৯', 
  '৭২০', '৭২১', '৭২২', '৭২৩', '৭২৪', '৭২৫', '৭২৬', '৭২৭', '৭২৮', '৭২৯', '৭৩০', '৭৩১', '৭৩২', '৭৩৩', '৭৩৪', '৭৩৫', '৭৩৬', '৭৩৭', '৭৩৮', '৭৩৯', '৭৪০', '৭৪১', '৭৪২', '৭৪৩', '৭৪৪', '৭৪৫', '৭৪৬', '৭৪৭', '৭৪৮', '৭৪৯', '৭৫০', '৭৫১', '৭৫২', '৭৫৩', '৭৫৪', '৭৫৫', '৭৫৬', '৭৫৭', '৭৫৮', 
  '৭৫৯', '৭৬০', '৭৬১', '৭৬২', '৭৬৩', '৭৬৪', '৭৬৫', '৭৬৬', '৭৬৭', '৭৬৮', '৭৬৯', '৭৭০', '৭৭১', '৭৭২', '৭৭৩', '৭৭৪', '৭৭৫', '৭৭৬', '৭৭৭', '৭৭৮', '৭৭৯', '৭৮০', '৭৮১', '৭৮২', '৭৮৩', '৭৮৪', '৭৮৫', '৭৮৬', '৭৮৭', '৭৮৮', '৭৮৯', '৭৯০', '৭৯১', '৭৯২', '৭৯৩', '৭৯৪', '৭৯৫', '৭৯৬', 
  '৭৯৭', '৭৯৮', '৭৯৯', '৮০০', '৮০১', '৮০২', '৮০৩', '৮০৪', '৮০৫', '৮০৬', '৮০৭', '৮০৮', '৮০৯', '৮১০', '৮১১', '৮১২', '৮১৩', '৮১৪', '৮১৫', '৮১৬', '৮১৭', '৮১৮', '৮১৯', '৮২০', '৮২১', '৮২২', '৮২৩', '৮২৪', '৮২৫', '৮২৬', '৮২৭', '৮২৮', '৮২৯', '৮৩০', '৮৩১', '৮৩২', '৮৩৩', '৮৩৪', 
  '৮৩৫', '৮৩৬', '৮৩৭', '৮৩৮', '৮৩৯', '৮৪০', '৮৪১', '৮৪২', '৮৪৩', '৮৪৪', '৮৪৫', '৮৪৬', '৮৪৭', '৮৪৮', '৮৪৯', '৮৫০', '৮৫১', '৮৫২', '৮৫৩', '৮৫৪', '৮৫৫', '৮৫৬', '৮৫৭', '৮৫৮', '৮৫৯', '৮৬০', '৮৬১', '৮৬২', '৮৬৩', '৮৬৪', '৮৬৫', '৮৬৬', '৮৬৭', '৮৬৮', '৮৬৯', '৮৭০', '৮৭১', 
  '৮৭২', '৮৭৩', '৮৭৪', '৮৭৫', '৮৭৬', '৮৭৭', '৮৭৮', '৮৭৯', '৮৮০', '৮৮১', '৮৮২', '৮৮৩', '৮৮৪', '৮৮৫', '৮৮৬', '৮৮৭', '৮৮৮', '৮৮৯', '৮৯০', '৮৯১', '৮৯২', '৮৯৩', '৮৯৪', '৮৯৫', '৮৯৬', '৮৯৭', '৮৯৮', '৮৯৯', '৯০০', '৯০১', '৯০২', '৯০৩', '৯০৪', '৯০৫', '৯০৬', '৯০৭', '৯০৮',
  '৯০৯', '৯১০', '৯১১', '৯১২', '৯১৩', '৯১৪', '৯১৫', '৯১৬', '৯১৭', '৯১৮', '৯১৯', '৯২০', '৯২১', '৯২২', '৯২৩', '৯২৪', '৯২৫', '৯২৬', '৯২৭', '৯২৮', '৯২৯', '৯৩০', '৯৩১', '৯৩২', '৯৩৩', '৯৩৪', '৯৩৫', '৯৩৬', '৯৩৭', '৯৩৮', '৯৩৯', '৯৪০', '৯৪১', '৯৪২', '৯৪৩', '৯৪৪', '৯৪৫', '৯৪৬',
  '৯৪৭', '৯৪৮', '৯৪৯', '৯৫০', '৯৫১', '৯৫২', '৯৫৩', '৯৫৪', '৯৫৫', '৯৫৬', '৯৫৭', '৯৫৮', '৯৫৯', '৯৬০', '৯৬১', '৯৬২', '৯৬৩', '৯৬৪', '৯৬৫', '৯৬৬', '৯৬৭', '৯৬৮', '৯৬৯', '৯৭০', '৯৭১', '৯৭২', '৯৭৩', '৯৭৪', '৯৭৫', '৯৭৬', '৯৭৭', '৯৭৮', '৯৭৯', '৯৮০', '৯৮১', '৯৮২', '৯৮৩',
  '৯৮৪', '৯৮৫', '৯৮৬', '৯৮৭', '৯৮৮', '৯৮৯', '৯৯০', '৯৯১', '৯৯২', '৯৯৩', '৯৯৪', '৯৯৫', '৯৯৬', '৯৯৭', '৯৯৮', '৯৯৯', '১০০০' ]); 
  
    watch(
      () => [...props.currentlySelectedItems],
      (currentValue) => {
        if (props.currentlySelectedItems.length !== 0) {
          selectedItems.value = [
            ...new Set([...selectedItems.value, ...currentValue]),
          ];
        } else {
          selectedItems.value = [];
        }
      }
    );

    const onChange = () => {
      emit("on-select", selectedItems.value);
    };

    const currentLanguage = computed(() => {
      return i18n.locale.value;
    });

    return {
      selectedItems,
      sLEng,
      sLBng,
      currentLanguage,
      onChange,
    };
  },
});
</script>
