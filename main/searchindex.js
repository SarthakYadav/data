Search.setIndex({"docnames": ["getting_started_with_torchdata_nodes", "index", "migrate_to_nodes_from_utils", "stateful_dataloader_tutorial", "torchdata.nodes", "torchdata.stateful_dataloader", "what_is_torchdata_nodes"], "filenames": ["getting_started_with_torchdata_nodes.rst", "index.rst", "migrate_to_nodes_from_utils.rst", "stateful_dataloader_tutorial.rst", "torchdata.nodes.rst", "torchdata.stateful_dataloader.rst", "what_is_torchdata_nodes.rst"], "titles": ["Getting Started With <code class=\"docutils literal notranslate\"><span class=\"pre\">torchdata.nodes</span></code> (beta)", "TorchData", "Migrating to <code class=\"docutils literal notranslate\"><span class=\"pre\">torchdata.nodes</span></code> from <code class=\"docutils literal notranslate\"><span class=\"pre\">torch.utils.data</span></code>", "Stateful DataLoader Tutorial", "<code class=\"docutils literal notranslate\"><span class=\"pre\">torchdata.nodes</span></code> (beta)", "Stateful DataLoader", "What is <code class=\"docutils literal notranslate\"><span class=\"pre\">torchdata.nodes</span></code> (beta)?"], "terms": {"june": [0, 1, 2, 3, 4, 5, 6], "2024": [0, 1, 2, 3, 4, 5, 6], "statu": [0, 1, 2, 3, 4, 5, 6], "updat": [0, 1, 2, 3, 4, 5, 6], "remov": [0, 1, 2, 3, 4, 5, 6], "datapip": [0, 1, 2, 3, 4, 5, 6], "dataload": [0, 1, 2, 4, 6], "v2": [0, 1, 2, 3, 4, 5, 6], "we": [0, 1, 2, 3, 4, 5, 6], "ar": [0, 1, 2, 3, 4, 5, 6], "re": [0, 1, 2, 3, 4, 5, 6], "focus": [0, 1, 2, 3, 4, 5, 6], "repo": [0, 1, 2, 3, 4, 5, 6], "an": [0, 1, 2, 3, 4, 5, 6], "iter": [0, 1, 2, 4, 5, 6], "enhanc": [0, 1, 2, 3, 4, 5, 6], "torch": [0, 1, 3, 4, 5], "util": [0, 1, 3, 4, 5], "data": [0, 1, 3, 4, 5], "do": [0, 1, 2, 3, 4, 5], "plan": [0, 1, 2, 3, 4, 5, 6], "continu": [0, 1, 2, 3, 4, 5, 6], "develop": [0, 2, 3, 4, 5, 6], "maintain": [0, 1, 2, 3, 4, 5, 6], "dataloaderv2": [0, 1, 2, 3, 4, 5, 6], "solut": [0, 1, 2, 3, 4, 5, 6], "thei": [0, 1, 2, 3, 4, 5, 6], "from": [0, 1, 3, 4, 5, 6], "ll": [0, 1, 2, 3, 4, 5, 6], "also": [0, 1, 2, 3, 4, 5, 6], "revisit": [0, 1, 2, 3, 4, 5, 6], "refer": [0, 2, 3, 4, 5, 6], "pytorch": [0, 2, 3, 4, 5, 6], "In": [0, 1, 2, 3, 4, 5, 6], "releas": [0, 1, 2, 3, 4, 5, 6], "0": [0, 1, 2, 3, 4, 5, 6], "8": [0, 1, 2, 3, 4, 5, 6], "juli": [0, 1, 2, 3, 4, 5, 6], "mark": [0, 1, 2, 3, 4, 5, 6], "deprec": [0, 1, 2, 3, 4, 5, 6], "10": [0, 1, 2, 3, 4, 5, 6], "late": [0, 1, 2, 3, 4, 5, 6], "delet": [0, 1, 2, 3, 4, 5, 6], "exist": [0, 1, 2, 3, 4, 5, 6], "user": [0, 1, 2, 3, 4, 5, 6], "advis": [0, 1, 2, 3, 4, 5, 6], "pin": [0, 1, 2, 3, 4, 5, 6], "9": [0, 1, 2, 3, 4, 5, 6], "older": [0, 1, 2, 3, 4, 5, 6], "version": [0, 1, 2, 3, 4, 5, 6], "until": [0, 1, 2, 3, 4, 5, 6], "abl": [0, 1, 2, 3, 4, 5, 6], "migrat": [0, 1, 3, 4, 5, 6], "awai": [0, 1, 2, 3, 4, 5, 6], "subsequ": [0, 1, 2, 3, 4, 5, 6], "includ": [0, 1, 2, 3, 4, 5, 6], "pleas": [0, 1, 2, 3, 4, 5, 6], "reach": [0, 1, 2, 3, 4, 5, 6], "out": [0, 1, 2, 3, 4, 5, 6], "you": [0, 1, 2, 3, 4, 5, 6], "suggest": [0, 1, 2, 3, 4, 5, 6], "comment": [0, 1, 2, 3, 4, 5, 6], "us": [0, 1, 2, 3, 4, 5, 6], "thi": [0, 1, 2, 3, 4, 5, 6], "issu": [0, 1, 2, 3, 4, 5, 6], "feedback": [0, 1, 2, 3, 4, 5, 6], "instal": 0, "pip": 0, "wrap": [0, 2, 4], "ani": [0, 3, 4, 5, 6], "convert": [0, 2, 4], "basenod": [0, 2, 4], "import": [0, 2, 3], "iterablewrapp": [0, 2, 4], "parallelmapp": [0, 2, 4], "loader": [0, 2, 4, 5, 6], "rang": [0, 3, 4, 6], "map_fn": [0, 2, 4], "lambda": [0, 5], "x": [0, 3, 4], "2": [0, 2, 3, 4, 5], "num_work": [0, 2, 3, 4, 5], "3": [0, 2, 3, 6], "method": [0, 2, 3, 4, 5], "thread": [0, 2, 4, 6], "result": [0, 2, 5, 6], "list": [0, 2, 3, 4, 5], "print": [0, 2, 3], "1": [0, 2, 3, 4, 5], "4": [0, 2, 3], "16": [0, 2], "25": [0, 2], "36": [0, 2], "49": [0, 2], "64": [0, 2], "81": [0, 2], "still": [0, 1, 4, 5, 6], "support": [0, 2, 4, 6], "can": [0, 1, 2, 3, 4, 5, 6], "your": [0, 2, 3, 5, 6], "dataset": [0, 1, 4, 5], "s": [0, 2, 4, 5, 6], "see": [0, 1, 2, 5, 6], "depth": 0, "samplerwrapp": [0, 2, 4], "class": [0, 2, 3, 4, 5, 6], "squareddataset": [0, 2], "def": [0, 2, 3], "__getitem__": [0, 2, 3, 4], "self": [0, 2, 3], "i": [0, 2, 3, 5], "int": [0, 2, 3, 4, 5], "return": [0, 2, 3, 4, 5, 6], "__len__": [0, 2, 3, 5], "randomsampl": [0, 2, 3, 5, 6], "For": [0, 1, 3, 4, 6], "fine": 0, "grain": 0, "control": 0, "order": [0, 3, 4], "defin": [0, 2, 3, 4, 5, 6], "own": [0, 2, 5], "simpli": 0, "appli": [0, 2, 4], "map": [0, 1, 4, 5], "function": [0, 2, 4, 5, 6], "indic": [0, 2, 4, 5, 6], "mai": [0, 1, 2, 4, 6], "reus": 0, "multi": [0, 2, 5], "epoch": [0, 2, 4, 5, 6], "part": 1, "project": 1, "open": 1, "sourc": [1, 4], "machin": 1, "learn": 1, "framework": [1, 6], "beta": 1, "common": [1, 2, 6], "modular": 1, "load": [1, 2, 4, 5, 6], "primit": [1, 6], "easili": 1, "construct": 1, "flexibl": [1, 6], "perform": [1, 2, 4], "pipelin": [1, 2, 4, 6], "And": 1, "few": [1, 6], "featur": [1, 2, 6], "prototyp": 1, "stage": 1, "describ": 1, "document": 1, "classifi": 1, "stabl": [1, 4], "These": 1, "long": 1, "term": 1, "should": [1, 4, 5, 6], "gener": [1, 2, 3, 4, 5], "major": 1, "limit": [1, 3, 4, 6], "gap": 1, "expect": [1, 4, 6], "backward": 1, "compat": 1, "although": [1, 6], "break": [1, 3, 6], "chang": 1, "happen": 1, "notic": 1, "given": 1, "one": [1, 2, 4, 5, 6], "ahead": [1, 4], "time": [1, 4, 5, 6], "tag": 1, "becaus": [1, 5, 6], "base": [1, 4, 5], "need": [1, 2, 6], "improv": 1, "coverag": 1, "across": [1, 3, 5], "oper": [1, 5, 6], "yet": [1, 2], "complet": [1, 4, 5], "commit": 1, "through": [1, 4, 6], "classif": 1, "howev": [1, 2, 5, 6], "typic": 1, "avail": [1, 4], "binari": 1, "distribut": [1, 3, 4, 5, 6], "like": [1, 2, 5, 6], "pypi": 1, "conda": 1, "except": [1, 4], "sometim": 1, "behind": 1, "run": [1, 3], "flag": 1, "earli": [1, 6], "test": [1, 2, 3], "what": [1, 2], "node": 1, "why": 1, "how": [1, 2, 4, 5], "doe": [1, 2], "design": 1, "choic": 1, "state": [1, 2, 4, 6], "get": [1, 2, 4, 6], "start": [1, 2, 4, 5, 6], "With": [1, 6], "sampler": [1, 2, 3, 4, 5, 6], "style": [1, 5], "iterabledataset": [1, 3, 4, 5], "save": [1, 2, 4], "custom": [1, 5], "torchtun": 1, "torchaudio": 1, "torchvis": 1, "torchelast": 1, "torchserv": 1, "xla": 1, "devic": [1, 4, 5], "index": [1, 2, 5], "guid": 2, "intend": 2, "help": [2, 6], "peopl": 2, "familiar": [2, 4], "statefuldataload": [2, 3, 5], "provid": [2, 3, 4], "ground": 2, "demonstr": 2, "achiev": 2, "most": [2, 4, 6], "It": [2, 4, 6], "least": [2, 4], "well": 2, "let": [2, 6], "look": 2, "constructor": 2, "arg": [2, 4, 5], "go": [2, 6], "__init__": [2, 3], "_t_co": [2, 5], "batch_siz": [2, 3, 4, 5], "option": [2, 3, 4, 5], "shuffl": [2, 5], "bool": [2, 4, 5], "none": [2, 3, 4, 5, 6], "union": [2, 5], "batch_sampl": [2, 5], "collate_fn": [2, 5], "_collate_fn_t": 2, "pin_memori": [2, 4, 5], "fals": [2, 3, 4, 5], "drop_last": [2, 3, 4, 5], "timeout": [2, 5], "float": [2, 3, 4, 5], "worker_init_fn": [2, 5], "_worker_init_fn_t": 2, "multiprocessing_context": [2, 4, 5], "prefetch_factor": [2, 4, 5], "persistent_work": [2, 5], "pin_memory_devic": [2, 4, 5], "str": [2, 3, 4, 5], "in_ord": [2, 4], "true": [2, 4, 5, 6], "As": 2, "referesh": 2, "here": [2, 3], "roughli": 2, "work": [2, 6], "begin": [2, 4, 6], "creat": [2, 4], "batch": [2, 3, 4, 5, 6], "If": [2, 3, 4, 5, 6], "sequentialsampl": 2, "default": [2, 3, 4, 5], "The": [2, 4, 6], "pass": [2, 4, 6], "sampl": [2, 4, 5, 6], "process": [2, 4, 5, 6], "subprocess": [2, 5], "worker": [2, 3, 4, 5, 6], "who": 2, "call": [2, 3, 4, 5, 6], "befor": [2, 5, 6], "main": [2, 5, 6], "At": [2, 4], "point": [2, 4], "tensor": [2, 3, 5], "now": [2, 6], "equival": 2, "implement": [2, 4, 5], "might": 2, "built": 2, "type": [2, 3, 5, 6], "callabl": [2, 4, 5], "tn": 2, "default_col": 2, "mapandcol": 2, "A": [2, 4], "simpl": 2, "transform": [2, 3], "take": [2, 4, 6], "collat": 2, "todo": 2, "make": [2, 5, 6], "standard": [2, 6], "__call__": 2, "batch_of_indic": 2, "To": [2, 6], "keep": [2, 6], "thing": 2, "assum": 2, "follow": [2, 3, 4, 6], "caller": 2, "nodesdataload": 2, "assert": 2, "hasattr": 2, "sinc": 2, "did": 2, "els": [2, 3], "wrapper": [2, 4], "togeth": [2, 6], "batcher": [2, 4], "accept": 2, "getitem": 2, "them": [2, 5], "map_and_col": 2, "heavi": 2, "lift": 2, "so": [2, 3, 6], "parallel": [2, 4, 6], "could": 2, "choos": [2, 4, 6], "note": [2, 4, 5], "free": [2, 6], "python": [2, 6], "eg": [2, 3], "13t": [2, 6], "xgil": 2, "gil": [2, 6], "content": 2, "slow": [2, 6], "down": [2, 5, 6], "train": [2, 3, 5, 6], "set": [2, 3, 4, 5, 6], "memori": [2, 4, 5, 6], "usual": 2, "some": [2, 4, 6], "pre": [2, 6], "fetch": [2, 3], "pinmemori": [2, 4], "prefetch": [2, 4, 5], "onc": [2, 4, 5, 6], "exhaust": [2, 4], "reset": [2, 4, 6], "new": [2, 4, 5, 6], "insteaad": 2, "which": [2, 3, 4, 5, 6], "handl": [2, 3, 5, 6], "state_dict": [2, 3, 4, 5, 6], "load_state_dict": [2, 3, 4, 5, 6], "trivial": 2, "manag": [2, 6], "len": [2, 3, 5, 6], "14": 2, "idx": [2, 3, 4], "enumer": [2, 3, 4], "after": [2, 4, 5], "ha": [2, 3, 4, 5, 6], "been": [2, 4, 5], "append": [2, 3], "batches_after_load": 2, "100": 2, "121": 2, "144": 2, "169": 2, "compar": 2, "saniti": 2, "check": 2, "loaderv1": 2, "come": [2, 4, 6], "soon": 2, "while": [2, 3], "alreadi": 2, "plug": 2, "get_worker_info": [2, 3, 6], "current": [2, 4], "believ": 2, "often": [2, 5], "shard": [2, 5], "between": [2, 4, 6], "actual": 2, "necessari": 2, "sort": 2, "onli": [2, 4, 5, 6], "heavier": 2, "similar": 2, "abov": [2, 6], "torchdata": [3, 5], "add": [3, 6], "done": [3, 6], "stateful_dataload": [3, 5], "resum": [3, 4], "previou": [3, 5], "checkpoint": [3, 5, 6], "effici": 3, "specif": 3, "rng": [3, 5], "batchsampl": 3, "patch": 3, "when": [3, 4, 5, 6], "unnecessari": 3, "mysampl": 3, "high": 3, "seed": [3, 4, 5], "g": [3, 5], "manual_se": 3, "__iter__": 3, "val": 3, "randint": 3, "size": [3, 4, 5], "yield": [3, 4, 5], "dict": [3, 4, 6], "set_stat": 3, "get_stat": [3, 4, 6], "random": [3, 4, 5], "noisyrang": 3, "mean": [3, 4, 5, 6], "std": 3, "rais": [3, 4], "indexerror": 3, "normal": 3, "nois": 3, "item": [3, 4], "set_rng_stat": 3, "get_rng_stat": 3, "both": [3, 4, 6], "singl": [3, 6], "multiprocess": [3, 4, 5], "f": 3, "dl": 3, "5": [3, 4, 6], "sd": [3, 6], "batches2": 3, "output": [3, 4], "4526": 3, "7948": 3, "dtype": 3, "float64": 3, "6": 3, "5494": 3, "0470": 3, "7412": 3, "2438": 3, "4807": 3, "0036": 3, "track": 3, "requir": 3, "each": [3, 4, 5, 6], "level": 3, "instanc": [3, 4, 5, 6], "captur": 3, "aggreg": [3, 5], "back": [3, 4], "have": [3, 4, 5, 6], "same": [3, 4], "those": 3, "myiterabledataset": 3, "worker_info": 3, "worker_id": 3, "id": [3, 5], "arr": 3, "randperm": 3, "12": 3, "11": 3, "kwarg": [4, 5], "t": 4, "compos": [4, 6], "dag": 4, "end": [4, 6], "over": [4, 6], "directli": 4, "instead": [4, 5, 6], "more": [4, 5, 6], "mybasenodeimpl": 4, "subclass": [4, 6], "must": [4, 5], "futur": 4, "next": [4, 5, 6], "__next": 4, "valu": [4, 5], "sequenc": 4, "throw": [4, 6], "stopiter": [4, 6], "initial_st": [4, 6], "good": 4, "place": 4, "put": 4, "expens": 4, "initi": [4, 6], "lazili": 4, "super": 4, "paramet": [4, 5], "last": [4, 5], "drop": [4, 5, 6], "smaller": [4, 5, 6], "than": [4, 5, 6], "even": 4, "whether": 4, "thin": 4, "protocol": 4, "restor": 4, "its": [4, 5], "warn": 4, "distinct": 4, "vs": 4, "root": 4, "restart_on_stop_iter": 4, "interfac": [4, 6], "restart": 4, "request": [4, 5, 6], "recent": 4, "mapstylewrapp": 4, "map_dataset": 4, "k": 4, "mapdataset": 4, "want": [4, 6], "copi": [4, 5, 6], "replac": [4, 5], "mapper": [4, 6], "execut": 4, "multinodeweightedsampl": 4, "source_nod": 4, "weight": 4, "stop_criteria": 4, "cycle_until_all_datasets_exhaust": 4, "rank": [4, 5], "world_siz": 4, "multipl": [4, 5, 6], "dictionari": 4, "kei": 4, "multinomi": 4, "http": [4, 6], "org": 4, "doc": 4, "html": 4, "number": [4, 5], "dataset_node_states_kei": 4, "datasets_exhausted_kei": 4, "boolean": 4, "epoch_kei": 4, "counter": 4, "num_yielded_kei": 4, "weighted_sampler_state_kei": 4, "stop": 4, "criteria": 4, "cycl": 4, "all": [4, 5, 6], "behavior": 4, "first_dataset_exhaust": 4, "first": [4, 6], "all_datasets_exhaust": 4, "On": 4, "case": [4, 5, 6], "obtain": 4, "environ": 4, "world": 4, "liter": 4, "max_concurr": 4, "snapshot_frequ": 4, "either": 4, "spawn": [4, 5], "forkserv": 4, "fork": 4, "os": 4, "queue": [4, 6], "cpu": [4, 6], "arriv": 4, "potenti": 4, "block": 4, "other": 4, "context": [4, 5], "maximum": 4, "frequenc": [4, 5], "snapshot": 4, "underli": 4, "_util": 4, "_pin_memory_loop": 4, "everi": [4, 5], "higher": 4, "store": [4, 6], "initial_epoch": 4, "epoch_updat": 4, "nearli": 4, "ident": [4, 5], "hook": 4, "set_epoch": [4, 6], "callback": 4, "object": [4, 5], "stopcriteria": 4, "unseen": 4, "seen": 4, "certain": 4, "non": [4, 5], "exactli": 4, "No": 4, "wraparound": 4, "offer": [5, 6], "mid": [5, 6], "resp": 5, "By": 5, "naiv": 5, "fast": 5, "forward": 5, "dure": 5, "under": 5, "hood": 5, "_t": 5, "snapshot_every_n_step": 5, "enabl": [5, 6], "argument": 5, "mani": [5, 6], "per": [5, 6], "reshuffl": 5, "strategi": [5, 6], "draw": 5, "specifi": 5, "mutual": 5, "exclus": 5, "merg": 5, "form": 5, "mini": 5, "cuda": 5, "element": 5, "exampl": [5, 6], "below": 5, "incomplet": 5, "divis": 5, "numer": 5, "posit": 5, "collect": 5, "alwai": 5, "neg": 5, "input": 5, "basecontext": 5, "system": 5, "base_se": 5, "keyword": 5, "advanc": 5, "total": 5, "depend": 5, "otherwis": 5, "shut": 5, "consum": 5, "allow": 5, "aliv": 5, "transfer": 5, "e": 5, "step": 5, "larg": 5, "increas": [5, 6], "ideal": 5, "reduc": [5, 6], "overhead": [5, 6], "cannot": 5, "unpickl": 5, "best": [5, 6], "practic": 5, "detail": 5, "relat": 5, "heurist": 5, "length": 5, "estim": 5, "proper": 5, "round": [5, 6], "regardless": 5, "configur": [5, 6], "repres": [5, 6], "guess": 5, "trust": 5, "code": [5, 6], "correctli": 5, "avoid": 5, "duplic": [5, 6], "inaccur": 5, "broken": 5, "ones": 5, "worth": 5, "unfortun": 5, "detect": 5, "two": [5, 6], "interact": 5, "reproduc": 5, "question": 5, "librari": 6, "chain": 6, "proc": 6, "stream": 6, "program": 6, "model": 6, "desir": 6, "introduc": 6, "approach": 6, "strive": 6, "possibl": 6, "extens": 6, "itself": 6, "notabl": 6, "__next__": 6, "nor": 6, "just": 6, "definit": 6, "bunch": 6, "rough": 6, "spot": 6, "read": 6, "ipc": 6, "startup": 6, "forc": 6, "peak": 6, "bound": 6, "particular": 6, "up": 6, "primarili": 6, "give": 6, "great": 6, "veri": 6, "grow": 6, "beyond": 6, "unless": 6, "jump": 6, "hoop": 6, "special": 6, "where": 6, "combin": 6, "produc": 6, "concept": 6, "try": 6, "abstract": 6, "consid": 6, "scenario": 6, "dsa": 6, "dsb": 6, "20": 6, "robin": 6, "uniformli": 6, "feed": 6, "our": 6, "trainer": 6, "mayb": 6, "emit": 6, "tupl": 6, "swap": 6, "distributedsampl": 6, "address": 6, "deal": 6, "therebi": 6, "complex": 6, "fairli": 6, "reason": 6, "But": 6, "about": 6, "figur": 6, "present": 6, "video": 6, "decod": 6, "benchmark": 6, "conf": 6, "show": 6, "par": 6, "better": 6, "gpu": 6, "easier": 6, "boost": 6, "ran": 6, "imagenet": 6, "disk": 6, "satur": 6, "bandwidth": 6, "significantli": 6, "lower": 6, "blogpost": 6, "eari": 6, "2025": 6, "imagenet_benchmark": 6, "py": 6, "github": 6, "com": 6, "pull": 6, "1362": 6, "thought": 6, "One": 6, "difficult": 6, "made": 6, "wa": 6, "disallow": 6, "move": 6, "foundat": 6, "around": 6, "explicit": 6, "implicitli": 6, "stack": 6, "found": 6, "write": 6, "convolut": 6, "basic": 6, "feel": 6, "natur": 6, "would": 6, "twice": 6, "live": 6, "problem": 6, "rare": 6, "assumpt": 6, "dev": 6, "opinion": 6, "wors": 6, "don": 6, "right": 6}, "objects": {"torchdata": [[4, 0, 0, "-", "nodes"], [5, 0, 0, "-", "stateful_dataloader"]], "torchdata.nodes": [[4, 1, 1, "", "BaseNode"], [4, 1, 1, "", "Batcher"], [4, 1, 1, "", "IterableWrapper"], [4, 1, 1, "", "Loader"], [4, 3, 1, "", "MapStyleWrapper"], [4, 3, 1, "", "Mapper"], [4, 1, 1, "", "MultiNodeWeightedSampler"], [4, 1, 1, "", "ParallelMapper"], [4, 1, 1, "", "PinMemory"], [4, 1, 1, "", "Prefetcher"], [4, 1, 1, "", "SamplerWrapper"], [4, 1, 1, "", "Stateful"], [4, 1, 1, "", "StopCriteria"]], "torchdata.nodes.BaseNode": [[4, 2, 1, "", "get_state"], [4, 2, 1, "", "next"], [4, 2, 1, "", "reset"], [4, 2, 1, "", "state_dict"]], "torchdata.nodes.Batcher": [[4, 2, 1, "", "get_state"], [4, 2, 1, "", "next"], [4, 2, 1, "", "reset"]], "torchdata.nodes.IterableWrapper": [[4, 2, 1, "", "get_state"], [4, 2, 1, "", "next"], [4, 2, 1, "", "reset"]], "torchdata.nodes.Loader": [[4, 2, 1, "", "load_state_dict"], [4, 2, 1, "", "state_dict"]], "torchdata.nodes.MultiNodeWeightedSampler": [[4, 2, 1, "", "get_state"], [4, 2, 1, "", "next"], [4, 2, 1, "", "reset"]], "torchdata.nodes.ParallelMapper": [[4, 2, 1, "", "get_state"], [4, 2, 1, "", "next"], [4, 2, 1, "", "reset"]], "torchdata.nodes.PinMemory": [[4, 2, 1, "", "get_state"], [4, 2, 1, "", "next"], [4, 2, 1, "", "reset"]], "torchdata.nodes.Prefetcher": [[4, 2, 1, "", "get_state"], [4, 2, 1, "", "next"], [4, 2, 1, "", "reset"]], "torchdata.nodes.SamplerWrapper": [[4, 2, 1, "", "get_state"], [4, 2, 1, "", "next"], [4, 2, 1, "", "reset"]], "torchdata.stateful_dataloader": [[5, 1, 1, "", "StatefulDataLoader"]]}, "objtypes": {"0": "py:module", "1": "py:class", "2": "py:method", "3": "py:function"}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "class", "Python class"], "2": ["py", "method", "Python method"], "3": ["py", "function", "Python function"]}, "titleterms": {"get": 0, "start": 0, "With": 0, "torchdata": [0, 1, 2, 4, 6], "node": [0, 2, 4, 6], "beta": [0, 4, 6], "gener": [0, 6], "exampl": [0, 1], "sampler": 0, "develop": 1, "note": 1, "api": 1, "refer": 1, "tutori": [1, 3], "pytorch": 1, "librari": 1, "indic": 1, "migrat": 2, "from": 2, "torch": [2, 6], "util": [2, 6], "data": [2, 6], "map": [2, 3, 6], "style": [2, 3, 6], "dataset": [2, 3, 6], "iterabledataset": [2, 6], "state": [3, 5], "dataload": [3, 5], "save": 3, "load": 3, "custom": 3, "iter": 3, "what": 6, "why": 6, "multiprocess": 6, "suck": 6, "random": 6, "access": 6, "doesn": 6, "t": 6, "scale": 6, "multi": 6, "do": 6, "fit": 6, "well": 6, "current": 6, "implement": 6, "requir": 6, "addit": 6, "shard": 6, "how": 6, "doe": 6, "perform": 6, "design": 6, "choic": 6, "No": 6, "basenod": 6}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 56}})