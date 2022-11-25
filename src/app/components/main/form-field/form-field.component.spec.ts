import {FormFieldComponent} from "./form-field.component";
import {MainService} from "../../../services/main.service";

import { TestBed } from '@angular/core/testing';
import {functions, Global, PatientSummary} from "../../../models/hiv1.model";
import {of} from "rxjs";


class MockService {
  getHivFile(s: string){
   /*

    return of({
      "informations": {
      "version": 33,
        "date": "October 2022"
    },
      "rules": [
      {
        "name": "NUCLEOSIDE AND NUCLEOTIDE REVERSE TRANSCRIPTASE INHIBITORS",
        "listArv": [
          {
            "name": "Zidovudine",
            "abbreviation": "ZDV",
            "withResistance": {
              "associateMutationsList": {
                "number": 3,
                "atLeast": true,
                "mutations": [
                  {
                    "name": "M41",
                    "letters": "L"
                  },
                  {
                    "name": "D67",
                    "letters": "N"
                  },
                  {
                    "name": "K70",
                    "letters": "R"
                  },
                  {
                    "name": "L210",
                    "letters": "W"
                  },
                  {
                    "name": "K219",
                    "letters": "Q/E"
                  }
                ]
              },
              "mutations": [
                {
                  "name": "T215",
                  "letters": "A/C/D/E/G/H/I/L/N/S/V/Y/F"
                },
                {
                  "name": "Q151",
                  "letters": "M"
                }
              ]
            },
            "withPossibleResistance": {

            }
          },
          {
            "name": "Lamivudine/Emtricitabine",
            "abbreviation": "3TC/FTC",
            "withResistance": {
              "mutations": [
                {
                  "name": "K65",
                  "letters": "R"
                },
                {
                  "name": "M184",
                  "letters": "V/I"
                }
              ]
            },
            "withPossibleResistance": {
              "mutations": [
                {
                  "name": "Q151",
                  "letters": "M"
                }
              ]
            }
          },
          {
            "name": "Abacavir",
            "abbreviation": "ABC",
            "withResistance": {
              "associateMutationsList": {
                "number": 3,
                "atLeast": true,
                "mutations": [
                  {
                    "name": "M41",
                    "letters": "L"
                  },
                  {
                    "name": "D67",
                    "letters": "N"
                  },
                  {
                    "name": "M184",
                    "letters": "V/I"
                  },
                  {
                    "name": "L210",
                    "letters": "W"
                  },
                  {
                    "name": "T215",
                    "letters": "A/C/D/E/G/H/I/L/N/S/V/Y/F"
                  }
                ]
              },
              "mutations": [
                {
                  "name": "K65",
                  "letters": "R"
                },
                {
                  "name": "L74",
                  "letters": "V/I"
                },
                {
                  "name": "Y115",
                  "letters": "F"
                },
                {
                  "name": "Q151",
                  "letters": "M"
                }
              ]
            },
            "withPossibleResistance": {
              "associateMutationsList": {
                "number": 2,
                "atLeast": false,
                "mutations": [
                  {
                    "name": "M41",
                    "letters": "L"
                  },
                  {
                    "name": "D67",
                    "letters": "N"
                  },
                  {
                    "name": "L210",
                    "letters": "W"
                  },
                  {
                    "name": "T215",
                    "letters": "A/C/D/E/G/H/I/L/N/S/V/Y/F"
                  }
                ]
              },
              "mutations": [
                {
                  "name": "M184",
                  "letters": "V/I"
                }
              ]
            }
          },
          {
            "name": "Tenofovir/Alafenamide",
            "abbreviation": "TDF/TAF",
            "withResistance": {
              "associateMutationsList": {
                "number": 4,
                "atLeast": true,
                "mutations": [
                  {
                    "name": "M41",
                    "letters": "L"
                  },
                  {
                    "name": "E44",
                    "letters": "D"
                  },
                  {
                    "name": "D67",
                    "letters": "N"
                  },
                  {
                    "name": "T69",
                    "letters": "D/N/S"
                  },
                  {
                    "name": "L74",
                    "letters": "V/I"
                  },
                  {
                    "name": "L210",
                    "letters": "W"
                  },
                  {
                    "name": "T215",
                    "letters": "A/C/D/E/G/H/I/L/N/S/V/Y/F"
                  }
                ]
              },
              "mutations": [
                {
                  "name": "K65",
                  "letters": "R/E/N"
                },
                {
                  "name": "K70",
                  "letters": "E"
                }
              ]
            },
            "withPossibleResistance": {
              "associateMutationsList": {
                "number": 3,
                "atLeast": false,
                "mutations": [
                  {
                    "name": "M41",
                    "letters": "L"
                  },
                  {
                    "name": "E44",
                    "letters": "D"
                  },
                  {
                    "name": "D67",
                    "letters": "N"
                  },
                  {
                    "name": "T69",
                    "letters": "D/N/S"
                  },
                  {
                    "name": "L74",
                    "letters": "V/I"
                  },
                  {
                    "name": "L210",
                    "letters": "W"
                  },
                  {
                    "name": "T215",
                    "letters": "A/C/D/E/G/H/I/L/N/S/V/Y/F"
                  }
                ]
              }
            }
          },
          {
            "name": "Islatravir",
            "abbreviation": "ISL",
            "withResistance": {
              "mutations": [
                {
                  "name": "M184",
                  "letters": "V/I"
                }
              ]
            },
            "withPossibleResistance": {
              "mutations": [
                {
                  "name": "A114",
                  "letters": "S"
                }
              ]
            }
          }
        ]
      },
      {
        "name": "PROTEASE INHIBITORS",
        "listArv": [
          {
            "name": "Lopinavir/ritonavir",
            "abbreviation": "LPV/RTV",
            "withResistance": {
              "associateMutationsList": {
                "number": 4,
                "atLeast": true,
                "mutations": [
                  {
                    "name": "L10",
                    "letters": "F/I/R/V"
                  },
                  {
                    "name": "K20",
                    "letters": "M/R"
                  },
                  {
                    "name": "L24",
                    "letters": "I"
                  },
                  {
                    "name": "L33",
                    "letters": "F"
                  },
                  {
                    "name": "M46",
                    "letters": "I/L"
                  },
                  {
                    "name": "I50",
                    "letters": "V"
                  },
                  {
                    "name": "F53",
                    "letters": "L"
                  },
                  {
                    "name": "I54",
                    "letters": "M/L/T/V"
                  },
                  {
                    "name": "L63",
                    "letters": "P"
                  },
                  {
                    "name": "A71",
                    "letters": "I/L/V/T"
                  },
                  {
                    "name": "V82",
                    "letters": "A/F/S/T"
                  },
                  {
                    "name": "I84",
                    "letters": "V"
                  },
                  {
                    "name": "L90",
                    "letters": "M"
                  }
                ]
              },
              "mutations": [
                {
                  "name": "I47",
                  "letters": "A"
                },
                {
                  "name": "L76",
                  "letters": "V"
                }
              ]
            },
            "withPossibleResistance": {
              "associateMutationsList": {
                "number": 3,
                "atLeast": false,
                "mutations": [
                  {
                    "name": "L10",
                    "letters": "F/I/R/V"
                  },
                  {
                    "name": "K20",
                    "letters": "M/R"
                  },
                  {
                    "name": "L24",
                    "letters": "I"
                  },
                  {
                    "name": "L33",
                    "letters": "F"
                  },
                  {
                    "name": "M46",
                    "letters": "I/L"
                  },
                  {
                    "name": "I50",
                    "letters": "V"
                  },
                  {
                    "name": "F53",
                    "letters": "L"
                  },
                  {
                    "name": "I54",
                    "letters": "M/L/T/V"
                  },
                  {
                    "name": "L63",
                    "letters": "P"
                  },
                  {
                    "name": "A71",
                    "letters": "I/L/V/T"
                  },
                  {
                    "name": "V82",
                    "letters": "A/F/S/T"
                  },
                  {
                    "name": "I84",
                    "letters": "V"
                  },
                  {
                    "name": "L90",
                    "letters": "M"
                  }
                ]
              }
            }
          },
          {
            "name": "Atazanavir/ritonavir",
            "abbreviation": "ATV/RTV",
            "withResistance": {
              "associateMutationsList": {
                "number": 3,
                "atLeast": true,
                "mutations": [
                  {
                    "name": "L10",
                    "letters": "F/I/V"
                  },
                  {
                    "name": "G16",
                    "letters": "E"
                  },
                  {
                    "name": "L33",
                    "letters": "F/I/V"
                  },
                  {
                    "name": "M46",
                    "letters": "I/L"
                  },
                  {
                    "name": "D60",
                    "letters": "E"
                  },
                  {
                    "name": "A71",
                    "letters": "V/T"
                  },
                  {
                    "name": "I84",
                    "letters": "V"
                  },
                  {
                    "name": "I85",
                    "letters": "V"
                  },
                  {
                    "name": "L90",
                    "letters": "M"
                  }
                ]
              },
              "mutations": [
                {
                  "name": "I50",
                  "letters": "L"
                },
                {
                  "name": "N88",
                  "letters": "S"
                }
              ]
            },
            "withPossibleResistance": {
              "associateMutationsList": {
                "number": 2,
                "atLeast": false,
                "mutations": [
                  {
                    "name": "L10",
                    "letters": "F/I/V"
                  },
                  {
                    "name": "G16",
                    "letters": "E"
                  },
                  {
                    "name": "L33",
                    "letters": "F/I/V"
                  },
                  {
                    "name": "M46",
                    "letters": "I/L"
                  },
                  {
                    "name": "D60",
                    "letters": "E"
                  },
                  {
                    "name": "A71",
                    "letters": "V/T"
                  },
                  {
                    "name": "I84",
                    "letters": "V"
                  },
                  {
                    "name": "I85",
                    "letters": "V"
                  },
                  {
                    "name": "L90",
                    "letters": "M"
                  }
                ]
              }
            }
          },
          {
            "name": "Darunavir/ritonavir 600/100mg BID",
            "abbreviation": "DRV/RTV",
            "withResistance": {
              "associateMutationsList": {
                "number": 4,
                "atLeast": true,
                "mutations": [
                  {
                    "name": "V11",
                    "letters": "I"
                  },
                  {
                    "name": "V32",
                    "letters": "I"
                  },
                  {
                    "name": "L33",
                    "letters": "F"
                  },
                  {
                    "name": "I47",
                    "letters": "V"
                  },
                  {
                    "name": "I50",
                    "letters": "V"
                  },
                  {
                    "name": "I54",
                    "letters": "L/M"
                  },
                  {
                    "name": "T74",
                    "letters": "P"
                  },
                  {
                    "name": "L76",
                    "letters": "V"
                  },
                  {
                    "name": "I84",
                    "letters": "V"
                  },
                  {
                    "name": "L89",
                    "letters": "V"
                  }
                ]
              }
            },
            "withPossibleResistance": {
              "associateMutationsList": {
                "number": 3,
                "atLeast": false,
                "mutations": [
                  {
                    "name": "V11",
                    "letters": "I"
                  },
                  {
                    "name": "V32",
                    "letters": "I"
                  },
                  {
                    "name": "L33",
                    "letters": "F"
                  },
                  {
                    "name": "I47",
                    "letters": "V"
                  },
                  {
                    "name": "I50",
                    "letters": "V"
                  },
                  {
                    "name": "I54",
                    "letters": "L/M"
                  },
                  {
                    "name": "T74",
                    "letters": "P"
                  },
                  {
                    "name": "L76",
                    "letters": "V"
                  },
                  {
                    "name": "I84",
                    "letters": "V"
                  },
                  {
                    "name": "L89",
                    "letters": "V"
                  }
                ]
              }
            }
          },
          {
            "name": "Darunavir/ritonavir 800/100mg QD",
            "abbreviation": "DRV/RTV",
            "withResistance": {
              "associateMutationsList": {
                "number": 2,
                "atLeast": true,
                "mutations": [
                  {
                    "name": "V11",
                    "letters": "I"
                  },
                  {
                    "name": "V32",
                    "letters": "I"
                  },
                  {
                    "name": "L33",
                    "letters": "F"
                  },
                  {
                    "name": "I47",
                    "letters": "V"
                  },
                  {
                    "name": "I50",
                    "letters": "V"
                  },
                  {
                    "name": "I54",
                    "letters": "L/M"
                  },
                  {
                    "name": "T74",
                    "letters": "P"
                  },
                  {
                    "name": "L76",
                    "letters": "V"
                  },
                  {
                    "name": "I84",
                    "letters": "V"
                  },
                  {
                    "name": "L89",
                    "letters": "V"
                  }
                ]
              }
            },
            "withPossibleResistance": {

            }
          }
        ]
      },
      {
        "name": "NON-NUCLEOSIDE REVERSE TRANSCRIPTASE INHIBITORS",
        "listArv": [
          {
            "name": "Efavirenz",
            "abbreviation": "EFV",
            "withResistance": {
              "mutations": [
                {
                  "name": "L100",
                  "letters": "I"
                },
                {
                  "name": "K101",
                  "letters": "E"
                },
                {
                  "name": "K103",
                  "letters": "H/N/S/T"
                },
                {
                  "name": "V106",
                  "letters": "M"
                },
                {
                  "name": "E138",
                  "letters": "K"
                },
                {
                  "name": "Y181",
                  "letters": "C/I"
                },
                {
                  "name": "Y188",
                  "letters": "C/L"
                },
                {
                  "name": "G190",
                  "letters": "A/C/E/Q/S/T/V"
                },
                {
                  "name": "P225",
                  "letters": "H"
                },
                {
                  "name": "M230",
                  "letters": "L"
                }
              ]
            },
            "withPossibleResistance": {

            }
          },
          {
            "name": "Nevirapine",
            "abbreviation": "NVP",
            "withResistance": {
              "mutations": [
                {
                  "name": "A98",
                  "letters": "S"
                },
                {
                  "name": "L100",
                  "letters": "I"
                },
                {
                  "name": "K101",
                  "letters": "E"
                },
                {
                  "name": "K103",
                  "letters": "H/N/S/T"
                },
                {
                  "name": "V106",
                  "letters": "A/M"
                },
                {
                  "name": "Y181",
                  "letters": "C/I"
                },
                {
                  "name": "Y188",
                  "letters": "C/H/L"
                },
                {
                  "name": "G190",
                  "letters": "A/C/E/Q/S/T/V"
                },
                {
                  "name": "M230",
                  "letters": "L"
                }
              ]
            },
            "withPossibleResistance": {
              "mutations": [
                {
                  "name": "E138",
                  "letters": "K"
                }
              ]
            }
          },
          {
            "name": "etravirine",
            "abbreviation": "ETR",
            "withResistance": {
              "associateMutationsList": {
                "number": 3,
                "atLeast": true,
                "mutations": [
                  {
                    "name": "V90",
                    "letters": "I"
                  },
                  {
                    "name": "A98",
                    "letters": "G"
                  },
                  {
                    "name": "L100",
                    "letters": "I"
                  },
                  {
                    "name": "K101",
                    "letters": "E/H/I/P/R"
                  },
                  {
                    "name": "V106",
                    "letters": "I"
                  },
                  {
                    "name": "V179",
                    "letters": "D/F/I/L/M/T"
                  },
                  {
                    "name": "G190",
                    "letters": "A/S"
                  },
                  {
                    "name": "M230",
                    "letters": "L"
                  }
                ]
              },
              "mutations": [
                {
                  "name": "E138",
                  "letters": "K"
                },
                {
                  "name": "Y181",
                  "letters": "C/I/V"
                },
                {
                  "name": "H221",
                  "letters": "Y"
                }
              ]
            },
            "withPossibleResistance": {
              "associateMutationsList": {
                "number": 2,
                "atLeast": false,
                "mutations": [
                  {
                    "name": "V90",
                    "letters": "I"
                  },
                  {
                    "name": "A98",
                    "letters": "G"
                  },
                  {
                    "name": "L100",
                    "letters": "I"
                  },
                  {
                    "name": "K101",
                    "letters": "E/H/I/P/R"
                  },
                  {
                    "name": "V106",
                    "letters": "I"
                  },
                  {
                    "name": "V179",
                    "letters": "D/F/I/L/M/T"
                  },
                  {
                    "name": "G190",
                    "letters": "A/S"
                  },
                  {
                    "name": "M230",
                    "letters": "L"
                  }
                ]
              },
              "mutations": [
                {
                  "name": "E138",
                  "letters": "A/G/Q/R/S"
                }
              ]
            }
          },
          {
            "name": "rilpivirine",
            "abbreviation": "RPV",
            "withResistance": {
              "mutations": [
                {
                  "name": "K101",
                  "letters": "E/P"
                },
                {
                  "name": "E138",
                  "letters": "A/G/K/Q/R/S"
                },
                {
                  "name": "V179",
                  "letters": "L"
                },
                {
                  "name": "Y181",
                  "letters": "C/I/V"
                },
                {
                  "name": "Y188",
                  "letters": "L"
                },
                {
                  "name": "F227",
                  "letters": "C"
                },
                {
                  "name": "H221",
                  "letters": "Y"
                },
                {
                  "name": "M230",
                  "letters": "I/L/V"
                }
              ],
              "sums": [
                {
                  "sum": [
                    {
                      "name": "L100",
                      "letters": "I"
                    },
                    {
                      "name": "K103",
                      "letters": "N/S"
                    }
                  ]
                },
                {
                  "sum": [
                    {
                      "name": "L100",
                      "letters": "I"
                    },
                    {
                      "name": "K103",
                      "letters": "R"
                    },
                    {
                      "name": "V179",
                      "letters": "D"
                    }
                  ]
                }
              ]
            },
            "withPossibleResistance": {
              "mutations": [
                {
                  "name": "A98",
                  "letters": "G"
                }
              ]
            }
          },
          {
            "name": "doravirine",
            "abbreviation": "DOR",
            "withResistance": {
              "mutations": [
                {
                  "name": "V106",
                  "letters": "A/M"
                },
                {
                  "name": "Y188",
                  "letters": "L"
                },
                {
                  "name": "G190",
                  "letters": "E/S"
                },
                {
                  "name": "M230",
                  "letters": "L"
                },
                {
                  "name": "F227",
                  "letters": "C"
                }
              ],
              "sums": [
                {
                  "sum": [
                    {
                      "name": "L100",
                      "letters": "I"
                    },
                    {
                      "name": "K103",
                      "letters": "N"
                    }
                  ]
                },
                {
                  "sum": [
                    {
                      "name": "K103",
                      "letters": "N"
                    },
                    {
                      "name": "Y181",
                      "letters": "C"
                    }
                  ]
                },
                {
                  "sum": [
                    {
                      "name": "K103",
                      "letters": "N"
                    },
                    {
                      "name": "P225",
                      "letters": "H"
                    }
                  ]
                }
              ],
              "associateMutationsList": {
                "number": 4,
                "atLeast": true,
                "mutations": [
                  {
                    "name": "A98",
                    "letters": "G"
                  },
                  {
                    "name": "L100",
                    "letters": "I"
                  },
                  {
                    "name": "K101",
                    "letters": "E"
                  },
                  {
                    "name": "V106",
                    "letters": "I"
                  },
                  {
                    "name": "E138",
                    "letters": "K"
                  },
                  {
                    "name": "Y181",
                    "letters": "C/V"
                  },
                  {
                    "name": "G190",
                    "letters": "A"
                  },
                  {
                    "name": "H221",
                    "letters": "Y"
                  }
                ]
              }
            },
            "withPossibleResistance": {
              "associateMutationsList": {
                "number": 2,
                "atLeast": false,
                "mutations": [
                  {
                    "name": "A98",
                    "letters": "G"
                  },
                  {
                    "name": "L100",
                    "letters": "I"
                  },
                  {
                    "name": "K101",
                    "letters": "E"
                  },
                  {
                    "name": "V106",
                    "letters": "I"
                  },
                  {
                    "name": "E138",
                    "letters": "K"
                  },
                  {
                    "name": "Y181",
                    "letters": "C/V"
                  },
                  {
                    "name": "G190",
                    "letters": "A"
                  },
                  {
                    "name": "H221",
                    "letters": "Y"
                  }
                ]
              }
            }
          }
        ]
      },
      {
        "name": "FUSION INHIBITOR",
        "listArv": [
          {
            "name": "enfuvirtide",
            "abbreviation": "ENF T20",
            "withResistance": {
              "mutations": [
                {
                  "name": "G36",
                  "letters": "A/D/E/S/V"
                },
                {
                  "name": "V38",
                  "letters": "A/E/K/M"
                },
                {
                  "name": "Q40",
                  "letters": "H/K/P/T"
                },
                {
                  "name": "N42",
                  "letters": "D/T"
                },
                {
                  "name": "N43",
                  "letters": "D/H/K/S"
                },
                {
                  "name": "L44",
                  "letters": "M"
                },
                {
                  "name": "L45",
                  "letters": "Q/M"
                }
              ]
            },
            "withPossibleResistance": {

            }
          }
        ]
      },
      {
        "name": "ATTACHMENT INHIBITOR",
        "listArv": [
          {
            "name": "fostemsavir",
            "abbreviation": "FTR",
            "withResistance": {
              "associateMutationsList": {
                "number": 1,
                "atLeast": true,
                "mutations": [
                  {
                    "name": "S375",
                    "letters": "H/I/M/N/T"
                  },
                  {
                    "name": "M426",
                    "letters": "L/P"
                  },
                  {
                    "name": "M434",
                    "letters": "I/K"
                  },
                  {
                    "name": "M475",
                    "letters": "I"
                  }
                ]
              }
            },
            "withPossibleResistance": {

            }
          }
        ]
      },
      {
        "name": "INTEGRASE STRAND TRANSFER INHIBITORS",
        "listArv": [
          {
            "name": "raltegravir",
            "abbreviation": "RAL",
            "withResistance": {
              "mutations": [
                {
                  "name": "T66",
                  "letters": "A/K"
                },
                {
                  "name": "E92",
                  "letters": "Q"
                },
                {
                  "name": "G118",
                  "letters": "R"
                },
                {
                  "name": "F121",
                  "letters": "Y"
                },
                {
                  "name": "G140",
                  "letters": "A/S"
                },
                {
                  "name": "Y143",
                  "letters": "A/C/G/H/R/S"
                },
                {
                  "name": "N144",
                  "letters": "D"
                },
                {
                  "name": "Q148",
                  "letters": "E/G/H/K/R"
                },
                {
                  "name": "V151",
                  "letters": "L"
                },
                {
                  "name": "N155",
                  "letters": "H/S/T"
                },
                {
                  "name": "E157",
                  "letters": "Q"
                },
                {
                  "name": "S230",
                  "letters": "R"
                },
                {
                  "name": "R263",
                  "letters": "K"
                }
              ],
              "sums": [
                {
                  "sum": [
                    {
                      "name": "L74",
                      "letters": "F/I"
                    },
                    {
                      "name": "V75",
                      "letters": "I"
                    }
                  ]
                }
              ]
            },
            "withPossibleResistance": {

            }
          },
          {
            "name": "elvitegravir",
            "abbreviation": "EVG",
            "withResistance": {
              "mutations": [
                {
                  "name": "T66",
                  "letters": "A/K"
                },
                {
                  "name": "E92",
                  "letters": "Q"
                },
                {
                  "name": "T97",
                  "letters": "A"
                },
                {
                  "name": "G118",
                  "letters": "R"
                },
                {
                  "name": "F121",
                  "letters": "Y"
                },
                {
                  "name": "E138",
                  "letters": "K"
                },
                {
                  "name": "G140",
                  "letters": "A/C/S"
                },
                {
                  "name": "Y143",
                  "letters": "A/C/G/H/R/S"
                },
                {
                  "name": "N144",
                  "letters": "D"
                },
                {
                  "name": "N145",
                  "letters": "S"
                },
                {
                  "name": "N147",
                  "letters": "G"
                },
                {
                  "name": "Q148",
                  "letters": "E/G/H/K/R"
                },
                {
                  "name": "V151",
                  "letters": "L"
                },
                {
                  "name": "N155",
                  "letters": "H/S/T"
                },
                {
                  "name": "E157",
                  "letters": "Q"
                },
                {
                  "name": "S230",
                  "letters": "R"
                },
                {
                  "name": "R263",
                  "letters": "K"
                }
              ],
              "sums": [
                {
                  "sum": [
                    {
                      "name": "L74",
                      "letters": "F/I"
                    },
                    {
                      "name": "V75",
                      "letters": "I"
                    }
                  ]
                }
              ]
            },
            "withPossibleResistance": {

            }
          },
          {
            "name": "dolutegravir",
            "abbreviation": "DTG 50 mg QD",
            "withResistance": {
              "mutations": [
                {
                  "name": "G118",
                  "letters": "R"
                },
                {
                  "name": "F121",
                  "letters": "Y"
                },
                {
                  "name": "E138",
                  "letters": "A/K/T"
                },
                {
                  "name": "G140",
                  "letters": "A/C/S"
                },
                {
                  "name": "N144",
                  "letters": "D"
                },
                {
                  "name": "Q148",
                  "letters": "H/K/R"
                },
                {
                  "name": "V151",
                  "letters": "L"
                },
                {
                  "name": "S153",
                  "letters": "F/Y"
                },
                {
                  "name": "N155",
                  "letters": "H"
                },
                {
                  "name": "S230",
                  "letters": "R"
                },
                {
                  "name": "R263",
                  "letters": "K"
                }
              ],
              "sums": [
                {
                  "sum": [
                    {
                      "name": "T66",
                      "letters": "K"
                    },
                    {
                      "name": "L74",
                      "letters": "M"
                    }
                  ]
                },
                {
                  "sum": [
                    {
                      "name": "L74",
                      "letters": "I"
                    },
                    {
                      "name": "E92",
                      "letters": "Q"
                    }
                  ]
                }
              ]
            },
            "withPossibleResistance": {
              "mutations": [
                {
                  "name": "T66",
                  "letters": "K"
                }
              ]
            }
          },
          {
            "name": "dolutegravir",
            "abbreviation": "DTG 50 mg BID",
            "withResistance": {
              "mutations": [
                {
                  "name": "G118",
                  "letters": "R"
                },
                {
                  "name": "F121",
                  "letters": "Y"
                },
                {
                  "name": "N144",
                  "letters": "D"
                },
                {
                  "name": "V151",
                  "letters": "L"
                },
                {
                  "name": "S153",
                  "letters": "F/Y"
                },
                {
                  "name": "R263",
                  "letters": "K"
                }
              ],
              "sums": [
                {
                  "sum": [
                    {
                      "name": "T66",
                      "letters": "K"
                    },
                    {
                      "name": "L74",
                      "letters": "M"
                    }
                  ]
                },
                {
                  "sum": [
                    {
                      "name": "E92",
                      "letters": "Q"
                    },
                    {
                      "name": "N155",
                      "letters": "H"
                    }
                  ]
                },
                {
                  "sum": [
                    {
                      "name": "Q148",
                      "letters": "H/K/R"
                    },
                    {
                      "name": "N155",
                      "letters": "H"
                    }
                  ]
                }
              ],
              "complexe": {
                "mutation": {
                  "name": "Q148",
                  "letters": "H/K/R"
                },
                "associateMutationsList": {
                  "number": 2,
                  "atLeast": true,
                  "mutations": [
                    {
                      "name": "L74",
                      "letters": "I"
                    },
                    {
                      "name": "T97",
                      "letters": "A"
                    },
                    {
                      "name": "E138",
                      "letters": "A/K/T"
                    },
                    {
                      "name": "G140",
                      "letters": "A/C/S"
                    }
                  ]
                }
              }
            },
            "withPossibleResistance": {
              "mutations": [
                {
                  "name": "T66",
                  "letters": "K"
                }
              ],
              "complexe": {
                "mutation": {
                  "name": "Q148",
                  "letters": "H/K/R"
                },
                "associateMutationsList": {
                  "number": 1,
                  "mutations": [
                    {
                      "name": "L74",
                      "letters": "I"
                    },
                    {
                      "name": "E138",
                      "letters": "A/K/T"
                    },
                    {
                      "name": "G149",
                      "letters": "A/C/S"
                    }
                  ]
                }
              }
            }
          },
          {
            "name": "cabotegravir",
            "abbreviation": "CAB",
            "withResistance": {
              "mutations": [
                {
                  "name": "G118",
                  "letters": "R"
                },
                {
                  "name": "F121",
                  "letters": "Y"
                },
                {
                  "name": "E138",
                  "letters": "A/K/T"
                },
                {
                  "name": "G140",
                  "letters": "A/C/R/S"
                },
                {
                  "name": "N144",
                  "letters": "D"
                },
                {
                  "name": "Q148",
                  "letters": "H/K/R"
                },
                {
                  "name": "V151",
                  "letters": "L"
                },
                {
                  "name": "S153",
                  "letters": "F/Y"
                },
                {
                  "name": "N155",
                  "letters": "H"
                },
                {
                  "name": "S230",
                  "letters": "R"
                },
                {
                  "name": "R263",
                  "letters": "K"
                }
              ],
              "sums": [
                {
                  "sum": [
                    {
                      "name": "T66",
                      "letters": "K"
                    },
                    {
                      "name": "L74",
                      "letters": "M"
                    }
                  ]
                },
                {
                  "sum": [
                    {
                      "name": "L74",
                      "letters": "I"
                    },
                    {
                      "name": "E92",
                      "letters": "Q"
                    }
                  ]
                }
              ]
            },
            "withPossibleResistance": {
              "mutations": [
                {
                  "name": "T66",
                  "letters": "K"
                }
              ]
            }
          },
          {
            "name": "bictegravir",
            "abbreviation": "BIC",
            "withResistance": {
              "mutations": [
                {
                  "name": "G118",
                  "letters": "R"
                },
                {
                  "name": "F121",
                  "letters": "Y"
                },
                {
                  "name": "E138",
                  "letters": "A/K/T"
                },
                {
                  "name": "G140",
                  "letters": "A/C/R/S"
                },
                {
                  "name": "N144",
                  "letters": "D"
                },
                {
                  "name": "Q148",
                  "letters": "H/K/R"
                },
                {
                  "name": "V151",
                  "letters": "L"
                },
                {
                  "name": "S153",
                  "letters": "F/Y"
                },
                {
                  "name": "N155",
                  "letters": "H"
                },
                {
                  "name": "S230",
                  "letters": "R"
                },
                {
                  "name": "R263",
                  "letters": "K"
                }
              ],
              "sums": [
                {
                  "sum": [
                    {
                      "name": "T66",
                      "letters": "K"
                    },
                    {
                      "name": "L74",
                      "letters": "M"
                    }
                  ]
                },
                {
                  "sum": [
                    {
                      "name": "L74",
                      "letters": "I"
                    },
                    {
                      "name": "E92",
                      "letters": "Q"
                    }
                  ]
                }
              ]
            },
            "withPossibleResistance": {
              "mutations": [
                {
                  "name": "T66",
                  "letters": "K"
                }
              ]
            }
          }
        ]
      },
      {
        "name": "CAPSID INHIBITORS",
        "listArv": [
          {
            "name": "lenacapavir",
            "abbreviation": "LEN",
            "withResistance": {
              "mutations": [
                {
                  "name": "L56",
                  "letters": "I"
                },
                {
                  "name": "M66",
                  "letters": "I"
                },
                {
                  "name": "Q67",
                  "letters": "H/K/N"
                },
                {
                  "name": "K70",
                  "letters": "H/N/R/S"
                },
                {
                  "name": "N74",
                  "letters": "D/S"
                },
                {
                  "name": "T107",
                  "letters": "A/C/N"
                }
              ]
            },
            "withPossibleResistance": {

            }
          }
        ]
      }
    ]
    } as Global);

    */
  }
}
describe('WelcomeComponent (class only)', () => {

let mainService: MainService;
let comp: FormFieldComponent;

beforeEach(() => {
  TestBed.configureTestingModule({
    // provide the component-under-test and dependent service
    providers: [
      FormFieldComponent,
      { provide: MainService, useClass: MockService }
    ]
  });
  // inject both the component and the dependent service.
   comp = TestBed.inject(FormFieldComponent);
  mainService = TestBed.inject(MainService);
});

  it('get data from service', () => {
    comp.ngOnInit();

    let valuesArray = [

      "A71I/L,A71V/T,A98G,I62V,K103H/N/S/T,L10I,L63P,L89I/M/R/T,M184V/I,P225H,V77I",
      "M36I,T97A,V106I",
      "L33V,L63P",
      "L63P",
      "I62V,L63P,M184V/I,M36I",
      "L63P,V77I",
      "I62V,L63P,V77I",
      "G16E,H69I/N/Q/R/Y,I15V,I62V,K20M/R,L63P,M36I,V77I",
      "M36I",
      "M36I,V77I",
      "A71V/T,H69I/N/Q/R/Y,K20M/R,L63P,V72I,V77I",
      "I62V,M184V/I,M230I/L/V,M36I,T215I/L/N/S/V,V72I",
      "D60E,K20M/R,V77I",
      "D60E,H69I/N/Q/R/Y,I15V,I62V,L63P,V77I",
      "H69I/N/Q/R/Y,L63P,V77I",
      "D60E,G16E,I62V,L74I,M36I",
      "L10F/V,L63P,V77I",
      "V77I",
      "A71V/T,K20M/R,L63P,V77I",
      "G16E,H69I/N/Q/R/Y,I15V,I62V,V77I",
      "G16E,I15V,V77I",
      "L63P,M36I",
      "A71V/T,L63P",
      "D60E,K103H/N/S/T,K20M/R,L10F/V,L33V,M36I,V11I",
      "D30N,G16E,G73S,I62V,L63P,M36I",
      "L63P,V77I",
      "I15V,I62V,L63P,M36I,V179I/L/M/T",
      "A98S,V179I/L/M/T,V77I",
      "I15V,V77I",
      "H69I/N/Q/R/Y,I15V,I62V,K103H/N/S/T,L63P,V77I",
      "D60E,G16E,I15V,I62V,L63P,L89I/M/R/T,M36I,V179D,V77I",
      "A98S,I15V,I62V,M36L/V",
      "E157Q,H69I/N/Q/R/Y,H69K,I62V,M36I,M36L/V",
      "A71V/T",
      "D60E,H69K,L63P,M36I",
      "L10F/R/V,L63P",
      "V77I",
      "I15V,I62V,L63P,M36I",
      "A98S,K103H/N/S/T,L33V,V179I/L/M/T",
      "A71V/T,D60E,I62V,L63P",
      "I15V,I54V,L63P,M184V/I,V82A/F/T",
      "G190A/C/Q/S/T/V,H69I/N/Q/R/Y,I62V,L63P,L74V,L90M,M184V/I,M36I,N155H,T215I/L/N/S/V,V77I,Y181C",
      "D60E,I15V,I62V,M36I,Q58E",
      "K65R",
      "I54L,I62V,M184V/I,M41L,R41K,T215Y/F,V77I",
      "I15V,M230L",
      "D60E,H69I/N/Q/R/Y,R41K,V77I",
      "E157Q,L63P",
      "E157Q,V77I",
      "A71V/T,A98S,E157Q,E92Q,I62V,I84V,K20M/R,L63P,L74M,L74V,L89I/M/R/T,M184V/I,M36I,Q58E,Y115F,Y143C/H/R"
 ];

    valuesArray.forEach(string => {
      const r = string.split(',');
      const clearR: string[] = [];
      const result: string[][] = [];
      result[-1] = [];// resistance
      result[0] = []; // possible resistance
      result[1] = []; // no resistance

      r.forEach(value => {
        const [word, word2] = value.split(/\d+/g);
        const digits = value.match(/\d+/g);

        if ( word2.includes("/")){
          const var1 = word2.split("/");
          var1.forEach(value1 => {
            clearR.push(word + digits + value1);
          })
        } else{
          clearR.push(value);
        }
      })

      //console.log("Table clearR : ", clearR.length)

      clearR.forEach(value => {
        functions.actionMutation(comp.globalData.rules, value,  true );
      });

      const p: PatientSummary = functions.getPatientSummary(comp.globalData);
      comp.checkResult(p.getAllPatientMutation())

      const showData = comp.globalData.rules.filter(value => value.showInResult);
      showData.forEach(value => {
        value.listArv.forEach(value1 => {
          result[value1.isPossible].push(value1.abbreviation);
          //console.log("Arv possible : ", value1.isPossible, value1.name)
        })
      })
      // console.log("result resistance" , result[-1]);
      console.log(result[0] + "|" + result[-1]);

      comp.reset();
    });
  })
});


