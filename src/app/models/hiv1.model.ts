export class PatientSummary {
  list: DetailPatientSummary[] = [];

  constructor() {
  }

  getAllPatientMutation() : string[] {
    let arr : string[] = [];
    this.list.map(value => {
      arr.push.apply(arr, value.getPatientMutation());
    })
    return arr;
  }
}

export class DetailPatientSummary {
  ruleName: string;
  listMutations!: Mutation[];

  constructor(ruleName: string) {
    this.ruleName = ruleName;
  }

  public getPatientMutation(): string[] {
    return this.listMutations.map(value => value.fullNamesMutations);
  }
}

export interface Mutation {
  name: string;
  letters: string;
  fullNamesMutations: string;
  selected: boolean;
  completeListMutation: string[];
  detail?: string;
}

class MutationClass implements Mutation {

  get letters(): string { return this.initData.letters; }
  get fullNamesMutations(): string { return this.initData.fullNamesMutations; }
  get name(): string { return this.initData.name; }
  get selected(): boolean { return this.initData.selected; }
  get completeListMutation(): string[] { return this.initData.completeListMutation; }

  constructor(private initData: Mutation) {
    initData.selected = false
    this.getArrayMutation();
    this.fullNamesMutations = this.initData.name + this.initData.letters;
  }

  public getArrayMutation(): void {
    this.initData.completeListMutation = this.letters.split("/").map(value => {
      return this.name + value;
    });
  }

  set fullNamesMutations(full: string){
    this.initData.fullNamesMutations = full;
  }
}

export interface AssociateMutationsList {
  number: number;
  atLeast: boolean;
  mutations: Mutation[];
}

export interface Sum {
  sum: Mutation[];
}

export interface WithResistance  {
  associateMutationsList: AssociateMutationsList;
  mutations: Mutation[];
  sums: Sum[];
  complexe: Complexe;

}

export interface WithPossibleResistance {
  associateMutationsList: AssociateMutationsList;
  mutations: Mutation[];
  sums: Sum[];
  complexe: Complexe;
}

export interface Complexe {
  mutation: Mutation;
  associateMutationsList: AssociateMutationsList;
}

export interface ListArv {
  name: string;
  abbreviation: string;
  withResistance: WithResistance;
  withPossibleResistance: WithPossibleResistance;
  isPossible: number; // 1 no resistance / 0 possible resistance / -1 resistance
  alert: boolean;
}

export interface Rule {
  name: string;
  listArv: ListArv[];
  showInResult: boolean;
}

export interface Informations{
  version: number;
  date: string;
}

export interface Global {
  rules: Rule[];
  informations: Informations;
  arvNaturallyResistant: string[];
}

export class functions {

  public static getListFromMutation(_mutation : Mutation): string[] {
    return _mutation.letters.split('/').map(value1 => {
      return _mutation.name + value1;
    });
  }

  public static getAllFullNamesMutationsFromARVString(rule: Rule) : string[] {
    let arr = this.getAllMutationsFromRules(rule);
    let list: string[] = [];
    arr.map(value1 => {
      return value1.completeListMutation;
    }).forEach(value2 => {
      list.push.apply(list, value2.map(value => {
        return value;
      }));
    })
    return [...new Set(list)] ;
  }

  public static getAllMutationsFromRules(rule: Rule) : Mutation[]{
    let arr: Mutation[] = [];

    rule.listArv.forEach(value => {
      this.getAllMutationsFromArv(value).forEach(value1 => {
        arr.push(value1);
      })
    });

    return arr;
}

  public static getAllMutationsFromArv(value: ListArv): Mutation[] {
    let arr: Mutation[] = [];

    value.withPossibleResistance.associateMutationsList?.mutations.forEach(value1 => {
      arr.push(value1);
    });

    value.withPossibleResistance.mutations?.forEach(value1 => {
      arr.push(value1);
    });

    value.withPossibleResistance.sums?.forEach(sum => {
      sum.sum.forEach(mutation => {
        arr.push(mutation);
      });
    });

    if (value.withPossibleResistance.complexe) {
      arr.push(value.withPossibleResistance.complexe.mutation);

      value.withPossibleResistance.complexe.associateMutationsList.mutations.forEach(value1 => {
        arr.push(value1);
      });
    }
    value.withResistance.associateMutationsList?.mutations.forEach(value1 => {
      arr.push(value1);
    });

    value.withResistance.mutations?.forEach(value1 => {
      arr.push(value1);
    });

    value.withResistance.sums?.forEach(sum => {
      sum.sum?.forEach(mutation => {
        arr.push(mutation);
      });
    });

    if (value.withResistance.complexe) {
      arr.push(value.withResistance.complexe.mutation);

      value.withResistance.complexe.associateMutationsList.mutations.forEach(value1 => {
        arr.push(value1);
      });
    }
    console.log(arr)
    return arr;
  }

  public static actionMutation(rules: Rule[], mutation: string, selected : boolean){

    rules.forEach(rule => {

      let mutationsSelected:  number= 0;
      let mutationFoundInARV = false;

      rule.listArv.forEach(arv => {

        if ( arv.withPossibleResistance.associateMutationsList ){
          arv.withPossibleResistance.associateMutationsList?.mutations.forEach(value1 => {
            value1.completeListMutation.forEach(value => {
              if (value === mutation) {
                value1.selected = selected;
                mutationFoundInARV = true;
              }
            })
          });
          mutationsSelected += Number(arv.withPossibleResistance.associateMutationsList.mutations.filter(value1 => value1.selected).length);
        }
        if ( arv.withPossibleResistance.mutations ) {
          arv.withPossibleResistance.mutations.forEach(value1 => {
            value1.completeListMutation.forEach(value => {
              if (value === mutation) {
                value1.selected = selected;
                mutationFoundInARV = true;
              }
            })
          });
          mutationsSelected += Number(arv.withPossibleResistance.mutations?.filter(value1 => value1.selected).length);
        }

        if(arv.withPossibleResistance.sums) {
          arv.withPossibleResistance.sums.forEach(sum => {
            sum.sum.forEach(value1 => {
              value1.completeListMutation.forEach(value => {
                if (value === mutation) {
                  value1.selected = selected;
                  mutationFoundInARV = true;
                }
              })
            });
          });
          arv.withPossibleResistance.sums.forEach(value => {
            mutationsSelected += Number(value.sum.filter(value1 => value1.selected).length);
          })
        }

        if (arv.withPossibleResistance.complexe) {

          arv.withPossibleResistance.complexe.mutation.completeListMutation.forEach(value => {
            if (value === mutation) {
              arv.withPossibleResistance.complexe.mutation.selected = selected;
              if ( selected ) {
                mutationsSelected = Number(mutationsSelected + 1);
              } else {
                mutationsSelected = Number(mutationsSelected - 1);
              }
              mutationFoundInARV = true;
            }
          })

          arv.withPossibleResistance.complexe?.associateMutationsList.mutations.forEach(value1 => {
            value1.completeListMutation.forEach(value => {
              if (value === mutation) {
                value1.selected = selected;
                mutationFoundInARV = true;
              }
            })
          });
          mutationsSelected += Number(arv.withPossibleResistance.complexe?.associateMutationsList.mutations.filter(value1 => value1.selected).length);
        }

      /////////
      if (arv.withResistance.associateMutationsList) {
        arv.withResistance.associateMutationsList.mutations.forEach(value1 => {
          value1.completeListMutation.forEach(value => {
            if (value === mutation) {
              value1.selected = selected;
              mutationFoundInARV = true;
            }
          })
        });
        mutationsSelected += Number(arv.withResistance.associateMutationsList.mutations.filter(value1 => value1.selected).length);
      }

      if ( arv.withResistance.mutations ) {
        arv.withResistance.mutations?.forEach(value1 => {
          value1.completeListMutation.forEach(value => {
            if (value === mutation) {
              value1.selected = selected;
              mutationFoundInARV = true;
            }
          })
        });
        mutationsSelected += arv.withResistance.mutations?.filter(value1 => value1.selected).length;
      }

      if (arv.withResistance.sums ) {
        arv.withResistance.sums?.forEach(sum => {
          sum.sum.forEach(value1 => {
            value1.completeListMutation.forEach(value => {
              if (value === mutation) {
                value1.selected = selected;
                mutationFoundInARV = true;
              }
            })
          });
        });
        arv.withResistance.sums?.forEach(value => {
          mutationsSelected +=value.sum.filter(value1 => value1.selected).length;
        })
      }

      if ( arv.withResistance.complexe) {
        arv.withResistance.complexe.mutation.completeListMutation.forEach(value => {
          if (value === mutation) {
            arv.withResistance.complexe.mutation.selected = selected;
            if ( selected ) {
              mutationsSelected = mutationsSelected + 1;
            } else {
              mutationsSelected = mutationsSelected - 1;
            }
            mutationFoundInARV = true;
          }
        })

        if ( arv.withResistance.complexe.associateMutationsList ) {
          arv.withResistance.complexe?.associateMutationsList.mutations.forEach(value1 => {
            value1.completeListMutation.forEach(value => {
              if (value === mutation) {
                value1.selected = selected;
                mutationFoundInARV = true;
              }
            })
          });
          mutationsSelected += arv.withResistance.complexe?.associateMutationsList.mutations.filter(value1 => value1.selected).length;
        }
      }
    });

       /**
       * Si l'on a trouvé la mutation dans au moins un ARV
       * ET que l'on a supprimé une mutation de la liste
       * ET que aucune mutation n'ont été trouvé dans cette ARV
       * -> On n'affiche pas cet ARV dans les résultats
       */
      if ( mutationFoundInARV && ! selected && mutationsSelected <= 0 ) {
        rule.showInResult = false;
      } else if ( mutationFoundInARV ){
        rule.showInResult = true;
      }

    });
    return rules;
  }

  static getPatientSummary(data: Global) : PatientSummary {
    let ps = new PatientSummary();

    // on recherche dans toutes les données, quelle classe médicamenteuse à une mutation sélectionnée.
    data.rules.forEach(value => {
      let dps = new DetailPatientSummary(value.name);
      dps.listMutations = this.getAllMutationsFromRules(value).filter(value1 => {
        return value1.selected;
      });

      if ( dps.listMutations.length > 0 ) {
        // suppression des doublons
        // source : https://stackoverflow.com/questions/2218999/how-to-remove-all-duplicates-from-an-array-of-objects
        dps.listMutations = dps.listMutations.filter((value, index, self) =>
            index === self.findIndex((t) => (
              t.fullNamesMutations === value.fullNamesMutations && t.name === value.name && t.letters === value.letters
            ))
        )

        // On ajoute la liste des mutations à l'objet
        ps.list.push(dps)
      }
    });

    return ps ;
  }

  static generateFullData(data: Global): Global {
    data.rules.forEach(rule => {
      rule.listArv.forEach(arv => {
        rule.showInResult = false;
        arv.withPossibleResistance.mutations?.forEach((mutation) => {
          new MutationClass(mutation);
        })
        arv.withPossibleResistance.associateMutationsList?.mutations.forEach(mutation => {
          new MutationClass(mutation);
        })
        arv.withPossibleResistance.sums?.forEach(sum => {
          sum.sum.forEach(mutation => {
            new MutationClass(mutation);
          })
        });
        arv.withPossibleResistance.complexe?.associateMutationsList.mutations.forEach(mutation => {
          new MutationClass(mutation);
        })
        if( arv.withPossibleResistance.complexe ) {
          new MutationClass(arv.withPossibleResistance.complexe.mutation);
        }
        arv.withResistance.mutations?.forEach(mutation => {
          new MutationClass(mutation);
        })
        arv.withResistance.associateMutationsList?.mutations.forEach(mutation => {
          new MutationClass(mutation);
        })
        arv.withResistance.sums?.forEach(sum => {
          sum.sum?.forEach(mutation => {
            new MutationClass(mutation);
          })
        });
        arv.withResistance.complexe?.associateMutationsList.mutations.forEach(mutation => {
          new MutationClass(mutation);
        });
        if( arv.withResistance.complexe ) {
          new MutationClass(arv.withResistance.complexe.mutation);
        }
      })
    });
    return data;
  }
}
