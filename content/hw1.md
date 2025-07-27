### Goal

Implement a `tail` command that prints the last few lines of input or a file.

### Requirements

* `tail filename`: last 10 lines
* `tail -n NUM filename`: last NUM lines
* `tail -NUM filename`: shorthand
* `tail` (no args): read from stdin
* Must work in **pipe chains**

### Examples

```bash
$ tail README                        # Last 10 lines
$ tail -5 README                     # Last 5 lines
$ tail -n 3 README                   # Last 3 lines
$ cat README | tail -2              # Last 2 lines via pipe
$ ls | tail                         # Last 10 files
$ cat README | grep "make" | tail -3  # With grep
```

### Integration

* Create `tail.c` in xv6
* Add `_tail` to `UPROGS` in the Makefile
* Build with `make clean && make qemu-nox`
* Test thoroughly

---

## Grading Rubric (100 points)

### Correctness (80 pts)

* File reading and default 10-line output
* Handle `-n NUM` and `-NUM`
* Support stdin and pipes
* Handle edge cases (empty file, too many lines)

### Error Handling (10 pts)

* Invalid args
* File errors
* Meaningful error messages

### Implementation Quality (5 pts)

* Clean, readable code
* No memory leaks
* Effective use of xv6 system calls

### Documentation & Testing (5 pts)

* Comments for complex code
* Evidence of thorough testing
* Meets submission requirements

---

## Submission

Submit `tail_<netid>.c` and a brief testing summary (PDF with screenshots is fine).
Your code **must compile and run** correctly in xv6.
