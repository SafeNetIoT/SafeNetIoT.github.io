{/* Item */}
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between align-items-start gap-3 flex-wrap">
                      <div className="flex-grow-1">
                        <div className="d-flex align-items-center gap-2 mb-2">
                          <span className="badge rounded-pill text-bg-primary">Conference</span>
                          <span className="text-muted small">October 12-16, 2026 • Karlsruhe, Germany</span>
                        </div>
                        <h5 className="text-dark fw-semibold mb-2">
                          Beyond the Hype: Empirical Analysis of Matter Standard's Security and Privacy
                        </h5>
                        <p className="text-muted mb-2">
                          Andrew Losty, Tianrui Hu, Daniel J. Dubois, Narmeen Shafqat, Aanjhan Ranganathan, David Choffnes, Anna Maria Mandalari
                        </p>
                        <p className="text-muted mb-0">
                          <span className="fw-semibold">Venue:</span> 2026 Internet Measurement Conference (IMC)
                        </p>
                        <hr className="my-3" />
                        <h6 className="text-dark fw-semibold mb-2">Overview</h6>
                        <p className="text-muted mb-2">
                          Smart home IoT ecosystems have long suffered from fragmented, proprietary protocols with no mandatory security baseline and heavy cloud dependency. Matter (2022) promised to address this through a unified, open standard with mandatory encryption, certificate-based device authentication, and local-first operation. However, whether Matter delivers meaningfully improved security and privacy in practice remains an open question.
                        </p>
                        <p className="text-muted mb-2">
                          In this work, we conduct an empirical, network-traffic-based evaluation of 25 Matter and 14 legacy devices across four ecosystems, examining:
                        </p>
                        <ul className="text-muted mb-2">
                          <li>Whether Matter devices offer measurably stronger security and privacy than comparable non-Matter devices.</li>
                          <li>How ecosystem-specific implementations introduce privacy exposure through mDNS advertisements and inconsistent Rotating Device Identifier behaviour.</li>
                          <li>The risks posed by dual-stack devices maintaining persistent non-Matter cloud connections outside the Matter trust model.</li>
                          <li>Matter's resilience to traffic-inference attacks, replay attacks, and unauthorized commissioning.</li>
                        </ul>
                        <p className="text-muted mb-0">
                          Our results show that Matter raises the IoT security baseline through enforced encryption and authentication, but meaningful privacy and security gaps persist — driven by vendor non-compliance, infrequent firmware updates, and specification ambiguities that require regulatory attention.
                        </p>
                      </div>
                      <div className="d-flex gap-2">
                        
                          href="/research/Mattersecpriv"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline-primary btn-sm"
                        >
                          <i className="bi bi-box-arrow-up-right me-2"></i>
                          Read
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
