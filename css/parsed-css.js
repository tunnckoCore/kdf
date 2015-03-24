module.exports = [
  "root",
  [
    [
      "rule",
      [
        "@charset 'utf-8';"
      ]
    ],
    [
      "comment",
      " start> root.gack.css "
    ],
    [
      "rule",
      [
        ":root {"
      ],
      [
        "block",
        [
          [
            "prop",
            "helvetica",
            "\"Helvetica\", Arial, sans-serif;"
          ],
          [
            "prop",
            "georgia",
            "Georgia, Cambria, Times, serif;"
          ],
          [
            "prop",
            "verdana",
            "Verdana, \"Geneva\", sans-serif;"
          ],
          [
            "prop",
            "blue",
            "#0074D9;"
          ],
          [
            "prop",
            "aqua",
            "#7FDBFF;"
          ],
          [
            "prop",
            "teal",
            "#39CCCC;"
          ],
          [
            "prop",
            "gray",
            "#dddddd;"
          ],
          [
            "prop",
            "size",
            "3rem;"
          ],
          [
            "prop",
            "icon-size",
            "calc(size / 2);"
          ],
          [
            "prop",
            "main-color",
            "gray;"
          ],
          [
            "prop",
            "company",
            "'charlike';"
          ]
        ]
      ]
    ],
    [
      "rule",
      [
        "}"
      ]
    ],
    [
      "comment",
      " end> mixins.gack.css "
    ],
    [
      "comment",
      " start> mixins.gack.css "
    ],
    [
      "rule",
      [
        "size(sz) {"
      ],
      [
        "block",
        [
          [
            "prop",
            "line-height",
            "calc(sz * 2);      /* required */"
          ],
          [
            "prop",
            "font-size",
            "sz;                  /* required */"
          ]
        ]
      ]
    ],
    [
      "rule",
      [
        "}"
      ]
    ],
    [
      "rule",
      [
        "icons(cont",
        "clr",
        "szr) {"
      ],
      [
        "block",
        [
          [
            "prop",
            "padding-left",
            "calc(szr / 10);"
          ],
          [
            "prop",
            "color",
            "blue;"
          ],
          [
            "prop",
            "content",
            "cont;                  /* required */"
          ],
          [
            "prop",
            "background",
            "clr main-color;"
          ],
          [
            "prop",
            "size",
            "szr;                /* will pass `size` var to `@size` mixin as 0th argument */"
          ]
        ]
      ]
    ],
    [
      "rule",
      [
        "}"
      ]
    ],
    [
      "comment",
      " end> mixins.gack.css "
    ],
    [
      "comment",
      " start> index.gack.css "
    ],
    [
      "rule",
      [
        "ul {"
      ],
      [
        "block",
        [
          [
            "prop",
            "padding",
            "size;"
          ],
          [
            "rule",
            [
              "li {"
            ],
            [
              "block",
              [
                [
                  "rule",
                  [
                    "a {"
                  ],
                  [
                    "block",
                    [
                      [
                        "rule",
                        [
                          ".something  {"
                        ],
                        [
                          "block",
                          [
                            [
                              "prop",
                              "background",
                              "teal;"
                            ]
                          ]
                        ]
                      ],
                      [
                        "rule",
                        [
                          "}"
                        ]
                      ]
                    ]
                  ]
                ],
                [
                  "rule",
                  [
                    "}"
                  ]
                ],
                [
                  "prop",
                  "font-size",
                  "size;"
                ],
                [
                  "prop",
                  "color",
                  "aqua;"
                ]
              ]
            ]
          ],
          [
            "rule",
            [
              "}"
            ]
          ]
        ]
      ]
    ],
    [
      "rule",
      [
        "}"
      ]
    ],
    [
      "rule",
      [
        "button {"
      ],
      [
        "block",
        [
          [
            "prop",
            "icons",
            "'twitter', white, calc(icon-size * 3px);"
          ],
          [
            "prop",
            "border-radius",
            "5px;"
          ],
          [
            "prop",
            "padding",
            "5px 10px;"
          ],
          [
            "comment",
            " todo, maybe shadow function? not mixin "
          ],
          [
            "prop",
            "box-shadow",
            "0 0 3px red, 0 0 10px green, inset 0 0 3px blue;"
          ]
        ]
      ]
    ],
    [
      "rule",
      [
        "}"
      ]
    ],
    [
      "comment",
      " end> index.gack.css "
    ]
  ]
];
